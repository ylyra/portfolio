import { styled } from '@/panda/jsx'
import { ComponentProps, ForwardRefRenderFunction, forwardRef } from 'react'
import { FormContainer } from './FormContainer'
import { FormError } from './FormError'
import { FormHint } from './FormHint'

const TextInputContainer = styled('div', {
  base: {
    backgroundColor: 'gray.800',
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    boxSizing: 'border-box',
    border: '1px solid token(colors.gray.700)',
    display: 'flex',
    alignItems: 'baseline',

    '&:has(input:focus)': {
      borderColor: 'emerald.500',
      boxShadow: '0 0 0 3px token(colors.emerald.200)',
    },

    '&:has(input[aria-invalid="true"])': {
      borderColor: 'red.500',
    },

    '&:has(input:invalid)': {},
  },
})

const Prefix = styled('span', {
  base: {
    fontSize: '0.75rem',
    color: 'gray.400',
    fontWeight: '400',
  },
})

const Input = styled('input', {
  base: {
    fontSize: '0.875rem',
    color: 'gray.50',
    fontWeight: '400',
    backgroundColor: 'transparent',
    border: 'none',
    width: '100%',

    '&:focus': {
      outline: 'none',
      boxShadow: 'none',
    },

    '&:disabled': {
      cursor: 'not-allowed',
    },

    '&::placeholder': {
      color: 'gray.400',
    },
  },
})

export type TextInputProps = ComponentProps<typeof Input> & {
  prefix?: string
  error?: string
  hint?: string
}

const TextInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  TextInputProps
> = ({ prefix, error, hint, ...props }, ref) => {
  return (
    <FormContainer>
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} aria-invalid={!!error} {...props} />
      </TextInputContainer>
      {error && <FormError>{error}</FormError>}
      {!error && hint && <FormHint>{hint}</FormHint>}
    </FormContainer>
  )
}

export const TextInput = forwardRef(TextInputBase)
TextInput.displayName = 'TextInput'
