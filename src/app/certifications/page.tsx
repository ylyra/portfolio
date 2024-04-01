import { styled } from '@/panda/jsx'

interface Certification {
  id: string
  name: string
  file: string
  language: 'pt' | 'en'
  certifier: string
  participation?: boolean
}

const certifications: Certification[] = [
  {
    id: '52f68508-c53e-4279-b7ba-f98cc745b280',
    name: 'Type Transformations',
    certifier: 'TotalTypescript',
    file: 'https://utfs.io/f/7aff08b2-a6cb-4e7f-b534-c19dea442c89-tsx7ux.png',
    language: 'en',
  },
  {
    id: '52f68508-c53e-4279-b7ba-f98cc745b280',
    name: 'ReactJS',
    certifier: 'Rocketseat',
    file: 'https://utfs.io/f/0f969f6a-a4a2-4252-8141-98fd8991f161-1sj3pb.pdf',
    language: 'en',
  },
  {
    id: '6a5820e3-4165-4846-8375-050cb135ca09',
    name: 'NodeJS',
    certifier: 'Rocketseat',
    file: 'https://utfs.io/f/119b7fe0-42f1-457f-8d97-868aea739747-h7agj9.pdf',
    language: 'en',
  },
  {
    id: '61f508ee-b9ce-4fe5-a152-f0c626e6a224',
    name: 'Accessibility with React',
    certifier: 'Rocketseat',
    file: 'https://utfs.io/f/0e238765-521d-44b9-a027-eb1e489ad187-mzm5cn.pdf',
    language: 'en',
  },
  {
    id: 'a513dd85-534a-4ebe-a480-810d6b4cb12e',
    name: 'Mastering Tailwind',
    certifier: 'Rocketseat',
    file: 'https://utfs.io/f/5471c321-74af-4dcd-a294-65d403e83284-3fxubf.pdf',
    language: 'en',
  },
  {
    id: 'f27d50a8-da6d-4cb6-af42-015df9204974',
    name: 'Desktop App With Electron',
    certifier: 'Rocketseat',
    file: 'https://utfs.io/f/d3b0ad76-30dd-49bd-926c-605ddb1e919f-ow9bzg.pdf',
    language: 'en',
  },
  {
    id: 'a1db6ae6-8c0c-41bb-933f-4efedb8571cd',
    name: 'Clean Code',
    certifier: 'Rocketseat',
    file: 'https://utfs.io/f/057c3042-453b-4a97-8989-8daf08bfc6d2-es9jwv.pdf',
    language: 'en',
  },
  {
    id: 'b27d2ccd-5ee0-47fb-9ff9-5f74d74a1e51',
    name: 'Figma for Devs',
    certifier: 'Rocketseat',
    file: 'https://utfs.io/f/9c613fdb-4658-4554-9cea-f246c9248569-2dgh07.pdf',
    language: 'en',
  },
  {
    id: 'b2f511ab-4e21-40c4-b6a8-0df1ef20faff',
    name: 'CTO Summit',
    certifier: 'Transformação Digital',
    file: 'https://utfs.io/f/dd9b28a7-dbad-4dfb-918f-680fbc4bfd4c-yklwd.png',
    language: 'pt',
    participation: true,
  },
]

const languages = {
  pt: 'Portuguese',
  en: 'English',
}

export default function Page() {
  return (
    <styled.main display="flex" flexDir="column" gap={64}>
      <styled.section>
        <styled.h2 fontSize="2rem" color="gray.50" fontWeight="bold">
          Certifications
        </styled.h2>

        <styled.ul
          mt={24}
          display="grid"
          lg={{
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
          gap={12}
        >
          {certifications.map((freela) => (
            <styled.li key={freela.id}>
              <styled.a
                href={freela.file}
                target="_blank"
                display="flex"
                rel="noopener noreferrer"
                color="gray.50"
                p="8"
                border="1px solid"
                borderColor="emerald.800"
                rounded="4"
                transition="all 0.2s ease-in-out"
                _hover={{
                  borderColor: 'emerald.500',
                }}
                alignItems="center"
                justifyContent="space-between"
                gap={8}
              >
                <styled.div>
                  <styled.p fontWeight="bold" color="gray.200">
                    {freela.name}
                  </styled.p>
                  <styled.p fontSize="14px" color="gray.400">
                    {freela.certifier}
                  </styled.p>
                </styled.div>

                <styled.p fontSize="14px" color="gray.400">
                  {languages[freela.language]}
                </styled.p>
              </styled.a>
            </styled.li>
          ))}
        </styled.ul>
      </styled.section>
    </styled.main>
  )
}
