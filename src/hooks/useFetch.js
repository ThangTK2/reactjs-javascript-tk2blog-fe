import { useEffect, useState } from "react"

const useFetch = (url) => {
  const [blogs, setBlogs ] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  //useEffect fetch data
  useEffect (() => {
      const fetchData = async () =>{
        try {
          setIsLoading(true)
          const res = await fetch(url)
          const {data, status} = await res.json()
          if(status === 200){ 
            setBlogs(data)
            setIsLoading(false)
          }
        } catch (error) {
          setIsError(true)
          setIsLoading(false)
        }
      }
      fetchData()  // gọi lại function để nó thực thi
    // }
  }, [])

  
  

  return { blogs, isLoading, isError }
}

export default useFetch
