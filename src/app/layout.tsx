import { Container } from '@/components/Container'
import { Header } from '@/layout/Header'
import './index.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />

        <Container>{children}</Container>
      </body>
    </html>
  )
}
