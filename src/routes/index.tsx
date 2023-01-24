import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import {
  HomePage,
  ContatoPage,
  LojaPage,
  RegrasPage,
  SobrePage,
  SuportePage,
} from "../pages";

const NavigationRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/loja" element={<LojaPage />} />
        <Route path="/regras" element={<RegrasPage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/suporte" element={<SuportePage />} />
      </Routes>
    </Router>
  );
};

export default NavigationRoutes;
