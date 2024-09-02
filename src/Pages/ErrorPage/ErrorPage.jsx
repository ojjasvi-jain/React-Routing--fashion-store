import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="message">
      <h1>Opps! Something Went Wrong 😯</h1>
      <button className="explore-clothing_btn">
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
