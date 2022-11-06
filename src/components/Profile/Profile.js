import "./Profile.css";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../Loading/Loading";
import LogoutButton from "../LogoutButton/LogoutButton";
import UserList from "../UserList/UserList";

const Profile = () => {
  //Get user information from auth
  const { user } = useAuth0();
  return (
    <section className="Profile">
      <div className="info">
        <div className="info_profile">
          <img src={user.picture} alt="profileImg" />
          <p>
            <strong>Name: </strong>
            {user.name}
          </p>
          <p>
            <strong>Email: </strong>
            {user.email}
          </p>
        </div>
        <LogoutButton></LogoutButton>
      </div>
      <UserList></UserList>
    </section>
  );
};

//If we try to access the profile without authentication then redirect.
export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading></Loading>,
});
