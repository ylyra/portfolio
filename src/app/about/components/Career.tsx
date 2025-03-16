import { styled } from '@/panda/jsx'

const jobs = [
  {
    id: '574b48e0-efe6-4ef1-9c2b-7e448c9a9a2c',
    title: 'Sr. FullStack Developer',
    company: 'Foozi',
    companyUrl: 'https://foozi.com.br',
    location: 'Home Office',
    startDate: 'Dec. 2024',
    endDate: 'Present',
  },
  {
    id: 'a4d64e7e-ace5-4a91-aaae-1fe7ad3fb317',
    title: 'Sr. FullStack Developer',
    company: 'Growth',
    companyUrl: 'https://growth.sale',
    location: 'Hybrid',
    startDate: 'Jul. 2022',
    endDate: 'Dec. 2024',
  },
  {
    id: '9a3aedac-43ee-4a22-8232-cb620b68f4fe',
    title: 'Mid-level FullStack Developer',
    company: 'Coopers',
    companyUrl: 'https://coopers.pro',
    location: 'Remote',
    startDate: 'Jun. 2021',
    endDate: 'Jul. 2022',
  },
  {
    id: '68bed570-763c-4579-ac15-50bafa15a275',
    title: 'FullStack Developer',
    company: 'Freelance',
    companyUrl: '',
    location: 'Remote',
    startDate: 'Jan. 2019',
    endDate: 'Jun. 2021',
  },
]

export const Career = () => {
  return (
    <styled.section>
      <styled.h2 fontSize="2rem" color="gray.50" fontWeight="bold">
        Career
      </styled.h2>

      <styled.ul mt={24} display="flex" flexDir="column" gap={32}>
        {jobs.map((job) => (
          <styled.li key={job.id}>
            <styled.a
              href={job.companyUrl}
              target="_blank"
              display="block"
              rel="noopener noreferrer"
              fontSize="1.1rem"
              fontWeight="bold"
              color="emerald.400"
              transition="color 0.2s ease-in-out"
              _hover={{ color: 'emerald.500' }}
            >
              {job.company}
            </styled.a>
            <styled.p fontSize="0.875rem" color="gray.400">
              {job.title} • {job.location}
            </styled.p>
            <styled.p fontSize="0.875rem" color="gray.400">
              {job.startDate} • {job.endDate}
            </styled.p>
          </styled.li>
        ))}
      </styled.ul>
    </styled.section>
  )
}
