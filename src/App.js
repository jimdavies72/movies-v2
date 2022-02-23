import "./App.css";
import { useState } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/homePage/HomePage";
import LandingPage from "./components/landingPage/LandingPage";
import SignUp from "./components/signUp/SignUp";
import Login from "./components/login/Login";
import Profile from "./components/profilePage/Profile";
import Movies from "./components/moviesPage/Movies";
import Movie from "./components/movie/Movie";

const App = () => {
  const [user, setUser] = useState(null);
  const [movie, setMovie] = useState(null);
  const [create, setCreate] = useState(false);
  const [myMovies, setMyMovies] = useState(false);

  const setUserHandler = (data) => {
    setUser({
      id: data.user._id,
      username: data.user.username,
      email: data.user.email,
      password: data.user.password,
    });
  };

  const setMovieDataHandler = (object, createUpdate) => {
    setMovie(object);
    setCreate(createUpdate);
  };

  const createMovieHandler = (value) => {
    setCreate(value);
  };

  const myMoviesHandler = (value) => {
    setMyMovies(value);
  };

  return (
    <div className="app-container">
      <Navbar
        user={user}
        createMovieHandler={createMovieHandler}
        myMoviesHandler={myMoviesHandler}
      />
      <Switch>
        <Route exact path="/">
          {user ? <HomePage user={user} /> : <LandingPage />}
        </Route>
        <Route exact path="/signup">
          <SignUp setUserHandler={setUserHandler} />
        </Route>
        <Route exact path="/login">
          <Login setUserHandler={setUserHandler} />
        </Route>
        <Route exact path="/profile">
          {!user ? (
            <Redirect to="/login" />
          ) : (
            <Profile user={user} setUserHandler={setUserHandler} />
          )}
        </Route>
        <Route exact path="/movies/movie">
          {!user ? (
            <Redirect to="/login" />
          ) : (
            <Movie user={user} movie={movie} create={create} />
          )}
        </Route>

        <Route exact path="/movies">
          {!user ? (
            <Redirect to="/login" />
          ) : (
            <Movies
              user={user}
              // myMovies is boolean
              myMovies={myMovies}
              setMovieDataHandler={setMovieDataHandler}
            />
          )}
        </Route>
        <Route exact path="/mymovies">
          {!user ? (
            <Redirect to="/login" />
          ) : (
            <Movies
              user={user}
              // myMovies is boolean
              myMovies={myMovies}
              setMovieDataHandler={setMovieDataHandler}
            />
          )}
        </Route>
      </Switch>
    </div>
  );
};

export default withRouter(App);
