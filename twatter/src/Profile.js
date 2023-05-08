import React from "react";
import arrow from "./svg/arrow.svg";
import background from "./images/twitterbg.png";
import birthday from "./svg/birthday.svg";
import calendar from "./svg/calendar.svg";
import avatar from "./images/avatar.png";
import "./Css/Profile.css";
import Feed from "./Feed";
import { useState, useEffect, useRef } from "react";

const LOCAL_STORAGE_KEY = 'tweetApp.tweets'

function Profile() {
  const [tweets, setTweets] = useState([])
  const profileChangerRef = useRef()
  const userNameChangerRef = useRef()
  const [imageData, setImageData] = useState('');

  useEffect(() => {
    const storedImageData = localStorage.getItem('profileImage');
    if (storedImageData) {
      setImageData(storedImageData);
    }
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    if (!file.type.match(/image\/(png|jpeg|jpg)/)) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageData(e.target.result);
    };
    reader.readAsDataURL(file);
    localStorage.setItem('profileImage', imageData);
  };

  const handleSubmit = (event) => {
    if(imageData !== '') localStorage.setItem('profileImage', imageData);
    if(userNameChangerRef.current.value) localStorage.setItem('userName', userNameChangerRef.current.value);
  };

  useEffect(() => {
    const storedTweets = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTweets) setTweets(storedTweets)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tweets))
  }, [tweets])

  function likeTweet(id){
    const newTweets = [...tweets]
    const tweet = newTweets.find(tweet => tweet.id === id)
    tweet.liked = !tweet.liked
    setTweets(newTweets)
  }

  return (
    <div className="feed">
      <div className="feed-header-box">
        <div className="feed-header-image">
          <img class="feed-header-arrow" src={arrow} alt="Strzalka" />
        </div>
        <div class="feed-header-text-info">
          <span class="feed-header-text">{localStorage.getItem('userName')}</span>
          <span class="feed-header-counter">{tweets.filter(tweet => tweet.userName === localStorage.getItem('userName')).length} Tweet(ów)</span>
        </div>
      </div>

        <div class="feed-profile">
          <div class="feed-profile-image">
            <img class="feed-profile-image-bg" src={background} alt="zdjecie w tle" />
          </div>
          <div class="feed-profile-box-main">
            <div class="feed-profile-box">
              <div class="feed-profile-edit">
                <div class="feed-profile-pp-box">
                  <img  class="feed-profile-pp" src={imageData} alt="zdjecie profilowe" onClick={() => profileChangerRef.current.click()}/>
                  <input className="image-input" type="file" onChange={handleImageChange} ref={profileChangerRef}/>
                </div>
                <div class="feed-profile-edit-button">
                  <span class="feed-profile-button" onClick={handleSubmit}> Edytuj profil </span>
                </div>
                <div class="feed-profile-username-box">
                  <div class="feed-profile-username">
                    <input className="feed-profile-username-text" type="text" defaultValue={localStorage.getItem('userName')} ref={userNameChangerRef}/>
                  </div>
                  <div class="feed-profile-username-tag">
                    <span> @{localStorage.getItem('userName')}123 </span>
                  </div>
                </div>
                <div class="feed-profile-about">
                  <div class="feed-profie-about-text">
                    <span>Użytkownik Twattera</span>
                  </div>
                </div>
                <div class="feed-profile-data">
                  <img class="feed-profile-data-br-image" src={birthday} alt="ikonka urodzin" />
                  <span class="feed-profile-data-one"> Data urodzenia: 21 marca 2006 </span>
                  <img class="feed-profile-data-br-image" src={calendar} alt="ikonka kalendarza" />
                  <span class="feed-profile-data-two"> Dołączył/a 21 Marca 2006 </span>
                </div>
                <div class="feed-profile-main-follow">
                    <div class="feed-profile-follows">
                      <span class="feed-profile-follow-text-one">420 </span>
                      <span class="feed-profile-follow-text-two">Obserwowanych </span>
                      <span class="feed-profile-follow-text-one">69.000tyś </span>
                      <span class="feed-profile-follow-text-two">Obserwujących</span>
                    </div>
                </div>
                <div class="feed-profile-your-tweets-box">
                  <span class="feed-profile-your-tweets-text">Tweety</span>
                  <center><div class="feed-profile-your-tweets-underscore"></div></center>
                </div>
                <div class="feed-profile-your-tweets">
                  <Feed main={false} tweets={tweets} likeTweet={likeTweet}/>
                </div>
                <div class="feed-profile-who-to-follow">

                <div class="who-to-follow-heading">
                Kogo obserwować
                </div>
            <div class="who-to-follow-block">
              <img class="who-to-follow-author-logo" src={avatar} alt="avatar" />
              <div class="who-to-follow-content">
                <div>
                  <div class="who-to-follow-author-name">
                    Barack Obama
                  </div>
                  <div class="who-to-follow-author-slug">
                    @obamium
                  </div>
                </div>
                <div class="who-to-follow-button">
                  Follow
                </div>
              </div>
            </div>

            <div class="who-to-follow-block">
              <img class="who-to-follow-author-logo" src={avatar} alt="avatar" />
              <div class="who-to-follow-content">
                <div>
                  <div class="who-to-follow-author-name">
                    Andrew Tate Cock
                  </div>
                  <div class="who-to-follow-author-slug">
                    @cobratate
                  </div>
                </div>
                <div class="who-to-follow-button">
                  Follow
                </div>
              </div>
            </div>

            <div class="who-to-follow-block">
              <img class="who-to-follow-author-logo" src={avatar} alt="avatar" />
              <div class="who-to-follow-content">
                <div>
                  <div class="who-to-follow-author-name">
                    Aleks&Dawid
                  </div>
                  <div class="who-to-follow-author-slug">
                    @DawidAlexPastedCode
                  </div>
                </div>
                <div class="who-to-follow-button">
                  Follow
                </div>
              </div>
            </div>
            <div class="who-to-follow-block">
              <div class="who-to-follow-show-more">
                Pokaż więcej
              </div>
            </div>
            </div>
            </div>
          </div>
          </div>
        </div>
    </div>
  );
}

export default Profile;
