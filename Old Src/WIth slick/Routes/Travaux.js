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
                    description: 'Univearn(Premier projet) ', img: 's7.png',
                    link: 'https://evansuchwa.github.io/UnivearnTemplate/connexion.html'
                },
                {
                    description: 'Une integrations pour une entreprise où je suis en freelance', img: 'gdaLearn.png',
                    link: 'https://gda-e-learn.netlify.app'
                },
                {
                    description: 'Une refonte de site pour un client(tjr en cours)', img: 'franceAssist.png',
                    link: 'https://fa-remake.netlify.app/'
                },
            ]
        },
        {
            lang: 'React Js',
            works: [
                { description: 'Todo list app(Premier projet) ', img: 's1.png', link: 'https://evans-todoapp-reacft.netlify.app' },
                { description: 'Mon portfolio', img: 's8.png', link: 'https://evansdsv-portfolio.netlify.app/' },
                { description: 'E-commerce sur les vêtement(pour parachever ma formation) ', img: 's2.png', link: 'https://evans-todoapp-reacft.netlify.app' },
                {
                    description: 'Application web de l\'entreprise Global Digital Agency', img: 'gda.png',
                    link: 'https://www.gda-services.com'
                },

            ]
        },
        {
            lang: 'Vue Js',
            works: [
                { description: 'Mini E-commerce sur les montre(Premier projet) ', img: 's3.png', link: 'https://wesh-vue.netlify.app' },
                { description: 'E-commerce sur des produit(pour parachever ma formation) ', img: 's4.png', link: 'https://noah-ecommerce-vueJs.netlify.app' },
            ]
        },
        {
            lang: 'Php et Laravel',
            works: [
                { description: 'AHime(site d\'annonce) ', img: 's5.png', link: 'http://ahime.rf.gd/' },
                { description: 'Mini blog de post d\'article(Premier projet) ', img: 's6.png', link: '#' }
            ]
        }
    ];
    const [currentWork, setCurrentWork] = useState(0);

    return <div className="workPart" id="pcWork">
        <div className="partTitle">
            <h1>Mes travaux</h1>
        </div>
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
        {
            <div className="wp-workList" >
                {/* <h2>Avec {travaux[currentWork].lang}</h2> */}
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

        }


    </div>
}

export default Travaux;