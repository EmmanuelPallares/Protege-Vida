import * as React from "react";
import * as ReactDOM from "react-dom";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "../src/index.css";
import Preloader from "./components/Preloader/Preloader";
import { createClient, Provider } from "urql";

const client = createClient({
  url: "https://api-us-west-2.graphcms.com/v2/ckzk7dmy5319j01xsbogw3y2t/master",
});
export const Productos = [
  {
    id: 1,
    name: "Cultivo",
    icon: "https://i.imgur.com/jq76ja5.png",
  },
  {
    id: 3,
    name: "Plagas",
    icon: "https://i.imgur.com/jq76ja5.png",
  },
  {
    id: 4,
    name: "Riego Insumos",
    icon: "https://i.imgur.com/jq76ja5.png",
  },
  {
    id: 5,
    name: "Fertilizantes",
    icon: "https://i.imgur.com/jq76ja5.png",
  },
  {
    id: 6,
    name: "Biogreen",
    icon: "https://i.imgur.com/jq76ja5.png",
  },
  {
    id: 7,
    name: "Invernaderos Mediana Escala",
    icon: "https://i.imgur.com/jq76ja5.png",
  },
  {
    id: 8,
    name: "Invernaderos Escala Comercial",
    icon: "https://i.imgur.com/jq76ja5.png",
  },
];
ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <Provider value={client}>
        <Navbar />
        <App />
        <Preloader />
        <Footer />
      </Provider>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);
