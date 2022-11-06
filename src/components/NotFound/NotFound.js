import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="NotFound">
      <h1>404 NOT FOUND</h1>
      <Link to="/" className="goHome">
        Home
      </Link>
    </div>
  );
};

export default NotFound;
