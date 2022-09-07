import { Tweet } from "../typings"

export const fetchTweets = async () => {
    const NEXT_BASE_URL = 'http://localhost:3000'

    const res = await fetch(`${NEXT_BASE_URL}/api/getTweets`)
    const data = await res.json()
    const tweets: Tweet[] = data.tweet
    return tweets
}