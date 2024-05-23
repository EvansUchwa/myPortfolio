import { Fade, Reveal } from "react-reveal";
const HomeAbout = () => {
    return (
        <div className="home-about">
            <Reveal top cascade>
                <h1>A propos de moi</h1>
            </Reveal>
            <div>
                <Fade bottom cascade>
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
                        <a href={require("../../Assets/cv.pdf")} target="_blank">Mon cv</a>
                    </div>
                </Fade>

                <Reveal bottom>
                    <div className="abpImg">
                        <img src={require("../../Assets/img/me.jpg")} />
                    </div>
                </Reveal>

                <Reveal bottom cascade>
                    <div className="abp-Text">
                        <h2>Expérience en développement!</h2>
                        <p>
                            Mon expérience acquise au fil des projets me permet de mieux
                            comprendre les attentes d'un client et de répondre précisement au
                            besoin demandé en fonction du domaine d'activité . Du site vitrine
                            au projet plus complexe , je vous propose une expertise et un
                            développement qui correspond à vos attentes & à vos besoins.
                        </p>

                        <h2> Un tarif adapté à votre projet</h2>
                        <p>
                            Ayant deja travailler régulièrement avec des clients de bourse
                            differente , je vous propose des solutions à votre portée et adaptée
                            à votre budget .
                        </p>
                        <a href={require("../../Assets/cv.pdf")} target="_blank">Mon cv</a>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default HomeAbout;
