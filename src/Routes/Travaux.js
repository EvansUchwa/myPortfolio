import { useState } from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import '../Assets/css/travaux.css';
const Travaux = () => {

    const travaux = [
        {
            lang: 'HTML et CSS',
            works: [
                {
                    description: 'Univearn - En ligne - Un de mes nombreux Premier projet HTML/CSS ', img: 's7.png',
                    link: 'https://evansuchwa.github.io/UnivearnTemplate/connexion.html'
                },
                {
                    description: 'Gda e-learn - En cours de développemet - Une integration pour une entreprise où je travaille actuellement en freelance',
                     img: 'gdaLearn.jpg',
                    link: 'https://gda-e-learn.netlify.app'
                },
                {
                    description: "MinanKon Martial Arts - En cours de finalisation - Un site vitrine pour un client coach de Taekwondo", img: 'maxCoach.jpg',
                    link: 'https://max-coach.netlify.app'
                },
                {
                    description: "DIdaFir - En cours de finalisation -Un site vitrine pour un client pour un client coach de développement personnel", img: 'didaFire.jpg',
                    link: 'https://didafir.netlify.app'
                },

            ]
        },
        {
            lang: 'React Js',
            works: [
                { description: 'Todo list app(Premier projet) ',
                 img: 's1.png', link: 'https://evans-todoapp-reacft.netlify.app' 
                },
                { description: 'Mon portfolio',
                 img: 's8.png', link: 'https://evansdsv-portfolio.netlify.app/' 
                },
                { description: 'AnimStore - En ligne - Mini E-commerce sur les vêtements pour parachever ma formation React ',
                 img: 's2.png', link: 'https://evans-react-ecommerce.netlify.app' 
                 },
            ]
        },
        {
            lang: 'Vue Js',
            works: [
                { description: 'Wesh - En ligne - Mini E-commerce sur les montre,mon Premier projet Vue Js ',
                 img: 'wesh.jpg', 
                 link: 'https://wesh-vue.netlify.app' },
                { description: 'NoahStore - -En ligne - Petit E-commerce avec une base de donnée Mysql pour parachever ma formation vue Js ',
                 img: 'noahStore.jpg',
                  link: 'https://noah-ecommerce-vueJs.netlify.app' },
            ]
        },
        {
            lang: 'Php et Laravel',
            works: [
                { description: "Ahime - Hors Ligne - Un petit site d\'annonce que j'ai fait avec des compains pour les vendeurs locaux ",
                 img: 'odja.jpg',
                  link: 'http://ahime.rf.gd/' },
                { description: 'Mini blog de post d\'article(Premier projet Laravel) ',
                 img: 's6.png',
                  link: '#' }
            ]
        },
        {
            lang: 'React Js/Php',
            works: [
                {
                    description: 'Application web de l\'entreprise Global Digital Agency', img: 'gda.png',
                    link: 'https://www.gda-services.com'
                }
            ]
        },
        {
            lang: 'MERN Stack',
            works: [
                {
                    description: "France-Assist- En ligne - Une refonte d'une application web(avec 300 et quelques utilisateurs) pour un client",
                     img: 'franceAssist.jpg',
                    link: 'https://france-assist.fr'
                },
                { description: 'Stuud - En développement -Un mini reseau social pour le partage de cours pour les etudiant',
                 img: 'stuud.jpg', link: 'https://stuud-app.herokuapp.com/' },
            ]
        },
        {
            lang: 'GraphQL/Apollo Js',
            works: [
                { description: "Wiki-Movie - En ligne - Un mini site pour ajouter/modifier/liker/disliker/commenter des films,"+
                "c'est le projet parachevant ma formation GraphQL/Apollo Js",
                 img: 'graphQl.png', link: 'https://wiki-movies.herokuapp.com/' },
            ]
        },
        {
            lang: 'Next Js',
            works: [
                { description: "Pizza-MPedia - En ligne - Une sorte de mini E-commerce de achat/livraison de pizza avec un espace admin pour le restaurateur/vendeur."+
                "c'est le projet parachevant ma formation Next Js",
                 img: 'pizzapedia.jpg', link: 'https://pizza-pedia.netlify.app/' },
            ]
        },
        
    ];
    const [currentWork, setCurrentWork] = useState(0);

    return <div className="workPart" id="pcWork">
        <div className="partTitle">
            <h1>Mes travaux</h1>
        </div>

        <Fade top cascade>
            <section className='technoSelector'>
                {
                    travaux.map((trv, index) => <label key={"techno title nb" + index}
                        className={currentWork == index ? 'tsSelected' : ""} >
                        <span>{trv.lang} </span>
                        <input type="radio" name="techno" id={'tech' + index}
                            onClick={(event) => setCurrentWork(index)}
                        />
                    </label>)
                }
            </section>
        </Fade>

        {
            <Fade bottom cascade key={new Date()}>
                <div className="wp-workList" >
                    {
                        travaux[currentWork].works.map((trvw, index) => <div key={'trvw' + index}>
                            <img name="slideLeft" src={require('../Assets/img/' + trvw.img).default} />
                            <div className="clickOn" >
                                <p>{trvw.description}</p>
                                <a href={trvw.link}>Voir le projet</a>
                            </div>
                        </div>)
                    }
                </div>
            </Fade>

        }


    </div>
}

export default Travaux;