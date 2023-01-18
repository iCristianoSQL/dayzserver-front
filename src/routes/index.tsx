import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages";

const NavigationRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="home" />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default NavigationRoutes;
