import { styled } from '@/panda/jsx'
import { scrollable } from '@/panda/patterns'
import { StyledItem } from '../StyledItem'

interface PlaylistItemThumb {
  url: string
  width: number
  height: number
}

interface PlaylistItem {
  id: string
  snippet: {
    title: string
    description: string
    thumbnails: {
      default: PlaylistItemThumb
      medium: PlaylistItemThumb
      high: PlaylistItemThumb
      standard: PlaylistItemThumb
    }
    channelTitle: string
    videoOwnerChannelTitle: string
  }
  contentDetails: {
    videoId: string
    videoPublishedAt: string
  }
}

const getVideos = async () => {
  const params = new URLSearchParams({
    part: ['id', 'snippet', 'contentDetails'],
    playlistId: process.env.GOOGLE_YOUTUBE_PLAYLIST_ID,
    maxResults: 50,
    key: process.env.GOOGLE_API_KEY,
  } as any).toString()
  const URL = 'https://youtube.googleapis.com/youtube/v3/playlistItems'

  const response = await fetch(`${URL}?${params}`).then((res) => res.json())

  return response.items as PlaylistItem[]
}

export const Playlist = async () => {
  const items = await getVideos()

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
        width="100%"
      >
        {items.map((item) => (
          <StyledItem
            key={item.id}
            description={item.snippet.videoOwnerChannelTitle}
            id={item.id}
            image={{
              url: item.snippet.thumbnails.default.url,
              width: item.snippet.thumbnails.default.width,
              height: item.snippet.thumbnails.default.height,
            }}
            title={item.snippet.title}
            url={`https://www.youtube.com/watch?v=${item.contentDetails.videoId}`}
            withNextImage
          />
        ))}

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
