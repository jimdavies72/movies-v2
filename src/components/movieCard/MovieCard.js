import "./movieCard.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchData from "../../utils/fetch";

const MovieCard = ({
  user,
  movieObject,
  removeMovieHandler,
  setMovieDataHandler,
}) => {
  const baseURL = `${process.env.REACT_APP_BASE_URL}/movie/${movieObject._id}`;
  const [allowControl, SetAllowControl] = useState(false);

  useEffect(() => {
    if (movieObject.user_id === user.id) {
      SetAllowControl(true);
    } else {
      SetAllowControl(false);
    }
  }, [movieObject, user.id]);

  const deleteMovie = async () => {
    const payload = null;
    fetchData(baseURL, payload, "DELETE");
    removeMovieHandler(movieObject._id);
  };

  return (
    <div className="frm-container">
      <h3>Title: {movieObject.title}</h3>
      {movieObject.actors.length > 0 &&
        movieObject.actors.map((actor, index) => {
          return (
            <div key={index}>
              <h4>{actor}</h4>
            </div>
          );
        })}
      {movieObject.synopsis ? (
        <p>Synopsis: {movieObject.synopsis}</p>
      ) : (
        <p>Synopsis: n/a</p>
      )}
      <div className="control-buttons">
        {allowControl && (
          <Link to="/movies/movie">
            {/* movie data handler sets update instead of create */}
            <button
              className="nav-btn-pri"
              onClick={() => setMovieDataHandler(movieObject, false)}
            >
              Update Movie
            </button>
          </Link>
        )}
        {allowControl && (
          <button className="nav-btn-sec" onClick={deleteMovie}>
            Delete Movie
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
