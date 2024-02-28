import { codeToHtml } from 'shiki'
import { CodePreview } from '../CodePreview'

interface GistContentProps {
  gistUrl: string
}

export async function GistContent({ gistUrl }: GistContentProps) {
  const settingsResponse = await fetch(gistUrl)
  const settings = await settingsResponse.text()

  const code = await codeToHtml(settings, {
    lang: 'json',
    theme: 'ayu-dark',
  })

  return <CodePreview code={code} raw={settings} />
}
