import { Fade } from 'react-reveal';
import Pulse from 'react-reveal/Pulse';
import { Typewriter } from 'react-simple-typewriter';


const HomeBanner = () => {
    return <div className="home-banner" >
        <div className="hp-presentation">
            <div>
                <section>
                    <h1>
                        Evans Djossouvi
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
                        <a href={require('../../Assets/cv.pdf').default} target="_blank">
                            Mon cv</a>
                    </section>
                </Fade>
            </div>
            <Pulse>
                <img src={require('../../Assets/img/metable.png')} />
            </Pulse>
        </div>

    </div>

}


export default HomeBanner;