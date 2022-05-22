import {Fade} from "react-reveal";
import "../Assets/css/contact.css";
const Contact = () => {
  return (
    <div className="contactPart" id="pcContact">
      <div className="partTitle">
        <h1>Contactez moi</h1>
      </div>
      <Fade bottom>
        <div className="cp-Infos">
          <p>Cotonou , Bénin a Godomey</p>
          <p>johnsonevans686@gmail.com</p>
          <p>+229 61160011</p>
          <button>
            <a href="https://github.com/EvansUchwa">Github</a>
          </button>
          <button>
            <a href="mailto:johnsonevans686@gmail.com">Me contactez</a>
          </button>
          <button>
            <a href={require("../Assets/cv.pdf").default}>Mon cv</a>
          </button>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
