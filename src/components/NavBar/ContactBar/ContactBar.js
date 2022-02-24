import React from "react";

const ContactBar = () => {
  return (
    <div>
      <div class="middle-header padding-15 bg-white">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-3 col-xs-6">
              <div class="navbar-header">
                <a class="navbar-brand" href="index.html">
                  <img class="nav-logo" src="images/logo/logo3.png" alt="" />
                </a>
              </div>
            </div>
            <div class="col-md-9 col-sm-9 col-xs-6">
              <div class="contact-info">
                <div class="middle_header_icon color-default">
                  <i class="flaticon-customer-service"></i>
                </div>
                <div class="contact-number">
                  <div>( +1 ) 456 114 81 11</div>
                  <span>www.protegevida.com</span>
                </div>
              </div>
              <div class="contact-location">
                <div class="middle_header_icon color-default">
                  <i class="flaticon-check-in-marker"></i>
                </div>
                <div class="contact-number">
                  <div>38445 La Coalanda, GTO </div>
                  <span>México</span>
                </div>
              </div>
              <div class="btn-quote">
                <a class="btn btn-primary" href="#">
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
