import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import TopBar from "./TopBar/TopBar";
import ContactBar from "./ContactBar/ContactBar";
import $ from "jquery";
// import { gql, useQuery } from "urql";
// const navegacionsConnection = gql`
//   {
//     navegacionsConnection {
//       edges {
//         node {
//           elemento
//           slugCategorias
//         }
//       }
//     }
//   }
// `;
const Navbar = () => {
  useEffect(() => {
    $("#bs-example-navbar-collapse-1").each(function () {
      $(".dropdown-toggle").on("click", function () {
        if ($(window).width() < 992) {
          if ($(this).parent(".dropdown").hasClass("visible")) {
            $(this)
              .parent(".dropdown")
              .children(".dropdown-menu")
              .first()
              .stop(true, true)
              .slideUp(300);
            $(this).parent(".dropdown").removeClass("visible");
          } else {
            $(this)
              .parent(".dropdown")
              .children(".dropdown-menu")
              .stop(true, true)
              .slideDown(300);
            $(this).parent(".dropdown").addClass("visible");
          }
        }
      });

      $(window).on("resize", function () {
        if ($(window).width() > 991) {
          $(".dropdown-menu").removeAttr("style");
          $(".dropdown ").removeClass("visible");
        }
      });
      if ($(".main-menu li.dropdown ul").length) {
        $(".main-menu li.dropdown").append('<div class="dropdown-btn"></div>');

        //Dropdown Button
        $(".main-menu li.dropdown .dropdown-btn").on("click", function () {
          $(this).prev("ul").slideToggle(500);
        });

        //Disable dropdown parent link
        $(".navigation li.dropdown > a").on("click", function (e) {
          e.preventDefault();
        });
      }
    });
  }, []);
  // const [result] = useQuery({ query: navegacionsConnection });

  // const { data, fetching, error } = result;

  // if (fetching) return <p>Fetching products</p>;
  // if (error) return <p>Oh no... {error.message}</p>;

  // {result.data.navegacionsConnection.edges[2].node.elemento}
  return (
    <>
      <header id="header" class="nav-style-4 four nav-on-top">
        <TopBar />
        <ContactBar />
        <div class="bg-dark">
          <div class="container">
            <nav class="navbar navbar-default">
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                  aria-expanded="false"
                >
                  <span class="sr-only">Navegación</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>

                <a class="navbar-brand visible991" href="index.html">
                  Logo aqui
                </a>
              </div>

              <div
                class="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                {/* Inicio */}
                <ul class="navigation nav navbar-nav navbar-left">
                  <li class="dropdown">
                    <Link to="/">Inicio</Link>
                  </li>

                  {/* Productos*/}
                  <li class="dropdown">
                    <Link class="dropdown-toggle" data-toggle="dropdown" to="/">
                      Productos
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </Link>
                    <ul class="dropdown-menu">
                      <li>
                        <Link to="/huertos">Huertos</Link>
                      </li>
                      <li>
                        <Link to="/plagas">Plagas</Link>
                      </li>
                      <li>
                        <Link to="/riego-insumos">Riego Insumos</Link>
                      </li>
                      <li>
                        <Link to="/fertilizantes">Fertilizantes</Link>
                      </li>
                      <li>
                        <Link to="/cultivo">Cultivo</Link>
                      </li>
                      <li>
                        <Link to="/">Biogreen</Link>
                      </li>
                      <li>
                        <Link to="/">Invernaderos Mediana Escala</Link>
                      </li>
                      <li>
                        <Link to="/">Invernaderos Escala Comercial</Link>
                      </li>
                      <li>
                        <Link to="/">Accesorios para invernadero</Link>
                      </li>
                    </ul>
                  </li>

                  {/* Como Comprar */}
                  <li class="dropdown">
                    <Link
                      class="dropdown-toggle"
                      data-toggle="dropdown"
                      to="como-comprar"
                    >
                      Como Comprar
                    </Link>
                  </li>

                  {/* Blog */}
                  <li class="dropdown">
                    <Link
                      class="dropdown-toggle"
                      data-toggle="dropdown"
                      to="blog"
                    >
                      Blog
                    </Link>
                  </li>

                  {/* <div>
                     <li class="dropdown">
                    <a
                      class="dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                    >
                      Sub-Menús-Demo
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="dropdown">
                        <a
                          class="dropdown-toggle"
                          data-toggle="dropdown"
                          href="#"
                        >
                          <i
                            class="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a href="service.html">Services-Style-1</a>
                          </li>
                          <li>
                            <a href="service-style-2.html">Services-Style-2</a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a
                          class="dropdown-toggle"
                          data-toggle="dropdown"
                          href="#"
                        >
                          Nosotros
                          <i
                            class="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a href="about-us.html">About-Style-1</a>
                          </li>
                          <li>
                            <a href="about-us-2.html">About-Style-2</a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a
                          class="dropdown-toggle"
                          data-toggle="dropdown"
                          href="#"
                        >
                          Events{" "}
                          <i
                            class="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a href="event.html">Events</a>
                          </li>
                          <li>
                            <a href="event_detail.html">Event Detail</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="team.html">Our Team</a>
                      </li>
                      <li>
                        <a href="profile-page.html">Member Profile</a>
                      </li>
                      <li>
                        <a href="testimonials.html">Testimonials</a>
                      </li>
                      <li class="dropdown">
                        <a
                          class="dropdown-toggle"
                          data-toggle="dropdown"
                          href="#"
                        >
                          Gallery{" "}
                          <i
                            class="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a href="gallery.html">Gallery Basic</a>
                          </li>
                          <li>
                            <a href="gallery_2.html">Gallery classic</a>
                          </li>
                          <li>
                            <a href="gallery_3.html">Gallery Full</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="get_quote.html">Get Quote</a>
                      </li>
                      <li>
                        <a href="error.html">404 Page</a>
                      </li>
                    </ul>
                  </li> 
                  </div> */}

                  {/* Contacto */}
                  <li class="dropdown">
                    <Link
                      class="dropdown-toggle"
                      data-toggle="dropdown"
                      to="contacto"
                    >
                      Contacto
                    </Link>
                  </li>
                  <li>{/* <a href="contact.html">Contacto</a> */}</li>
                  {/* <li>
                    <a href="cart.html">Cart</a>
                  </li> */}
                  <li>{/* <a href="myaccount.html">My Account</a> */}</li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
