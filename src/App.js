import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";
import About from "./components/About/About";
import Ourservices from "./components/Ourservices/Ourservices";
import Choose from "./components/Choose/Choose";
import MostImportantFeatures from "./components/MostImportantFeatures/MostImportantFeatures";
import Footer from "./components/Footer/Footer";
import HelpingFeatures from "./components/HelpingFeatures/HelpingFeatures";
import MisionVision from "./components/MisionVision/MisionVision";
import Services from "./components/Services/Services";

function Inicio() {
  return (
    <>
      <Navbar />
      <About />
      <MisionVision />
      <Services />
      {/* <MostImportantFeatures />
      <Ourservices /> */}
      {/* <Choose /> */}
      <HelpingFeatures />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/About" element={<About />} />
    </Routes>
  );
}

export default App;
