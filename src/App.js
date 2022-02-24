import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";
import About from "./components/About/About";
import Ourservices from "./components/Ourservices/Ourservices";
import Choose from "./components/Choose/Choose";
import MostImportantFeatures from "./components/MostImportantFeatures/MostImportantFeatures";
import Footer from "./components/Footer/Footer";
import HelpingFeatures from "./components/HelpingFeatures/HelpingFeatures";
import MisionVision from "./components/MisionVision/MisionVision";
import Services from "./components/Services/Services";
import HowToBuy from "./components/HowToBuy/HowToBuy";
import Contacto from "./pages/contacto/Contacto";
import ComoComprar from "./pages/ComoComprar/ComoComprar";
import Blog from "./pages/blog/blog";
import LastProjects from "./components/LastProjects/LastProjects";

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
      {/* <LastProjects /> */}
      <HowToBuy />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/como-comprar" element={<ComoComprar />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
