import "./navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link to="/">
          <h1 className="logo">Movies - REST</h1>
        </Link>

        <div className="nav-links">
          <Link to="/signup">
            <span>
              <i className="fas fa-user-plus"></i>
            </span>
          </Link>
          <Link to="/login">
            <span>
              <i className="fas fa-sign-in-alt"></i>
            </span>
          </Link>
          <Link to="/logout">
            <span>
              <i className="fas fa-sign-out-alt"></i>
            </span>
          </Link>

          <Link to="/">
            <span>
              <i className="fas fa-home"></i>
            </span>
          </Link>
          <Link to="/profile">
            <span>
              <i className="fas fa-user-circle"></i>
            </span>
          </Link>
          <Link to="/allusers">
            <span>
              <i className="fas fa-users"></i>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
