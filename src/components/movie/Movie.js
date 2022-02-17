import { useState, useEffect } from "react";
import fetchData from "../../utils/fetch";

const Movie = ({ user, movie, create }) => {
  const [title, setTitle] = useState("");
  const [actors, setActors] = useState([]);
  const [synopsis, setSynopsis] = useState("");
  const [createSuccess, setCreateSuccess] = useState("");

  let baseURL = "";
  let httpVerb = "";
  if (create === true) {
    baseURL = `${process.env.REACT_APP_BASE_URL}/movie`;
    httpVerb = "POST";
  } else {
    baseURL = `${process.env.REACT_APP_BASE_URL}/movie/${movie.title}`;
    httpVerb = "PUT";
  }

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleActorsChange = (e) => setActors(e.target.value);
  const handleSynopsisChange = (e) => setSynopsis(e.target.value);

  useEffect(() => {
    !create && populateFields();
  }, []);

  const populateFields = () => {
    setTitle(movie.title);
    setActors(movie.actors);
    setSynopsis(movie.synopsis);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const payload = JSON.stringify({
      title: title,
      actors: actors,
      synopsis: synopsis,
      user_id: user.id,
    });

    const data = await fetchData(baseURL, payload, httpVerb);

    if (data.error) {
      setCreateSuccess(data.error);
    } else {
      create
        ? setCreateSuccess("Movie created successfully")
        : setCreateSuccess("Movie updated successfully");
    }
  };

  return (
    <div>
      {create ? <h1>Create new movie</h1> : <h1>Update Movie</h1>}
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
