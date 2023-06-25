import { Container } from '@/components/Container'
import { css } from '@/panda/css'
import { styled } from '@/panda/jsx'
import Image from 'next/image'
import Link from 'next/link'
import { Nav } from './Nav'

export const Header = () => {
  return (
    <styled.header py={16} position="sticky" top={0} zIndex={999}>
      <Container
        bg="hsla(0,0%,100%,.03)"
        borderRadius={8}
        py={8}
        backdropFilter="blur(8px)"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link href="/" aria-label="Return to home">
          <Image
            src="https://github.com/ylyra.png"
            alt=""
            width={32}
            height={32}
            className={css({
              borderRadius: 16,
              border: '2px solid',
              borderColor: 'emerald.400',
              transition: 'border-color .2s ease-in-out',
              willChange: 'border-color',

              _hover: {
                borderColor: 'emerald.800',
              },
            })}
          />
        </Link>
        <Nav />
      </Container>
    </styled.header>
  )
}
