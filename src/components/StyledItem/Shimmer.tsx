import { styled } from '@/panda/jsx'
import { ShimmerEffect } from '../ShimmerEffect'

export const ShimmerItem = () => {
  return (
    <styled.li
      display="flex"
      gap="0.5rem"
      bg="#1c1c1c"
      px="0.5rem"
      borderRadius="0.5rem"
      border="1px solid #FFFFFF1A"
      _hover={{
        '& span:first-child': {
          color: 'emerald.400',
        },
      }}
      py="0.75rem"
    >
      <ShimmerEffect
        style={{
          width: 120,
          height: 90.5,
        }}
        borderRadius="0.5rem"
        border="1px solid #FFFFFF1A"
        overflow="hidden"
      />

      <styled.a
        target="_blank"
        rel="noopener noreferrer"
        href="#"
        display="flex"
        flexDir="column"
        justifyContent="center"
        gap="0.25rem"
        flex="1"
      >
        <ShimmerEffect
          style={{
            height: 24,
          }}
        />
        <ShimmerEffect
          style={{
            height: 20,
          }}
        />
      </styled.a>
    </styled.li>
  )
}
