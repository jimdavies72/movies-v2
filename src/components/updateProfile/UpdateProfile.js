import { useState } from "react";
import fetchData from "../../utils/fetch";

const UpdateProfile = ({ user, setUserHandler }) => {
  const [email, setEmail] = useState("");
  const [updateSuccess, setUpdateSuccess] = useState("");

  const baseURL = `${process.env.REACT_APP_BASE_URL}/user/${user.username}`;

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    const payload = JSON.stringify({
      email: email,
    });

    const data = await fetchData(baseURL, payload, "PUT");
    if (data.error) {
      setUpdateSuccess(data.error);
    } else {
      setUpdateSuccess("Profile updated successfully");
      setUserHandler(data);
    }
  };

  return (
    <div>
      <h3>email: {user.email}</h3>
      <h3>{updateSuccess}</h3>
      <form onSubmit={handleProfileSubmit}>
        <label htmlFor="email">Update email address:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UpdateProfile;
