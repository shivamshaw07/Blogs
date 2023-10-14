import React from 'react'

const Card = ({post}) => {
  return (
    <div className='my-10'>
      <h1 className='font-bold'>{post.title}</h1>
      <p className='text-xs'>By <i>{post.author} on {post.category}</i></p>
      <p className='text-xs'>Posted on {post.date}</p>
      <p className='mt-3 text-sm'>
        {post.content}
      </p>
      {post.tags.map((tag,index)=>(
        <span className='mr-3 text-sm text-blue-600' key={index}>#{tag}</span>
      ))}
    </div>
  )
}

export default Card
