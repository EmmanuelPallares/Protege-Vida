import React from "react";

const ContactBar = () => {
  return (
    <div>
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
                  <div>( +1 ) 456 114 81 11</div>
                  <span>www.protegevida.com</span>
                </div>
              </div>
              <div className="contact-location">
                <div className="middle_header_icon color-default">
                  <i className="flaticon-check-in-marker"></i>
                </div>
                <div className="contact-number">
                  <div>38445 La Coalanda, GTO </div>
                  <span>México</span>
                </div>
              </div>
              <div className="btn-quote">
                <a className="btn btn-primary" href="#">
                  Solicita un presupuesto
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
