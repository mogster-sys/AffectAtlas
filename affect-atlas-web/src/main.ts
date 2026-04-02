import './style.css';
import { initApp } from '@/app';
import { initIAP } from '@/services/iapService';

initApp();
initIAP().catch(() => {/* billing unavailable */});
