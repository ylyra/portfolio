import { styled } from '@/panda/jsx'
import { scrollable } from '@/panda/patterns'
import { ShimmerItem } from '../StyledItem/Shimmer'

export const ShimmeredPlaylist = () => {
  return (
    <>
      <styled.h2 fontWeight="700" fontSize={'1rem'} px="0.5rem">
        Songs I can&apos;t stop listening to
      </styled.h2>

      <styled.ul
        className={scrollable({
          hideScrollbar: true,
        })}
        display="flex"
        flexDir="column"
        gap="0.75rem"
        px="0.5rem"
        mt="0.75rem"
        maxH={400}
      >
        <ShimmerItem />
        <ShimmerItem />
        <ShimmerItem />
        <ShimmerItem />
        <ShimmerItem />
        <ShimmerItem />
        <ShimmerItem />
        <ShimmerItem />
        <ShimmerItem />
        <ShimmerItem />
        <ShimmerItem />

        <styled.a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.youtube.com/playlist?list=${process.env.GOOGLE_YOUTUBE_PLAYLIST_ID}`}
          _hover={{
            '& span': {
              color: 'emerald.700',
            },
          }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="0.25rem"
          color="gray.400"
        >
          View more on{' '}
          <styled.span color="emerald.400" transition="color 0.2s ease-in-out">
            YouTube
          </styled.span>
        </styled.a>
      </styled.ul>
    </>
  )
}
