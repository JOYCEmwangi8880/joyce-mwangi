import nodemailer from 'nodemailer'

const emailUser = process.env.EMAIL_USER
const emailPassword = process.env.EMAIL_PASSWORD

export async function POST(request: Request) {
  try {
    if (!emailUser || !emailPassword) {
      return Response.json(
        { error: 'Email service not configured. Please check environment variables.' },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    })

    const mailOptions = {
      from: emailUser,
      to: emailUser,
      replyTo: email,
      subject: `New message from ${name}: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2>New Message from ${name}</h2>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="margin: 20px 0;" />
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return Response.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email error:', error)
    return Response.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    )
  }
}
