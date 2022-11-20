import { Paragraph } from "../../components/Paragraph/Paragraph";
import { Title } from "../../components/title/Title";
import { VerticalTitle } from "../../components/verticalTitle/VerticalTitle";
import "./About.scss";

import MissionImage from '../../assets/img/mission.png'
import VisionImage from '../../assets/img/vision.png'
import ValuesImage from '../../assets/img/values.png'

export const About = () => {
  return (
    <main id="about">
      <div className="title-container">
        <VerticalTitle name="Who we are?" size={6} />
      </div>
    
      <div className="about-us-content">
        <div className="introduction">
        <Title name="About us" />
        <Paragraph>
            We are a group of specialized developers who enjoy to face great challenges on development. 
            The Cypher Devs has the purpose of deliver fast, perfomatic and scalable softwares.
            We work mostly under freelance contract where our team will work together to delivery the best code that
            you could have. Don't waste your time anymore looking for real professionals who can assure quality for your project,
            contract us and rest assured.
        </Paragraph>    
        </div>
        <div className="purpose">
            <Title name="Mission" type="secondary" />
            <div className="purpose-content">
            <img src={MissionImage}/>
            <Paragraph>
                Deliver fast, clean, perfomatic and quality code
            </Paragraph>

            </div>
        </div>
        <div className="purpose">
            <Title name="Vision" type="secondary" />
            <div className="purpose-content">
            <img src={VisionImage}/>
            <Paragraph>
                Deliver fast, clean, perfomatic and quality code
            </Paragraph>

            </div>
        </div>
        <div className="purpose">
            <Title name="Values" type="secondary" />
            <div className="purpose-content">
            <img src={ValuesImage}/>
            <Paragraph>
                Deliver fast, clean, perfomatic and quality code
            </Paragraph>

            </div>
        </div>
      </div>
    </main>
  );
};
