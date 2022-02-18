import "./login.css";
import { useState } from "react";
import fetchData from "../../utils/fetch";

const Login = ({ setUserHandler }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");

  const baseURL = `${process.env.REACT_APP_BASE_URL}/login`;

  const handleUserName = (e) => setUserName(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = JSON.stringify({
      username: userName,
      password: password,
    });

    const data = await fetchData(baseURL, payload, "POST");

    if (data.error) {
      setLoginSuccess(data.error);
    } else {
      setLoginSuccess("User Logged in Successfully");
      setUserHandler(data);
    }

    // const res = await fetch(baseURL, {
    //   method: "POST",
    //   mode: "cors",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: payload,
    // });

    // try {
    //   const data = await res.json();
    //   if (res.status === 200) {
    //     setUserHandler(data);
    //   } else {
    //     throw new Error(`${res.status}, ${res.message}`);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="frm-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="frm-ctrl">
          <label htmlFor="user">Username:</label>
          <input
            type="text"
            name="user"
            value={userName}
            onChange={handleUserName}
          />
        </div>
        <div className="frm-ctrl">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <input type="submit" value="Submit" className="sub-btn-pri" />
      </form>
      <h3>{loginSuccess}</h3>
    </div>
  );
};

export default Login;
