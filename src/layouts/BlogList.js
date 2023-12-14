import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const BlogList = (props) => {
  const { blogs, author } = props;
  const [search, setSearch] = useState('')

  //SEARCH
  const searchValueBlog = useMemo(() => {
    if (!search) return blogs;  //không rỗng
    return blogs.filter(
      item => item.title.toUpperCase().indexOf(search.toUpperCase()) !== -1 
    );
    //toUpperCase: nếu tìm kiếm bằng chữ hoa cũng vẫn ra 
    //indexOf để tìm kiếm vị trí đầu tiên của chuỗi search. Nếu không tìm thấy, kết quả sẽ là -1.
    //!== -1: đảm bảo rằng có sự trùng khớp
  }, [search])

  return (
    <div className='blog-list'>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>{author}</h2>
        <input placeholder="Search Blog..." style={{ width: '300px' }} type="text" value={search || ''} 
        onChange={(e) => setSearch(e.target.value)} 
      />
      </div>

      {searchValueBlog.length > 0 && searchValueBlog.map((blog) => 
        <div key={blog.id} className='blog-preview'>
          <Link to={`/blog/${blog.id}`} >
            <h1>{blog.title}</h1> <br/>
            <div>{blog.body}</div><br/>
            <div>Author: {blog.author}</div>
          </Link> 
        </div>
      )}
    </div>
  )
}

export default BlogList
