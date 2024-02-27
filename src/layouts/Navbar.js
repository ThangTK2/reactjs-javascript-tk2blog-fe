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
          style={({ isActive }) => isActive ? activeNavbar : {}}
        >
          Home
        </NavLink>
        <NavLink
          to={"/create"}
          style={({ isActive }) => isActive ? activeNavbar : {}}
        >
          New Blog
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;