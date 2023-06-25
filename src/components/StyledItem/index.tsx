import { css } from '@/panda/css'
import { styled } from '@/panda/jsx'
import Image from 'next/image'

interface Props {
  id: string | number
  image: {
    url: string
    width: number
    height: number
  }
  title: string
  description: string
  url: string
  withNextImage?: boolean
}

export const StyledItem = ({
  image,
  title,
  url,
  description,
  withNextImage = false,
}: Props) => {
  const trimedTitle = title.length > 50 ? `${title.slice(0, 50)}...` : title

  return (
    <styled.li
      title={title}
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
      {withNextImage ? (
        <Image
          src={image.url}
          width={image.width}
          height={image.height}
          loading="lazy"
          alt={title}
          className={css({
            borderRadius: '0.5rem',
            border: '1px solid #FFFFFF1A',
            objectFit: 'cover',
            objectPosition: 'center',
          })}
        />
      ) : (
        <styled.div
          style={{
            width: image.width,
            height: image.height,
          }}
          bg="gray.900"
          borderRadius="0.5rem"
          border="1px solid #FFFFFF1A"
          overflow="hidden"
        >
          <styled.img
            src={image.url}
            style={{
              width: image.width,
              height: image.height,
            }}
            borderRadius="0.5rem"
            border="1px solid #FFFFFF1A"
            objectFit="cover"
            objectPosition="center"
          />
        </styled.div>
      )}
      <styled.a
        target="_blank"
        rel="noopener noreferrer"
        href={url}
        display="flex"
        flexDir="column"
        justifyContent="center"
        gap="0.25rem"
        flex="1"
      >
        <styled.span
          fontSize="0.875rem"
          color="gray.400"
          transitionProperty="colors"
          transitionDuration="0.2s"
          transitionTimingFunction="ease-in-out"
        >
          {trimedTitle}
        </styled.span>
        <styled.span fontSize="0.75rem" color="gray.500">
          {description}
        </styled.span>
      </styled.a>
    </styled.li>
  )
}
