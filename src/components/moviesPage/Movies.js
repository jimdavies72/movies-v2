import { useState, useEffect } from "react";
import fetchData from "../../utils/fetch";
import MovieCard from "../movieCard/MovieCard";

const Movies = () => {
  const [movieData, setMovieData] = useState([]);
  const baseURL = `${process.env.REACT_APP_BASE_URL}/movie`;

  const getMovieData = async () => {
    const payload = null;
    const data = await fetchData(baseURL, payload, "GET");

    setMovieData(data.movies);
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div>
      {movieData.length > 0 &&
        movieData.map((movie, index) => {
          return (
            <div key={index}>
              <MovieCard
                title={movie.title}
                actors={movie.actors}
                synopsis={movie.synopsis}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Movies;
