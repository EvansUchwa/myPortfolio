import "./Assets/css/anim.css";
import "./Assets/css/index.css";
import "./Assets/css/app.css";
import "./Assets/css/slick/slick.css";
import "./Assets/css/slick/slick-theme.css";


import { Route, Routes, useLocation } from "react-router-dom";
import Accueil from "./Routes/Accueil";
import Contact from "./Routes/Contact";
import Apropos from "./Routes/Apropos";
import { AsideNav, MenuNavigatorArrowAndIndicator, TopNav } from "./GlobalComponents/Nav";
import "./Assets/css/materialdesignicons.min.css";
import Travaux from "./Routes/Travaux";
import Competences from "./Routes/Competences";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Slider from "react-slick/lib/slider";

function App() {
  const location = useLocation();
  const [routePath, setRoutePath] = useState(location.pathname)

  useEffect(() => {
    setRoutePath(location.pathname)
    if (document.querySelector('.containerVisibleRotate')) {
      document.querySelector('.toggleNavIcon').setAttribute('class', 'toggleNavIcon mdi mdi-menu')
      document.querySelector('.containerVisibleRotate').setAttribute('class', 'containerVisible')
    }

  }, [location])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      {/* <MenuNavigatorArrowAndIndicator routePath={routePath} /> */}
      <AsideNav />
      <div className="container">
        <div className="containerHided">
          <section className="chNavLink">
            <Link to="/" className="navBtn">Accueil</Link>
            <Link to="/Apropos" className="navBtn" >A propos</Link>
            <Link to="/Competences" className="navBtn">Compétences</Link>
            <Link to="/Travaux" className="navBtn" >Travaux</Link>
            <Link to="/Contact" className="navBtn">Contact</Link>
          </section>
        </div>

        <div className="containerVisible">
          <TopNav />
          <Slider {...settings}>
            <Accueil />
            <Apropos />
            <Travaux />
            <Competences />
            <Contact />
          </Slider>
          {/* <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/Apropos" element={<Apropos />} />
            <Route path="/Travaux" element={<Travaux />} />
            <Route path="/Competences" element={<Competences />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes> */}
        </div>
      </div>
    </>
  );
}

export default App;
