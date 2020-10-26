import React, { useState, useEffect } from 'react';
import './App.css';
import Post from "./components/Post.js";
import { db } from "./Config/Firebase"
import Modal from "@material-ui/core/Modal"

function App() {
  const [posts,setPosts] = useState([]);  

  // UseEffect -> runs a piece of code based on a specific condition

  useEffect(() => {
    //this line is saying everytime data in 'posts' changes then fire this code
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id, 
        post: doc.data()
      })));
    });
  }, [])

  return (
    <div className="App">
      <Modal
        open={open}
        onClose={handleClose}
      >
        {body}
      </Modal>
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
          alt=""
        />
        </div>
        {
          posts.map(({id, post}) => (
            <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
          ))
        }
    </div>
  );
}

export default App;
