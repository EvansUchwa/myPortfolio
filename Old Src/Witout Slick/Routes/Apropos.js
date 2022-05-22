import {Reveal} from "react-reveal";
import "../Assets/css/apropos.css";
const Apropos = () => {
  return (
    <div className="aboutPart">
      <Reveal>
        <div className="partTitle">
          <h1>A propos de moi</h1>
        </div>
      </Reveal>
      <Reveal left>
        <div className="abp-Text">
          <h2>Un développeur web passionné !</h2>

          <p>
            Passionné d'informatique et d'électronique depuis mon enfance , je
            n'ai pas hésité après l'obtention de mon baccalauréat à me lancer
            d'abord dans la programmation puis par la suite dans le
            développement web . J’ai profité de l'obtention d'une bourse de
            formation dans une université de chez moi pour me faire former en
            développement web full-stack. Et c'est dans l'optique de continuer à
            me perfectionner que je suis disponible pour la création de vos site
            internet (site vitrine, site e-commerce ou application web) , je
            suis également disponible pour toute collaboration dans le domaine
            du développement web.
          </p>

          <button>
            <a href={require("../Assets/cv.pdf")}>Mon cv</a>
          </button>
        </div>
      </Reveal>

      <Reveal bottom>
        <div className="abpImg">
          <img src={require("../Assets/img/me2.png").default} />
        </div>
      </Reveal>

      <Reveal right>
        <div className="abp-Text">
          <h2>Expérience en développement!</h2>
          <p>
            Mon expérience acquise au fil des projets me permet de mieux
            comprendre les attentes d'un client et de répondre précisement au
            besoin demandé en fonction du domaine d'activité . Du site vitrine
            au projet plus complexe , je vous propose une expertise et un
            développement web qui correspond à vos attentes & à vos besoins.
          </p>

          <h2> Un tarif adapté à votre projet</h2>
          <p>
            Ayant deja travailler avec régulièrement avec des clients de bourse
            differente , je vous propose des solutions à votre portée et adaptée
            à votre budget .
          </p>
          <button>
            <a href={require("../Assets/cv.pdf").default}>Mon cv</a>
          </button>
        </div>
      </Reveal>
    </div>
  );
};

export default Apropos;
