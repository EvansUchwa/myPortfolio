import { Button, SectionTitle } from '../../uikits/other';
import Slider from 'react-slick';

const HomeProjects = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        customPaging: function (i) {
            return (
                <span>{i}</span>
            );
        },
    };
    const travaux = [
        {
            name: 'France-Assist',
            description: "Une refonte d'une application web pour un client",
            img: 'franceassist.webp',
            link: 'https://france-assist.fr'
        },
        {
            name: 'Cleopatra',
            description: "Un site de rencontre pour adulte pour un client du Canada,la plateforme compotabilise a ce jour 4000 utilisateur dont 500 actifs",
            img: 'cleopatra.webp',
            link: 'https://france-assist.fr'
        },
        {
            name: 'Dofra',
            description: "Une application web pour permettre aux proffesionnelle du demenagement et du transpiort de biens en France de pouvoir trouver des clients",
            img: 'dofra.webp',
            link: 'https://france-assist.fr'
        },
        {
            name: 'Refi',
            description: "Une application web pour le compte d'un client qui a son entreprise immobiliere proposant des services d'assistance immobilier,la plateforme facilite les interaction entre les clients et l'entreprise de mon client",
            img: 'refi.webp',
            link: 'https://france-assist.fr'
        },
        {
            name: "MinanKon Martial Arts",
            description: "Un site vitrine pour un client coach de Taekwondo", img: 'maxCoach.webp',
            link: 'https://max-coach.vercel.app'
        },
        {
            name: 'DidaFire',
            description: "Un site vitrine pour un client pour un client coach de développement personnel", img: 'didaFire.webp',
            link: 'https://didafir.vercel.app'
        },
        {
            name: 'Univeran',
            description: 'Un de mes nombreux Premier projet HTML/CSS ', img: 's7.webp',
            link: 'https://evansuchwa.github.io/UnivearnTemplate/connexion.html'
        },

        {
            name: 'Todo List App',
            description: 'Todo list app(Premier projet) ',
            img: 's1.webp', link: 'https://evans-todoapp-reacft.netlify.app'
        },
        {
            name: 'Portfolio',
            description: 'Mon portfolio',
            img: 's8.webp', link: 'https://evansdsv-portfolio.netlify.app/'
        },
        {
            name: 'AnimStore',
            description: 'Mini E-commerce sur les vêtements pour parachever ma formation React ',
            img: 's2.webp', link: 'https://evans-react-ecommerce.netlify.app'
        },
        // {
        //     description: 'Wesh - En ligne - Mini E-commerce sur les montre,mon Premier projet Vue Js ',
        //     img: 'wesh.webp',
        //     link: 'https://wesh-vue.netlify.app'
        // },
        // {
        //     description: 'NoahStore - -En ligne - Petit E-commerce avec une base de donnée Mysql pour parachever ma formation vue Js ',
        //     img: 'noahStore.webp',
        //     link: 'https://noah-ecommerce-vueJs.netlify.app'
        // },
        {
            name: 'Tags-concept',
            description: "Un site vitrine pour un client des USA",
            img: 'tagConcept.webp',
            link: 'https://france-assist.fr'
        },
        {
            name: 'Stuud',
            description: 'En développement- Un mini reseau social pour le partage de cours pour les etudiant',
            img: 'stuud.webp', link: 'https://stuud-app.herokuapp.com/'
        },
        {
            name: 'Wiki-Movie',
            description: "Un mini site pour ajouter/modifier/liker/disliker/commenter des films," +
                "c'est le projet parachevant ma formation GraphQL/Apollo Js",
            img: 'graphQl.webp', link: 'https://wiki-movies.herokuapp.com/'
        },
        {
            name: 'Pizza-Pedia',
            description: "Une sorte de mini E-commerce de achat/livraison de pizza avec un espace admin pour le restaurateur/vendeur." +
                "c'est le projet parachevant ma formation Next Js",
            img: 'pizzapedia.webp', link: 'https://pizza-pedia.netlify.app/'
        }
    ];

    return <div className="home-work">
        <SectionTitle title="Mes travaux" />

        <div className="wp-workList" >
            <Slider {...settings} >
                {
                    travaux.map((item, i) => <div key={'work nb ' + i} className='workCardContainer'>
                        <article className='workCard'>
                            <img src={'/img/' + item.img}
                                alt="random" />
                            <section>
                                <img src={'/img/' + item.img}
                                    alt="random" />
                                <h3>{item.name}</h3>
                                <p>
                                    {item.description}
                                </p>
                                <div>
                                    <Button text={'Visitez'} />
                                </div>
                            </section>
                        </article>
                    </div>)
                }
            </Slider>

        </div>
    </div>
}

export default HomeProjects;