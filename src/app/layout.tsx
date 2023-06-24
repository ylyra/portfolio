import { Montserrat } from 'next/font/google'
import './index.css'

import { Container } from '@/components/Container'
import { Header } from '@/layout/Header'
import { css } from '@/panda/css'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: 'Yan Lyra - Full Stack Developer',
  description: 'Full Stack Developer',
}

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin-ext'],
  variable: '--font-primary',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={[
          css({
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }),
          montserrat.variable,
        ].join(' ')}
      >
        <Header />

        <Container flex={1} display="flex" flexDir="column">
          {children}
        </Container>

        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}
