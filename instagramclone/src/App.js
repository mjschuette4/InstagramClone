import React from 'react';
import './App.css';
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
          alt=""
        />
        <Post />
      </div>
    </div>
  );
}

export default App;
