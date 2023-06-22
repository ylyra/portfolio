import { defineConfig, defineGlobalStyles } from '@pandacss/dev'

const globalCss = defineGlobalStyles({
  'html, body': {
    background: 'gray.900',
    color: 'gray.300',
    '-webkit-font-smoothing': 'antialiased',
    fontSmoothing: 'antialiased',
    textRendering: 'optimizeLegibility',
  },

  button: {
    cursor: 'pointer',
  },

  'body, input, textarea, button': {
    fontFamily: 'var(--font-primary)',
    fontSize: '18px',
    fontWeight: '400',
  },

  input: {
    transition: 'all 0.25s',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },

  'input, textarea, button, select': {
    '&:focus': {
      outline: 'none',
      boxShadow: '0 0 0 3px rgba(147, 197, 253, 0.75)',
    },
  },

  '[cmdk-overlay]': {
    position: 'fixed',
    inset: '0',
    bg: 'rgba(0, 0, 0, 0.25)',
  },

  '::-webkit-scrollbar': {
    width: 4,
  },

  '::-webkit-scrollbar-thumb': {
    bg: '#FFFFFF1A',
    borderRadius: 4,
  },
})

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/layout/**/*.{ts,tsx,js,jsx}',
    './src/app/**/*.{ts,tsx,js,jsx}',
  ],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: 'styled-system',
  jsxFramework: 'react',

  globalCss,

  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%, 100%': {
            left: '-2%',
            transform: 'translateX(0)',
          },
          '50%': {
            left: '102%',
            transform: 'translateX(-100%)',
          },
        },
      },
    },
    tokens: {
      colors: {
        purple: {
          '50': { value: '#faf5ff' },
          '100': { value: '#f3e8ff' },
          '200': { value: '#e9d5ff' },
          '300': { value: '#d8b4fe' },
          '400': { value: '#c084fc' },
          '500': { value: '#a855f7' },
          '600': { value: '#9333ea' },
          '700': { value: '#7e22ce' },
          '800': { value: '#6b21a8' },
          '900': { value: '#581c87' },
        },
        violet: {
          '50': { value: '#f5f3ff' },
          '100': { value: '#ede9fe' },
          '200': { value: '#ddd6fe' },
          '300': { value: '#c4b5fd' },
          '400': { value: '#a78bfa' },
          '500': { value: '#8b5cf6' },
          '600': { value: '#7c3aed' },
          '700': { value: '#6d28d9' },
          '800': { value: '#5b21b6' },
          '900': { value: '#4c1d95' },
        },
        indigo: {
          '50': { value: '#eef2ff' },
          '100': { value: '#e0e7ff' },
          '200': { value: '#c7d2fe' },
          '300': { value: '#a5b4fc' },
          '400': { value: '#818cf8' },
          '500': { value: '#6366f1' },
          '600': { value: '#4f46e5' },
          '700': { value: '#4338ca' },
          '800': { value: '#3730a3' },
          '900': { value: '#312e81' },
        },
        teal: {
          '50': { value: '#f0fdfa' },
          '100': { value: '#ccfbf1' },
          '200': { value: '#99f6e4' },
          '300': { value: '#5eead4' },
          '400': { value: '#2dd4bf' },
          '500': { value: '#14b8a6' },
          '600': { value: '#0d9488' },
          '700': { value: '#0f766e' },
          '800': { value: '#115e59' },
          '900': { value: '#134e4a' },
        },
        emerald: {
          '50': { value: '#ecfdf5' },
          '100': { value: '#d1fae5' },
          '200': { value: '#a7f3d0' },
          '300': { value: '#6ee7b7' },
          '400': { value: '#34d399' },
          '500': { value: '#10b981' },
          '600': { value: '#059669' },
          '700': { value: '#047857' },
          '800': { value: '#065f46' },
          '900': { value: '#064e3b' },
        },
        green: {
          '50': { value: '#f0fdf4' },
          '100': { value: '#dcfce7' },
          '200': { value: '#bbf7d0' },
          '300': { value: '#86efac' },
          '400': { value: '#4ade80' },
          '500': { value: '#22c55e' },
          '600': { value: '#16a34a' },
          '700': { value: '#15803d' },
          '800': { value: '#166534' },
          '900': { value: '#14532d' },
        },
        yellow: {
          '50': { value: '#fefce8' },
          '100': { value: '#fef9c3' },
          '200': { value: '#fef08a' },
          '300': { value: '#fde047' },
          '400': { value: '#facc15' },
          '500': { value: '#eab308' },
          '600': { value: '#ca8a04' },
          '700': { value: '#a16207' },
          '800': { value: '#854d0e' },
          '900': { value: '#713f12' },
        },
        red: {
          '50': { value: '#fef2f2' },
          '100': { value: '#fee2e2' },
          '200': { value: '#fecaca' },
          '300': { value: '#fca5a5' },
          '400': { value: '#f87171' },
          '500': { value: '#ef4444' },
          '600': { value: '#dc2626' },
          '700': { value: '#b91c1c' },
          '800': { value: '#991b1b' },
          '900': { value: '#7f1d1d' },
        },
        gray: {
          '50': { value: '#fafafa' },
          '100': { value: '#f4f4f5' },
          '200': { value: '#e4e4e7' },
          '300': { value: '#d4d4d8' },
          '400': { value: '#a1a1aa' },
          '500': { value: '#71717a' },
          '600': { value: '#52525b' },
          '700': { value: '#3f3f46' },
          '800': { value: '#27272a' },
          '900': { value: '#18181b' },
        },
      },
    },
  },

  patterns: {
    extend: {
      scrollable: {
        description: 'A container that allows for scrolling',
        properties: {
          // The direction of the scroll
          direction: { type: 'enum', value: ['horizontal', 'vertical'] },
          // Whether to hide the scrollbar
          hideScrollbar: { type: 'boolean' },
        },
        // disallow the `overflow` property (in TypeScript)
        blocklist: ['overflow'],
        transform(props: any) {
          const { direction, hideScrollbar, ...rest } = props
          return {
            overflow: 'auto',
            height: direction === 'horizontal' ? '100%' : 'auto',
            width: direction === 'vertical' ? '100%' : 'auto',
            scrollbarWidth: hideScrollbar ? 'none' : 'auto',
            WebkitOverflowScrolling: 'touch',
            '&::-webkit-scrollbar': {
              display: hideScrollbar ? 'none' : 'auto',
            },
            ...rest,
          }
        },
      },
    },
  },
})
