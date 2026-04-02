/**
 * SVG half-wheel emotion selector with pointer-driven rotation.
 *
 * Architecture:
 *   - Full circle SVG rendered, container clips bottom half via overflow:hidden
 *   - 8 segments x 3 intensity rings = 24 arc paths
 *   - Pointer Events (unified mouse + touch) for drag rotation
 *   - setPointerCapture for drag continuity outside bounds
 *   - CSS transform: rotate() on the SVG <g> for smooth rotation
 *   - Snap to nearest 45-degree on release
 *   - Selection notch at 12 o'clock indicates active segment
 */

import { PRIMARY_EMOTIONS, DERIVED_EMOTIONS } from '@/constants/emotions';
import { getEmotionColors } from '@/engine/mapping/colorMapper';
import { emotionStore } from '@/store/emotionStore';
import { settingsStore } from '@/store/settingsStore';
import { getExtrasForPrimary } from '@/constants/extraEmotions';
import type { PrimaryEmotionType, AnyEmotionType, Intensity } from '@/types/emotion';

const SVG_NS = 'http://www.w3.org/2000/svg';
const SEGMENT_ANGLE = 360 / PRIMARY_EMOTIONS.length; // 45 degrees
interface WheelState {
  rotation: number;       // current rotation in degrees
  isDragging: boolean;
  dragStartAngle: number;
  rotationAtDragStart: number;
  velocity: number;
  lastAngle: number;
  lastTime: number;
}

let wheelGroup: SVGGElement;
let extraRingGroup: SVGGElement | null = null;
let svgEl: SVGSVGElement;
let wheelState: WheelState = {
  rotation: 0,
  isDragging: false,
  dragStartAngle: 0,
  rotationAtDragStart: 0,
  velocity: 0,
  lastAngle: 0,
  lastTime: 0,
};

let animationFrame: number | null = null;
// Set by direct tap on a ring segment -- prevents snap from overriding the selection
let skipNextUpdate = false;

// ─── SVG arc math ──────────────────────────────────

function createArcPath(
  cx: number,
  cy: number,
  startAngle: number,
  endAngle: number,
  innerRadius: number,
  outerRadius: number,
): string {
  const startRad = (startAngle * Math.PI) / 180;
  const endRad = (endAngle * Math.PI) / 180;

  const x1 = cx + innerRadius * Math.cos(startRad);
  const y1 = cy + innerRadius * Math.sin(startRad);
  const x2 = cx + outerRadius * Math.cos(startRad);
  const y2 = cy + outerRadius * Math.sin(startRad);
  const x3 = cx + outerRadius * Math.cos(endRad);
  const y3 = cy + outerRadius * Math.sin(endRad);
  const x4 = cx + innerRadius * Math.cos(endRad);
  const y4 = cy + innerRadius * Math.sin(endRad);

  const large = endAngle - startAngle > 180 ? 1 : 0;

  return [
    `M ${x1} ${y1}`,
    `L ${x2} ${y2}`,
    `A ${outerRadius} ${outerRadius} 0 ${large} 1 ${x3} ${y3}`,
    `L ${x4} ${y4}`,
    `A ${innerRadius} ${innerRadius} 0 ${large} 0 ${x1} ${y1}`,
    'Z',
  ].join(' ');
}

function svgPath(d: string, fill: string, opacity: number): SVGPathElement {
  const path = document.createElementNS(SVG_NS, 'path');
  path.setAttribute('d', d);
  path.setAttribute('fill', fill);
  path.setAttribute('opacity', String(opacity));
  return path;
}

function svgText(
  x: number, y: number, text: string, fontSize: number, fill: string, rotate?: number,
): SVGTextElement {
  const el = document.createElementNS(SVG_NS, 'text');
  el.setAttribute('x', String(x));
  el.setAttribute('y', String(y));
  el.setAttribute('font-size', String(fontSize));
  el.setAttribute('fill', fill);
  el.setAttribute('text-anchor', 'middle');
  el.setAttribute('dominant-baseline', 'central');
  el.setAttribute('font-family', "'Inter', sans-serif");
  el.setAttribute('pointer-events', 'none');
  if (rotate !== undefined) {
    el.setAttribute('transform', `rotate(${rotate} ${x} ${y})`);
  }
  el.textContent = text;
  return el;
}

