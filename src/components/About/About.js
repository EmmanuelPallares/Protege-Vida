import React from "react";
import "./About.css";

const Nosotros = () => {
  return (
    <div className="margin-top-100">
      <section className="full-row about-company">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div
                className="wow fadeInLeft"
                data-wow-delay="300ms"
                data-wow-duration="700ms"
              >
                <h2 className="title">
                  <span>Welcome</span> to Our Company
                </h2>
                <span className="sub-title">
                  Elit ultricies adipiscing ornare. Rutrum sapien aliquet
                  mollis. Pretium condimentum. Cursus elit hac fames laoreet non
                  nec facilisis quis dui.
                </span>
                <div className="text-area">
                  <p>
                    Laoreet et est Inceptos litora turpis dis netus ad mus,
                    porttitor, risus curabitur magnis vehicula Mus dignissim mi
                    ut tincidunt porttitor eget cras platea. Tortor ligula
                    turpis lorem laoreet nunc curabitur mattis eget habitasse
                    malesuada quis suspendisse torquent imperdiet eleifend pede
                    praesent ridiculus mattis egestas. Integer ipsum imperdiet,
                    amet. Aliquam ipsum. Nulla. Nibh sit justo rutrum primis
                    cras id, pellentesque egestas iaculis felis ac vivamus
                    mattis, mollis. Montes quis aptent cubilia vulputate tempus.
                  </p>
                  <p>
                    Fames habitant sociis euismod taciti donec sollicitudin.
                    Lacinia potenti tortor mattis consectetuer potenti. Facilisi
                    lobortis. Eget, integer netus suspendisse iaculis odio justo
                    nulla aptent vehicula metus mollis.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="fact-counter">
                  <div className="col-lg-3 col-sm-3 col-xs-6">
                    <div
                      className="count color-dark wow fadeIn"
                      data-wow-delay="300ms"
                      data-wow-duration="700ms"
                    >
                      <span className="flat-icon flaticon-line-chart color-default"></span>
                      <div
                        className="amount count-num"
                        data-speed="3000"
                        data-stop="230"
                      >
                        230
                      </div>
                      <span>Employees</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-3 col-xs-6">
                    <div
                      className="count color-dark wow fadeIn"
                      data-wow-delay="300ms"
                      data-wow-duration="700ms"
                    >
                      <span className="flat-icon flaticon-user-1 color-default"></span>
                      <div
                        className="amount count-num"
                        data-speed="3000"
                        data-stop="141"
                      >
                        141
                      </div>
                      <span>Satisfied Clients</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-3 col-xs-6">
                    <div
                      className="count color-dark wow fadeIn"
                      data-wow-delay="300ms"
                      data-wow-duration="700ms"
                    >
                      <span className="flat-icon flaticon-nature-3 color-default"></span>
                      <div
                        className="amount count-num"
                        data-speed="3000"
                        data-stop="172"
                      >
                        172
                      </div>
                      <span>Projects Done</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-3 col-xs-6">
                    <div
                      className="count color-dark wow fadeIn"
                      data-wow-delay="300ms"
                      data-wow-duration="700ms"
                    >
                      <span className="flat-icon flaticon-time color-default"></span>
                      <div
                        className="amount count-num"
                        data-speed="3000"
                        data-stop="2347"
                      >
                        2347
                      </div>
                      <span>Days Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img
                className="none-mobile"
                src="images/banner/welcome.png"
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <div className="dark-gradient about-link">
                <img src="images/our_service/1.png" alt="" />
                <div className="overlay">
                  <h5 className="inner-title">Tree Plantation</h5>
                  <a href="#" className="btn-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="dark-gradient about-link">
                <img src="images/our_service/5.png" alt="" />
                <div className="overlay">
                  <h5 className="inner-title">Our Social Events</h5>
                  <a href="#" className="btn-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="dark-gradient about-link">
                <img src="images/our_service/9.png" alt="" />
                <div className="overlay">
                  <h5 className="inner-title">Agricultural Research</h5>
                  <a href="#" className="btn-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
