import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./home";
import { Landing } from "./Landing";
import OurGames from "./OurGames/OurGames";
import Tournaments from "./Tournaments/Tournaments";
import AddTournament from "./AddTournament/AddTournament";
import JoinInATournament from "./JoinInATournament/JoinInATournament";
import JoinInAGlobalTournament from "./JoinInAGlobalTournament/JoinInAGlobalTournament";
import DataTournament from "./DataTournament/DataTournament";
import path from "path";
import { VixelPay } from "./Pay/Vixel";
import Qualifying from "./Qualifying/Qualifying";

const routes = [
  { path: "/", Page: Landing },
  { path: "/home", Page: Home },
  { path: "/games", Page: OurGames },
  { path: "/tournaments", Page: Tournaments},
  { path: "/addTournament", Page: AddTournament},
  { path: "/joinInATournament", Page: JoinInATournament},
  { path: "/joinInAGloblarTournament", Page: JoinInAGlobalTournament},
  { path: "/dataTournament", Page: DataTournament}
];

function Routing() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      {routes.map(({ path, Page }) => (
        <Route key={path} path={path} element={<Page />} />
      ))}
    </Routes>
  );
}

export { Routing };
