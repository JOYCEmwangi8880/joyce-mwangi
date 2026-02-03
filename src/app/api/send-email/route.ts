import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    const emailUser = process.env.EMAIL_USER
    const emailPassword = process.env.EMAIL_PASSWORD

    console.log("Checking env vars - USER:", emailUser ? "exists" : "MISSING")
    console.log("Checking env vars - PASS:", emailPassword ? "exists" : "MISSING")

    if (!emailUser || !emailPassword) {
      console.log("Environment variables not set properly")
      return Response.json(
        { error: 'Email service not configured on server. Check environment variables.' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    })

    await transporter.sendMail({
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
    })

    return Response.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.log("Email send error:", error)
    return Response.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}
