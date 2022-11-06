import "./Home.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../LoginButton/LoginButton";

const Home = () => {
  //Get if the user is authenticated
  const { isAuthenticated } = useAuth0();
  return (
    <section className="Home">
      <div className="login">
        <label>Welcome!</label>
        {isAuthenticated ? (
          <Link to="/profile" className="login_access">
            Access Profile
          </Link>
        ) : (
          <div className="login_button">
            <p>Login to access your Profile</p>
            <LoginButton></LoginButton>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
