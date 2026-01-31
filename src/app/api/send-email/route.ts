import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      console.error('[v0] Missing required fields:', { name, email, subject, message })
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const emailUser = process.env.EMAIL_USER
    const emailPassword = process.env.EMAIL_PASSWORD

    if (!emailUser || !emailPassword) {
      console.error('[v0] Missing email credentials in environment variables')
      return Response.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    })

    console.log('[v0] Sending email from:', emailUser, 'to:', emailUser)

    const mailResult = await transporter.sendMail({
      from: emailUser,
      to: emailUser,
      replyTo: email,
      subject: `New Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #06b6d4;">New Message from ${name}</h2>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; color: #333;">${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    })

    console.log('[v0] Email sent successfully:', mailResult.messageId)

    return Response.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Email send error:', error)
    return Response.json(
      { error: 'Failed to send email', details: String(error) },
      { status: 500 }
    )
  }
}
