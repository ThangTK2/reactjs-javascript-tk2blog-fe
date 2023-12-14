import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeNavbar = {
    color: "white",
    background: "#003A57",
    borderRadius: "8px",
  };

  return (
    <nav className="navbar">
      <NavLink to={"/"}><h1>TK2-BLOG</h1></NavLink>
      
      <div className="links" style={{}}>
        <NavLink
          to={"/"}
          style={({ isActive }) => isActive ? activeNavbar : {}} //isActive do thằng NavLink hỗ trợ
        >
          Home
        </NavLink>
        <NavLink
          to={"/create"}
          style={({ isActive }) => isActive ? activeNavbar : {}} //{}: cái ni kh đc định nghĩa
        >
          New Blog
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;