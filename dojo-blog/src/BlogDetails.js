import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import useFetch from './useFetch'

const BlogDetails = () => {
  const { id } = useParams()
  const [data, isLoading, error] = useFetch(`http://localhost:8000/blogs/${id}`)

  const history = useHistory()

  const handleClick = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      history.push("/")
    })
  }

  return (
    <div className='blog-details'>
      {isLoading && <div>Loading...</div>}
      {error && <div>Page not found!</div>}
      {data && (
        <article>
          <div className="blog-info">
              <div>
                <h2>{data.title}</h2>
                <p>Written by: {data.author}</p>
              </div>
            <button onClick={handleClick}>Delete</button>
          </div>
          <p>{data.content}</p>
        </article>
      )}
    </div>
  )
}

export default BlogDetails