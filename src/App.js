import * as React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import HelpingFeatures from "./components/HelpingFeatures/HelpingFeatures";
import MisionVision from "./components/MisionVision/MisionVision";
import Services from "./components/Services/Services";
import HowToBuy from "./components/HowToBuy/HowToBuy";
import Contacto from "./pages/contacto/Contacto";
import ComoComprar from "./pages/ComoComprar/ComoComprar";
import Blog from "./pages/blog/blog";
import Huertos from "./pages/huertos/huertos";
import Cultivo from "./pages/cultivo/cultivo";
import Slider from "./components/Slider/Slider";
import RevolutionSlider from "./components/RevolutionSlider/RevolutionSlider";
import Comerciales from "./pages/comerciales/Comerciales";

function Inicio() {
  return (
    <>
      <RevolutionSlider />
      <About />
      <MisionVision />
      <Services />
      <HelpingFeatures />
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
      <Route path="/huertos" element={<Huertos />} />
      <Route path="/cultivo" element={<Cultivo />}></Route>
      <Route path="/invernaderos-comerciales" element={<Comerciales />}></Route>
    </Routes>
  );
}

export default App;
