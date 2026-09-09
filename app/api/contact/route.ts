import { NextResponse } from 'next/server'
import { createEnquiry } from '@/lib/data/enquiries'

async function sendTelegramAlert(payload: {
  name: string
  email: string
  phone: string
  service: string
  message: string
}) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    return null
  }

  const timestamp = new Date().toLocaleString('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  const text = [
    '📩 New Website Enquiry',
    '',
    `Client: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || 'N/A'}`,
    `Service: ${payload.service}`,
    '',
    'Message:',
    payload.message,
    '',
    `Received: ${timestamp}`,
  ].join('\n')

  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Telegram send failed: ${errorText}`)
  }

  return true
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    if (!name || !service || !message) {
      return NextResponse.json(
        { message: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }

    const enquiry = await createEnquiry({
      name: String(name).trim(),
      email: email ? String(email).trim() : undefined,
      phone: phone ? String(phone).trim() : undefined,
      service: String(service).trim(),
      message: String(message).trim(),
    })

    try {
      await sendTelegramAlert({
        name: enquiry.name,
        email: enquiry.email || '',
        phone: enquiry.phone || '',
        service: enquiry.service || '',
        message: enquiry.message,
      })
    } catch (telegramError) {
      console.error('Telegram notification failed:', telegramError)
    }

    return NextResponse.json({ success: true, data: enquiry }, { status: 201 })
  } catch (error: unknown) {
    console.error('Contact submission error:', error)

    return NextResponse.json(
      { message: 'We are unable to process enquiries at the moment. Please try again later.' },
      { status: 500 }
    )
  }
}