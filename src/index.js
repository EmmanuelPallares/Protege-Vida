import * as React from "react";
import * as ReactDOM from "react-dom";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "../src/css/bootstrap.css";
import "../src/css/color.css";
import "../src/css/animate.min.css";
import "../src/css/bg-color-settings.css";
import "../src/css/default-animation.css";
import "../src/css/extralayers.css";
import "../src/css/font-awesome.min.css";
import "../src/css/jquery.fancybox.css";
import "../src/css/loader.css";
import "../src/css/owl.css";
import "../src/css/responsive.css";
import "../src/css/settings.css";
import "../src/css/style.css";
import Preloader from "./components/Preloader/Preloader";
import { createClient, Provider } from "urql";

const client = createClient({
  url: "https://api-us-west-2.graphcms.com/v2/ckzk7dmy5319j01xsbogw3y2t/master",
});

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <Provider value={client}>
        <Navbar />
        <App />
        <Preloader />
      </Provider>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);
