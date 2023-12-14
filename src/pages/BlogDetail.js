import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';

const BlogDetail = () => {
  const { id } = useParams();  //useParams: của react router dom để lấy tham số mà bạn có thể truyền vào đường dẫn
  const { blogs, isLoading, isError } = useFetch(`https://reactjs-javascript-tk2blog-be.vercel.app/blogs/${id}`)
  const history = useNavigate();

  //DELETE BLOG
  const handleDelete = async () => {
    const res = await fetch(`https://reactjs-javascript-tk2blog-be.vercel.app/blogs/${id}`, {
      method: "DELETE",
    })
    console.log("DELETE BLOG: ", res)
    const { status } = await res.json();
    if(status === 200 ){
      history('/')
    }
  }

  return (
    <div className='blog-details'>
      {isLoading ? "Loading..." : ''}
      {isError ? "Sever Error!!!" : ''}
      {blogs && (
        <div>
          <h1>{blogs.title}</h1> <br/>
          <h4>{blogs.author}</h4>
          <div>{blogs.body}</div>
        </div>
      )}
      <button onClick={() => handleDelete()}>Delete</button>
    </div>
  )
}

export default BlogDetail
