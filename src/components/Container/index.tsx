import { styled } from '@/panda/jsx'
import { JsxStyleProps } from '@/panda/types'
import { PropsWithChildren } from 'react'

export const Container = ({
  children,
  ...args
}: PropsWithChildren<JsxStyleProps>) => {
  return (
    <styled.div px={16} maxW={790} mx="auto" w="100%" {...args}>
      {children}
    </styled.div>
  )
}
