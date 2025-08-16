import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
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
    <>
      <BuildInfo />
      <PerformanceOptimizer />
      <Navbar />
      <Home />
      <ScrollToTop />
    </>
  );
}

export default App;
