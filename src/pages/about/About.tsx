import { Title } from "../../components/title/Title";
import { VerticalTitle } from "../../components/verticalTitle/VerticalTitle";
import "./About.scss";

export const About = () => {
  return (
    <main id="about">
      <div className="title-container">
        <VerticalTitle name="Who we are?" size={6} />
      </div>
      <div className="about-us-content">
        <Title name="About us" />
        <Title name="Mission" type="secondary" />
      </div>
    </main>
  );
};
