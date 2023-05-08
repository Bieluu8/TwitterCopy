import React from 'react'
import Tweet from './Tweet'

export default function Feed({ main, tweets, likeTweet }) {
  return (
    tweets.map(tweet => {
        if(main) return <Tweet key={tweet.id} likeTweet={likeTweet} tweet={tweet} />
        if(tweet.userName === localStorage.getItem('userName')) return <Tweet key={tweet.id} likeTweet={likeTweet} tweet={tweet} />
    })
  )
}
