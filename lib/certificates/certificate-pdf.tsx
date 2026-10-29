import path from 'node:path'
import React from 'react'
import {
  Document,
  Font,
  Image,
  Page,
  Path,
  Rect,
  Svg,
  Text,
  View,
  renderToBuffer,
} from '@react-pdf/renderer'
import { openSync } from 'fontkit'
import {
  buildDefaultDescription,
  type DurationUnit,
} from '@/lib/certificates/constants'
import {
  certificateVerificationUrl,
  formatCertificateDate,
  formatDuration,
} from '@/lib/certificates/format'
import { createQrVector } from '@/lib/certificates/qr'
import { site } from '@/lib/site'

/**
 * Server-rendered certificate PDF.
 *
 * The source artwork is a 3507 × 2480 raster reference. Every element here is
 * an editable primitive positioned against that coordinate system, then scaled
 * to a true landscape A4 page (841.89 × 595.28 pt). Nothing is flattened.
 */

const REFERENCE_WIDTH = 3507
const REFERENCE_HEIGHT = 2480
const PAGE_WIDTH = 841.89
const PAGE_HEIGHT = 595.28

const SX = PAGE_WIDTH / REFERENCE_WIDTH
const SY = PAGE_HEIGHT / REFERENCE_HEIGHT

const RED = '#E53A34'
const INK = '#0F0F11'
const DASH = '#F7C4C2'
const PINK = '#FCEBEA'
const GRAY = '#E7E7E7'

const OAKES_CAP = 0.75
const DISPLAY_CAP = 0.7109375
/** Roboto's hhea box is taller than its cap height; compensate for lineHeight: 1. */
const DISPLAY_BOX_OFFSET = 0.927734375 - DISPLAY_CAP

const root = process.cwd()
const fontDir = path.join(root, 'assets', 'fonts')
const oakesFontPath = path.join(fontDir, 'OakesGrotesk-Regular.ttf')
const displayFontPath = path.join(fontDir, 'RobotoCondensed-Display.ttf')
const photoPath = path.join(root, 'public', 'certificates', 'first-aid-training-photo.jpg')
const logoPath = path.join(root, 'public', 'certificates', 'verifsafe-logo.png')

let fontsRegistered = false

function registerFonts() {
  if (fontsRegistered) return
  fontsRegistered = true

  Font.register({
    family: 'Oakes',
    fonts: [
      { src: path.join(fontDir, 'OakesGrotesk-Regular.ttf'), fontWeight: 400 },
      { src: path.join(fontDir, 'OakesGrotesk-Medium.ttf'), fontWeight: 500 },
      { src: path.join(fontDir, 'OakesGrotesk-SemiBold.ttf'), fontWeight: 600 },
      { src: path.join(fontDir, 'OakesGrotesk-Bold.ttf'), fontWeight: 700 },
    ],
  })

  Font.register({
    family: 'OakesDisplay',
    fonts: [{ src: displayFontPath, fontWeight: 400 }],
  })
}

const regularFont = (() => {
  try {
    return openSync(oakesFontPath)
  } catch {
    return null
  }
})()

const displayFont = (() => {
  try {
    return openSync(displayFontPath)
  } catch {
    return null
  }
})()

function measureText(
  text: string,
  sizePx: number,
  font: ReturnType<typeof openSync> | null
): number {
  if (!font || !text) return 0
  return (font.layout(text).advanceWidth / font.unitsPerEm) * sizePx
}

function measureOakes(text: string, sizePx: number): number {
  return measureText(text, sizePx, regularFont)
}

function measureDisplay(text: string, sizePx: number): number {
  return measureText(text, sizePx, displayFont)
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function wrapText(
  text: string,
  maxWidth: number,
  sizePx: number,
  measure: (value: string, size: number) => number
): string[] {
  const words = text.split(/\s+/).filter(Boolean)
  const lines: string[] = []
  let current = ''

  const pushWordChunks = (word: string) => {
    let chunk = ''
    for (const character of word) {
      const candidate = chunk + character
      if (chunk && measure(candidate, sizePx) > maxWidth) {
        lines.push(chunk)
        chunk = character
      } else {
        chunk = candidate
      }
    }
    if (chunk) current = chunk
  }

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word
    if (measure(candidate, sizePx) <= maxWidth) {
      current = candidate
      continue
    }

    if (current) {
      lines.push(current)
      current = ''
    }

    if (measure(word, sizePx) <= maxWidth) {
      current = word
    } else {
      pushWordChunks(word)
    }
  }

  if (current) lines.push(current)
  return lines.length > 0 ? lines : [text]
}

