import { Link } from "react-router-dom";
import fetchData from "../../utils/fetch";

const MovieCard = ({ user, movieObject, setMovieDataHandler }) => {
  const baseURL = `${process.env.REACT_APP_BASE_URL}/movie/${movieObject.title}`;

  const deleteMovie = async () => {
    const payload = null;
    const data = await fetchData(baseURL, payload, "DELETE");
    window.location.reload();
  };

  return (
    <div>
      <h3>Title: {movieObject.title}</h3>
      {movieObject.actors.length > 0 &&
        movieObject.actors.map((actor, index) => {
          return (
            <div key={index}>
              <h3>{actor}</h3>
            </div>
          );
        })}
      {movieObject.synopsis ? (
        <h3>Synopsis: {movieObject.synopsis}</h3>
      ) : (
        <h3>Synopsis: n/a</h3>
      )}
      <Link to="/movies/movie">
        <button onClick={() => setMovieDataHandler(movieObject, true)}>
          Update Movie
        </button>
      </Link>
      <button onClick={deleteMovie}>Delete Movie</button>
    </div>
  );
};

export default MovieCard;
