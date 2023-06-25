import { styled } from '@/panda/jsx'

export const ShimmerEffect = styled('span', {
  base: {
    display: 'block',
    position: 'relative',
    background: '#3a3a3a',
    backgroundImage:
      'linear-gradient(to right, #3a3a3a 0%, #3f3f3f 10%, #4a4a4a 20%, #3f3f3f 30%, #3a3a3a 50%, #3a3a3a 100%)',
    backgroundSize: '800px 200px',
    animationDuration: '1s',
    animationFillMode: 'forwards',
    animationIterationCount: 'infinite',
    animationName: 'shimmer',
    animationTimingFunction: 'ease-in-out',
  },
})
