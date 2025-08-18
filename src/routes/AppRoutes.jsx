// Seu arquivo AppRoutes.jsx atualizado
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importe suas páginas
import Home from "../pages/Home";
import GDD from "../pages/GDD";
import Help from "../pages/Help";
import Leaderboard from "../pages/LeaderboardPage";
import Linktree from "../pages/Linktree";
import MainLayout from "../components/MainLayout"; 

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Grupo de rotas que USARÃO o Header e o Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gdd" element={<GDD />} />
          <Route path="/help" element={<Help />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Route>

        {/* Rota que NÃO usará o Header e o Footer */}
        <Route path="/linktree" element={<Linktree />} />
      </Routes>
    </Router>
  );
}