// ─── Extra emotions outer ring ──────────────────────

function buildExtraRing(cx: number, cy: number, size: number): SVGGElement {
  const group = document.createElementNS(SVG_NS, 'g');
  group.setAttribute('class', 'extra-ring');

  const innerR = size * 0.50;
  const outerR = size * 0.58;
  const gap = 1.5;
  const labelR = size * 0.54;

  PRIMARY_EMOTIONS.forEach((emotion, segIdx) => {
    const segStart = segIdx * SEGMENT_ANGLE - 90;
    const extras = getExtrasForPrimary(emotion.type);
    if (extras.length === 0) return;

    const sliceAngle = SEGMENT_ANGLE / extras.length;
    const colors = getEmotionColors(emotion.type);

    extras.forEach((extra, i) => {
      const arcStart = segStart + i * sliceAngle + gap / 2;
      const arcEnd = segStart + (i + 1) * sliceAngle - gap / 2;

      const path = svgPath(
        createArcPath(cx, cy, arcStart, arcEnd, innerR, outerR),
        colors.mild,
        0.78,
      );
      path.style.cursor = 'pointer';
      path.style.transition = 'opacity 200ms ease-out';

      // Hover highlight
      path.addEventListener('pointerenter', () => { path.setAttribute('opacity', '0.85'); });
      path.addEventListener('pointerleave', () => { path.setAttribute('opacity', '0.55'); });

      // Stop pointer events from reaching the wheel's drag/snap handlers
      path.addEventListener('pointerdown', (e) => { e.stopPropagation(); });
      path.addEventListener('pointerup', (e) => { e.stopPropagation(); });

      // Click selects the extra emotion
      path.addEventListener('click', (e) => {
        e.stopPropagation();
        emotionStore.setPrimaryEmotion(extra.type);
      });

      group.appendChild(path);

      // Label
      const midAngle = (arcStart + arcEnd) / 2;
      const midRad = (midAngle * Math.PI) / 180;
      const lx = cx + labelR * Math.cos(midRad);
      const ly = cy + labelR * Math.sin(midRad);

      let textRot = midAngle;
      if (textRot > 90 && textRot < 270) textRot += 180;
      if (textRot < -90 && textRot > -270) textRot += 180;

      const label = svgText(lx, ly, extra.label, 8, 'rgba(255,255,255,0.75)', textRot);
      group.appendChild(label);
    });
  });

  return group;
}

// ─── Extra emotions inner ring (chip mode) ─────────

function buildInnerExtraRing(cx: number, cy: number, size: number): SVGGElement {
  const group = document.createElementNS(SVG_NS, 'g');
  group.setAttribute('class', 'inner-extra-ring');

  const innerR = size * 0.20;
  const outerR = size * 0.34;
  const gap = 1.5;
  const labelR = size * 0.27;

  PRIMARY_EMOTIONS.forEach((emotion, segIdx) => {
    const segStart = segIdx * SEGMENT_ANGLE - 90;
    const extras = getExtrasForPrimary(emotion.type);
    if (extras.length === 0) return;

    const sliceAngle = SEGMENT_ANGLE / extras.length;
    const colors = getEmotionColors(emotion.type);

    extras.forEach((extra, i) => {
      const arcStart = segStart + i * sliceAngle + gap / 2;
      const arcEnd = segStart + (i + 1) * sliceAngle - gap / 2;

      const path = svgPath(
        createArcPath(cx, cy, arcStart, arcEnd, innerR, outerR),
        colors.intense,
        0.8,
      );
      path.style.cursor = 'pointer';
      path.style.transition = 'opacity 200ms ease-out';

      path.addEventListener('pointerenter', () => { path.setAttribute('opacity', '0.95'); });
      path.addEventListener('pointerleave', () => { path.setAttribute('opacity', '0.8'); });

      // Let pointer events propagate so wheel drag still works through this area.
      // Only intercept click (tap) and use skipNextUpdate to prevent snap override.
      path.addEventListener('click', (e) => {
        e.stopPropagation();
        skipNextUpdate = true;
        emotionStore.setPrimaryEmotion(extra.type);
      });

      group.appendChild(path);

      // Label
      const midAngle = (arcStart + arcEnd) / 2;
      const midRad = (midAngle * Math.PI) / 180;
      const lx = cx + labelR * Math.cos(midRad);
      const ly = cy + labelR * Math.sin(midRad);

      let textRot = midAngle;
      if (textRot > 90 && textRot < 270) textRot += 180;
      if (textRot < -90 && textRot > -270) textRot += 180;

      const label = svgText(lx, ly, extra.label, 8, 'rgba(255,255,255,0.85)', textRot);
      group.appendChild(label);
    });
  });

  return group;
}

