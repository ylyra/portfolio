import { styled } from '@/panda/jsx'

export const About = () => {
  return (
    <styled.section>
      <styled.h2 fontSize="2rem" color="gray.50" fontWeight="bold">
        About
      </styled.h2>

      <styled.p fontSize="1.25rem" color="gray.100" mt={16}>
        Hello, my name is Yan and I am a web developer, and in the future.
        Currently, I work with technologies such as JavaScript (TypeScript,
        NodeJS, Electron, React, and React-Native), as well as the good old PHP
        and MySQL.
      </styled.p>
    </styled.section>
  )
}
