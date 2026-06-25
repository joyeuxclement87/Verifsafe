import { NextResponse } from 'next/server'
import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '@/sanity/env'

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

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { message: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }

    if (!process.env.SANITY_API_WRITE_TOKEN) {
      return NextResponse.json(
        {
          message: 'Sanity write access is not configured yet. Please complete the setup in the local environment file.',
        },
        { status: 500 }
      )
    }

    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token: process.env.SANITY_API_WRITE_TOKEN,
    })

    const doc = await client.create({
      _type: 'contactMessage',
      name,
      email,
      phone: phone || '',
      service,
      message,
      status: 'new',
      submittedAt: new Date().toISOString(),
      source: 'website',
    })

    try {
      await sendTelegramAlert({
        name,
        email,
        phone: phone || '',
        service,
        message,
      })
    } catch (telegramError) {
      console.error('Telegram notification failed:', telegramError)
    }

    return NextResponse.json({ success: true, data: doc }, { status: 201 })
  } catch (error: unknown) {
    console.error('Contact submission error:', error)

    const message =
      error && typeof error === 'object' && 'details' in error && error.details && typeof error.details === 'object'
        ? (error.details as { description?: string }).description || (error.details as { type?: string }).type
        : undefined

    if (message?.includes('project user not found') || message?.includes('Unauthorized')) {
      return NextResponse.json(
        {
          message:
            'The Sanity write token is invalid for this project. Create a new write token for project obv9kyik in Sanity and update SANITY_API_WRITE_TOKEN in your local environment file.',
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Something went wrong while saving the message.' },
      { status: 500 }
    )
  }
}
