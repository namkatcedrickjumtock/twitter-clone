// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Tweet } from '../../typings'
import { sanityClient } from '../../sanity'
import { groq } from 'next-sanity'

const feedQuery = groq`
*[_type="tweet" && !blockTweet]{
    _id,
    ...
} | order(_createdAt desc)
`

type Data = {
    tweet: Tweet[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ tweet: [] })
}
