import path from 'node:path'
import React from 'react'
import {
  Circle,
  Document,
  Font,
  Image,
  Line,
  Page,
  Path,
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
 * Designed as an authoritative Swiss-architectural safety credential:
 * - Left dark obsidian authority spine with vector shield emblem, course
 *   classification, and high-contrast QR public verification module.
 * - Right archival ivory/white credential stage with formal typography,
 *   structured specification ledger, vector security seal, and dual attestation.
 */

const PAGE_WIDTH = 841.89
const PAGE_HEIGHT = 595.28

// Color palette
const PAPER_BG = '#F4F1EA'
const CARD_BG = '#FFFFFF'
const SPINE_BG = '#0F0F11'
const SPINE_SURFACE = '#16161A'
const SPINE_BORDER = '#292930'
const INK = '#0F0F11'
const INK_SOFT = '#27272B'
const MUTED = '#66645E'
const MUTED_LIGHT = '#9E9B93'
const LINE_COLOR = '#E2DFD7'
const LEDGER_BG = '#FAF9F5'
const RED = '#E53A34'

const root = process.cwd()
const fontDir = path.join(root, 'assets', 'fonts')
const oakesFontPath = path.join(fontDir, 'OakesGrotesk-Regular.ttf')
const oakesBoldFontPath = path.join(fontDir, 'OakesGrotesk-Bold.ttf')
const displayFontPath = path.join(fontDir, 'Anton.woff2')
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

  // Distinctive condensed display face for the certificate wordmark and
  // recipient name (unique Anton variable face).
  Font.register({
    family: 'Anton',
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

const boldFont = (() => {
  try {
    return openSync(oakesBoldFontPath)
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
  sizePt: number,
  font: ReturnType<typeof openSync> | null
): number {
  if (!font || !text) return 0
  return (font.layout(text).advanceWidth / font.unitsPerEm) * sizePt
}

function measureOakes(text: string, sizePt: number): number {
  return measureText(text, sizePt, regularFont)
}

function measureOakesBold(text: string, sizePt: number): number {
  return measureText(text, sizePt, boldFont ?? regularFont)
}

function measureDisplay(text: string, sizePt: number): number {
  return measureText(text, sizePt, displayFont)
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
    const firstWidth = measureDisplay(first, sizePt)
    const secondWidth = measureDisplay(second, sizePt)
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

function fitRecipientName(name: string): FittedBlock {
  const maxWidthPt = 512

  for (let size = 35; size >= 22; size -= 0.5) {
    if (measureDisplay(name, size) <= maxWidthPt) {
      return { fontSizePt: size, lines: [name], lineHeightPt: size * 1.05 }
    }
  }

  for (let size = 25; size >= 17; size -= 0.5) {
    const split = splitNameIntoTwoLines(name, size, maxWidthPt)
    if (!split) continue
    return {
      fontSizePt: size,
      lines: [split.first, split.second],
      lineHeightPt: size * 1.04,
    }
  }

  const fallbackLines = wrapText(name, maxWidthPt, 16, measureDisplay).slice(0, 2)
  return {
    fontSizePt: 16,
    lines: fallbackLines,
    lineHeightPt: 16 * 1.05,
  }
}

function fitDescription(description: string): FittedBlock {
  const maxWidthPt = 508

  for (let size = 10.6; size >= 8.8; size -= 0.2) {
    const lines = wrapText(description, maxWidthPt, size, measureOakes)
    if (lines.length <= 3) {
      return { fontSizePt: size, lines, lineHeightPt: size * 1.42 }
    }
  }

  const lines = wrapText(description, maxWidthPt, 8.6, measureOakes).slice(0, 4)
  return {
    fontSizePt: 8.6,
    lines,
    lineHeightPt: 8.6 * 1.35,
  }
}

function splitSpineCourseTitle(courseName: string): FittedBlock {
  const upper = courseName.trim().toUpperCase()
  const maxWidthPt = 172

  for (let size = 19.5; size >= 13.5; size -= 0.5) {
    const lines = wrapText(upper, maxWidthPt, size, measureDisplay)
    if (lines.length <= 3) {
      return {
        fontSizePt: size,
        lines,
        lineHeightPt: size * 1.08,
      }
    }
  }

  const lines = wrapText(upper, maxWidthPt, 13, measureDisplay).slice(0, 4)
  return {
    fontSizePt: 13,
    lines,
    lineHeightPt: 13 * 1.08,
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
    fontFamily: 'Oakes',
    fontWeight: 400 as const,
    fontSize: fontSizePt,
    color: INK_SOFT,
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
            style={{ fontFamily: 'Oakes', fontWeight: 600, color: INK }}
          >
            {part}
          </Text>
        )
      })}
    </Text>
  )
}

/**
 * Subtle guilloche watermark behind the main stage text.
 */
function GuillocheWatermark() {
  const radii = [44, 62, 80, 98, 116, 134, 152]
  return (
    <Svg
      style={{
        position: 'absolute',
        left: 385,
        top: 120,
        width: 310,
        height: 310,
      }}
      viewBox="0 0 320 320"
    >
      {radii.map((r, idx) => (
        <Circle
          key={r}
          cx="160"
          cy="160"
          r={r}
          fill="none"
          stroke={idx % 2 === 0 ? '#F3F0E8' : '#F8ECEB'}
          strokeWidth={0.85}
          strokeDasharray={idx % 2 === 0 ? '4 3' : undefined}
        />
      ))}
      <Path
        d="M160 72 C133 89 107 95 92 98 L92 146 C92 183 120 211 160 226 C200 211 228 183 228 146 L228 98 C213 95 187 89 160 72 Z"
        fill="none"
        stroke="#F1EEE6"
        strokeWidth={1.1}
      />
    </Svg>
  )
}

/**
 * Corner registration marks inset strictly inside the card so they never
 * approach the page height boundary.
 */
function CornerMarks() {
  const boxW = PAGE_WIDTH - 44 // 797.89
  const boxH = PAGE_HEIGHT - 44 // 551.28
  const len = 11

  return (
    <Svg
      style={{
        position: 'absolute',
        left: 22,
        top: 22,
        width: boxW,
        height: boxH,
      }}
      viewBox={`0 0 ${boxW} ${boxH}`}
    >
      {/* Top-left (over dark spine) */}
      <Line x1={0} y1={0} x2={len} y2={0} stroke={RED} strokeWidth={2} />
      <Line x1={0} y1={0} x2={0} y2={len} stroke={RED} strokeWidth={2} />
      {/* Bottom-left (over dark spine) */}
      <Line x1={0} y1={boxH} x2={len} y2={boxH} stroke={RED} strokeWidth={2} />
      <Line x1={0} y1={boxH - len} x2={0} y2={boxH} stroke={RED} strokeWidth={2} />
      {/* Top-right */}
      <Line x1={boxW - len} y1={0} x2={boxW} y2={0} stroke={RED} strokeWidth={2} />
      <Line x1={boxW} y1={0} x2={boxW} y2={len} stroke={RED} strokeWidth={2} />
      {/* Bottom-right */}
      <Line x1={boxW - len} y1={boxH} x2={boxW} y2={boxH} stroke={RED} strokeWidth={2} />
      <Line x1={boxW} y1={boxH - len} x2={boxW} y2={boxH} stroke={RED} strokeWidth={2} />
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

  const recipientUpper = (data.recipientName || 'Recipient Name').trim().toUpperCase()
  const courseName = (data.courseName || 'Safety Training Course').trim()
  const instructorUpper = (data.instructorName || 'Authorized Trainer').trim().toUpperCase()

  const nameFit = fitRecipientName(recipientUpper)
  const descriptionText =
    data.description?.trim() || buildDefaultDescription(courseName)
  const descriptionFit = fitDescription(descriptionText)
  const spineCourseFit = splitSpineCourseTitle(courseName)

  const trainingDateFormatted = formatCertificateDateLong(data.trainingDate)
  const issueDateFormatted = formatCertificateDateLong(data.issueDate)
  const expiryDateFormatted = data.expiryDate
    ? formatCertificateDateLong(data.expiryDate)
    : 'No Expiry'
  const durationFormatted = formatDuration(data.durationValue, data.durationUnit)

  const certIdSpineSize = fitSingleLineSize(
    data.certificateNumber,
    9.2,
    6.8,
    156,
    measureOakesBold
  )

  const instructorFontSize = fitSingleLineSize(
    instructorUpper,
    10.5,
    7.5,
    182,
    measureOakesBold
  )

  const specs = [
    { label: 'TRAINING DATE', value: trainingDateFormatted },
    { label: 'COURSE DURATION', value: durationFormatted },
    { label: 'DATE OF ISSUE', value: issueDateFormatted },
    { label: 'VALIDITY / EXPIRY', value: expiryDateFormatted },
  ]

  // Layout constants
  const OUTER_MARGIN = 16
  const CARD_LEFT = OUTER_MARGIN
  const CARD_TOP = OUTER_MARGIN
  const CARD_WIDTH = PAGE_WIDTH - OUTER_MARGIN * 2 // 809.89
  const CARD_HEIGHT = PAGE_HEIGHT - OUTER_MARGIN * 2 // 563.28

  const SPINE_WIDTH = 216
  const STAGE_LEFT = CARD_LEFT + SPINE_WIDTH + 4 // 236
  const CONTENT_LEFT = 268
  const CONTENT_WIDTH = 524 // right edge at 792

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
        style={{ backgroundColor: PAPER_BG, padding: 0, margin: 0 }}
      >
        {/* Main white credential surface */}
        <View
          style={{
            position: 'absolute',
            left: CARD_LEFT,
            top: CARD_TOP,
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
            backgroundColor: CARD_BG,
            borderWidth: 1.2,
            borderColor: INK,
          }}
        />

        {/* Subtle inner architectural hairline around the right stage */}
        <View
          style={{
            position: 'absolute',
            left: STAGE_LEFT + 6,
            top: CARD_TOP + 6,
            width: CARD_WIDTH - SPINE_WIDTH - 16,
            height: CARD_HEIGHT - 12,
            borderWidth: 0.6,
            borderColor: LINE_COLOR,
          }}
        />

        {/* Watermark on the main stage */}
        <GuillocheWatermark />

        {/* Left dark authority spine */}
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

        {/* Vertical crimson divider bar between spine and stage */}
        <View
          style={{
            position: 'absolute',
            left: CARD_LEFT + SPINE_WIDTH,
            top: CARD_TOP,
            width: 4,
            height: CARD_HEIGHT,
            backgroundColor: RED,
          }}
        />

        <CornerMarks />

        {/* ================================================================ */}
        {/* LEFT AUTHORITY SPINE CONTENT                                     */}
        {/* ================================================================ */}

        {/* Brand wordmark & identity */}
        <View
          style={{
            position: 'absolute',
            left: CARD_LEFT + 22,
            top: CARD_TOP + 24,
            width: SPINE_WIDTH - 44,
          }}
        >
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                fontFamily: 'Oakes',
                fontWeight: 700,
                fontSize: 13,
                color: '#FFFFFF',
                letterSpacing: 1.5,
              }}
            >
              VERIFSAFE
            </Text>
            <Text
              style={{
                fontFamily: 'Oakes',
                fontWeight: 600,
                fontSize: 6.2,
                color: RED,
                letterSpacing: 1.3,
                marginTop: 2,
              }}
            >
              PEACE OF MIND VERIFIED
            </Text>
          </View>
        </View>

        {/* Spine top divider */}
        <View
          style={{
            position: 'absolute',
            left: CARD_LEFT + 22,
            top: CARD_TOP + 76,
            width: SPINE_WIDTH - 44,
            height: 1,
            backgroundColor: SPINE_BORDER,
          }}
        />
        <View
          style={{
            position: 'absolute',
            left: CARD_LEFT + 22,
            top: CARD_TOP + 76,
            width: 28,
            height: 1.5,
            backgroundColor: RED,
          }}
        />

        {/* Certified Programme Classification */}
        <View
          style={{
            position: 'absolute',
            left: CARD_LEFT + 22,
            top: CARD_TOP + 92,
            width: SPINE_WIDTH - 44,
          }}
        >
          <Text
            style={{
              fontFamily: 'Oakes',
              fontWeight: 600,
              fontSize: 6.8,
              color: MUTED_LIGHT,
              letterSpacing: 1.8,
            }}
          >
            CERTIFIED PROGRAMME
          </Text>

          <View style={{ marginTop: 8 }}>
            {spineCourseFit.lines.map((line, index) => (
              <Text
                key={`spine-course-${index}`}
                style={{
                  fontFamily: 'Anton',
                  fontSize: spineCourseFit.fontSizePt,
                  lineHeight: 1.08,
                  color: index === 0 ? '#FFFFFF' : RED,
                }}
                wrap={false}
              >
                {line}
              </Text>
            ))}
          </View>

          <Text
            style={{
              fontFamily: 'Oakes',
              fontWeight: 400,
              fontSize: 7.3,
              lineHeight: 1.38,
              color: MUTED_LIGHT,
              marginTop: 10,
            }}
          >
            Issued under VerifSafe Occupational Safety & Emergency Preparedness
            Training Standards.
          </Text>
        </View>

        {/* Public Verification QR Box */}
        <View
          style={{
            position: 'absolute',
            left: CARD_LEFT + 18,
            top: CARD_TOP + 248,
            width: SPINE_WIDTH - 36,
            height: 294,
            backgroundColor: SPINE_SURFACE,
            borderWidth: 1,
            borderColor: SPINE_BORDER,
            padding: 12,
          }}
        >
          {/* Header with crimson dot */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={{
                width: 5,
                height: 5,
                borderRadius: 2.5,
                backgroundColor: RED,
                marginRight: 6,
              }}
            />
            <Text
              style={{
                fontFamily: 'Oakes',
                fontWeight: 700,
                fontSize: 6.8,
                color: '#FFFFFF',
                letterSpacing: 1.5,
              }}
            >
              PUBLIC VERIFICATION
            </Text>
          </View>

          {/* White QR frame with clean quiet zone */}
          <View
            style={{
              marginTop: 10,
              alignSelf: 'center',
              width: 126,
              height: 126,
              backgroundColor: '#FFFFFF',
              padding: 9,
              borderWidth: 1,
              borderColor: LINE_COLOR,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Svg
              style={{ width: 106, height: 106 }}
              viewBox={`0 0 ${qr.size} ${qr.size}`}
              preserveAspectRatio="xMidYMid meet"
            >
              <Path d={qr.path} fill={INK} />
            </Svg>
          </View>

          {/* Immutable Certificate ID */}
          <View
            style={{
              marginTop: 12,
              paddingTop: 9,
              borderTopWidth: 0.8,
              borderTopColor: SPINE_BORDER,
            }}
          >
            <Text
              style={{
                fontFamily: 'Oakes',
                fontWeight: 600,
                fontSize: 6.2,
                color: MUTED_LIGHT,
                letterSpacing: 1.4,
              }}
            >
              CERTIFICATE ID
            </Text>
            <Text
              style={{
                fontFamily: 'Oakes',
                fontWeight: 700,
                fontSize: certIdSpineSize,
                color: '#FFFFFF',
                marginTop: 3,
                letterSpacing: 0.4,
              }}
              wrap={false}
            >
              {data.certificateNumber}
            </Text>
          </View>

          {/* Permanent Verification Endpoint */}
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontFamily: 'Oakes',
                fontWeight: 600,
                fontSize: 6,
                color: MUTED_LIGHT,
                letterSpacing: 1.2,
              }}
            >
              SCAN QR OR VERIFY AT
            </Text>
            <Text
              style={{
                fontFamily: 'Oakes',
                fontWeight: 600,
                fontSize: 7.4,
                color: RED,
                marginTop: 2,
              }}
              wrap={false}
            >
              {verificationBaseDisplay}
            </Text>
          </View>
        </View>

        {/* ================================================================ */}
        {/* RIGHT MAIN CREDENTIAL STAGE                                      */}
        {/* ================================================================ */}

        {/* Header Row: Credential Metadata (Left) + Official Logo (Right) */}
        <View
          style={{
            position: 'absolute',
            left: CONTENT_LEFT,
            top: 40,
            width: CONTENT_WIDTH,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{
                  width: 14,
                  height: 2,
                  backgroundColor: RED,
                  marginRight: 7,
                }}
              />
              <Text
                style={{
                  fontFamily: 'Oakes',
                  fontWeight: 700,
                  fontSize: 7.8,
                  color: RED,
                  letterSpacing: 1.3,
                  marginTop: 4,
                }}
              >
                OFFICIAL TRAINING CREDENTIAL
              </Text>
            </View>
            <Text
              style={{
                fontFamily: 'Oakes',
                fontWeight: 500,
                fontSize: 8.2,
                color: MUTED,
                marginTop: 4,
              }}
            >
              VerifSafe Safety & Emergency Preparedness Register · Kigali, Rwanda
            </Text>
          </View>

          {/* Official VerifSafe Logo on crisp white background */}
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image
            src={logoPath}
            style={{
              width: 148,
              height: 48,
              objectFit: 'contain',
            }}
          />
        </View>

        {/* Architectural Divider Rule below header */}
        <View
          style={{
            position: 'absolute',
            left: CONTENT_LEFT,
            top: 98,
            width: CONTENT_WIDTH,
            height: 1,
            backgroundColor: LINE_COLOR,
          }}
        />
        <View
          style={{
            position: 'absolute',
            left: CONTENT_LEFT,
            top: 97.5,
            width: 72,
            height: 2,
            backgroundColor: INK,
          }}
        />

        {/* Primary Display Title */}
        <View
          style={{
            position: 'absolute',
            left: CONTENT_LEFT,
            top: 112,
            width: CONTENT_WIDTH,
          }}
        >
          <Text
            style={{
              fontFamily: 'Anton',
              fontSize: 36,
              lineHeight: 1.12,
              color: INK,
              letterSpacing: 0.5,
            }}
            wrap={false}
          >
            CERTIFICATE OF COMPLETION
          </Text>
          <Text
            style={{
              fontFamily: 'Oakes',
              fontWeight: 500,
              fontSize: 7.6,
              color: MUTED,
              letterSpacing: 1.5,
              marginTop: 12,
            }}
          >
            THIS IS TO CERTIFY THAT
          </Text>
        </View>

        {/* Recipient Name Block */}
        <View
          style={{
            position: 'absolute',
            left: CONTENT_LEFT,
            top: 184,
            width: CONTENT_WIDTH,
            height: 64,
            justifyContent: 'center',
          }}
        >
          {nameFit.lines.map((line, index) => (
            <Text
              key={`recipient-${index}`}
              style={{
                fontFamily: 'Anton',
                fontSize: nameFit.fontSizePt,
                lineHeight: 1.05,
                color: INK,
                letterSpacing: 0.4,
              }}
              wrap={false}
            >
              {line}
            </Text>
          ))}
        </View>

        {/* Recipient Baseline Rule with Crimson Accent */}
        <View
          style={{
            position: 'absolute',
            left: CONTENT_LEFT,
            top: 254,
            width: CONTENT_WIDTH,
            height: 1,
            backgroundColor: LINE_COLOR,
          }}
        />
        <View
          style={{
            position: 'absolute',
            left: CONTENT_LEFT,
            top: 253.5,
            width: 44,
            height: 2,
            backgroundColor: RED,
          }}
        />

        {/* Completion Citation Statement */}
        <View
          style={{
            position: 'absolute',
            left: CONTENT_LEFT,
            top: 268,
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

        {/* Structured 4-Column Specification Ledger */}
        <View
          style={{
            position: 'absolute',
            left: CONTENT_LEFT,
            top: 344,
            width: CONTENT_WIDTH,
            height: 58,
            backgroundColor: LEDGER_BG,
            borderWidth: 1,
            borderColor: LINE_COLOR,
            flexDirection: 'row',
          }}
        >
          {/* Top solid ink bar across the ledger */}
          <View
            style={{
              position: 'absolute',
              left: -1,
              top: -1,
              width: CONTENT_WIDTH,
              height: 2,
              backgroundColor: INK,
            }}
          />
          {specs.map((spec, idx) => (
            <View
              key={spec.label}
              style={{
                flex: 1,
                paddingHorizontal: 11,
                paddingVertical: 11,
                borderRightWidth: idx < specs.length - 1 ? 1 : 0,
                borderRightColor: LINE_COLOR,
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontFamily: 'Oakes',
                  fontWeight: 600,
                  fontSize: 6.6,
                  color: MUTED,
                  letterSpacing: 1.6,
                }}
                wrap={false}
              >
                {spec.label}
              </Text>
              <Text
                style={{
                  fontFamily: 'Oakes',
                  fontWeight: 700,
                  fontSize: fitSingleLineSize(
                    spec.value,
                    9.8,
                    7.8,
                    106,
                    measureOakesBold
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

        {/* Attestation, Official Seal & Signatures Row */}
        <View
          style={{
            position: 'absolute',
            left: CONTENT_LEFT,
            top: 422,
            width: CONTENT_WIDTH,
            height: 98,
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
          {/* Left Signatory: Trainer / Instructor */}
          <View style={{ width: 194 }}>
            <Text
              style={{
                fontFamily: 'Oakes',
                fontWeight: 700,
                fontSize: instructorFontSize,
                color: INK,
                letterSpacing: 0.3,
                marginBottom: 7,
              }}
              wrap={false}
            >
              {instructorUpper}
            </Text>
            <View style={{ height: 1, backgroundColor: INK, width: '100%' }} />
            <View
              style={{
                height: 2,
                backgroundColor: RED,
                width: 28,
                marginTop: -1.5,
              }}
            />
            <Text
              style={{
                fontFamily: 'Oakes',
                fontWeight: 700,
                fontSize: 7.2,
                color: INK_SOFT,
                letterSpacing: 1.3,
                marginTop: 7,
              }}
            >
              TRAINER / INSTRUCTOR
            </Text>
            <Text
              style={{
                fontFamily: 'Oakes',
                fontWeight: 400,
                fontSize: 7,
                color: MUTED,
                marginTop: 2,
              }}
            >
              Lead Training Assessor · VerifSafe
            </Text>
          </View>

          {/* Right Signatory: Authorized Signature */}
          <View style={{ width: 194 }}>
            {/* Stylized vector signature flourish */}
            <Svg
              style={{ width: 130, height: 28, marginBottom: 2 }}
              viewBox="0 0 180 40"
            >
              <Path
                d="M12 28 C28 10, 44 8, 52 24 C58 34, 68 14, 84 16 C96 18, 102 28, 118 20 C134 12, 148 15, 168 11"
                fill="none"
                stroke={INK}
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <Path
                d="M28 32 L154 25"
                fill="none"
                stroke={RED}
                strokeWidth="0.9"
                strokeLinecap="round"
              />
            </Svg>
            <View style={{ height: 1, backgroundColor: INK, width: '100%' }} />
            <View
              style={{
                height: 2,
                backgroundColor: RED,
                width: 28,
                marginTop: -1.5,
              }}
            />
            <Text
              style={{
                fontFamily: 'Oakes',
                fontWeight: 700,
                fontSize: 7.2,
                color: INK_SOFT,
                letterSpacing: 1.3,
                marginTop: 7,
              }}
            >
              AUTHORIZED SIGNATURE
            </Text>
            <Text
              style={{
                fontFamily: 'Oakes',
                fontWeight: 400,
                fontSize: 7,
                color: MUTED,
                marginTop: 2,
              }}
            >
              Director of Training & Compliance · VerifSafe
            </Text>
          </View>
        </View>

        {/* Bottom Micro-Security Footer Bar */}
        <View
          style={{
            position: 'absolute',
            left: CONTENT_LEFT,
            top: 538,
            width: CONTENT_WIDTH,
            paddingTop: 7,
            borderTopWidth: 0.6,
            borderTopColor: LINE_COLOR,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: 'Oakes',
              fontWeight: 500,
              fontSize: 6.2,
              color: MUTED,
              letterSpacing: 0.6,
            }}
            wrap={false}
          >
            {`VERIFSAFE RWANDA · ${site.address.street.toUpperCase()}, KIGALI · ${site.email.toUpperCase()}`}
          </Text>
          <Text
            style={{
              fontFamily: 'Oakes',
              fontWeight: 700,
              fontSize: 6.2,
              color: INK,
              letterSpacing: 0.6,
            }}
            wrap={false}
          >
            {`VERIFY ONLINE: ${verificationBaseDisplay.toUpperCase()}/${data.certificateNumber.toUpperCase()}`}
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