let innerExtraRingGroup: SVGGElement | null = null;

function updateExtraRingVisibility(): void {
  const mode = settingsStore.get().extraDisplayMode;
  if (extraRingGroup) {
    extraRingGroup.style.display = mode === 'ring' ? '' : 'none';
  }
  if (innerExtraRingGroup) {
    innerExtraRingGroup.style.display = mode === 'chips' ? '' : 'none';
  }
}

// ─── Build the wheel SVG ───────────────────────────

function buildWheel(size: number): SVGSVGElement {
  const cx = size / 2;
  const cy = size / 2;

  svgEl = document.createElementNS(SVG_NS, 'svg');
  svgEl.setAttribute('width', String(size));
  svgEl.setAttribute('height', String(size));
  svgEl.setAttribute('viewBox', `0 0 ${size} ${size}`);
  svgEl.style.display = 'block';
  svgEl.style.overflow = 'visible'; // outer ring extends beyond viewBox

  wheelGroup = document.createElementNS(SVG_NS, 'g');
  wheelGroup.setAttribute('transform-origin', `${cx}px ${cy}px`);
  wheelGroup.style.transition = 'none'; // managed manually

  // Intensity ring radii (inner -> outer)
  const rings = {
    intense: { inner: 0, outer: size * 0.20 },
    moderate: { inner: size * 0.20, outer: size * 0.35 },
    mild: { inner: size * 0.35, outer: size * 0.48 },
  };

  // Gap between segments
  const gap = 1.2;

  PRIMARY_EMOTIONS.forEach((emotion, index) => {
    const startAngle = index * SEGMENT_ANGLE - 90;
    const colors = getEmotionColors(emotion.type);

    // Mild ring (outer)
    const mildPath = svgPath(
      createArcPath(cx, cy, startAngle + gap / 2, startAngle + SEGMENT_ANGLE - gap / 2, rings.mild.inner, rings.mild.outer),
      colors.mild, 1,
    );
    mildPath.style.cursor = 'pointer';
    mildPath.addEventListener('click', () => {
      skipNextUpdate = true;
      emotionStore.set({ primaryEmotion: emotion.type, intensity: 'mild' });
    });
    wheelGroup.appendChild(mildPath);

    // Moderate ring (middle)
    const modPath = svgPath(
      createArcPath(cx, cy, startAngle + gap / 2, startAngle + SEGMENT_ANGLE - gap / 2, rings.moderate.inner, rings.moderate.outer),
      colors.moderate, 1,
    );
    modPath.style.cursor = 'pointer';
    modPath.addEventListener('click', () => {
      skipNextUpdate = true;
      emotionStore.set({ primaryEmotion: emotion.type, intensity: 'moderate' });
    });
    wheelGroup.appendChild(modPath);

    // Intense ring (inner)
    const intPath = svgPath(
      createArcPath(cx, cy, startAngle + gap / 2, startAngle + SEGMENT_ANGLE - gap / 2, rings.intense.inner, rings.intense.outer),
      colors.intense, 1,
    );
    intPath.style.cursor = 'pointer';
    intPath.addEventListener('click', () => {
      skipNextUpdate = true;
      emotionStore.set({ primaryEmotion: emotion.type, intensity: 'intense' });
    });
    wheelGroup.appendChild(intPath);

    // Label on the mild ring
    const labelAngle = startAngle + SEGMENT_ANGLE / 2;
    const labelRadius = size * 0.42;
    const labelRad = (labelAngle * Math.PI) / 180;
    const lx = cx + labelRadius * Math.cos(labelRad);
    const ly = cy + labelRadius * Math.sin(labelRad);

    // Rotate text to follow the arc
    let textRotation = labelAngle;
    // Keep text readable (not upside down)
    if (textRotation > 90 && textRotation < 270) {
      textRotation += 180;
    }
    // Negative angles
    if (textRotation < -90 && textRotation > -270) {
      textRotation += 180;
    }

    wheelGroup.appendChild(
      svgText(lx, ly, emotion.label, 11, 'rgba(255,255,255,0.9)', textRotation),
    );
  });

  // Extra emotions outer ring
  extraRingGroup = buildExtraRing(cx, cy, size);
  wheelGroup.appendChild(extraRingGroup);

  // Extra emotions inner ring (chip mode alternative)
  innerExtraRingGroup = buildInnerExtraRing(cx, cy, size);
  wheelGroup.appendChild(innerExtraRingGroup);

  updateExtraRingVisibility();

  // Center dot (on top of inner ring)
  const centerCircle = document.createElementNS(SVG_NS, 'circle');
  centerCircle.setAttribute('cx', String(cx));
  centerCircle.setAttribute('cy', String(cy));
  centerCircle.setAttribute('r', String(size * 0.06));
  centerCircle.setAttribute('fill', '#1A1A1B');
  centerCircle.setAttribute('stroke', 'rgba(255,255,255,0.15)');
  centerCircle.setAttribute('stroke-width', '1');
  wheelGroup.appendChild(centerCircle);

  svgEl.appendChild(wheelGroup);
  return svgEl;
}

