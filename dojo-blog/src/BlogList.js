import React from 'react'
import { Link } from 'react-router-dom'

const BlogList = ({data, title}) => {

  return (
    <div className='blog-list'>
      <h2>{title}</h2>
      {data.slice(0).reverse().map(data => {
        return (
          <div className='blog-preview' key={data.id}>
            <Link to={`/dojo/blogs/${data.id}`}>
              <h2>{data.title}</h2>
              <p>Written by: {data.author}</p>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default BlogList