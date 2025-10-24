import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import './app.css';


function App() {

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([])

  console.log("Input value:", input);

  const fetchPosts = (value) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => { 
      const filteredPosts = json.filter(post => 
        value && post.title.includes(value) || post.body.includes(value)
      );
      setPosts(filteredPosts);
      console.log("Filtered Posts:", filteredPosts);
    });
  }

  const handleChange = (e) => {
    setInput(e.target.value);
    fetchPosts(e.target.value);
  }

  return (
    <>
      <div className="app">
        <h1 className="navbar">Search Posts in JSONplaceholder API</h1>
        <input type="text" className="searchbox" placeholder="Type to search posts..." onChange={(e) => handleChange(e)}></input>
        <PostCard posts={posts}/>
      </div>
    </>
  )
}

export default App
