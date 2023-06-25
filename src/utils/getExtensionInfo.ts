import { JSDOM } from 'jsdom'

export const getExtensionInfo = async (extension: string) => {
  try {
    const response = await fetch(
      `https://marketplace.visualstudio.com/items?itemName=${extension}`,
      {
        next: {
          revalidate: 60 * 60 * 24 * 7, // 1 week
        },
      },
    ).then((response) => response.text())

    const dom = new JSDOM(response)
    const document = dom.window.document

    const installs = document.querySelector(
      '.item-header .installs-text',
    )?.textContent
    const title = document.querySelector(
      '#section-banner .item-header .ux-item-name',
    )?.textContent
    const publisher = document.querySelector<HTMLAnchorElement>(
      '#section-banner .item-header .ux-item-publisher a',
    )
    const image = document.querySelector<HTMLImageElement>(
      '#section-banner .image-display',
    )?.src

    if (installs && title && publisher && image) {
      return {
        installs: installs.trim().replace('installs', '').trim(),
        title,
        publisher: publisher.textContent,
        publisherLink: `https://marketplace.visualstudio.com/${publisher.href}`,
        image,
      }
    } else {
      return null
    }
  } catch (error) {
    return null
  }
}
