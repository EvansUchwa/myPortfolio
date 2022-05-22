import { Fade, Reveal } from "react-reveal";
// import { useState } from "react/cjs/react.production.min";
import { useState } from "react";
import "../Assets/css/contact.css";
const Contact = () => {
  const [formValues, setFormValues] = useState({
    pseudo: "", mail: "", objet_contact: ""
  })

  function handleChange(e) {
    let value = e.target.value;
    let name = e.target.name;
    setFormValues({ ...formValues, [name]: value })
  }

  function getMsgToSent() {
    return "Bonjour Monsieur Evans,je suis Monsieur/Madame " + formValues.pseudo +
      " et c'est en ayant consulté votre portfolio que je vous contact dans le cadre d'une "
      + formValues.objet_contact + "..."
  }
  return (
    <div className="contactPart" id="pcContact">
    <Reveal left >
    <section className="cp-infos">
        <h1>Contactez moi</h1>
        <div>
          <Reveal cascade bottom>
            <p>
              <i className="mdi mdi-map"></i>
              Cotonou , Bénin a Godomey
            </p>
            <p>
              <i className="mdi mdi-mail"></i>
              johnsonevans686@gmail.com
            </p>
            <p>
              <i className="mdi mdi-phone"></i>
              +229 61160011
            </p>
          </Reveal>
        </div>
        <div>
          <Reveal bottom cascade>
            <a href="https://github.com/EvansUchwa"> <i className="mdi mdi-github"></i></a>
            <a href="mailto:johnsonevans686@gmail.com"><i className="mdi mdi-gmail"></i></a>
            <a href="https://wa.me/22994677352" target='_blank' className=' whatsappColor'>
              <i className="mdi mdi-whatsapp"></i>
            </a>
            <a href={require("../Assets/cv.pdf").default} target="_blank">Telecharger Mon cv</a>
          </Reveal>
        </div>
      </section>
    </Reveal >
      
     
        <Reveal right >
         <section className="cp-form">
          <form>
            <div>
              <label>Nom et prenom</label>
              <input type="text" placeholder="Votre Nom et Prenom" name="pseudo"
                onChange={(event) => handleChange(event)} />
            </div>
            <div>
              <label>Mail</label>
              <input type="text" placeholder="Votre Nom et Prenom" name="mail"
                onChange={(event) => handleChange(event)} />
            </div>
            <div>
              <label>Objet du contact</label>
              <label>
                <input type="radio" placeholder="Votre Nom et Prenom" name="objet_contact"
                  value={"mission freelance"} onChange={(event) => handleChange(event)} />
                <span>Mission freelance</span>
              </label>
              <label>
                <input type="radio" placeholder="Votre Nom et Prenom" name="objet_contact"
                  value={"collaboration"} onChange={(event) => handleChange(event)} />
                <span>Collaboration</span>
              </label>
              <label>
                <input type="radio" placeholder="Votre Nom et Prenom" name="objet_contact"
                  value={"...."} onChange={(event) => handleChange(event)} />
                <span>Autres...</span>
              </label>
            </div>
            <div>
              <a href={"mailto:" + formValues.mail + "?body= " + getMsgToSent()}>Envoyer</a>
            </div>
          </form>
          </section>
        </Reveal>
      

    </div>
  );
};

export default Contact;
