import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Manga from "./Manga"
import Manhva from "./Manhva"
import Newsanime from "./Newsanime"
import Legends from "./Legends"
import Aniron from "../components/aniron.png"
import Rebirth from "./Rebirth"
function App() {
  return (
    <div className="Header">
      <nav>
        <img className="aniron" src={Aniron} alt="" />
        <NavLink className="a" to="/raxmadjon/">Anime</NavLink>
        <NavLink className="a" to="/raxmadjon/manga">Manga</NavLink>
        <NavLink className="a" to="/raxmadjon/manhva">Manhva</NavLink>
        <NavLink className="a" to="/raxmadjon/newsanime">News Anime</NavLink>
        <NavLink className="a" to="/raxmadjon/legends">Legends</NavLink>
        <NavLink className="a" to="/raxmadjon/rebirth">Rebirth</NavLink>
      </nav>
      <Routes>
        <Route path="/raxmadjon/" element={<Home />} />
        <Route path="/raxmadjon/manga" element={<Manga />} />
        <Route path="/raxmadjon/manhva" element={<Manhva />} />
        <Route path="/raxmadjon/newsanime" element={<Newsanime />} />
        <Route path="/raxmadjon/legends" element={<Legends />} />
        <Route path="/raxmadjon/rebirth" element={<Rebirth />} />

      </Routes>
    </div>
  );
}

export default App;