// ─── Rotation + gesture logic ──────────────────────

function getPointerAngle(e: PointerEvent): number {
  const rect = svgEl.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  return Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI);
}

function setRotation(degrees: number): void {
  wheelState.rotation = degrees;
  wheelGroup.style.transform = `rotate(${degrees}deg)`;
}

function normalizeAngle(a: number): number {
  return ((a % 360) + 360) % 360;
}

function getSegmentAtNotch(): { emotion: PrimaryEmotionType; intensity: Intensity } {
  // The notch is at 12 o'clock (top center = -90 degrees in SVG coords).
  // We need to figure out which segment is aligned there based on rotation.
  // Segment 0 starts at -90 degrees, so at rotation 0 degrees, segment 0 is at notch.
  // As the wheel rotates clockwise (positive rotation), segments shift.

  const normalizedRotation = normalizeAngle(-wheelState.rotation);
  const segmentIndex = Math.round(normalizedRotation / SEGMENT_ANGLE) % PRIMARY_EMOTIONS.length;
  const emotion = PRIMARY_EMOTIONS[segmentIndex].type;

  // For now default to moderate — could add radial detection later
  const intensity: Intensity = emotionStore.get().intensity || 'moderate';

  return { emotion, intensity };
}

function snapToNearest(): void {
  const normalizedRotation = normalizeAngle(-wheelState.rotation);
  const nearestSegment = Math.round(normalizedRotation / SEGMENT_ANGLE);
  const targetRotation = -(nearestSegment * SEGMENT_ANGLE);

  // Animate snap
  const startRotation = wheelState.rotation;
  const diff = targetRotation - startRotation;

  // Normalize the difference to take shortest path
  let normalizedDiff = ((diff % 360) + 540) % 360 - 180;

  const finalTarget = startRotation + normalizedDiff;
  const duration = 250;
  const startTime = performance.now();

  function animate(now: number): void {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    setRotation(startRotation + normalizedDiff * eased);

    if (progress < 1) {
      animationFrame = requestAnimationFrame(animate);
    } else {
      setRotation(finalTarget);
      updateSelection();
    }
  }

  if (animationFrame) cancelAnimationFrame(animationFrame);
  animationFrame = requestAnimationFrame(animate);
}

function getDyadBetween(idx1: number, idx2: number): string | null {
  const e1 = PRIMARY_EMOTIONS[idx1].type;
  const e2 = PRIMARY_EMOTIONS[idx2].type;
  const dyad = DERIVED_EMOTIONS.find(
    d => (d.primary1 === e1 && d.primary2 === e2) || (d.primary1 === e2 && d.primary2 === e1),
  );
  return dyad ? dyad.type : null;
}

