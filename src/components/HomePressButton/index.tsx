'use client'

import { styled } from '@/panda/jsx'
import { useEffect, useState } from 'react'

const Button = styled('button', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    color: 'gray.400',
    p: '0.5rem',
    borderRadius: '0.5rem',
    transition: 'background-color 0.2s ease-in-out',
    willChange: 'background-color',
    fontSize: '0.875rem',
    mt: '1rem',
    position: 'relative',

    '& kbd': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',

      color: 'gray.500',
      bg: 'gray.800',
      borderRadius: '0.25rem',
      p: '0.25rem 0.5rem',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      transition: 'background-color, color 0.2s ease-in-out',
      willChange: 'background-color,',
    },

    _hover: {
      bg: 'gray.800',

      '& kbd': {
        bg: 'gray.900',
        color: 'gray.400',
      },
    },
  },
})

export const HomePressButton = () => {
  const [deviceType, setDeviceType] = useState('')

  useEffect(() => {
    const isMac = /(Mac)/i.test(navigator.userAgent)
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator?.userAgent,
      )

    if (isMac) {
      setDeviceType('mac')
    }

    if (isMobile) {
      setDeviceType('mobile')
    }
  }, [])

  const openOnPress = () => {
    const customEvent = new CustomEvent('cmdk:external')

    window.dispatchEvent(customEvent)
  }

  if (deviceType === 'mobile') {
    return <Button onClick={openOnPress}>Press me to start</Button>
  }

  if (deviceType === 'mac') {
    return (
      <Button onClick={openOnPress}>
        Press <kbd>⌘</kbd> <kbd>K</kbd> to start
      </Button>
    )
  }

  return (
    <Button onClick={openOnPress}>
      Press <kbd>ctrl</kbd> <kbd>K</kbd> to start
    </Button>
  )
}
