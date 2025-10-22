import React, { useEffect, useState } from "react";


function App() {

  const [posts, setPosts] = useState([])

  // const comments[] = fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then(response => response.json())
  //   .then(data => console.log(data))

  return (
    <>
      <div>
        <h1>Search Posts in JSONplaceholder API</h1>
        <input type="text" placeholder="Search posts..."></input>
      </div>
    </>
  )
}

export default App
