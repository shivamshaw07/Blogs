import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Card from './Card'

const Pagination = () => {

    const {posts} = useContext(AppContext)
    console.log(posts)

  return (
    <div className='h-[80vh] overflow-hidden hover:overflow-scroll w-[50vw] mx-auto scroll'>
      {
        posts.map((post)=>(
            <Card post = {post} key={post.id}/>
        ))
      }
    </div>
  )
}

export default Pagination
