import HomeBanner from "../routeComponents/accueil/banner";
import HomeAbout from "../routeComponents/accueil/about";

import HomeContact from "../routeComponents/accueil/contact";
import HomeSkills from "../routeComponents/accueil/skills";
import HomeProjects from "../routeComponents/accueil/works";

const Accueil = () => {
    return <div className="home" >
        <HomeBanner />
        <HomeAbout />

        <HomeSkills />
        <HomeProjects />
        <HomeContact />
    </div>

}


export default Accueil;