import "./App.css";
import { useState } from "react";
import {
  Switch,
  Route,
  useHistory,
  withRouter,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/homePage/HomePage";
import LandingPage from "./components/landingPage/LandingPage";
import SignUp from "./components/signUp/SignUp";
import Login from "./components/login/Login";
import Profile from "./components/profilePage/Profile";

const App = () => {
  const [user, setUser] = useState(null);

  const setUserHandler = (data) => {
    setUser({
      id: data.user._id,
      username: data.user.username,
      email: data.user.email,
      password: data.user.password,
    });
  };

  return (
    <div className="app-container">
      <Navbar user={user} />
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
          <Profile user={user} setUserHandler={setUserHandler} />
        </Route>
      </Switch>
    </div>
  );
};

export default withRouter(App);
