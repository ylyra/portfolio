import { GistContent } from '@/components/GistContent'
import { styled } from '@/panda/jsx'
import { Suspense } from 'react'
import { Extensions } from './components/Extensions'

export default function Configs() {
  return (
    <styled.main display="flex" flexDir="column" gap={64}>
      <styled.section display="flex" flexDir="column" gap={32}>
        <styled.h2 fontSize="2rem" color="gray.100" mb={12} fontWeight="bold">
          Dev Environment
        </styled.h2>

        <Extensions />

        <styled.section>
          <styled.h3
            fontSize="1.5rem"
            color="gray.300"
            mb={12}
            fontWeight="bold"
          >
            VSCode Settings
          </styled.h3>
          <Suspense fallback={<styled.p color="gray.500">Loading...</styled.p>}>
            <GistContent gistUrl="https://gist.githubusercontent.com/ylyra/c1646b07a1183fa8de7902c9d306d6d9/raw/20cafa501329f1bf5be06757d7cc0a1341a3f872/settings.json" />
          </Suspense>
        </styled.section>
      </styled.section>
    </styled.main>
  )
}
