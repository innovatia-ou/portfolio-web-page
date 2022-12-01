import { DefaultIcon } from "../../components/DefaultIcon/DefaultIcon";
import { VerticalTitle } from "../../components/verticalTitle/VerticalTitle";
import "./Contact.scss";
import Womanimage from "../../assets/img/wdev.png";

const contacts = [
  { label: "whatsapp", src: "contact-images/whatsapp.png" },
  { label: "gmail", src: "contact-images/gmail.png" },
  { label: "instagram", src: "contact-images/ig.png" },
  { label: "tiktok", src: "contact-images/tiktok.png" },
  { label: "youtube", src: "contact-images/youtube.png" },
  { label: "upwork", src: "contact-images/upwork.png" },
  { label: "freelancer", src: "contact-images/freelancer.png" },
];

export const Contact = () => {
  return (
    <main id="contact">
      <div className="vertical-container">
        <VerticalTitle name={"CONTACT"} size={7} />
      </div>
      <div className="container-icons-bg">
        <div className="icons">
          {contacts.map(({ label, src }) => (
            <div key={src} className="icon2">
              <DefaultIcon label={label} src={src} />
            </div>
          ))}
        </div>
        <div className="bg-woman">
          <img src={Womanimage} alt="bg-woman" />
        </div>
      </div>
    </main>
  );
};
