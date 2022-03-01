import React from "react";
import { Link } from "react-router-dom";
const Productos = [
  {
    id: 1,
    name: "Huertos",
  },
  {
    id: 2,
    name: "Plagas",
  },
  { id: 3, name: "Riego Insumos" },
  {
    id: 4,
    name: "Fertilizantes",
  },
  {
    id: 5,
    name: "Cultivo",
  },
  {
    id: 6,
    name: "Biogreen",
  },
  {
    id: 7,
    name: "Invernaderos Mediana Escala",
  },
  {
    id: 8,
    name: "Invernaderos Escala Comercial",
  },
  {
    id: 9,
    name: "Accesorios para invernadero",
    path: "/accesorios-para-invernadero",
  },
];
const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div class="main-footer">
          <div class="container">
            <div class="row">
              <div class="col-md-3 col-sm-6">
                <div class="footer-widget">
                  <div class="footer-logo">
                    <Link to="/">
                      <h3 class="footer-title">Quultiva</h3>
                    </Link>
                  </div>
                  <div class="footer-content">
                    <p>Agricultura sustentable al alcance de todos</p>
                    <ul class="ft-list">
                      <li>
                        <span>Dirección :</span>38445 La Coalanda, GTO
                      </li>
                      <li>
                        <span>Teléfono :</span>
                        <a href="callto:0123456789">( +1 ) 456 114 81 11</a>
                      </li>
                      <li>
                        <span>Email :</span>
                        <a href="mailto:protegegh@gmail.com ">
                          protegegh@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="footer-widget">
                  <h3 class="footer-title">Servicios</h3>
                  <div class="footer-content">
                    <ul class="ft-list">
                      {Productos.map((id, name, path) => (
                        <li key={name}>
                          <Link to={path}>
                            <i class="fa fa-angle-right" aria-hidden="true"></i>

                            {id.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="footer-widget">
                  <h3 class="footer-title">Recientes Blogs</h3>
                  <div class="footer-content">
                    <div class="tweet">
                      <i class="fa fa-twitter"></i>
                      <div class="twt-txt">
                        <a href="#">
                          Massa dolor. Blandit tempor. Facilisis habitasse.
                          Mollis. Tristique.
                        </a>
                        <span>24 minuts ago</span>
                      </div>
                    </div>
                    <div class="tweet">
                      {" "}
                      <i class="fa fa-twitter"></i>
                      <div class="twt-txt">
                        {" "}
                        <a href="#">
                          Massa dolor. Blandit tempor. Facilisis habitasse.
                          Mollis. Tristique.
                        </a>{" "}
                        <span>3 hours ago</span>
                      </div>
                    </div>
                    <div class="tweet">
                      {" "}
                      <i class="fa fa-twitter"></i>
                      <div class="twt-txt">
                        {" "}
                        <a href="#">
                          Massa dolor. Blandit tempor. Facilisis habitasse.
                          Mollis. Tristique.
                        </a>{" "}
                        <span>10 days ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="footer-widget">
                  <h3 class="footer-title">Instagram Feed</h3>
                  <div class="footer-content">
                    <ul class="ins-img">
                      <li>
                        <a href="#">
                          <img src="images/instagram/1.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="images/instagram/2.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="images/instagram/3.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="images/instagram/4.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="images/instagram/5.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="images/instagram/6.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="images/instagram/7.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="images/instagram/8.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="images/instagram/9.png" alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <ul class="media-footer">
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-google-plus" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="ftr-btm">
          <p>
            &copy; 2021 Protege Vida Develop by
            <a href="www.vitoz.dev">vitoz.dev</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
