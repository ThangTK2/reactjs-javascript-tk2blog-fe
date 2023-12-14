import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [blog, setBlog] = useState({});  // khi submit sẽ là 1 obj
    const history = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!blog.title || !blog.body || !blog.author) return;
      // console.log("blog", blog);

      //CREATE BLOG
      const handleCreateBlog = async () =>{
        const body = {id: Math.random(), ...blog};
        const res = await fetch('https://reactjs-javascript-tk2blog-be.vercel.app/blogs', {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(body)
        })
        console.log("CREATE BLOG: ", res)
        const { data, status } = await res.json();
        if(status === 200 && data){
          // console.log(data)
          history('/')
        }
      }
      handleCreateBlog()  // gọi lại function để nó thực thi
    }

    return (
      <div className="create">
        <h1>Add New Blog</h1>
        <form onSubmit={handleSubmit}>
          <label>Title</label>                                                            {/** key: value*/}
          <input type="text" value={blog.title || ''} onChange={(e) => setBlog({...blog, ['title']: e.target.value})} />
          <label>Body</label>
          <textarea type="text" value={blog.body || ''} onChange={(e) => setBlog({...blog, ['body']: e.target.value})}></textarea>
          <label>Author</label>
          <select value={blog.author || ''} onChange={(e) => setBlog({...blog, ['author']: e.target.value})}>
            <option value=''>Choose Author</option>
            <option value="TK2">TK2</option>  
            <option value="Nít">Nít</option>
            <option value="Thanh Hòa">Hòa</option>
          </select>
          <button disabled={!blog.title || !blog.body || !blog.author}>Add Blog</button>
        </form>
      </div>
    )
}

export default Create;