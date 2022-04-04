import type { NextApiRequest, NextApiResponse } from "next";

import allWorks from "../../lib/allWorks.json";

export default async function Contact(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");

  res.json(allWorks);
}
