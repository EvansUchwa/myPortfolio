import { Slide, Fade, Reveal } from 'react-reveal';
import Pulse from 'react-reveal/Pulse';
import { Typewriter } from 'react-simple-typewriter';
import '../Assets/css/accueil.css'
const Accueil = () => {
    return <div className="homePart" >
        <div className="hp-presentation">
            <div>
                <section>
                    <h1>
                        {/* <Fade right cascade> */}
                        Evans
                        <br />
                        {/* </Fade>
                        <Fade right cascade> */}
                        Djossouvi
                        {/* </Fade> */}
                    </h1>
                    <Fade bottom cascade>

                        <b>Developpeur Web <br /> {' '}
                            <Typewriter
                                words={['Front-end', 'Back-end', 'Full-stack']}
                                loop={false}
                                cursor
                                cursorStyle='</>'
                                typeSpeed={250}
                                deleteSpeed={80}
                                delaySpeed={1000}
                            />.</b>
                    </Fade>

                </section>



                <Fade bottom cascade>
                    <section className='hpp-contactBtn'>
                        <a href="mailto:johnsonevans686@gmail.com">Me contacter</a>
                        <a href={require('../Assets/cv.pdf').default} target="_blank">
                            Mon cv</a>
                    </section>
                </Fade>

            </div>


            <Pulse>
                <img src={require('../Assets/img/me3.svg').default} />
            </Pulse>
        </div>

    </div>

}


export default Accueil;