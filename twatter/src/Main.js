import React, { useState, useRef, useEffect } from "react";
import Feed from "./Feed";
import art from "./svg/art.svg";
import xbutton from "./svg/xbutton.svg";
import "./Css/Main.css";

const LOCAL_STORAGE_KEY = 'tweetApp.tweets'

function Main() {
  const [tweets, setTweets] = useState([])
  const [imageData, setImageData] = useState('');
  const [error, setError] = useState('');
  const tweetContentRef = useRef()
  const imageContentRef = useRef()
  const [value, setValue] = useState('');
  const [rows, setRows] = useState(1);

  useEffect(() => {
    const storedTweets = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTweets) setTweets(storedTweets)
  }, [])

  useEffect(() => {
    const textarea = document.getElementsByClassName('tweetText')[0];
    textarea.addEventListener('input', handleInput);
    return () => {
      textarea.removeEventListener('input', handleInput);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tweets))
  }, [tweets])

  function likeTweet(id){
    const newTweets = [...tweets]
    const tweet = newTweets.find(tweet => tweet.id === id)
    tweet.liked = !tweet.liked
    setTweets(newTweets)
  }

  function handleAddTweet(e) {
    const content = tweetContentRef.current.value
    const rows = tweetContentRef.current.rows
    const userName = localStorage.getItem('userName')
    const profileImageData = localStorage.getItem('profileImage')

    if (content === '' && !imageData) return
    setTweets(prevTweets => {
      return [...prevTweets, { id: tweets.length + 1, content: content, rows: rows, liked: false, imageData: imageData, userName: userName, profileImageData: profileImageData, date: new Date().toISOString().slice(0, 10)}]
    })
    tweetContentRef.current.rows = 1
    imageContentRef.current.value = null
    setValue('')
    setImageData('')
  }

  function handleClearTweets() {
    const newTweets = tweets.filter(tweet => !tweet.liked)
    setTweets(newTweets)
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file.type.match(/image\/(png|jpeg|jpg)/)) {
      setError('Obecnie możliwe jest przesyłanie jedynie zdjęć');
      return;
    }
    setError('');
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageData(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  function handleUnselectImage(e){
      setImageData('')
      imageContentRef.current.value = null
  }

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      tweetContentRef.current.rows += 1;
    }
  };

  function handleInput(event) {
    let lines = this.value.split('\n');
    if (lines[lines.length - 1] === '' && this.rows > 1 && event.keyCode === 13) {
      lines.pop();
    }
    setValue(lines.join('\n'));
    setRows(lines.length);
  }

  return (
    <div className="feed">
      <div className="feed-header">
      <h2>Home</h2>
      </div>
      <div className="add-tweet">
        <div className="pfp-area">
          <img className="user-profile" src={localStorage.getItem('profileImage')} alt="ProfileImage"/>
        </div>
        <div className="input-section">
          <textarea className="tweetText" placeholder="Co się dzieje?" value={value} rows={rows} ref={tweetContentRef} onChange={(event) => setValue(event.target.value)} onKeyDown={handleKeyDown} />
          <div className="image-section">
            {imageData && <div className="idk-container"><img className="unselect-button" src={xbutton} alt="znaczek usuwania x" onClick={handleUnselectImage}/> <img className="userImage" src={imageData} alt="user-input" /></div>}
          </div>
          <div className="button-section">
            <div className="image-buttons">
              <img class="image-input-button-img" src={art} alt="obrazek obrazu" onClick={() => imageContentRef.current.click()} />
              <input className='image-input' ref={imageContentRef} type="file" onChange={handleImageChange} />
              {error && <p className="error-message">{error}</p>}
            </div>
            <div className="add-button">
              <button className="tweet-button" onClick={handleAddTweet}>Tweetnij</button>
            </div>
            {/*<button onClick={handleClearTweets} >Clear Liked</button>*/}
          </div>
        </div>
      </div>
      <Feed main={true} tweets={tweets} likeTweet={likeTweet}/>
    </div>
  );
}

export default Main;
