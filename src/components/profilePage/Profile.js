import UpdateProfile from "../updateProfile/UpdateProfile";
import UpdatePassword from "../updatePassword/UpdatePassword";

const Profile = ({ user, setUserHandler }) => {
  return (
    <div className="frm-container">
      <h1>{user.username}'s Profile Page</h1>
      <UpdateProfile user={user} setUserHandler={setUserHandler} />
      <UpdatePassword user={user} setUserHandler={setUserHandler} />
    </div>
  );
};

export default Profile;
