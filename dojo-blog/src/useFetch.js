import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
      const abort = new AbortController()

      setTimeout(() => {
        fetch(url, {signal: abort.signal})
        .then(res => {
          if(!res.ok) {
            throw Error("Page not found!")
          }
          return res.json()
        })
        .then(data => {
          setData(data)
          setIsLoading(false)
          setError("")
        }) 
        .catch(err => {
          if(err.name === "AbortError") {
            console.log("fetch aborted")
          } else {
            setIsLoading(false)
            setError(err.message)
          }
        })
      }, 1000)

      return () => abort.abort()
  }, [url])

  return [data, isLoading, error]
}

export default useFetch