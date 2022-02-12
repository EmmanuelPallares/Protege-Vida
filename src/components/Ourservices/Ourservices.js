import React from "react";
import "./About.css";
import "./Bootstrap.css";
import "./Color.css";

const Ourservices = () => {
  return (
    <div>
      <section className="full-row bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2
                className="title text-center down-line wow fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="700ms"
              >
                Our Service
              </h2>
              {/* <span className="sub-title box text-center ">
                Elit ultricies adipiscing ornare. Rutrum sapien aliquet mollis.
                Pretium condimentum. Cursus elit hac fames laoreet non nec
                facilisis quis dui.
              </span> */}
            </div>
          </div>
          <div className="row margin-top-15">
            <div className="col-md-3 col-sm-6">
              <div className="srvc-item">
                <div className="srvc-icon">
                  <span className="flaticon-nature-3"></span>
                </div>
                <a href="tree-plantation.html">
                  <h4 className="inner-title">Tree Planting</h4>
                </a>
                <p>
                  Pellentesque. Bibendum mollis non eros luctus quam lacus
                  scelerisque quis.
                </p>
                <a className="btn btn-link" href="tree-plantation.html">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="srvc-item">
                <div className="srvc-icon">
                  <span className="flaticon-travel"></span>
                </div>
                <a href="garden-care.html">
                  <h4 className="inner-title">Garden Care</h4>
                </a>
                <p>
                  Pellentesque. Bibendum mollis non eros luctus quam lacus
                  scelerisque quis.
                </p>
                <a className="btn btn-link" href="garden-care.html">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="srvc-item">
                <div className="srvc-icon">
                  <span className="flaticon-nature-2"></span>
                </div>
                <a href="watering-garden.html">
                  <h4 className="inner-title">Watering Garden</h4>
                </a>
                <p>
                  Pellentesque. Bibendum mollis non eros luctus quam lacus
                  scelerisque quis.
                </p>
                <a className="btn btn-link" href="watering-garden.html">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="srvc-item">
                <div className="srvc-icon">
                  <span className="flaticon-plant"></span>
                </div>
                <a href="garden-design.html">
                  <h4 className="inner-title">Garden Design</h4>
                </a>
                <p>
                  Pellentesque. Bibendum mollis non eros luctus quam lacus
                  scelerisque quis.
                </p>
                <a className="btn btn-link" href="garden-design.html">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div
                className="btn-center wow fadeIn"
                data-wow-delay="500ms"
                data-wow-duration="700ms"
              >
                <a className="btn btn-primary" href="service.html">
                  All Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ourservices;
