import { Fade } from "react-reveal";
import { IcBaselineTerminal, IcBaselineWorkspaces, IcOutlineCode } from "../../uikits/icons";

const HomeSkills = () => {
    return (
        <div className="skillsPart">
            <div className="pcskTitle">
                <h1>Mes compétences</h1>
            </div>

            <div className="pcskBody skillList">
                <Fade top cascade>
                    <div className="sl-webLanguage">
                        <span><IcOutlineCode /></span>
                        <h3> Language Maitrisé </h3>
                        <p> HTML 5/CSS3</p>
                        <p> Javascript ES5/ES6</p>
                        <p> Typescript(En cours de formation)</p>
                        <p> PHP</p>
                    </div>

                    <div className="sl-webFrameworkAndLibrary">
                        <span> <IcBaselineTerminal /></span>
                        <h3>
                            Framework, Librairie et Technologie
                        </h3>
                        <p>React Js/Next Js</p>
                        <p>Node Js/Express</p>
                        <p>Scss/Sass</p>
                        <p>GraphQL/Apollo Js</p>
                        <p>Bootstrap /Material UI</p>
                        <p>Vue Js /Vue X</p>
                    </div>

                    <div className="sl-other">
                        <span><IcBaselineWorkspaces /></span>
                        <h3>Autre compétences </h3>
                        <p>Maitrise des API REST</p>
                        <p>
                            Versionning et partage de projet avec <b>Git</b> et{" "}<b>GitHub</b>
                        </p>
                        <p>Base en CI/CD ,conteneurisation</p>
                        <p>Bonne base en programmation orienté objet</p>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default HomeSkills;
