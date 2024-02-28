import { styled } from '@/panda/jsx'

const freelas = [
  {
    name: 'Diocese of Campina Grande',
    description:
      'I was responsible for the development of the website of the Diocese of Campina Grande, the website was developed using the Next.js framework and the content is managed by the simple admin panel created with PHP and MVC architecture.',
    url: 'https://diocesecg.org/',
    languages: [
      'PHP',
      'Next.js',
      'MySQL',
      'TailwindCSS',
      'TypeScript',
      'MVC',
      'Git',
      'GitHub',
    ],
  },
  {
    name: 'Parish Nossa Senhora do Rosário',
    description:
      'I was responsible for the development of the website of the Parish Nossa Senhora do Rosário, the website was developed using the PHP and MVC architecture.',
    url: 'https://www.rosario.org.br',
    languages: ['PHP', 'MySQL', 'Bootstrap', 'MVC', 'Git', 'GitHub', 'JQuery'],
  },
]

const contributions = [
  {
    type: 'open-source',
    name: 'axios/axios-docs',
    description:
      'Help the axios docs by translating it to pt-br, check all my contributions clicking in the name of the repo.',
    url: 'https://github.com/axios/axios-docs/pulls?q=is%3Apr+is%3Aclosed+author%3Aylyra',
  },
]

export default function Projects() {
  return (
    <styled.main display="flex" flexDir="column" gap={64}>
      <styled.section>
        <styled.h2 fontSize="2rem" color="gray.50" fontWeight="bold">
          Freelance
        </styled.h2>

        <styled.ul mt={24} display="flex" flexDir="column" gap={32}>
          {freelas.map((freela) => (
            <styled.li key={freela.url}>
              <styled.a
                href={freela.url}
                target="_blank"
                display="block"
                rel="noopener noreferrer"
                fontSize="1.1rem"
                fontWeight="bold"
                color="emerald.400"
                transition="color 0.2s ease-in-out"
                _hover={{ color: 'emerald.500' }}
              >
                {freela.name}
              </styled.a>
              <styled.p fontSize="0.875rem" color="gray.400">
                {freela.description}
              </styled.p>
              <styled.p fontSize="0.75rem" color="gray.500">
                <styled.strong fontSize="0.75rem" color="gray.500">
                  Languages/Technologies used:
                </styled.strong>{' '}
                {freela.languages.join(', ')}
              </styled.p>
            </styled.li>
          ))}
        </styled.ul>

        <styled.small
          mt="1rem"
          color="gray.300"
          fontSize="0.875rem"
          display="block"
          textAlign="center"
        >
          You can see more of my projects on my{' '}
          <styled.a
            fontSize="0.875rem"
            href="https://github.com/ylyra"
            target="_blank"
            rel="noopener noreferrer"
            color="emerald.400"
            transition="color 0.2s ease-in-out"
            _hover={{ color: 'emerald.500' }}
          >
            GitHub
          </styled.a>
          .
        </styled.small>
      </styled.section>

      <styled.section>
        <styled.h2 fontSize="2rem" color="gray.50" fontWeight="bold">
          Contributions
        </styled.h2>

        <styled.ul mt={24} display="flex" flexDir="column" gap={32}>
          {contributions.map((freela) => (
            <styled.li key={freela.url}>
              <styled.a
                href={freela.url}
                target="_blank"
                display="block"
                rel="noopener noreferrer"
                fontSize="1.1rem"
                fontWeight="bold"
                color="emerald.400"
                transition="color 0.2s ease-in-out"
                _hover={{ color: 'emerald.500' }}
              >
                {freela.name}
              </styled.a>
              <styled.p fontSize="0.875rem" color="gray.400">
                {freela.description}
              </styled.p>
            </styled.li>
          ))}
        </styled.ul>

        <styled.small
          mt="1rem"
          color="gray.300"
          fontSize="0.875rem"
          display="block"
          textAlign="center"
        >
          Still triying to contribute more to the open-source community.
        </styled.small>
      </styled.section>
    </styled.main>
  )
}
