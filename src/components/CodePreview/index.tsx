'use client'

import { Fira_Code } from 'next/font/google'
import { useState } from 'react'

import { css } from '@/panda/css'
import { CheckCircle2 as CheckIcon, Copy as CopyIcon } from 'lucide-react'
import { toast } from 'react-hot-toast'

const firaCode = Fira_Code({ subsets: ['latin'] })

interface CodePreviewProps {
  code: string
  raw?: string
}

export function CodePreview({ code, raw }: CodePreviewProps) {
  const [hasCopiedToClipboard, setCopiedToClipboard] = useState(false)

  const handleCopyToClipboard = () => {
    if (!raw) return
    navigator.clipboard.writeText(raw)
    setCopiedToClipboard(true)
    setTimeout(() => setCopiedToClipboard(false), 2000)

    toast.success('Copied to clipboard.', {
      style: {
        background: '#18181b',
        color: '#fff',
        fontSize: '0.75rem',
      },
      duration: 300000,
      className: 'toast',
    })
  }

  return (
    <div
      className={css({
        position: 'relative',

        '& #shiki-code': {
          maxHeight: 900,
          overflow: 'auto',
        },
      })}
    >
      {raw && (
        <button
          onClick={handleCopyToClipboard}
          data-copied={hasCopiedToClipboard}
          className={css({
            // "absolute flex items-center right-0 mx-8 gap-x-2 text-sm font-medium z-30 bg-[#2a273f] px-3 py-2 rounded-md text-[#E0DEF2] ring-2 ring-[#2b283b] data-[copied=true]:ring-emerald-600"
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            top: 8,
            right: 12,
            width: 48,
            height: 48,
            zIndex: 30,
            bg: 'gray.900',
            borderRadius: 8,
            color: 'gray.300',

            '&[data-copied=true]': {
              color: 'emerald.400',
            },
          })}
        >
          {hasCopiedToClipboard ? (
            <>
              <CheckIcon size={16} className="text-emerald-400" />
            </>
          ) : (
            <>
              <CopyIcon size={16} />
            </>
          )}
        </button>
      )}

      <div
        id="shiki-code"
        style={firaCode.style}
        dangerouslySetInnerHTML={{ __html: code }}
        className={css({
          overflow: 'auto',
        })}
      />
    </div>
  )
}
