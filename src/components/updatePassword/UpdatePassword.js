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
    if (data.error) {
      setUpdateSuccess(data.error);
    } else {
      setUpdateSuccess("Password Updated Successfully");
      setUserHandler(data);
    }
  };

  return (
    <div>
      <form onSubmit={handlePasswordSubmit} className="form">
        <h3>Update Password</h3>
        <div className="frm-ctrl">
          <label htmlFor="currentPassword">Current password:</label>
          <input
            type="password"
            name="currentPassword"
            value={currentPassword}
            onChange={handleCurrentPasswordChange}
          />
        </div>
        <div className="frm-ctrl">
          <label htmlFor="newPassword">New password:</label>
          <input
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
        </div>
        <input type="submit" value="Submit" className="sub-btn-pri" />
      </form>
      <h3>{updateSuccess}</h3>
    </div>
  );
};

export default UpdatePassword;
