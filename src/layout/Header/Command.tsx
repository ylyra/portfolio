'use client'

import { css } from '@/panda/css'
import { DialogTitle } from '@radix-ui/react-dialog'
import { Command } from 'cmdk'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

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
  bg: '#09090b',
  borderRadius: 8,
  border: '1px solid #FFFFFF1A',
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
  maxH: 300,
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
  willChange: 'background',
  transition: 'all .3s ease-in-out',
  bg: 'transparent',

  '&[data-selected=true]': {
    bg: '#18181b',
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

const kbdContainer = css({
  ml: 'auto',
  display: 'flex',
  alignItems: 'center',
  gap: 4,

  '& kbd': {
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    bg: '#18181b',
    color: '#a0a0a0',
    borderRadius: 4,
    width: 24,
    height: 24,
    fontSize: '0.75rem',
  },
})

const title = css({
  srOnly: true,
})

export function CommandBar({ onOpenChange, open }: Props) {
  const [loading] = useState(false)
  const router = useRouter()

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    toast.success('Link copied to clipboard! You can now paste it anywhere.', {
      style: {
        background: '#18181b',
        color: '#fff',
        fontSize: '0.75rem',
      },
      duration: 300000,
      className: 'toast',
    })
  }

  const handleChangePage = (page: string) => {
    try {
      router.push(page)

      onOpenChange(false)
    } catch (error) {
      console.log(error)
    }
  }

  const options = [
    {
      group: 'General',
      items: [
        {
          label: 'Copy Link',
          value: 'Copy Link',
          onSelect: handleCopyLink,
          shortcut: 'C',
          ariaLabel: 'Copy Link',
        },
        {
          label: 'Send Email',
          value: 'Send Email',
          onSelect: () => handleChangePage('/contact'),
          shortcut: 'E',
          ariaLabel: 'Contact Me via Email',
        },
      ],
    },
    {
      group: 'Go To',
      items: [
        {
          label: 'Home',
          value: 'Home',
          onSelect: () => handleChangePage('/'),
          shortcut: 'GH',
          ariaLabel: 'Go to Home Page',
        },
        {
          label: 'About',
          value: 'About',
          onSelect: () => handleChangePage('/about'),
          shortcut: 'GA',
          ariaLabel: 'Go to About Page',
        },
        {
          label: 'Projects',
          value: 'Projects',
          onSelect: () => handleChangePage('/projects'),
          shortcut: 'GP',
          ariaLabel: 'Go to Projects Page',
        },
        {
          label: 'Configs',
          value: 'Configs',
          onSelect: () => handleChangePage('/configs'),
          shortcut: 'GU',
          ariaLabel: 'Go see what I use',
        },
      ],
    },
  ]

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && e.metaKey) || (e.key === 'k' && e.ctrlKey)) {
        e.preventDefault()
        onOpenChange(true)
      }
    }

    const onExternalPress = () => {
      console.log('external')
      onOpenChange(!open)
    }

    window.addEventListener('keydown', down)
    window.addEventListener('cmdk:external', onExternalPress)

    return () => {
      window.removeEventListener('keydown', down)
      window.removeEventListener('cmdk:external', onExternalPress)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Command.Dialog className={dialog} open={open} onOpenChange={onOpenChange}>
      <DialogTitle className={title}>Menu</DialogTitle>
      <div className={searchContainer}>
        <Command.Input
          placeholder="Type your search here..."
          className={input}
        />

        {loading && <div className={searchAnimation} />}
      </div>

      <Command.List className={list}>
        <Command.Empty className={empty}>No results found.</Command.Empty>

        {options.map((groupProps) => (
          <Command.Group
            key={groupProps.group}
            className={group}
            heading={groupProps.group.toUpperCase()}
          >
            {groupProps.items.map((gItem) => (
              <Command.Item
                key={gItem.value}
                className={item}
                onSelect={gItem.onSelect}
                aria-label={gItem.ariaLabel}
              >
                {gItem.label}

                {gItem.shortcut && (
                  <div className={kbdContainer}>
                    {gItem.shortcut.split('').map((key) => (
                      <kbd key={key}>{key}</kbd>
                    ))}
                  </div>
                )}
              </Command.Item>
            ))}
          </Command.Group>
        ))}
      </Command.List>
    </Command.Dialog>
  )
}
