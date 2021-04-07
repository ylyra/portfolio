import type { NextApiRequest, NextApiResponse } from 'next'

import api from '../../services/api'

export default async function Contact(req: NextApiRequest, res: NextApiResponse) {
  const { data } = await api.get('https://yanlyraportfolio.000webhostapp.com/ajax/trabalhos');

  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate')

  res.json(data)
}