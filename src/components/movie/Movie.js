import { useState } from "react";
import fetchData from "../../utils/fetch";

const Movie = ({ user, movie }) => {
  const [title, setTitle] = useState("");
  const [actors, setActors] = useState([]);
  const [synopsis, setSynopsis] = useState("");
  const [createSuccess, setCreateSuccess] = useState("");

  let baseURL = "";
  movie
    ? (baseURL = `${process.env.REACT_APP_BASE_URL}/movie`)
    : (baseURL = `${process.env.REACT_APP_BASE_URL}/movie/${movie.title}`);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleActorsChange = (e) => setActors(e.target.value);
  const handleSynopsisChange = (e) => setSynopsis(e.target.value);

  const submitForm = async (e) => {
    e.preventDefault();
    const payload = JSON.stringify({
      title: title,
      actors: actors,
      synopsis: synopsis,
      user_id: user.id,
    });

    const data = await fetchData(baseURL, payload, "POST");

    if (data.error) {
      setCreateSuccess(data.error);
    } else {
      setCreateSuccess("Movie created successfully");
    }
  };

  return (
    <div>
      {movie ? <h1>Create new movie</h1> : <h1>Update Movie</h1>}
      <h3>{createSuccess}</h3>
      <form onSubmit={submitForm}>
        <label htmlFor="title">title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleTitleChange}
        />
        <label htmlFor="actors">Actors:</label>
        <input
          type="text"
          name="actors"
          value={actors}
          onChange={handleActorsChange}
        />

        <label htmlFor="synopsis">Synopsis:</label>
        <textarea
          cols="60"
          rows="5"
          type="text"
          name="synopsis"
          value={synopsis}
          onChange={handleSynopsisChange}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Movie;
