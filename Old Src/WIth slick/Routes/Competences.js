import { Fade } from "react-reveal";
import "../Assets/css/competence.css";
const Competences = () => {
  return (
    <div className="skillsPart">
      <div className="pcskTitle">
        <h1>Mes compétences</h1>
      </div>

      <div className="pcskBody skillList">
        <Fade top cascade>
          <div className="sl-tools">
            <h3>Outils</h3>
            <section>
              <p>
                Versionning et partage de projet avec <b>Git</b> et{" "}
                <b>GitHub</b>
              </p>
            </section>

            <section>
              <p>
                Création de Media Queries afin de gérer la responsivité
                (adaptation sur tout type d'ecran) des sites Web
              </p>
            </section>

            <section>
              <p>
                Utilisation de Photoshop pour la création de maquette , retouche
                image , etc...
              </p>
            </section>
          </div>

          <div className="sl-webLanguage">
            <h3>Language Maitrisé</h3>
            <section>
              HTML 5
              {/* <div className="progressBar">
                <div centa="99%" className="pB-100"></div>
              </div> */}
            </section>
            <section>
              CSS 3
            </section>
            <section>
              Javascript ES5/ES6
            </section>
            <section>
              PHP
            </section>
            <section>
              <p>Node Js ( ce n'est pas vraiment un langage,
                <br />
                disons que c'est une technologie javascript) </p>
            </section>

          </div>

          <div className="sl-webFrameworkAndLibrary">
            <h3>Framework et Librairie</h3>
            <section>Bootstrap </section>
            <section>Jquerry </section>
            <section>React Js </section>
            <section>Vue Js </section>
            <section>Bootstrap </section>
          </div>

          <div className="sl-other">
            <h3>Autre compétences</h3>

            <section>Bonne base en programmation orienté objet</section>
            <section>Mise en place de design Pattern MVC(sur du php)</section>
            <section>Creation et/ou Utilisation des API</section>
            <section>Maitrise de librairie qui peuvent <br />
              être utiles lors de projet (Exemple: Redux,Moment.Js,etc...)  </section>
            <section>
              Mise en ligne et création des environnements en utilisant les
              protocoles FTP et SSH
            </section>

          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Competences;
