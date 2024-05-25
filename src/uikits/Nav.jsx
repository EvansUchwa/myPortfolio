import { useState } from "react";
import { Link } from "react-router-dom";
import { PhListLight, PhX } from "./icons";

// https://wa.me/22994677352
// https://github.com/EvansUchw
// mailto:johnsonevans686@gmail.com
export const AsideNav = () => {
  const [navOpened, setOpened] = useState(false);
  function handleMenu() {
    document.querySelector('.containerVisible').classList.toggle('containerVisibleRotate')
    setOpened(prev => !prev)
  }
  function onMenuLinkClick(event) {
    handleMenu()
    setTimeout(() => document.querySelector('.' + event.target.id).scrollIntoView(), 500)

  }
  return (
    <>
      <div className="containerHided">
        <section className="chNavLink">
          <span id="home-banner" className="navBtn" onClick={onMenuLinkClick}>Accueil</span>
          <span id="home-about" className="navBtn" onClick={onMenuLinkClick} >A propos</span>
          <span id="home-skill" className="navBtn" onClick={onMenuLinkClick}>Compétences</span>
          <span id="home-work" className="navBtn" onClick={onMenuLinkClick} >Travaux</span>
          <span id="home-contact" className="navBtn" onClick={onMenuLinkClick}>Contact</span>
        </section>
      </div>
      <aside className="fixedAsideNav" onClick={(event) => handleMenu(event)}>
        {
          navOpened ? <PhX /> : <PhListLight />
        }
      </aside>
    </>
  );
};

export const TopNav = () => {
  return (
    <section className="pageHeader">
      <div className="logo">
        <Link to="/">E-Dev.</Link>
      </div>
    </section>
  );
};
