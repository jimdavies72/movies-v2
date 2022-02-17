import { useState } from "react";
import fetchData from "../../utils/fetch";

const UpdatePassword = ({ user, setUserHandler }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [updateSuccess, setUpdateSuccess] = useState("");

  const baseURL = `${process.env.REACT_APP_BASE_URL}/updatepassword`;

  const handleCurrentPasswordChange = (e) => setCurrentPassword(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    const payload = JSON.stringify({
      username: user.username,
      password: currentPassword,
      newpassword: newPassword,
    });

    const data = await fetchData(baseURL, payload, "PUT");
    if (data.err) {
      setUpdateSuccess(data.err);
    } else {
      setUpdateSuccess("Password Updated Successfully");
      setUserHandler(data);
    }
  };

  return (
    <div>
      <h3>Update Password</h3>
      <h3>{updateSuccess}</h3>
      <form onSubmit={handlePasswordSubmit}>
        <label htmlFor="currentPassword">Current password:</label>
        <input
          type="password"
          name="currentPassword"
          value={currentPassword}
          onChange={handleCurrentPasswordChange}
        />
        <label htmlFor="newPassword">New password:</label>
        <input
          type="password"
          name="newPassword"
          value={newPassword}
          onChange={handleNewPasswordChange}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UpdatePassword;
