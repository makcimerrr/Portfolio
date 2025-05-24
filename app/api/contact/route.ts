import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(`${process.env.RESEND_API_KEY}`)

export async function POST(req: Request) {
  const body = await req.json()

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: `New contact from ${body.name}`,
      html: `
               <div style="font-family: Arial, sans-serif; color: #222; background: #f9f9f9; padding: 24px; border-radius: 8px;">
                 <h2 style="color: #0070f3; margin-top: 0;">Nouveau message de contact</h2>
                 <p><strong>Nom :</strong> ${body.name}</p>
                 <p><strong>Email :</strong> <a href="mailto:${body.email}" style="color: #0070f3;">${body.email}</a></p>
                 <p><strong>Message :</strong><br/><span style="white-space: pre-line;">${body.message}</span></p>
               </div>
             `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}