function splitNameIntoTwoLines(
  name: string,
  sizePx: number,
  maxWidth: number
): { first: string; second: string; widest: number } | null {
  const words = name.split(/\s+/).filter(Boolean)
  if (words.length < 2) return null

  let best: { first: string; second: string; widest: number } | null = null
  for (let index = 1; index < words.length; index += 1) {
    const first = words.slice(0, index).join(' ')
    const second = words.slice(index).join(' ')
    const firstWidth = measureDisplay(first, sizePx)
    const secondWidth = measureDisplay(second, sizePx)
    if (firstWidth > maxWidth || secondWidth > maxWidth) continue
    const widest = Math.max(firstWidth, secondWidth)
    if (!best || widest < best.widest) {
      best = { first, second, widest }
    }
  }
  return best
}

interface FittedName {
  fontSizePx: number
  lines: string[]
  lineHeightPx: number
}

function fitRecipientName(name: string): FittedName {
  const maxWidth = 1790
  const desiredSize = 76 / DISPLAY_CAP
  const capsAt = (size: number) => size * DISPLAY_CAP

  // Prefer a single line while it remains comfortably legible.
  for (let size = desiredSize; size >= 64; size -= 0.5) {
    if (measureDisplay(name, size) <= maxWidth) {
      return { fontSizePx: size, lines: [name], lineHeightPx: size * 1.06 }
    }
  }

  // A second line lets long names stay large while keeping breathing room
  // above the completion statement, which begins at a fixed position.
  const maxMultiLineBlock = 112
  for (let size = 68; size >= 42; size -= 0.5) {
    const split = splitNameIntoTwoLines(name, size, maxWidth)
    if (!split) continue
    const lineHeightPx = size * 1.06
    const blockHeight = lineHeightPx + capsAt(size)
    if (blockHeight > maxMultiLineBlock) continue
    return {
      fontSizePx: size,
      lines: [split.first, split.second],
      lineHeightPx,
    }
  }

  // Final fallback for extremely long names: three compact lines.
  for (let size = 56; size >= 34; size -= 0.5) {
    const lines = wrapText(name, maxWidth, size, measureDisplay)
    if (lines.length > 3) continue
    const lineHeightPx = size * 1.02
    const blockHeight = lineHeightPx * (lines.length - 1) + capsAt(size)
    if (blockHeight > 114) continue
    return { fontSizePx: size, lines, lineHeightPx }
  }

  return {
    fontSizePx: 34,
    lines: wrapText(name, maxWidth, 34, measureDisplay).slice(0, 3),
    lineHeightPx: 34 * 1.02,
  }
}

interface FittedDescription {
  fontSizePx: number
  lineHeightPx: number
  lines: string[]
}

function fitDescription(description: string): FittedDescription {
  const maxWidth = 2170
  const maxHeight = 226

  for (let size = 48; size >= 38; size -= 0.4) {
    const lineHeightPx = size * 1.27
    const lines = wrapText(description, maxWidth, size, measureOakes)
    if (
      lines.length <= 4 &&
      (lines.length - 1) * lineHeightPx + size * OAKES_CAP <= maxHeight
    ) {
      return { fontSizePx: size, lineHeightPx, lines }
    }
  }

  return {
    fontSizePx: 38,
    lineHeightPx: 38 * 1.27,
    lines: wrapText(description, maxWidth, 38, measureOakes).slice(0, 4),
  }
}

function splitCourseLabel(courseName: string): string[] {
  const words = courseName.trim().split(/\s+/).filter(Boolean)
  if (words.length <= 3) return words

  // More than three words: greedily group into three lines.
  const lines: string[] = []
  let current = words[0]
  const remaining = words.slice(1)
  while (remaining.length > 0 && lines.length < 2) {
    const word = remaining[0]
    const candidate = `${current} ${word}`
    if (measureDisplay(candidate, 78.8) <= 480) {
      current = candidate
      remaining.shift()
    } else {
      lines.push(current)
      current = remaining.shift() ?? ''
    }
  }
  if (current) {
    lines.push(current)
    if (remaining.length > 0) {
      lines[lines.length - 1] = `${lines[lines.length - 1]} ${remaining.join(' ')}`
    }
  }
  return lines.slice(0, 3)
}

