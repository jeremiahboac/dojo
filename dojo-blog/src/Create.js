import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Create = () => {
  const [loading, setLoading] = useState(false)
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    author: "mario"
  })

  const history = useHistory()

  const handleChange = (event) => {
    const { name, value } = event.target
    setNewBlog(prevBlog => {
      return {...prevBlog, [name]: value }})}

  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newBlog)
    })
    .then(() => {
      console.log("New Blog Added!")
      setLoading(false)
      history.push("/dojo")
    })
  }

  return (
    <div className='create'>
        <h2>Add New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input id="title" type="text" name="title" value={newBlog.title} onChange={handleChange} required/>
          <label htmlFor="content">Content:</label>
          <textarea id='content' name="content" cols="12" rows="6" value={newBlog.content} onChange={handleChange} required></textarea>
          <label htmlFor="">Author:</label>
          <select name='author' value={newBlog.author} onChange={handleChange}>
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
          { !loading && <button>Add Blog</button> }
          { loading && <button disabled>Adding Blog...</button> }
        </form>
    </div>
  )
}

export default Create