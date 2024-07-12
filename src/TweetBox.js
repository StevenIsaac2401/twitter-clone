import React, { useState } from 'react'
import "./TweetBox.css"
import { Avatar, Button } from "@mui/material"
import db from './firebase';
import {collection, addDoc } from "firebase/firestore";


function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState("")
  const sendTweet = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'posts'), {
      displayName: 'Bing bong',
      username: 'thelegend27',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://image.api.playstation.com/vulcan/img/rnd/202011/0714/Cu9fyu6DM41JPekXLf1neF9r.png"
    })
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className='tweetBox'>
        <form>
            <div className="tweetBox__input">
                <Avatar src="https://image.api.playstation.com/vulcan/img/rnd/202011/0714/Cu9fyu6DM41JPekXLf1neF9r.png"/>
                <input 
                onChange={e => setTweetMessage(e.target.value)}
                value={tweetMessage} placeholder="What's happening?" type="text" />
            </div>
            <input 
            onChange={e => setTweetImage(e.target.value)}
            value={tweetImage}
            className="tweetBox__imageInput" placeholder="Optional: Enter Image URL" type="text" />
            <Button onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox