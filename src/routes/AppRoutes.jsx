import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import GDD from "../pages/GDD";
import Help from "../pages/Help";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gdd" element={<GDD />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
}
