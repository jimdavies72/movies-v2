import "./movieCard.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchData from "../../utils/fetch";

const MovieCard = ({ user, movieObject, setMovieDataHandler }) => {
  const baseURL = `${process.env.REACT_APP_BASE_URL}/movie/${movieObject._id}`;
  const [allowControl, SetAllowControl] = useState(false);

  useEffect(() => {
    if (movieObject.user_id) {
      if (user.id === movieObject.user_id) {
        SetAllowControl(true);
      }
    }
  }, []);

  const deleteMovie = async () => {
    const payload = null;
    const data = await fetchData(baseURL, payload, "DELETE");
  };

  return (
    <div>
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
      {allowControl && (
        <Link to="/movies/movie">
          <button onClick={() => setMovieDataHandler(movieObject, false)}>
            Update Movie
          </button>
        </Link>
      )}
      {allowControl && <button onClick={deleteMovie}>Delete Movie</button>}
    </div>
  );
};

export default MovieCard;
