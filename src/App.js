import { BrowserRouter as Router, Routes, Link } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";
import About from "./components/About/About";
import Ourservices from "./components/Ourservices/Ourservices";
import Choose from "./components/Choose/Choose";
import MostImportantFeatures from "./components/MostImportantFeatures/MostImportantFeatures";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <About />
        <MostImportantFeatures />
        <Ourservices />
        <Choose />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
