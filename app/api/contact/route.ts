import { NextResponse } from 'next/server'
import { createEnquiry } from '@/lib/data/enquiries'
import { sendEnquiryTelegramAlert } from '@/lib/notifications/telegram'

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
      await sendEnquiryTelegramAlert({
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
