'use server'

import ContactEmail from '@/components/resend/ContactEmail'
import { sanitize } from 'isomorphic-dompurify'
import { Resend } from 'resend'

interface Props {
  name: string
  email: string
  message: string
}

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async ({ email, message, name }: Props) => {
  message = sanitize(message)
  email = sanitize(email)
  name = sanitize(name)

  await resend.emails.send({
    from: process.env.RESEND_FROM!,
    to: process.env.RECEIVER_EMAIL!,
    reply_to: email,
    subject: `${name} - via yanlyra.dev`,
    react: ContactEmail({ email, message, name }),
  })
}
