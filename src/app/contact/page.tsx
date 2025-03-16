'use client'

import { styled } from '@/panda/jsx'

export default function Contact() {
  return (
    <styled.main display="flex" flexDir="column" gap={24} mt="2.75rem">
      <styled.p>
        I&apos;ll be happy to hear from you! If you have any questions,
        suggestions, or just want to say hi, feel free to contact me. I&apos;ll
        try to get back to you as soon as possible.
        <styled.a
          href="https://www.linkedin.com/in/ylyra/"
          target="_blank"
          rel="noopener noreferrer"
          color="emerald.400"
          fontWeight="bold"
          _hover={{
            color: 'emerald.500',
          }}
        >
          LinkedIn
        </styled.a>
      </styled.p>
    </styled.main>
  )
}
