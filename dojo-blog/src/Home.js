import React from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const [data, isLoading, error] = useFetch("http://localhost:8000/blogs")

  return (
    <div className="home">
      { error && <h2>{error}</h2> }
      { isLoading && <h2>Loading...</h2> }
      { data && <BlogList data={data} title="All Blogs" /> } 
    </div>
  )
}

export default Home