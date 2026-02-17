'use server'

import nodemailer from 'nodemailer'

export async function sendEmail(formData: FormData) {
  // Honeypot spam check
  const honeypot = formData.get('website') as string
  if (honeypot) {
    return { success: false, error: "Form submission blocked" }
  }

  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  const emailUser = process.env.EMAIL_USER
  const emailPassword = process.env.EMAIL_PASSWORD

  if (!emailUser || !emailPassword) {
    // console.log("Missing EMAIL_USER or EMAIL_PASSWORD")
    return { success: false, error: "Email service not configured" }
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    })

    await transporter.sendMail({
      from: emailUser,
      to: emailUser,
      replyTo: email,
       subject: 'New inquiry from portfolio',
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Subject:</strong> ${subject}</p>
        <hr/>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    return { success: true }
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err)
    console.error("Failed to send email:", errorMessage)
    return { success: false, error: errorMessage }
  }
}
