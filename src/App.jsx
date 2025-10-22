import { useState } from 'react'


function App() {

  const comments[] = fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data))

  return (
    <>
      <div>
        <h1>API Search</h1>
      </div>
      
    </>
  )
}

export default App
