import { styled } from '@/panda/jsx'
import { About } from './components/About'
import { Career } from './components/Career'

export default function AboutPage() {
  return (
    <styled.main display="flex" flexDir="column" gap={64}>
      <About />
      <Career />
    </styled.main>
  )
}
