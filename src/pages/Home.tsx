import { Button } from "../components/button/Button";
import "./Home.scss";

export function Home() {
  return (
    <main id="Home">
      <div className="home-content">
        <h1 className="title">We are Cypher Devs</h1>
        <h2 className="subtitle">Full Stack</h2>
        <h2 className="subtitle">Developers</h2>
        <Button />
      </div>
    </main>
  );
}
