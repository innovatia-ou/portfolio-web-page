import { Button } from "../../components/Button/Button";
import "./Home.scss";
import HomeImage from "../../assets/img/home-image.png";

export const Home = () => {
  return (
    <main id="Home">
      <div className="home-left">
        <h1 className="title">We are Cypher Devs !</h1>
        <h2 className="subtitle">Full Stack</h2>
        <h2 className="subtitle">Developers.</h2>
        <Button onClick={() => {}}>Hire Us</Button>
      </div>
      <div className="home-right">
        <img src={HomeImage} />
      </div>
    </main>
  );
};
