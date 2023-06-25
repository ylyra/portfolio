import { StyledItem } from '@/components/StyledItem'
import { getExtensionInfo } from '@/utils/getExtensionInfo'
import { cache } from 'react'

const getFn = cache(async (extension: string) => {
  const res = await getExtensionInfo(extension)

  return res
})

export const Extension = async ({ extension }: { extension: string }) => {
  const data = await getFn(extension)

  if (data === null) return null

  const fullDescription = `${data.publisher ? data.publisher + ' ' : ''}(${
    data.installs
  } installs)`

  return (
    <StyledItem
      description={fullDescription}
      id={extension}
      image={{
        url: data.image,
        height: 90.5,
        width: 120,
      }}
      title={data.title}
      url={data.publisherLink}
    />
  )
}
