'use client'

import { css, cva } from '@/panda/css'
import { styled } from '@/panda/jsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const items = ['About', 'Projects', 'Uses']

const navItem = cva({
  base: {
    display: 'block',
    padding: '0.5rem 0.75rem',
    position: 'relative',
    fontSize: '1rem',
    lineHeight: 1,
    color: 'gray.500',
    transition: 'color 0.2s ease-in-out',
    willChange: 'color',

    _hover: {
      color: 'gray.200',
    },
  },
  variants: {
    active: {
      true: {
        color: 'emerald.400',
      },
    },
  },
})

export const Nav = () => {
  const [currentHovered, setCurrentHovered] = useState('')
  const pathname = usePathname()

  return (
    <nav>
      <styled.ul display="flex" flexDir="row">
        {items.map((item) => (
          <li key={item.toLowerCase()}>
            <Link
              className={navItem({
                active: pathname === `/${item.toLowerCase()}`,
              })}
              href={`/${item.toLowerCase()}`}
              onMouseEnter={() => setCurrentHovered(item)}
              onMouseLeave={() => setCurrentHovered('')}
            >
              <span
                className={css({
                  zIndex: 2,
                  position: 'relative',
                })}
              >
                {item}
              </span>

              {currentHovered === item && (
                <motion.span
                  layoutId="navItemBg"
                  className={css({
                    position: 'absolute',
                    background: '#4a4a4a66',
                    inset: 0,
                  })}
                  style={{
                    borderRadius: 8,
                  }}
                />
              )}
            </Link>
          </li>
        ))}
      </styled.ul>
    </nav>
  )
}
