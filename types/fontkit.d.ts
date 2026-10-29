/**
 * Minimal local typings for the `fontkit` package (it ships without types).
 * We only need synchronous text measurement on the server for fitting
 * dynamic certificate text into the fixed reference layout.
 */
declare module 'fontkit' {
  export interface Font {
    unitsPerEm: number
    ascent: number
    descent: number
    layout(text: string): { advanceWidth: number }
  }

  export function openSync(path: string): Font
}
