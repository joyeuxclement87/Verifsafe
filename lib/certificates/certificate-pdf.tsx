import path from 'node:path'
import React from 'react'
import {
  Circle,
  Document,
  Font,
  G,
  Image,
  Line,
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
  formatCertificateDateLong,
  formatDuration,
  getVerificationBaseUrl,
} from '@/lib/certificates/format'
import { createQrVector } from '@/lib/certificates/qr'
import { site } from '@/lib/site'

/**
 * Server-rendered VerifSafe Certificate PDF (A4 Landscape: 841.89 × 595.28 pt).
 *
 * Minimal, editorial, Swiss-aligned credential with subtle guilloche &
 * geometric pattern work:
 * - Typography:
 *   - Playfair Display (high-contrast editorial serif for titles & recipient)
 *   - Plus Jakarta Sans (clean geometric sans for body & micro-labels)
 *   - Space Grotesk (technical precision font for IDs, dates & specifications)
 * - Layout:
 *   - Left obsidian spine with subtle architectural lattice pattern, white
 *     VerifSafe logo variant, programme classification, and QR verification.
 *   - Right paper stage with fine security border, guilloche wave pattern,
 *     hairline specification ledger, and open center space for the official
 *     VerifSafe stamp between the dual signature blocks.
 */

const PAGE_WIDTH = 841.89
const PAGE_HEIGHT = 595.28

// Palette
const OUTER_BG = '#F3F1EC'
const STAGE_BG = '#FFFFFF'
const SPINE_BG = '#0D0E11'
const SPINE_RULE = '#23252C'
const INK = '#0F1014'
const INK_BODY = '#2B2D33'
const MUTED = '#6E6D68'
const SPINE_MUTED = '#8E9099'
const HAIRLINE = '#E4E1D9'
const RED = '#E53A34'

const root = process.cwd()
const fontDir = path.join(root, 'assets', 'fonts')

const playfairRegularPath = path.join(fontDir, 'PlayfairDisplay-Regular.ttf')
const playfairMediumPath = path.join(fontDir, 'PlayfairDisplay-Medium.ttf')
const playfairSemiBoldPath = path.join(fontDir, 'PlayfairDisplay-SemiBold.ttf')
const playfairBoldPath = path.join(fontDir, 'PlayfairDisplay-Bold.ttf')
const playfairItalicPath = path.join(fontDir, 'PlayfairDisplay-Italic.ttf')

const jakartaRegularPath = path.join(fontDir, 'PlusJakartaSans-Regular.ttf')
const jakartaMediumPath = path.join(fontDir, 'PlusJakartaSans-Medium.ttf')
const jakartaSemiBoldPath = path.join(fontDir, 'PlusJakartaSans-SemiBold.ttf')
const jakartaBoldPath = path.join(fontDir, 'PlusJakartaSans-Bold.ttf')

const spaceRegularPath = path.join(fontDir, 'SpaceGrotesk-Regular.ttf')
const spaceMediumPath = path.join(fontDir, 'SpaceGrotesk-Medium.ttf')
const spaceSemiBoldPath = path.join(fontDir, 'SpaceGrotesk-SemiBold.ttf')
const spaceBoldPath = path.join(fontDir, 'SpaceGrotesk-Bold.ttf')

const whiteLogoPath = path.join(root, 'public', 'logo2.png')

let fontsRegistered = false

function registerFonts() {
  if (fontsRegistered) return
  fontsRegistered = true

  Font.register({
    family: 'Playfair',
    fonts: [
      { src: playfairRegularPath, fontWeight: 400 },
      { src: playfairMediumPath, fontWeight: 500 },
      { src: playfairSemiBoldPath, fontWeight: 600 },
      { src: playfairBoldPath, fontWeight: 700 },
      { src: playfairItalicPath, fontWeight: 400, fontStyle: 'italic' },
    ],
  })

  Font.register({
    family: 'Jakarta',
    fonts: [
      { src: jakartaRegularPath, fontWeight: 400 },
      { src: jakartaMediumPath, fontWeight: 500 },
      { src: jakartaSemiBoldPath, fontWeight: 600 },
      { src: jakartaBoldPath, fontWeight: 700 },
    ],
  })

  Font.register({
    family: 'Space',
    fonts: [
      { src: spaceRegularPath, fontWeight: 400 },
      { src: spaceMediumPath, fontWeight: 500 },
      { src: spaceSemiBoldPath, fontWeight: 600 },
      { src: spaceBoldPath, fontWeight: 700 },
    ],
  })
}