function updateSelection(): void {
  if (skipNextUpdate) { skipNextUpdate = false; return; }
  const { emotion, intensity } = getSegmentAtNotch();

  // Check if we're between two segments (dyad detection)
  const normalizedRotation = normalizeAngle(-wheelState.rotation);
  const exactSegment = normalizedRotation / SEGMENT_ANGLE;
  const fractional = exactSegment - Math.floor(exactSegment);

  // If close to boundary (within 15% of segment edge), check for dyad
  if (fractional > 0.35 && fractional < 0.65) {
    const idx1 = Math.floor(exactSegment) % PRIMARY_EMOTIONS.length;
    const idx2 = (idx1 + 1) % PRIMARY_EMOTIONS.length;
    const dyadType = getDyadBetween(idx1, idx2);
    if (dyadType) {
      emotionStore.set({
        primaryEmotion: dyadType as AnyEmotionType,
        intensity,
      });
      return;
    }
  }

  emotionStore.set({ primaryEmotion: emotion, intensity });
}

// ─── Inertia animation ─────────────────────────────

function startInertia(): void {
  const friction = 0.95;
  const minVelocity = 0.3;

  function tick(): void {
    if (Math.abs(wheelState.velocity) < minVelocity) {
      snapToNearest();
      return;
    }
    setRotation(wheelState.rotation + wheelState.velocity);
    wheelState.velocity *= friction;
    animationFrame = requestAnimationFrame(tick);
  }

  if (animationFrame) cancelAnimationFrame(animationFrame);
  animationFrame = requestAnimationFrame(tick);
}

// ─── Pointer event handlers ────────────────────────

function onPointerDown(e: PointerEvent): void {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
    animationFrame = null;
  }

  wheelState.isDragging = true;
  wheelState.dragStartAngle = getPointerAngle(e);
  wheelState.rotationAtDragStart = wheelState.rotation;
  wheelState.velocity = 0;
  wheelState.lastAngle = wheelState.dragStartAngle;
  wheelState.lastTime = performance.now();

  svgEl.setPointerCapture(e.pointerId);
}

function onPointerMove(e: PointerEvent): void {
  if (!wheelState.isDragging) return;

  const currentAngle = getPointerAngle(e);
  let delta = currentAngle - wheelState.dragStartAngle;

  // Handle wrap-around
  if (delta > 180) delta -= 360;
  if (delta < -180) delta += 360;

  setRotation(wheelState.rotationAtDragStart + delta);

  // Track velocity
  const now = performance.now();
  const dt = now - wheelState.lastTime;
  if (dt > 0) {
    let angleDelta = currentAngle - wheelState.lastAngle;
    if (angleDelta > 180) angleDelta -= 360;
    if (angleDelta < -180) angleDelta += 360;
    wheelState.velocity = angleDelta * (16 / dt); // normalize to ~60fps
  }
  wheelState.lastAngle = currentAngle;
  wheelState.lastTime = now;
}

function onPointerUp(e: PointerEvent): void {
  if (!wheelState.isDragging) return;

  wheelState.isDragging = false;
  svgEl.releasePointerCapture(e.pointerId);

  if (Math.abs(wheelState.velocity) > 1) {
    startInertia();
  } else {
    snapToNearest();
  }
}

// ─── Public API ────────────────────────────────────

export function mountWheel(container: HTMLElement): void {
  const containerWidth = container.clientWidth;
  // Wheel is a full circle, diameter = container width (or slightly smaller)
  const size = Math.min(containerWidth, 500);

  const svg = buildWheel(size);

  // Selection notch at top center
  const notch = document.createElement('div');
  notch.className = 'selection-notch';
  container.appendChild(notch);

  // Center the SVG horizontally, position so top half is visible
  const wrapper = document.createElement('div');
  wrapper.style.cssText = `
    position: absolute;
    bottom: -${size / 2}px;
    left: 50%;
    transform: translateX(-50%);
    width: ${size}px;
    height: ${size}px;
  `;
  wrapper.appendChild(svg);
  container.appendChild(wrapper);

  // Pointer events
  svg.addEventListener('pointerdown', onPointerDown);
  svg.addEventListener('pointermove', onPointerMove);
  svg.addEventListener('pointerup', onPointerUp);
  svg.addEventListener('pointercancel', onPointerUp);

  // Prevent default touch behavior
  svg.style.touchAction = 'none';

  // Toggle extra ring when settings change
  settingsStore.subscribe(updateExtraRingVisibility);
}
