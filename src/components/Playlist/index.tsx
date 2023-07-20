import { styled } from '@/panda/jsx'

export const Playlist = () => {
  return (
    <styled.section mt="2rem" width="100%">
      <styled.h2 fontWeight="700" fontSize={'1rem'} px="0.5rem" mb="0.75rem">
        Songs I can&apos;t stop listening to
      </styled.h2>

      <iframe
        src="https://open.spotify.com/embed/playlist/7myJpCbfX71JZiDQembjiz?utm_source=generator&theme=0"
        width="100%"
        height="352"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </styled.section>
  )
}
