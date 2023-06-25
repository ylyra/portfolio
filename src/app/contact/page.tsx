'use client'

import { TextInput } from '@/components/form/Input'
import { TextArea } from '@/components/form/TextArea'
import { styled } from '@/panda/jsx'
import { sendEmail } from '@/utils/send-email'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { z } from 'zod'

const schema = z.object({
  name: z
    .string({
      invalid_type_error: "Name can't be empty",
      required_error: "Name can't be empty",
    })
    .min(2, 'Name must be at least 2 characters long')
    .max(64, "Name can't be longer than 64 characters"),
  email: z
    .string({
      invalid_type_error: "Email can't be empty",
      required_error: "Email can't be empty",
    })
    .email('Invalid email address'),
  message: z
    .string({
      invalid_type_error: "Message can't be empty",
      required_error: "Message can't be empty",
    })
    .min(2, 'Message must be at least 2 characters long')
    .max(1024, "Message can't be longer than 1024 characters"),
})

type Form = z.infer<typeof schema>

export default function Contact() {
  const { formState, handleSubmit, register } = useForm<Form>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      name: '',
      message: '',
    },
  })

  const onFormSubmit = useCallback<SubmitHandler<Form>>(async (data) => {
    await toast.promise(sendEmail(data), {
      error: 'Something went wrong',
      loading: 'Sending...',
      success: 'Message sent!',
    })
  }, [])

  return (
    <styled.main display="flex" flexDir="column" gap={24} mt="2.75rem">
      <styled.p>
        I&apos;ll be happy to hear from you! If you have any questions,
        suggestions, or just want to say hi, feel free to contact me. I&apos;ll
        try to get back to you as soon as possible. You can also find me on{' '}
        <styled.a
          href="https://www.linkedin.com/in/ylyra/"
          target="_blank"
          rel="noopener noreferrer"
          color="emerald.400"
          fontWeight="bold"
          _hover={{
            color: 'emerald.500',
          }}
        >
          LinkedIn
        </styled.a>
      </styled.p>

      <styled.form
        display="flex"
        flexDir="column"
        gap="1.5rem"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <TextInput
          placeholder="Type your name"
          error={formState.errors.name?.message}
          hint='e.g. "John Doe"'
          {...register('name')}
        />
        <TextInput
          placeholder="Type your email"
          error={formState.errors.email?.message}
          hint='e.g. "john@doe.com'
          {...register('email')}
        />
        <TextArea
          placeholder="Type your message"
          error={formState.errors.message?.message}
          hint='e.g. "Hello, world!"'
          {...register('message')}
        />

        <styled.button
          w="100%"
          px="0.75rem"
          py="1rem"
          bg="emerald.600"
          color="gray.900"
          borderRadius="0.5rem"
          _focus={{
            '&:not(&:disabled)': {
              bg: 'emerald.700',
            },
          }}
          _hover={{
            '&:not(&:disabled)': {
              bg: 'emerald.700',
            },
          }}
          _disabled={{
            bg: 'emerald.800',
            cursor: 'not-allowed',
          }}
          disabled={formState.isSubmitting}
        >
          send
        </styled.button>
      </styled.form>
    </styled.main>
  )
}
