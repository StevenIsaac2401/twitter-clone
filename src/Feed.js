import React, { useState, useEffect } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from './firebase'
import {collection, getDocs} from "firebase/firestore";
import FlipMove from 'react-flip-move'

function Feed() {
  const [posts, setPosts] = useState([]);
  // useEffect(() => { 
  //   db.collection("posts").onSnapshot((snapshot) =>
  //     setPosts(snapshot.docs.map((doc) => doc.data()))
  //   );
  // }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed">
        <div className="feed__header">
            <h2>Home</h2>
        </div>

        <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
        </FlipMove>

        {/* <Post displayName="Stev" 
        username="lilsteve" 
        verified={true} 
        text="yo its working" 
        avatar="https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg" 
        image="https://media.licdn.com/dms/image/C5612AQFY1Skq2bxuPg/article-cover_image-shrink_600_2000/0/1520238047941?e=2147483647&v=beta&t=5bxkljZa4JMVP8N5SHFDLuZCkiWYpHomZWx49oP3VRE"/>
        <Post /> */}
    </div>
  )
}

export default Feed