interface FitTextOptions {
  x: number
  capTop: number
  sizePx: number
  family: 'oakes' | 'display'
  weight?: 400 | 500 | 600 | 700
  color?: string
  maxWidth?: number
  measure?: (value: string, size: number) => number
}

function textBoxPosition({
  x,
  capTop,
  sizePx,
  family,
}: Pick<FitTextOptions, 'x' | 'capTop' | 'sizePx' | 'family'>) {
  const offsetPx = family === 'display' ? sizePx * DISPLAY_BOX_OFFSET : 0
  return {
    position: 'absolute' as const,
    left: x * SX,
    top: (capTop - offsetPx) * SY,
  }
}

function textStyle({
  x,
  capTop,
  sizePx,
  family,
  weight = 400,
  color = INK,
}: FitTextOptions) {
  return {
    ...textBoxPosition({ x, capTop, sizePx, family }),
    fontFamily: family === 'display' ? 'OakesDisplay' : 'Oakes',
    fontWeight: weight,
    fontSize: sizePx * SY,
    lineHeight: 1,
    color,
  }
}

function fitSingleLineSize(
  text: string,
  baseSizePx: number,
  minSizePx: number,
  maxWidth: number,
  measure: (value: string, size: number) => number
): number {
  for (let size = baseSizePx; size >= minSizePx; size -= 0.5) {
    if (measure(text, size) <= maxWidth) return size
  }
  return minSizePx
}

function RichTextLine({
  text,
  courseName,
  style,
}: {
  text: string
  courseName: string
  style: ReturnType<typeof textStyle>
}) {
  const tokens = Array.from(new Set([courseName, 'VerifSafe']))
    .filter(Boolean)
    .sort((a, b) => b.length - a.length)

  if (tokens.length === 0) {
    return (
      <Text style={style} wrap={false}>
        {text}
      </Text>
    )
  }

  const pattern = new RegExp(`(${tokens.map(escapeRegExp).join('|')})`, 'gi')
  const parts = text.split(pattern)

  return (
    <Text style={style} wrap={false}>
      {parts.map((part, index) => {
        const isBold = tokens.some(
          (token) => token.toLowerCase() === part.toLowerCase()
        )
        if (!isBold) return part
        return (
          <Text
            key={`${part}-${index}`}
            style={{ fontFamily: 'Oakes', fontWeight: 600 }}
          >
            {part}
          </Text>
        )
      })}
    </Text>
  )
}

export interface CertificatePdfData {
  certificateNumber: string
  recipientName: string
  courseName: string
  trainingDate: string
  durationValue: number
  durationUnit: DurationUnit | string
  instructorName: string
  description: string
  issueDate: string
  expiryDate?: string | null
}

const PINK_SHAPE =
  'M3507 220 L3141 1020 C3140 1075 3170 1135 3224 1160 C3300 1195 3390 1208 3468 1200 L3507 1180 Z'

const GRAY_SHAPE =
  'M3507 1208 C3460 1208 3420 1260 3395 1320 C3378 1362 3372 1402 3378 1435 C3385 1478 3415 1520 3455 1545 C3470 1554 3490 1560 3507 1562 Z'

function DecorativeArtwork() {
  const patternRects: React.ReactElement[] = []
  for (let x = 933.6; x < REFERENCE_WIDTH + 120; x += 106.4) {
    patternRects.push(
      <Rect key={`a-${x}`} x={x} y={2293} width={18} height={65} fill={RED} />,
      <Rect key={`b-${x}`} x={x + 35} y={2312} width={54} height={14} fill={RED} />,
      <Rect key={`c-${x}`} x={x + 35} y={2312} width={18} height={63} fill={RED} />,
      <Rect key={`d-${x}`} x={x + 70} y={2344} width={54} height={15} fill={RED} />
    )
  }

  return (
    <>
      {/* Right-edge brand shapes */}
      <Svg
        style={{
          position: 'absolute',
          left: 3000 * SX,
          top: 150 * SY,
          width: 507 * SX,
          height: 1450 * SY,
        }}
        viewBox="3000 150 507 1450"
      >
        <Path d={PINK_SHAPE} fill={PINK} />
        <Path d={GRAY_SHAPE} fill={GRAY} />
      </Svg>

      {/* Greek-key band */}
      <Svg
        style={{
          position: 'absolute',
          left: 925 * SX,
          top: 2237 * SY,
          width: 2582 * SX,
          height: 196 * SY,
        }}
        viewBox="925 2237 2582 196"
      >
        <Rect x={925} y={2237} width={2582} height={25} fill={RED} />
        <Rect x={925} y={2279} width={2582} height={15} fill={RED} />
        <Rect x={925} y={2376} width={2582} height={15} fill={RED} />
        <Rect x={925} y={2408} width={2582} height={25} fill={RED} />
        <Rect x={925} y={2237} width={23} height={195} fill={RED} />
        {patternRects}
      </Svg>

      {/* Light-red dashed separators */}
      <Svg
        style={{
          position: 'absolute',
          left: 1062 * SX,
          top: 1574 * SY,
          width: 2271 * SX,
          height: 6 * SY,
        }}
        viewBox="1062 1574 2271 6"
      >
        <Path
          d="M1062 1577 H3333"
          stroke={DASH}
          strokeWidth={6}
          strokeDasharray="28 2"
        />
      </Svg>
      <Svg
        style={{
          position: 'absolute',
          left: 1062 * SX,
          top: 2125 * SY,
          width: 2271 * SX,
          height: 6 * SY,
        }}
        viewBox="1062 2125 2271 6"
      >
        <Path
          d="M1062 2128 H3333"
          stroke={DASH}
          strokeWidth={6}
          strokeDasharray="28 2"
        />
      </Svg>
    </>
  )
}

