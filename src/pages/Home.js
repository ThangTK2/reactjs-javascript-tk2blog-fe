
import useFetch from '../hooks/useFetch'
import BlogList from '../layouts/BlogList'

const Home = () => {
  const { blogs, isError, isLoading } = useFetch('https://reactjs-javascript-tk2blog-be.vercel.app/blogs')
  
  //đây là function props nó sẽ nhận đc data từ component con truyền lên
  // const handleDeleteBlog = (id) => {
  //   setBlogs(blogs.filter(blog => blog.id !== id))
  // }

  //useRef
  // const color = useRef(null)
  // const handleChangeColor = ( ) => {
  //   color.current.className = 'yellow'
  // }

  return (
    <div>
      {isLoading ? "Loading..." : ''}
      {isError ? "Sever Error!!!" : ''}
      {
        blogs.length > 0 && <BlogList blogs={blogs} author="Blogs"/>
      }
    </div>
  )
}

export default Home
