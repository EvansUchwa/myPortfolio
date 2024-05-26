import { Button, LinkButton, SectionTitle } from '../../uikits/other';
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
            name: 'VidCensor',
            description: "Un projet en cours de développement consistant en un mini SaaS. Il vise à permettre aux YouTubers et à leurs monteurs de censurer efficacement leurs vidéos grâce à l'utilisation de l'IA.",
            img: 'vidcensor.webp',
            link: 'https://censor-vid.vercel.app/'
        },
        {
            name: 'France-Assist',
            description: "C'est avec une certaine fierté que j'ai contribué au développement de ce Saas pour un client. Cette application web offre aux Français la possibilité d'effectuer des simulations en ligne pour évaluer leurs droits aux aides sociales.",
            img: 'franceassist.webp',
            link: 'https://france-assist.fr'
        },
        {
            name: 'Cleopatra',
            description: "Une plateforme de rencontre pour adultes développée pour un client basé au Canada. Elle compte actuellement 4000 utilisateurs, dont 500 actifs.",
            img: 'cleopatra.webp',
            link: 'https://cleopatra.sx'
        },
        {
            name: 'Dofra',
            description: "Une application web visant à aider les professionnels du déménagement et du transport de biens en France à trouver des clients.",
            img: 'dofra.webp',
            link: 'https://dofra.fr'
        },
        {
            name: 'Refi',
            description: "Une plateforme web développée pour une entreprise immobilière. Elle facilite les interactions entre les clients et l'entreprise du client.",
            img: 'refi.webp',
            link: 'https://refi.bj'
        },
        {
            name: "MinanKon Martial Arts",
            description: "Un site vitrine conçu pour un coach de Taekwondo.",
            img: 'maxCoach.webp',
            link: 'https://max-coach-six.vercel.app/'
        },
        {
            name: 'DidaFire',
            description: "Un site vitrine créé pour un coach en développement personnel.",
            img: 'didaFire.webp',
            link: 'https://didafir.vercel.app'
        },
        {
            name: 'Todo List App',
            description: "Mon tout premier projet, une application de gestion de tâches basique.",
            img: 's1.webp',
            link: "https://to-do-app-react-snowy.vercel.app/"
        },
        {
            name: 'Portfolio',
            description: "Mon propre portfolio en ligne.",
            img: 's8.webp',
            link: 'https://edsv-portfolio.vercel.app/'
        },
        {
            name: 'Tags-concept',
            description: "Un site vitrine réalisé pour un client basé aux États-Unis.",
            img: 'tagConcept.webp',
            link: 'https://christian-startup-vitrine.vercel.app/'
        },
        {
            name: 'Card Design Simulator',
            description: "Un simulateur en ligne permettant de personnaliser des cartes de visite.",
            img: 'cardSimulator.webp',
            link: 'https://kloo-card-simulator.vercel.app/'
        },
        {
            name: 'Inperfect',
            description: "Une reproduction avec animations d'un site vitrine Webflow, réalisée pour le plaisir.",
            img: 'inperfect.webp',
            link: 'https://inperfect-test.vercel.app/'
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
                                    <LinkButton text={'Visitez'}
                                        link={item.link}
                                        target="_blank" />
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