function CertificateDocument({ data }: { data: CertificatePdfData }) {
  registerFonts()

  const qr = createQrVector(certificateVerificationUrl(data.certificateNumber))
  const name = data.recipientName.toUpperCase()
  const courseName = data.courseName
  const instructor = data.instructorName.toUpperCase()

  const nameFit = fitRecipientName(name)
  const description =
    data.description?.trim() || buildDefaultDescription(courseName)
  const descriptionFit = fitDescription(description)

  const courseLines = splitCourseLabel(courseName)
  const courseLabelSize = courseLines.reduce((size, line) => {
    const fitted = fitSingleLineSize(line, 78.8, 48, 480, measureDisplay)
    return Math.min(size, fitted)
  }, 78.8)

  const infoSize = 40

  const trainingDate = formatCertificateDate(data.trainingDate)
  const duration = formatDuration(data.durationValue, data.durationUnit)

  const certificateIdSize = fitSingleLineSize(
    data.certificateNumber,
    infoSize,
    30,
    1440,
    measureOakes
  )
  const trainerSize = fitSingleLineSize(instructor, infoSize, 29, 1290, measureOakes)

  const infoRows: Array<{
    label: string
    value: string
    labelX: number
    valueX: number
    capTop: number
    valueSize: number
  }> = [
    {
      label: 'TRAINING DATE:',
      value: trainingDate,
      labelX: 1058,
      valueX: 1406,
      capTop: 1662,
      valueSize: infoSize,
    },
    {
      label: 'DURATION:',
      value: duration,
      labelX: 1058,
      valueX: 1404,
      capTop: 1738,
      valueSize: infoSize,
    },
    {
      label: 'CERTIFICATE ID:',
      value: data.certificateNumber,
      labelX: 1058,
      valueX: 1406,
      capTop: 1815,
      valueSize: certificateIdSize,
    },
    {
      label: 'TRAINER / INSTRUCTOR:',
      value: instructor,
      labelX: 1058,
      valueX: 1577,
      capTop: 1891,
      valueSize: trainerSize,
    },
  ]

  return (
    <Document
      title={`${site.name} certificate — ${data.certificateNumber}`}
      author={site.name}
      subject={`${courseName} — ${data.recipientName}`}
      creator={site.name}
      producer={site.name}
    >
      <Page
        size="A4"
        orientation="landscape"
        style={{ backgroundColor: '#FFFFFF', padding: 0, margin: 0 }}
      >
        <DecorativeArtwork />

        {/* Left photograph and red frame. PDF artwork has no alt-text surface. */}
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image
          src={photoPath}
          style={{
            position: 'absolute',
            left: 46 * SX,
            top: 48 * SY,
            width: 879 * SX,
            height: 2384 * SY,
            objectFit: 'cover',
          }}
        />
        <View
          style={{
            position: 'absolute',
            left: 24 * SX,
            top: 28 * SY,
            width: 879 * SX,
            height: 20 * SY,
            backgroundColor: RED,
          }}
        />
        <View
          style={{
            position: 'absolute',
            left: 24 * SX,
            top: 28 * SY,
            width: 22 * SX,
            height: 2071 * SY,
            backgroundColor: RED,
          }}
        />
        <View
          style={{
            position: 'absolute',
            left: 925 * SX,
            top: 362 * SY,
            width: 23 * SX,
            height: 2071 * SY,
            backgroundColor: RED,
          }}
        />

        {/* Logo */}
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image
          src={logoPath}
          style={{
            position: 'absolute',
            left: 2537.4 * SX,
            top: 121.1 * SY,
            width: 803.2 * SX,
            height: 272.7 * SY,
            objectFit: 'contain',
          }}
        />

        {/* Course label rails */}
        <View
          style={{
            position: 'absolute',
            left: 1046 * SX,
            top: 141 * SY,
            width: 3 * SX,
            height: 233 * SY,
            backgroundColor: INK,
          }}
        />
        <View
          style={{
            position: 'absolute',
            left: 1051 * SX,
            top: 141 * SY,
            width: 4 * SX,
            height: 233 * SY,
            backgroundColor: RED,
          }}
        />
        {courseLines.map((line, index) => (
          <Text
            key={`${line}-${index}`}
            style={textStyle({
              x: 1083,
              capTop: 146 + index * 80,
              sizePx: courseLabelSize,
              family: 'display',
              color: index === courseLines.length - 1 ? INK : RED,
            })}
            wrap={false}
          >
            {line.toUpperCase()}
          </Text>
        ))}

        {/* Main heading */}
        <Text
          style={textStyle({
            x: 1055,
            capTop: 614,
            sizePx: 95 / DISPLAY_CAP,
            family: 'display',
            color: INK,
          })}
          wrap={false}
        >
          CERTIFICATE
        </Text>
        <Text
          style={textStyle({
            x: 1055,
            capTop: 752,
            sizePx: 95 / DISPLAY_CAP,
            family: 'display',
            color: INK,
          })}
          wrap={false}
        >
          OF COMPLETION
        </Text>

        {/* Award sentence and recipient */}
        <Text
          style={textStyle({
            x: 1058,
            capTop: 1094,
            sizePx: 53.4,
            family: 'oakes',
            color: INK,
          })}
          wrap={false}
        >
          This certificate is awarded to
        </Text>

        {nameFit.lines.map((line, index) => (
          <Text
            key={`name-${index}`}
            style={textStyle({
              x: 1056,
              capTop: 1194 + index * nameFit.lineHeightPx,
              sizePx: nameFit.fontSizePx,
              family: 'display',
              color: INK,
            })}
            wrap={false}
          >
            {line}
          </Text>
        ))}

        {/* Completion description */}
        {descriptionFit.lines.map((line, index) => (
          <RichTextLine
            key={`description-${index}`}
            text={line}
            courseName={courseName}
            style={textStyle({
              x: 1059,
              capTop: 1336 + index * descriptionFit.lineHeightPx,
              sizePx: descriptionFit.fontSizePx,
              family: 'oakes',
              color: INK,
            })}
          />
        ))}

        {/* Training information */}
        {infoRows.map((row) => (
          <React.Fragment key={row.label}>
            <Text
              style={textStyle({
                x: row.labelX,
                capTop: row.capTop,
                sizePx: infoSize,
                family: 'oakes',
                weight: 400,
                color: INK,
              })}
              wrap={false}
            >
              {row.label}
            </Text>
            <Text
              style={textStyle({
                x: row.valueX,
                capTop: row.capTop,
                sizePx: row.valueSize,
                family: 'oakes',
                weight: 700,
                color: INK,
              })}
              wrap={false}
            >
              {row.value}
            </Text>
          </React.Fragment>
        ))}

        <Text
          style={textStyle({
            x: 1058,
            capTop: 1983,
            sizePx: infoSize,
            family: 'oakes',
            weight: 400,
            color: INK,
          })}
          wrap={false}
        >
          AUTHORIZED SIGNATURE
        </Text>

        {/* QR verification code */}
        <Svg
          style={{
            position: 'absolute',
            left: 2902 * SX,
            top: 1683 * SY,
            width: 308 * SX,
            height: 308 * SY,
          }}
          viewBox={`0 0 ${qr.size} ${qr.size}`}
          preserveAspectRatio="xMidYMid meet"
        >
          <Path d={qr.path} fill={INK} />
        </Svg>
      </Page>
    </Document>
  )
}

export async function renderCertificatePdf(data: CertificatePdfData): Promise<Buffer> {
  return renderToBuffer(<CertificateDocument data={data} />)
}

export { CertificateDocument }
