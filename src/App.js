import { BrowserRouter as Router, Routes, Link } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";
import About from "./components/About/About";
import Ourservices from "./components/Ourservices/Ourservices";
import Choose from "./components/Choose/Choose";
import MostImportantFeatures from "./components/MostImportantFeatures/MostImportantFeatures";
import Footer from "./components/Footer/Footer";
import HelpingFeatures from "./components/HelpingFeatures/HelpingFeatures";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <About />
        <MostImportantFeatures />
        <Ourservices />
        <Choose />
        <HelpingFeatures />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
