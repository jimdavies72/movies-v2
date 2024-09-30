import { useState, useEffect } from "react";
import fetchData from "../../utils/fetch";
import { ListItem } from "../listItems/listItems";

const Movie = ({ user, movie, create }) => {
  const [title, setTitle] = useState("");
  const [actors, setActors] = useState([]);
  const [synopsis, setSynopsis] = useState("");
  const [createSuccess, setCreateSuccess] = useState("");

  useEffect(() => {
    !create && populateFields();
  }, []);

  let baseURL = "";
  let httpVerb = "";
  if (create === true) {
    baseURL = `${process.env.REACT_APP_BASE_URL}/movie`;
    httpVerb = "POST";
  } else {
    baseURL = `${process.env.REACT_APP_BASE_URL}/movie/${movie._id}`;
    httpVerb = "PUT";
  }

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleSynopsisChange = (e) => setSynopsis(e.target.value);

  const actorsHandler = (array) => {
    setActors(array);
  };

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
    <div className="frm-container">
      {create ? <h1>Create new movie</h1> : <h1>Update Movie</h1>}
      <form onSubmit={submitForm} className="form">
        <div className="frm-ctrl">
          <label htmlFor="title">title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="frm-ctrl">
          <ListItem list={actors} listHandler={actorsHandler} />
        </div>
        <div className="frm-ctrl">
          <label htmlFor="synopsis">Synopsis:</label>
          <textarea
            cols="60"
            rows="5"
            type="text"
            name="synopsis"
            value={synopsis}
            onChange={handleSynopsisChange}
          />
        </div>
        <input type="submit" value="Submit" className="sub-btn-pri" />
      </form>
      <h3>{createSuccess}</h3>
    </div>
  );
};

export default Movie;
