import { Comment } from "../typings";

export const fetchComments = async (tweetId: string) => {
    const NEXT_BASE_URL = 'http://localhost:3000'

    const res = await fetch(`/api/getComments?tweetId=${tweetId}`)
    const comments: Comment[] = await res.json()
    return comments;
}