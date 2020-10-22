import React, { useState } from 'react';
import './App.css';
import Post from "./components/Post.js";

function App() {
  const [posts,setPosts] = useState([
    {
      username: "Matthew",
      caption: "Wow im incredible",
      imageUrl: "https://images.unsplash.com/photo-1601306418939-19ee7ccffdf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
    },
    {
      username: "Sarah",
      caption: "Wow im incredible",
      imageUrl: "https://images.unsplash.com/photo-1601306418939-19ee7ccffdf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
    }
  ]);  
  return (
    <div className="App">
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
          alt=""
        />
        </div>
        {
          posts.map(post => (
            <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
          ))
        }
    </div>
  );
}

export default App;
