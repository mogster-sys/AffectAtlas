/**
 * Export format type definitions
 */

export type ExportFormatType =
  | 'tokens'      // W3C Design Tokens
  | 'css'         // CSS Custom Properties
  | 'tailwind'    // Tailwind config
  | 'figma'       // Figma Tokens plugin
  | 'ai-prompt'   // AI generation prompt
  | 'scss'        // SCSS variables
  | 'json'        // Raw JSON
  | 'swift'       // Swift code (iOS)
  | 'kotlin';     // Kotlin code (Android)

export interface ExportResult {
  success: boolean;
  content: string;
  filename: string;
  mimeType?: string;
  error?: string;
}

export interface ExportOptions {
  formats: ExportFormatType[];
  includeComments?: boolean;
  minify?: boolean;
  prefix?: string;
}