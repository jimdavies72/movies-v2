import "./navbar.css";

import { Link } from "react-router-dom";

const Navbar = ({ user, createMovieHandler, myMoviesHandler }) => {
  return (
    <div className="nav-bar">
      {user && (
        <div className="action-btns">
          <Link to="/movies">
            <button
              onClick={() => myMoviesHandler(false)}
              className="nav-btn-pri"
            >
              Movies
            </button>
          </Link>
          <Link to="/mymovies">
            <button
              onClick={() => myMoviesHandler(true)}
              className="nav-btn-pri"
            >
              My Movies
            </button>
          </Link>
          <Link to="/movies/movie">
            <button
              onClick={() => createMovieHandler(true)}
              className="nav-btn-pri"
            >
              Create
            </button>
          </Link>
          <Link to="/profile">
            <button className="nav-btn-pri">Profile</button>
          </Link>
        </div>
      )}
      {!user && (
        <div className="login-btns">
          <Link to="/login">
            <button className="nav-btn-pri">LOGIN</button>
          </Link>
          <Link to="/signup">
            <span>
              <button className="nav-btn-sec">SIGN UP </button>
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
