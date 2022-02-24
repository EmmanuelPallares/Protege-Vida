import React from "react";
import "./Navbar.css";
import TopBar from "./TopBar/TopBar";
import ContactBar from "./ContactBar/ContactBar";
import { gql, useQuery } from "urql";
const navegacionsConnection = gql`
  {
    navegacionsConnection {
      edges {
        node {
          elemento
          slugCategorias
        }
      }
    }
  }
`;
const Navbar = () => {
  const [result] = useQuery({ query: navegacionsConnection });

  const { data, fetching, error } = result;

  if (fetching) return <p>Fetching products</p>;
  if (error) return <p>Oh no... {error.message}</p>;
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
                  <img src="images/logo/logo.png" alt="" />
                </a>
              </div>

              <div
                class="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                <ul class="navigation nav navbar-nav navbar-left">
                  <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                      {result.data.navegacionsConnection.edges[0].node.elemento}
                    </a>
                  </li>
                  <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                      {result.data.navegacionsConnection.edges[1].node.elemento}
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="projects-full.html">Bio-Green---1</a>
                      </li>
                      <li>
                        <a href="projects-box.html">Bio-Green---2</a>
                      </li>
                      <li>
                        <a href="projects-classic.html">Bio-Green---3</a>
                      </li>
                      <li>
                        <a href="single-project.html">Bio-Green---4</a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                      {result.data.navegacionsConnection.edges[2].node.elemento}
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="tree-plantation.html">Comercial-Green---1</a>
                      </li>
                      <li>
                        <a href="garden-care.html">Comercial-Green---2</a>
                      </li>
                      <li>
                        <a href="watering-garden.html">Comercial-Green---3</a>
                      </li>
                      <li>
                        <a href="watering-garden.html">Comercial-Green---4</a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                      {result.data.navegacionsConnection.edges[3].node.elemento}
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="shop-single.html">Malla Sombra</a>
                      </li>
                      <li>
                        <a href="shop-single.html">Plástico</a>
                      </li>
                      <li>
                        <a href="shop-single.html">Semillas</a>
                      </li>
                      <li>
                        <a href="shop-single.html">Ferti-Riego</a>
                      </li>
                    </ul>
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

                  <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                      {result.data.navegacionsConnection.edges[4].node.elemento}
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="blog.html">Hidroponia</a>
                      </li>
                      <li>
                        <a href="blog-detail.html">Agricultura Protegida</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contacto</a>
                  </li>
                  {/* <li>
                    <a href="cart.html">Cart</a>
                  </li> */}
                  <li>
                    <a href="myaccount.html">My Account</a>
                  </li>
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
