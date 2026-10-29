import QRCode from 'qrcode'

export interface QrVector {
  /** Number of modules per side (excluding the quiet zone). */
  size: number
  /** SVG path in module coordinates. Render inside a viewBox of `0 0 size size`. */
  path: string
}

/**
 * Generates a QR code as vector modules rather than a raster image, so the
 * printed PDF keeps the code razor sharp at any size.
 */
export function createQrVector(value: string): QrVector {
  const qr = QRCode.create(value, {
    errorCorrectionLevel: 'M',
  })

  const size = qr.modules.size
  const data = qr.modules.data
  let path = ''

  for (let row = 0; row < size; row += 1) {
    for (let column = 0; column < size; column += 1) {
      if (data[row * size + column]) {
        path += `M${column} ${row}h1v1h-1z`
      }
    }
  }

  return { size, path }
}
