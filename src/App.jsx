import "./assets/css/index.scss";
import "./assets/css/slick.min.css";

import { Route, Routes } from "react-router-dom";
import Accueil from "./routes/Accueil";
import { AsideNav } from "./uikits/Nav";
import Footer from "./uikits/footer";

function App() {
  return (
    <>
      <div className="container">
        <AsideNav />
        <div className="containerVisible">
          <Routes>
            <Route path="/" element={<Accueil />} />
          </Routes>
          <Footer />
        </div>
      </div>

    </>
  );
}

export default App;
