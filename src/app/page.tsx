import { HomePressButton } from '@/components/HomePressButton'
import { styled } from '@/panda/jsx'

export default function Home() {
  return (
    <styled.main
      flex={1}
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      flexDir="column"
    >
      <section>
        <styled.h1 fontWeight="700" fontSize={'4rem'} px="0.5rem">
          Yan Lyra
        </styled.h1>
        <styled.p px="0.5rem">
          Senior Full-Stack at{' '}
          <styled.a
            color="emerald.400"
            transition="color 0.2s ease-in-out"
            _hover={{
              color: 'emerald.700',
            }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://foozi.com.br"
          >
            Foozi
          </styled.a>
        </styled.p>

        <styled.p px="0.5rem"></styled.p>

        <HomePressButton />
      </section>
    </styled.main>
  )
}
