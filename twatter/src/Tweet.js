import React from 'react'
import heart from "./svg/heart.svg";
import './Css/Tweet.css'

export default function Tweet({ tweet, likeTweet }) {
  function handleTweetClick() {
    likeTweet(tweet.id)
  }  

  return (
    <div className="tweet">
      <div className="pfp-area">
        {tweet.profileImageData && <img className="user-profile" src={tweet.profileImageData} alt="Profile"/>}
      </div>
      <div className="main-area">
        <div className="userName-area">
          <b className='bold-userName'>{tweet.userName}</b> @{tweet.userName}123 · {tweet.date}
        </div>
        <div className="text-area">
          <textarea className="text" rows={tweet.rows} disabled={true} value={tweet.content}></textarea>
        </div>
        <div className="image-area">
          {tweet.imageData && <img className="user-image" src={tweet.imageData} alt="UserImage" />}
        </div>
        <div className="like-area">
          <div className="like-area-heart">
            <img className="like-area-heart-image" src={heart} alt="obrazek serduszka" />
            <input type="checkbox" checked={tweet.liked} onChange={handleTweetClick}/>
          </div>
        </div>
      </div>   
    </div>
  )
}