// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Tweet } from '../../typings'
import { sanityClient } from '../../sanity'
import { groq } from 'next-sanity'

const feedQuery = groq`*[_type == 'tweet' && !blockTweet]{id,...} | order(_createdAt desc)`
type Data = {
    tweet: Tweet[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const tweet: Tweet[] = await sanityClient.fetch(feedQuery)
    res.status(200).json({ tweet })
}