const playfairBoldFont = (() => {
  try {
    return openSync(playfairBoldPath)
  } catch {
    return null
  }
})()

const playfairSemiBoldFont = (() => {
  try {
    return openSync(playfairSemiBoldPath)
  } catch {
    return null
  }
})()

const jakartaRegularFont = (() => {
  try {
    return openSync(jakartaRegularPath)
  } catch {
    return null
  }
})()

const spaceSemiBoldFont = (() => {
  try {
    return openSync(spaceSemiBoldPath)
  } catch {
    return null
  }
})()

function measureText(
  text: string,
  sizePt: number,
  font: ReturnType<typeof openSync> | null
): number {
  if (!font || !text) return 0
  return (font.layout(text).advanceWidth / font.unitsPerEm) * sizePt
}

function measurePlayfairBold(text: string, sizePt: number): number {
  return measureText(text, sizePt, playfairBoldFont)
}

function measurePlayfairSemiBold(text: string, sizePt: number): number {
  return measureText(text, sizePt, playfairSemiBoldFont ?? playfairBoldFont)
}

function measureJakarta(text: string, sizePt: number): number {
  return measureText(text, sizePt, jakartaRegularFont)
}

function measureSpace(text: string, sizePt: number): number {
  return measureText(text, sizePt, spaceSemiBoldFont)
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function wrapText(
  text: string,
  maxWidthPt: number,
  sizePt: number,
  measure: (value: string, size: number) => number
): string[] {
  const words = text.split(/\s+/).filter(Boolean)
  const lines: string[] = []
  let current = ''

  const pushWordChunks = (word: string) => {
    let chunk = ''
    for (const character of word) {
      const candidate = chunk + character
      if (chunk && measure(candidate, sizePt) > maxWidthPt) {
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
    if (measure(candidate, sizePt) <= maxWidthPt) {
      current = candidate
      continue
    }

    if (current) {
      lines.push(current)
      current = ''
    }

    if (measure(word, sizePt) <= maxWidthPt) {
      current = word
    } else {
      pushWordChunks(word)
    }
  }

  if (current) lines.push(current)
  return lines.length > 0 ? lines : [text]
}

function fitSingleLineSize(
  text: string,
  baseSizePt: number,
  minSizePt: number,
  maxWidthPt: number,
  measure: (value: string, size: number) => number
): number {
  for (let size = baseSizePt; size >= minSizePt; size -= 0.25) {
    if (measure(text, size) <= maxWidthPt) return size
  }
  return minSizePt
}

function splitNameIntoTwoLines(
  name: string,
  sizePt: number,
  maxWidthPt: number
): { first: string; second: string; widest: number } | null {
  const words = name.split(/\s+/).filter(Boolean)
  if (words.length < 2) return null

  let best: { first: string; second: string; widest: number } | null = null
  for (let index = 1; index < words.length; index += 1) {
    const first = words.slice(0, index).join(' ')
    const second = words.slice(index).join(' ')
    const firstWidth = measurePlayfairBold(first, sizePt)
    const secondWidth = measurePlayfairBold(second, sizePt)
    if (firstWidth > maxWidthPt || secondWidth > maxWidthPt) continue
    const widest = Math.max(firstWidth, secondWidth)
    if (!best || widest < best.widest) {
      best = { first, second, widest }
    }
  }
  return best
}

interface FittedBlock {
  fontSizePt: number
  lines: string[]
  lineHeightPt: number
}

function toTitleCaseName(raw: string): string {
  return raw
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

function fitRecipientName(name: string): FittedBlock {
  const maxWidthPt = 492

  for (let size = 31; size >= 20; size -= 0.5) {
    if (measurePlayfairBold(name, size) <= maxWidthPt) {
      return { fontSizePt: size, lines: [name], lineHeightPt: size * 1.12 }
    }
  }

  for (let size = 23; size >= 16; size -= 0.5) {
    const split = splitNameIntoTwoLines(name, size, maxWidthPt)
    if (!split) continue
    return {
      fontSizePt: size,
      lines: [split.first, split.second],
      lineHeightPt: size * 1.12,
    }
  }

  const fallbackLines = wrapText(name, maxWidthPt, 15.5, measurePlayfairBold).slice(0, 2)
  return {
    fontSizePt: 15.5,
    lines: fallbackLines,
    lineHeightPt: 15.5 * 1.12,
  }
}

function fitDescription(description: string): FittedBlock {
  const maxWidthPt = 488

  for (let size = 10.2; size >= 8.6; size -= 0.2) {
    const lines = wrapText(description, maxWidthPt, size, measureJakarta)
    if (lines.length <= 3) {
      return { fontSizePt: size, lines, lineHeightPt: size * 1.52 }
    }
  }

  const lines = wrapText(description, maxWidthPt, 8.4, measureJakarta).slice(0, 4)
  return {
    fontSizePt: 8.4,
    lines,
    lineHeightPt: 8.4 * 1.45,
  }
}

function fitSpineCourseTitle(courseName: string): FittedBlock {
  const clean = courseName.trim()
  const maxWidthPt = 172

  for (let size = 16.5; size >= 12.5; size -= 0.5) {
    const lines = wrapText(clean, maxWidthPt, size, measurePlayfairSemiBold)
    if (lines.length <= 3) {
      return {
        fontSizePt: size,
        lines,
        lineHeightPt: size * 1.22,
      }
    }
  }

  const lines = wrapText(clean, maxWidthPt, 12, measurePlayfairSemiBold).slice(0, 4)
  return {
    fontSizePt: 12,
    lines,
    lineHeightPt: 12 * 1.2,
  }
}

function RichDescriptionLine({
  text,
  courseName,
  fontSizePt,
}: {
  text: string
  courseName: string
  fontSizePt: number
}) {
  const tokens = Array.from(new Set([courseName, 'VerifSafe']))
    .filter(Boolean)
    .sort((a, b) => b.length - a.length)

  const baseStyle = {
    fontFamily: 'Jakarta',
    fontWeight: 400 as const,
    fontSize: fontSizePt,
    color: INK_BODY,
  }

  if (tokens.length === 0) {
    return (
      <Text style={baseStyle} wrap={false}>
        {text}
      </Text>
    )
  }

  const pattern = new RegExp(`(${tokens.map(escapeRegExp).join('|')})`, 'gi')
  const parts = text.split(pattern)

  return (
    <Text style={baseStyle} wrap={false}>
      {parts.map((part, index) => {
        const isHighlight = tokens.some(
          (token) => token.toLowerCase() === part.toLowerCase()
        )
        if (!isHighlight) return part
        return (
          <Text
            key={`${part}-${index}`}
            style={{ fontFamily: 'Jakarta', fontWeight: 600, color: INK }}
          >
            {part}
          </Text>
        )
      })}
    </Text>
  )
}

/**
 * Subtle geometric security lattice & concentric shield arcs on the dark spine.
 */
function SpinePattern({
  left,
  top,
  width,
  height,
}: {
  left: number
  top: number
  width: number
  height: number
}) {
  const step = 28
  const diagLines: React.ReactElement[] = []

  // Subtle diagonal architectural lattice across the spine
  for (let y = -width; y < height + width; y += step) {
    diagLines.push(
      <Line
        key={`d1-${y}`}
        x1={0}
        y1={y}
        x2={width}
        y2={y + width}
        stroke="#15171E"
        strokeWidth={0.6}
      />,
      <Line
        key={`d2-${y}`}
        x1={width}
        y1={y}
        x2={0}
        y2={y + width}
        stroke="#15171E"
        strokeWidth={0.6}
      />
    )
  }

  // Concentric security arcs anchored near bottom-right of spine
  const arcRadii = [48, 68, 88, 108, 128, 148, 168]

  return (
    <Svg
      style={{
        position: 'absolute',
        left,
        top,
        width,
        height,
      }}
      viewBox={`0 0 ${width} ${height}`}
    >
      <G>{diagLines}</G>
      {arcRadii.map((r, idx) => (
        <Circle
          key={`arc-${r}`}
          cx={width + 10}
          cy={height - 40}
          r={r}
          fill="none"
          stroke={idx % 3 === 0 ? '#261719' : '#181A22'}
          strokeWidth={0.7}
          strokeDasharray={idx % 2 === 0 ? '3 3' : undefined}
        />
      ))}
    </Svg>
  )
}

/**
 * Fine guilloche wave pattern, watermark shield & ornamental architectural
 * frame on the right white credential stage.
 */
function StagePattern({
  left,
  top,
  width,
  height,
}: {
  left: number
  top: number
  width: number
  height: number
}) {
  // Flowing guilloche wave paths in the upper-right and lower-left background
  const topWaves: React.ReactElement[] = []
  for (let i = 0; i < 14; i += 1) {
    const offset = i * 6.5
    const yStart = -10 + offset * 0.7
    const yEnd = 195 + offset * 1.15
    const xStart = width - 250 - offset * 1.3
    topWaves.push(
      <Path
        key={`tw-${i}`}
        d={`M ${xStart} ${yStart} C ${xStart + 90} ${yStart + 95}, ${width - 110} ${yEnd - 80}, ${width + 10} ${yEnd}`}
        fill="none"
        stroke={i % 4 === 0 ? '#F9E6E5' : '#F3F0E8'}
        strokeWidth={0.65}
      />
    )
  }

  // Concentric geometric guilloche rosette watermark in the right stage center
  const rosetteRadii = [36, 50, 64, 78, 92, 106, 120, 134]
  const cx = width - 145
  const cy = height / 2 + 8

  // Fine inner border inset by 12pt
  const inset = 12
  const innerW = width - inset * 2
  const innerH = height - inset * 2
  const cornerSize = 14

  return (
    <Svg
      style={{
        position: 'absolute',
        left,
        top,
        width,
        height,
      }}
      viewBox={`0 0 ${width} ${height}`}
    >
      {/* Flowing guilloche waves */}
      <G>{topWaves}</G>

      {/* Subtle geometric rosette & shield watermark */}
      <G>
        {rosetteRadii.map((r, idx) => (
          <Circle
            key={`ros-${r}`}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={idx % 2 === 0 ? '#F4F1EA' : '#F9ECEB'}
            strokeWidth={0.65}
            strokeDasharray={idx % 2 === 1 ? '3 2.5' : undefined}
          />
        ))}
        {/* Faint VerifSafe shield contour inside the rosette */}
        <Path
          d={`M ${cx} ${cy - 54} C ${cx - 17} ${cy - 43} ${cx - 34} ${cy - 39} ${cx - 44} ${cy - 37} L ${cx - 44} ${cy - 6} C ${cx - 44} ${cy + 18} ${cx - 26} ${cy + 36} ${cx} ${cy + 46} C ${cx + 26} ${cy + 36} ${cx + 44} ${cy + 18} ${cx + 44} ${cy - 6} L ${cx + 44} ${cy - 37} C ${cx + 34} ${cy - 39} ${cx + 17} ${cy - 43} ${cx} ${cy - 54} Z`}
          fill="none"
          stroke="#F1EDE4"
          strokeWidth={0.9}
        />
      </G>

      {/* Architectural inner security border */}
      <Rect
        x={inset}
        y={inset}
        width={innerW}
        height={innerH}
        fill="none"
        stroke="#ECE9E1"
        strokeWidth={0.75}
      />

      {/* Top-right ornamental corner fret */}
      <Path
        d={`M ${width - inset - cornerSize} ${inset} L ${width - inset} ${inset} L ${width - inset} ${inset + cornerSize}`}
        fill="none"
        stroke={RED}
        strokeWidth={1.2}
      />
      <Rect
        x={width - inset - 5}
        y={inset + 2}
        width={3}
        height={3}
        fill={RED}
      />

      {/* Bottom-right ornamental corner fret */}
      <Path
        d={`M ${width - inset - cornerSize} ${height - inset} L ${width - inset} ${height - inset} L ${width - inset} ${height - inset - cornerSize}`}
        fill="none"
        stroke={RED}
        strokeWidth={1.2}
      />
      <Rect
        x={width - inset - 5}
        y={height - inset - 5}
        width={3}
        height={3}
        fill={RED}
      />
    </Svg>
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

function CertificateDocument({ data }: { data: CertificatePdfData }) {
  registerFonts()

  const verificationUrl = certificateVerificationUrl(data.certificateNumber)
  const verificationBaseDisplay = getVerificationBaseUrl().replace(/^https?:\/\//i, '')
  const qr = createQrVector(verificationUrl)

  const recipientDisplay = toTitleCaseName(data.recipientName || 'Recipient Name')
  const courseName = (data.courseName || 'Safety Training Course').trim()
  const instructorDisplay = toTitleCaseName(data.instructorName || 'Authorized Trainer')

  const nameFit = fitRecipientName(recipientDisplay)
  const descriptionText =
    data.description?.trim() || buildDefaultDescription(courseName)
  const descriptionFit = fitDescription(descriptionText)
  const spineCourseFit = fitSpineCourseTitle(courseName)

  const trainingDateFormatted = formatCertificateDateLong(data.trainingDate)
  const issueDateFormatted = formatCertificateDateLong(data.issueDate)
  const expiryDateFormatted = data.expiryDate
    ? formatCertificateDateLong(data.expiryDate)
    : 'No Expiry'
  const durationFormatted = formatDuration(data.durationValue, data.durationUnit)

  const certIdSpineSize = fitSingleLineSize(
    data.certificateNumber,
    8.8,
    6.8,
    170,
    measureSpace
  )

  const instructorFontSize = fitSingleLineSize(
    instructorDisplay,
    10.2,
    8,
    190,
    measureSpace
  )

  const specs = [
    { label: 'TRAINING DATE', value: trainingDateFormatted },
    { label: 'DURATION', value: durationFormatted },
    { label: 'ISSUE DATE', value: issueDateFormatted },
    { label: 'VALID UNTIL', value: expiryDateFormatted },
  ]

  // Strict balanced grid coordinates
  const OUTER_MARGIN = 18
  const CARD_LEFT = OUTER_MARGIN
  const CARD_TOP = OUTER_MARGIN
  const CARD_WIDTH = PAGE_WIDTH - OUTER_MARGIN * 2 // 805.89
  const CARD_HEIGHT = PAGE_HEIGHT - OUTER_MARGIN * 2 // 559.28

  const SPINE_WIDTH = 224
  const SPINE_PAD_X = 26
  const SPINE_INNER_LEFT = CARD_LEFT + SPINE_PAD_X // 44
  const SPINE_INNER_WIDTH = SPINE_WIDTH - SPINE_PAD_X * 2 // 172

  const STAGE_LEFT = CARD_LEFT + SPINE_WIDTH // 242
  const STAGE_WIDTH = CARD_WIDTH - SPINE_WIDTH // 581.89
  const CONTENT_LEFT = STAGE_LEFT + 44 // 286
  const CONTENT_WIDTH = STAGE_WIDTH - 88 // 493.89

  return (
    <Document
      title={`${site.name} Certificate — ${data.certificateNumber}`}
      author={site.name}
      subject={`${courseName} — ${data.recipientName}`}
      creator={site.name}
      producer={site.name}
    >
      <Page
        size="A4"
        orientation="landscape"
        style={{ backgroundColor: OUTER_BG, padding: 0, margin: 0 }}
      >
        {/* Main white credential card */}
        <View
          style={{
            position: 'absolute',
            left: CARD_LEFT,
            top: CARD_TOP,
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
            backgroundColor: STAGE_BG,
            borderWidth: 0.8,
            borderColor: '#D6D2C8',
          }}
        />

        {/* Right stage guilloche wave & security border pattern */}
        <StagePattern
          left={STAGE_LEFT}
          top={CARD_TOP}
          width={STAGE_WIDTH}
          height={CARD_HEIGHT}
        />

        {/* Left dark minimal spine */}
        <View
          style={{
            position: 'absolute',
            left: CARD_LEFT,
            top: CARD_TOP,
            width: SPINE_WIDTH,
            height: CARD_HEIGHT,
            backgroundColor: SPINE_BG,
          }}
        />

        {/* Subtle geometric lattice & arc pattern on the dark spine */}
        <SpinePattern
          left={CARD_LEFT}
          top={CARD_TOP}
          width={SPINE_WIDTH}
          height={CARD_HEIGHT}
        />

        {/* Fine crimson accent hairline separating spine and main stage */}
        <View
          style={{
            position: 'absolute',
            left: STAGE_LEFT,
            top: CARD_TOP,
            width: 2,
            height: CARD_HEIGHT,
            backgroundColor: RED,
          }}
        />

        {/* ================================================================ */}
        {/* LEFT SPINE — WHITE LOGO VARIANT, PROGRAMME & QR VERIFICATION     */}
        {/* ================================================================ */}

        {/* Top: White Logo Variant (`public/logo2.png`) */}
        <View
          style={{
            position: 'absolute',
            left: SPINE_INNER_LEFT,
            top: 46,
            width: SPINE_INNER_WIDTH,
          }}
        >
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image
            src={whiteLogoPath}
            style={{
              width: 138,
              height: 41,
              objectFit: 'contain',
              objectPosition: 'left center',
            }}
          />
        </View>

        {/* Horizontal hairline aligned with the right stage header rule (y = 104) */}
        <View
          style={{
            position: 'absolute',
            left: SPINE_INNER_LEFT,
            top: 104,
            width: SPINE_INNER_WIDTH,
            height: 0.8,
            backgroundColor: SPINE_RULE,
          }}
        />

        {/* Middle: Certified Programme Classification */}
        <View
          style={{
            position: 'absolute',
            left: SPINE_INNER_LEFT,
            top: 128,
            width: SPINE_INNER_WIDTH,
          }}
        >
          <View
            style={{
              width: 18,
              height: 1.5,
              backgroundColor: RED,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              fontFamily: 'Jakarta',
              fontWeight: 600,
              fontSize: 6.4,
              color: SPINE_MUTED,
              letterSpacing: 1.8,
            }}
          >
            PROGRAMME
          </Text>

          <View style={{ marginTop: 8 }}>
            {spineCourseFit.lines.map((line, index) => (
              <Text
                key={`spine-course-${index}`}
                style={{
                  fontFamily: 'Playfair',
                  fontWeight: 600,
                  fontSize: spineCourseFit.fontSizePt,
                  lineHeight: 1.22,
                  color: '#FFFFFF',
                }}
                wrap={false}
              >
                {line}
              </Text>
            ))}
          </View>

          <Text
            style={{
              fontFamily: 'Jakarta',
              fontWeight: 400,
              fontSize: 7.2,
              lineHeight: 1.48,
              color: SPINE_MUTED,
              marginTop: 12,
            }}
          >
            Issued in accordance with VerifSafe Occupational Safety & Emergency
            Readiness Standards.
          </Text>
        </View>

        {/* Bottom: Minimal QR Verification Module */}
        <View
          style={{
            position: 'absolute',
            left: SPINE_INNER_LEFT,
            top: 318,
            width: SPINE_INNER_WIDTH,
            paddingTop: 16,
            borderTopWidth: 0.8,
            borderTopColor: SPINE_RULE,
          }}
        >
          <Text
            style={{
              fontFamily: 'Jakarta',
              fontWeight: 600,
              fontSize: 6.4,
              color: SPINE_MUTED,
              letterSpacing: 1.8,
            }}
          >
            PUBLIC VERIFICATION
          </Text>

          {/* Crisp white QR container left-aligned to the spine grid */}
          <View
            style={{
              marginTop: 10,
              width: 112,
              height: 112,
              backgroundColor: '#FFFFFF',
              padding: 8,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Svg
              style={{ width: 96, height: 96 }}
              viewBox={`0 0 ${qr.size} ${qr.size}`}
              preserveAspectRatio="xMidYMid meet"
            >
              <Path d={qr.path} fill={INK} />
            </Svg>
          </View>

          {/* Certificate ID & Verification URL */}
          <View style={{ marginTop: 14 }}>
            <Text
              style={{
                fontFamily: 'Jakarta',
                fontWeight: 600,
                fontSize: 6,
                color: SPINE_MUTED,
                letterSpacing: 1.5,
              }}
            >
              CERTIFICATE ID
            </Text>
            <Text
              style={{
                fontFamily: 'Space',
                fontWeight: 700,
                fontSize: certIdSpineSize,
                color: '#FFFFFF',
                marginTop: 3,
                letterSpacing: 0.5,
              }}
              wrap={false}
            >
              {data.certificateNumber}
            </Text>

            <Text
              style={{
                fontFamily: 'Space',
                fontWeight: 500,
                fontSize: 7.2,
                color: RED,
                marginTop: 8,
              }}
              wrap={false}
            >
              {verificationBaseDisplay}
            </Text>
            <Text
              style={{
                fontFamily: 'Jakarta',
                fontWeight: 400,
                fontSize: 6.4,
                color: SPINE_MUTED,
                marginTop: 2,
              }}
            >
              Scan QR to verify live status
            </Text>
          </View>
        </View>

        {/* ================================================================ */}
        {/* RIGHT STAGE — MINIMAL, BALANCED EDITORIAL CREDENTIAL             */}
        {/* ================================================================ */}

        {/* 1. Top Meta Bar (aligned with Left Spine Logo & y=104 divider) */}
        <View
          style={{
            position: 'absolute',
            left: CONTENT_LEFT,
            top: 58,
            width: CONTENT_WIDTH,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={{
                width: 14,
                height: 1.5,
                backgroundColor: RED,
                marginRight: 8,
              }}
            />
            <Text
              style={{
                fontFamily: 'Jakarta',
                fontWeight: 700,
                fontSize: 7,
                color: INK,
                letterSpacing: 2,
              }}
            >
              OFFICIAL TRAINING CREDENTIAL
            </Text>
          </View>

          <Text
            style={{
              fontFamily: 'Space',
              fontWeight: 500,
              fontSize: 7.5,
              color: MUTED,
              letterSpacing: 0.8,
            }}
          >
            {`NO. ${data.certificateNumber}`}
          </Text>
        </View>

        {/* Horizontal hairline at y = 104 (matches Left Spine hairline) */}
        <View
          style={{
            position: 'absolute',
            left: CONTENT_LEFT,
            top: 104,
            width: CONTENT_WIDTH,
            height: 0.8,
            backgroundColor: HAIRLINE,
          }}
        />

        {/* 2. Title & Italic Preamble */}
        <View
          style={{
            position: 'absolute',
            left: CONTENT_LEFT,
            top: 124,
            width: CONTENT_WIDTH,
          }}
        >
          <Text
            style={{
              fontFamily: 'Playfair',
              fontWeight: 700,
              fontSize: 33,
              lineHeight: 1.08,
              color: INK,
              letterSpacing: 0.2,
            }}
            wrap={false}
          >
            Certificate of Completion
          </Text>
          <Text
            style={{
              fontFamily: 'Playfair',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 12,
              color: MUTED,
              marginTop: 12,
            }}
          >
            This is to certify that
          </Text>
        </View>

        {/* 3. Recipient Name Stage */}
        <View
          style={{
            position: 'absolute',
            left: CONTENT_LEFT,
            top: 196,
            width: CONTENT_WIDTH,
            height: 58,
            justifyContent: 'center',
          }}
        >
          {nameFit.lines.map((line, index) => (
            <Text
              key={`recipient-${index}`}
              style={{
                fontFamily: 'Playfair',
                fontWeight: 700,
                fontSize: nameFit.fontSizePt,
                lineHeight: 1.12,
                color: INK,
              }}
              wrap={false}
            >
              {line}
            </Text>
          ))}
        </View>

        {/* Recipient Baseline Rule with subtle crimson accent */}
        <View
          style={{
            position: 'absolute',
            left: CONTENT_LEFT,
            top: 262,
            width: CONTENT_WIDTH,
            height: 0.8,
            backgroundColor: HAIRLINE,
          }}
        />
        <View
          style={{
            position: 'absolute',
            left: CONTENT_LEFT,
            top: 261.5,
            width: 36,
            height: 1.8,
            backgroundColor: RED,
          }}
        />

        {/* 4. Completion Citation Statement */}
        <View
          style={{
            position: 'absolute',
            left: CONTENT_LEFT,
            top: 278,
            width: CONTENT_WIDTH,
          }}
        >
          {descriptionFit.lines.map((line, index) => (
            <View
              key={`desc-${index}`}
              style={{
                marginBottom:
                  index < descriptionFit.lines.length - 1
                    ? descriptionFit.lineHeightPt - descriptionFit.fontSizePt
                    : 0,
              }}
            >
              <RichDescriptionLine
                text={line}
                courseName={courseName}
                fontSizePt={descriptionFit.fontSizePt}
              />
            </View>
          ))}
        </View>

        {/* 5. Minimal Architectural Specification Grid */}
        <View
          style={{
            position: 'absolute',
            left: CONTENT_LEFT,
            top: 354,
            width: CONTENT_WIDTH,
            height: 54,
            borderTopWidth: 0.8,
            borderBottomWidth: 0.8,
            borderColor: HAIRLINE,
            flexDirection: 'row',
          }}
        >
          {specs.map((spec, idx) => (
            <View
              key={spec.label}
              style={{
                flex: 1,
                paddingLeft: idx === 0 ? 0 : 14,
                paddingRight: 10,
                borderRightWidth: idx < specs.length - 1 ? 0.8 : 0,
                borderRightColor: HAIRLINE,
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontFamily: 'Jakarta',
                  fontWeight: 600,
                  fontSize: 6.2,
                  color: MUTED,
                  letterSpacing: 1.5,
                }}
                wrap={false}
              >
                {spec.label}
              </Text>
              <Text
                style={{
                  fontFamily: 'Space',
                  fontWeight: 600,
                  fontSize: fitSingleLineSize(
                    spec.value,
                    9.6,
                    7.6,
                    104,
                    measureSpace
                  ),
                  color: INK,
                  marginTop: 5,
                }}
                wrap={false}
              >
                {spec.value}
              </Text>
            </View>
          ))}
        </View>

        {/* 6. Balanced Dual Signatures Row (open center reserved for Official Stamp) */}
        <View
          style={{
            position: 'absolute',
            left: CONTENT_LEFT,
            top: 432,
            width: CONTENT_WIDTH,
            height: 82,
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
          {/* Left: Trainer / Instructor */}
          <View style={{ width: 196 }}>
            <Text
              style={{
                fontFamily: 'Space',
                fontWeight: 600,
                fontSize: instructorFontSize,
                color: INK,
                marginBottom: 8,
              }}
              wrap={false}
            >
              {instructorDisplay}
            </Text>
            <View style={{ height: 0.8, backgroundColor: INK, width: '100%' }} />
            <Text
              style={{
                fontFamily: 'Jakarta',
                fontWeight: 700,
                fontSize: 6.5,
                color: INK,
                letterSpacing: 1.5,
                marginTop: 7,
              }}
            >
              TRAINER / INSTRUCTOR
            </Text>
            <Text
              style={{
                fontFamily: 'Jakarta',
                fontWeight: 400,
                fontSize: 6.8,
                color: MUTED,
                marginTop: 2,
              }}
            >
              Lead Training Assessor · VerifSafe
            </Text>
          </View>

          {/* Right: Authorized Signatory */}
          <View style={{ width: 196 }}>
            <Svg
              style={{ width: 118, height: 24, marginBottom: 4 }}
              viewBox="0 0 180 38"
            >
              <Path
                d="M8 26 C24 8, 38 8, 46 22 C52 31, 64 12, 80 15 C92 17, 98 26, 114 18 C130 10, 144 14, 164 10"
                fill="none"
                stroke={INK}
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </Svg>
            <View style={{ height: 0.8, backgroundColor: INK, width: '100%' }} />
            <Text
              style={{
                fontFamily: 'Jakarta',
                fontWeight: 700,
                fontSize: 6.5,
                color: INK,
                letterSpacing: 1.5,
                marginTop: 7,
              }}
            >
              AUTHORIZED SIGNATORY
            </Text>
            <Text
              style={{
                fontFamily: 'Jakarta',
                fontWeight: 400,
                fontSize: 6.8,
                color: MUTED,
                marginTop: 2,
              }}
            >
              Director of Training · VerifSafe
            </Text>
          </View>
        </View>

        {/* 7. Bottom Footer Bar */}
        <View
          style={{
            position: 'absolute',
            left: CONTENT_LEFT,
            top: 534,
            width: CONTENT_WIDTH,
            paddingTop: 8,
            borderTopWidth: 0.8,
            borderTopColor: HAIRLINE,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: 'Jakarta',
              fontWeight: 400,
              fontSize: 6.5,
              color: MUTED,
              letterSpacing: 0.3,
            }}
            wrap={false}
          >
            {`${site.name} · ${site.address.street}, ${site.address.locality}, ${site.address.country} · ${site.email}`}
          </Text>
          <Text
            style={{
              fontFamily: 'Space',
              fontWeight: 500,
              fontSize: 6.5,
              color: INK,
              letterSpacing: 0.3,
            }}
            wrap={false}
          >
            {verificationUrl.replace(/^https?:\/\//i, '')}
          </Text>
        </View>
      </Page>
    </Document>
  )
}

export async function renderCertificatePdf(data: CertificatePdfData): Promise<Buffer> {
  return renderToBuffer(<CertificateDocument data={data} />)
}

export { CertificateDocument }
