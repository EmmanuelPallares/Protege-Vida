import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
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
import { createClient, Provider } from "urql";

const client = createClient({
  url: "https://api-us-west-2.graphcms.com/v2/ckzk7dmy5319j01xsbogw3y2t/master",
});

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
