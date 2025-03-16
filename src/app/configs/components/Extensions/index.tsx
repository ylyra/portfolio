import { ShimmerItem } from '@/components/StyledItem/Shimmer'
import { styled } from '@/panda/jsx'
import { extensions } from '@/utils/extentions'
import { Suspense } from 'react'
import { Extension } from './Extension'

export const Extensions = async () => {
  return (
    <styled.section>
      <styled.h3 fontSize="1.5rem" color="gray.300" mb={12} fontWeight="bold">
        VSCode Extensions
      </styled.h3>

      <styled.ul
        display="grid"
        gap="0.75rem"
        gridTemplateColumns="repeat(2, minmax(0, 1fr))"
      >
        {extensions.map((e) => (
          <Suspense key={e.identifier.uuid} fallback={<ShimmerItem />}>
            <Extension extension={e.identifier.id} />
          </Suspense>
        ))}
      </styled.ul>
    </styled.section>
  )
}
