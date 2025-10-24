import React from 'react'
import './postcard.css'

const PostCard = (posts) => {
  return (
    <ul>
        {posts.posts.map((post) => (
            <div className='postcard'>
                <li className="listitem fade-in" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </li>
            </div>
        ))} 
    </ul>

  )
}

export default PostCard
