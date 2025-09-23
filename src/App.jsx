import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import StudentPage from "./components/StudentPage.jsx";
import AdminDashboard from "./admin/AdminDashboard.jsx";
import PerformanceOptimizer from "./components/PerformanceOptimizer.jsx";
import BuildInfo from "./components/BuildInfo.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import "./App.css";
import "./App-mobile.css";
import "./index.css";
import "./index-mobile.css";
import useScrollAnimation from "./js/useScrollAnimation.js";

function App() {
  useScrollAnimation();
  return (
    <Router>
      <BuildInfo />
      <PerformanceOptimizer />
      <Routes>
        {/* Home page route */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <ScrollToTop />
            </>
          }
        />

        {/* Admin dashboard route */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Student pages route */}
        <Route path="/:studentId" element={<StudentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
