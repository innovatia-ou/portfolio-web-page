import "./Header.scss";
import image from "../../assets/img/logo.png";
import { Link, Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <header className="page-header">
      <div className="brand-container">
        <img src={image} />
        <p>Cypher Devs</p>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/About"}>About</Link>
          </li>{" "}
          <li>
            <Link to={"/Technologies"}>Technologies</Link>
          </li>{" "}
          <li>
            <Link to={"/Projects"}>Projects</Link>
          </li>{" "}
          <li>
            <Link to={"/Contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
