import type { NextApiRequest, NextApiResponse } from 'next'
import supabase from 'utils/supabaseClient'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req

  const { data, error } = await supabase
    .from('guests')
    .select()
    .eq('slug', query.slug)

  if (error) {
    res.status(401)
  }

  res.status(200).json(data)
}

export default handler
