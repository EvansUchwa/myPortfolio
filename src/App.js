import "./Assets/css/index.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import Accueil from "./Routes/Accueil";
import { AsideNav, MenuNavigatorArrowAndIndicator, TopNav } from "./uikits/Nav";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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
  return (
    <>
      <MenuNavigatorArrowAndIndicator routePath={routePath} />
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
          <Routes>
            <Route path="/" element={<Accueil />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
