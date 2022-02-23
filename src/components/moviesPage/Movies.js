import "./movies.css";
import { useState, useEffect } from "react";
import fetchData from "../../utils/fetch";
import MovieCard from "../movieCard/MovieCard";

const Movies = ({ user, myMovies, setMovieDataHandler }) => {
  const [movieData, setMovieData] = useState([]);

  let baseURL = "";

  const getMovieData = async () => {
    // check myMovies boolean (from the navbar) to see which endpoint we need.
    myMovies
      ? (baseURL = `${process.env.REACT_APP_BASE_URL}/mymovies/${user.id}`)
      : (baseURL = `${process.env.REACT_APP_BASE_URL}/movie`);
    const payload = null;
    const data = await fetchData(baseURL, payload, "GET");

    setMovieData(data.movies);
  };

  useEffect(() => {
    getMovieData();
  }, [myMovies]);

  return (
    <div>
      <div className="movies-header">
        {myMovies ? <h2>My Movies</h2> : <h2>Movies</h2>}
      </div>
      {movieData.length > 0 &&
        movieData.map((movie, index) => {
          return (
            <div key={index}>
              <MovieCard
                user={user}
                movieObject={movie}
                setMovieDataHandler={setMovieDataHandler}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Movies;
