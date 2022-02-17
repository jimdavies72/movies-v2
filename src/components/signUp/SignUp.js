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
    <>
      <h1>Sign Up User</h1>
      <h3>{signupSuccess}</h3>
      <form onSubmit={submitForm}>
        <label htmlFor="user">User:</label>
        <input
          type="text"
          name="user"
          value={user}
          onChange={handleUserChange}
        />
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default SignUp;
