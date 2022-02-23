import { useState } from "react";
import fetchData from "../../utils/fetch";

const SignUp = ({ setUserHandler }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [signupSuccess, setSignupSuccess] = useState("");

  const baseURL = `${process.env.REACT_APP_BASE_URL}/user`;

  const handleUserChange = (e) => setUser(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const submitForm = async (e) => {
    e.preventDefault();
    const payload = JSON.stringify({
      username: user,
      email: email,
      password: password,
    });

    const data = await fetchData(baseURL, payload, "POST");

    if (data.error) {
      setSignupSuccess(data.error);
    } else {
      setSignupSuccess("User registered successfully");
      setUserHandler(data);
    }
  };

  return (
    <div className="frm-container">
      <h1>Sign Up User</h1>
      <form onSubmit={submitForm} className="form">
        <div className="frm-ctrl">
          <label htmlFor="user">User:</label>
          <input
            type="text"
            name="user"
            value={user}
            onChange={handleUserChange}
          />
        </div>
        <div className="frm-ctrl">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="frm-ctrl">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <input type="submit" value="Submit" className="sub-btn-pri" />
      </form>
      <h3>{signupSuccess}</h3>
    </div>
  );
};

export default SignUp;
