import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PhListLight } from "./icons";


export const MenuNavigatorArrowAndIndicator = ({ routePath }) => {
  const navigate = useNavigate();
  const routes = ['/', '/Apropos', '/Competences', '/Travaux', '/Contact'];
  const searchIndex = routes.indexOf(routePath);
  const [routeNumber, setRouteNumber] = useState(searchIndex + 1)

  useEffect(() => {
    setRouteNumber(searchIndex + 1)
  }, [routePath])

  function changeRoute(routePath, typeChange) {
    if (typeChange == 'next') {
      // console.log(searchIndex)
      if (searchIndex != -1) {
        navigate(routes[searchIndex + 1])
        // console.log(routes[searchIndex + 1])
      }
    } else {
      if (searchIndex != -1) {
        navigate(routes[searchIndex - 1])
        // console.log(routes[searchIndex + 1])
      }
    }

  }
  return <div className="menuNavigatorArrowAndIndicator">
    {
      routeNumber != 1 ?
        <i className='mdi mdi-chevron-left' onClick={() => changeRoute(routePath, 'prev')}></i>
        :
        <i className='mdi mdi-chevron-left colorDisabled'></i>
    }

    <section>
      <span>{routeNumber} </span>
      sur
      <b>5</b>
    </section>
    {
      routeNumber < 5
        ? <i className="mdi mdi-chevron-right" onClick={() => changeRoute(routePath, 'next')}></i>
        : <i className="mdi mdi-chevron-right colorDisabled" ></i>
    }


  </div>
}
export const AsideNav = () => {
  function handleMenu(event) {
    if (document.querySelector('.containerVisibleRotate')) {
      event.currentTarget.setAttribute('class', 'mdi mdi-menu toggleNavIcon')
    } else {
      event.currentTarget.setAttribute('class', 'mdi mdi-close menuBtnHasClick toggleNavIcon')
    }
    document.querySelector('.containerVisible').classList.toggle('containerVisibleRotate')
  }
  return (
    <aside className="fixedAsideNav">
      <section className="fan-menuBtn">
        <PhListLight onClick={(event) => handleMenu(event)} />
      </section>

      <section>
        <a href="https://github.com/EvansUchwa">
          <i className="mdi mdi-github"></i>
        </a>
        <a href="https://wa.me/22994677352" target='_blank' className=' whatsappColor'>
          <i className="mdi mdi-whatsapp"></i>
        </a>
        <a href="mailto:johnsonevans686@gmail.com" target='_blank' className='googleColor'>
          <i className="mdi mdi-gmail"></i>
        </a>
      </section>
    </aside>
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
