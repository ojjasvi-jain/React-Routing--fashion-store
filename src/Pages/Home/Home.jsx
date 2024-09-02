import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <main className="home-main container">
      <article className="home-info">
        <div className="info-txt">
          <h2>Experience the height of fashion</h2>
        </div>
        <button className="explore-clothing_btn">
          <Link to="/explore/all">Discover Products</Link>
        </button>
      </article>
    </main>
  );
};

export default Home;
