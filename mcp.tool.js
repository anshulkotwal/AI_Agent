import dotenv from 'dotenv';
dotenv.config();

import { TwitterApi } from "twitter-api-v2"


const twitterClient = new TwitterApi({
    appKey: process.env.TWITTERTWITTER_API_KEYR_API_KEY,
    appSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

export async function createPost(status) {
    const newPost = await twitterClient.v2.tweet(status)

    return {
        content: [
            {
                type: "text",
                text: `Tweeted: ${status}`
            }
        ]
    }
}