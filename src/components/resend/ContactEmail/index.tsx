import { Html } from '@react-email/html'

interface Props {
  email: string
  name: string
  message: string
}

const ContatEmail = ({ email, message, name }: Props) => {
  return (
    <Html>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Message:</strong> {message}
      </p>
    </Html>
  )
}

export default ContatEmail
