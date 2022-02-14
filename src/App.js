import { BrowserRouter as Router, Routes, Link } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";
import About from "./components/About/About";
import Ourservices from "./components/Ourservices/Ourservices";
import Choose from "./components/Choose/Choose";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <About />
        <Ourservices />
        <Choose />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
