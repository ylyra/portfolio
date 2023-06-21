'use client'

import { css } from '@/panda/css'
import { Command } from 'cmdk'
import { useEffect, useState } from 'react'

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const dialog = css({
  position: 'fixed',
  top: '96px',
  left: '50%',
  transform: 'translateX(-50%)',
  maxW: 640,
  w: '100%',
  bg: '#1c1c1c',
  borderRadius: 8,
  // backdropFilter: 'blur(8px)',

  '& [cmdk-group-heading]': {
    color: '#a0a0a0',
    fontSize: '0.75rem',
    padding: '0 0.5rem',
    display: 'flex',
    alignItems: 'center',
  },
})

const input = css({
  all: 'unset',
  fontSize: '0.875rem',
  color: '#a0a0a0',
  py: 12,
})

const list = css({
  maxH: 208,
  overflow: 'auto',
  overscrollBehavior: 'contain',
  scrollPaddingBlockEnd: 40,
  transition: '0.1s ease',
  transitionProperty: 'height',
  padding: '0 0.5rem 2.5rem',
})

const group = css({
  '& + &': {
    mt: 8,
  },
})

const empty = css({
  fontSize: '0.875rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 68,
  whiteSpace: 'pre-wrap',
  color: '#a0a0a0',
})

const item = css({
  cursor: 'pointer',
  contentVisibility: 'auto',
  height: 40,
  borderRadius: 8,
  fontSize: '0.875rem',
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  padding: '0 0.5rem',
  userSelect: 'none',
  willChange: 'background-color',
  transition: 'all .15s ease-in-out',
  transitionProperty: 'none',

  '&[data-selected=true]': {
    bg: '#282828',
    color: '#ededed',
  },

  '&:nth-child(1)': {
    mt: 8,
  },

  '& + &': {
    mt: 4,
  },
})

const searchContainer = css({
  borderBottom: '1px solid #FFFFFF1A',
  padding: '0 1rem',
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  position: 'relative',
  flexShrink: 0,
  mb: 12,
})

const searchAnimation = css({
  backgroundImage:
    'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0))',
  width: 200,
  height: 1,
  position: 'absolute',
  top: '100%',
  animation: 'slide 2s ease-in-out infinite',
})

export function CommandBar({ onOpenChange, open }: Props) {
  const [loading] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && e.metaKey) || (e.key === 'k' && e.ctrlKey)) {
        e.preventDefault()
        onOpenChange(true)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Command.Dialog className={dialog} open={open} onOpenChange={onOpenChange}>
      <div className={searchContainer}>
        <Command.Input placeholder="Search…" className={input} />

        {loading && <div className={searchAnimation} />}
      </div>

      <Command.List className={list}>
        <Command.Empty className={empty}>No results found.</Command.Empty>

        <Command.Group className={group} heading="Fruits">
          <Command.Item className={item}>Apple</Command.Item>
          <Command.Item className={item}>Orange</Command.Item>
          <Command.Item className={item}>Pear</Command.Item>
          <Command.Item className={item}>Blueberry</Command.Item>
        </Command.Group>

        <Command.Group className={group} heading="Fishes">
          <Command.Item className={item}>Fish</Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  )
}
