import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./home";
import { Landing } from "./Landing";
import OurGames from "./OurGames/OurGames";
import Tournaments from "./Tournaments/Tournaments";
import AddTournament from "./AddTournament/AddTournament";
import JoinInATournament from "./JoinInATournament/JoinInATournament";

const routes = [
  { path: "/", Page: Landing },
  { path: "/home", Page: Home },
  { path: "/games", Page: OurGames },
  { path: "/tournaments", Page: Tournaments},
  { path: "/addTournament", Page: AddTournament},
  { path: "/joinInATournament", Page: JoinInATournament}
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
