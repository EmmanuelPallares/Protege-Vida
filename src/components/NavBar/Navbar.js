import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <header id="header" className="nav-style-4 four nav-on-top">
        <div className="bg-default top-header">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <ul className="top-info-left">
                  <li>Bienvenido a ProtegeVida</li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="top-info-right">
                  <div className="soc-icon pull-right">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      {" "}
                      <i className="fa fa-linkedin"></i>{" "}
                    </a>
                  </div>
                  <ul className="user-nav pull-right">
                    <li className="dropdown">
                      <a
                        className="user-toggle"
                        data-toggle="dropdown"
                        href="#"
                      >
                        Redes Sociales
                      </a>
                      {/* <ul className="cart-dropdown account">
                         <li>
                          <a href="#">Sign in</a>
                        </li>
                        <li>
                          <a href="#">Join us</a>
                        </li> 
                      </ul> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="middle-header padding-15 bg-white">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-3 col-xs-6">
                <div className="navbar-header">
                  <a className="navbar-brand" href="index.html">
                    <img
                      className="nav-logo"
                      src="images/logo/logo3.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-9 col-sm-9 col-xs-6">
                <div className="contact-info">
                  <div className="middle_header_icon color-default">
                    <i className="flaticon-customer-service"></i>
                  </div>
                  <div className="contact-number">
                    <div>( +1 ) 507-465-6522</div>
                    <span>www.unigreen@info.com</span>
                  </div>
                </div>
                <div className="contact-location">
                  <div className="middle_header_icon color-default">
                    <i className="flaticon-check-in-marker"></i>
                  </div>
                  <div className="contact-number">
                    <div>3112 Roy Alley Denver 80216</div>
                    <span>Newyourk, USA</span>
                  </div>
                </div>
                <div className="btn-quote">
                  <a className="btn btn-primary" href="#">
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-dark">
          <div className="container">
            <nav className="navbar navbar-default">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>

                <a className="navbar-brand visible991" href="index.html">
                  <img src="images/logo/logo.png" alt="" />
                </a>
              </div>

              <div
                className="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                <ul className="navigation nav navbar-nav navbar-left">
                  <li className="dropdown">
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                    >
                      Inicio
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="index.html">Home Page 1</a>
                      </li>
                      <li>
                        <a href="index_2.html">Home Page 2</a>
                      </li>
                      <li>
                        <a href="index_3.html">Home Page 3</a>
                      </li>
                      <li className="first">
                        <a href="index_4.html">Home Page 4</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                    >
                      Proyectos
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="projects-full.html">Projects Full Width</a>
                      </li>
                      <li>
                        <a href="projects-box.html">Projects Box Width</a>
                      </li>
                      <li>
                        <a href="projects-classNameic.html">
                          Projects ClassNameic
                        </a>
                      </li>
                      <li>
                        <a href="single-project.html">Single Project</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                    >
                      Servicios
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="tree-plantation.html">Tree Planting</a>
                      </li>
                      <li>
                        <a href="garden-care.html">Garden Care</a>
                      </li>
                      <li>
                        <a href="watering-garden.html">Watering Garden</a>
                      </li>
                      <li>
                        <a href="garden-design.html">Garden Design</a>
                      </li>
                      <li>
                        <a href="gutter-repair.html">Gutter Repair</a>
                      </li>
                      <li>
                        <a href="lawn-care.html">Lawn Care</a>
                      </li>
                      <li>
                        <a href="land-design.html">Land Design</a>
                      </li>
                      <li>
                        <a href="agricultural-research.html">
                          Agricultural Research
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                    >
                      Insumos
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="shop.html">Shop</a>
                      </li>
                      <li>
                        <a href="shop-single.html">Shop Single</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                    >
                      Urbano
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="dropdown">
                        <a
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          href="#"
                        >
                          Comercial
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="service.html">Services-Style-1</a>
                          </li>
                          <li>
                            <a href="service-style-2.html">Services-Style-2</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          href="#"
                        >
                          Nosotros
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="about-us.html">About-Style-1</a>
                          </li>
                          <li>
                            <a href="about-us-2.html">About-Style-2</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          href="#"
                        >
                          Events{" "}
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                        <ul className="dropdown-menu">
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
                      <li className="dropdown">
                        <a
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          href="#"
                        >
                          Gallery{" "}
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="gallery.html">Gallery Basic</a>
                          </li>
                          <li>
                            <a href="gallery_2.html">Gallery ClassNameic</a>
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
                  <li className="dropdown">
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                    >
                      Blog{" "}
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="blog.html">Blog List</a>
                      </li>
                      <li>
                        <a href="blog-detail.html">Single Blog</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contacto</a>
                  </li>
                  <li>
                    <a href="cart.html">Cart</a>
                  </li>
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
