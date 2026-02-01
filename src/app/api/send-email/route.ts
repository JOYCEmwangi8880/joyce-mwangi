import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      )
    }

    const { EMAIL_USER, EMAIL_PASSWORD } = process.env

    if (!EMAIL_USER || !EMAIL_PASSWORD) {
      return Response.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: EMAIL_USER,
      to: EMAIL_USER,
      replyTo: email,
      subject: `New contact message: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
          <h2>New message from ${name}</h2>

          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          <p><strong>Subject:</strong> ${subject}</p>

          <hr />

          <p>${message.replace(/\n/g, '<br />')}</p>
        </div>
      `,
    })

    return Response.json({ success: true }, { status: 200 })
  } catch (err) {
    return Response.json(
      { error: 'Something went wrong while sending the email' },
      { status: 500 }
    )
  }
}
