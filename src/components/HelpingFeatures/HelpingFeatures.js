import React from "react";

const HelpingFeatures = () => {
  return (
    <div>
      <section className="full-row background-6 before-muddy padding-100">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <div
                className="bg-white help-info wow zoomIn"
                data-wow-delay="300ms"
                data-wow-duration="700ms"
              >
                <span>
                  <i className="flaticon-business-1"></i>
                </span>
                <h4 className="inner-title">
                  <a href="#">Trusted Payment</a>
                </h4>
                <p>
                  We have easy payment process, it's very secure and trusted
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div
                className="bg-white help-info wow zoomIn"
                data-wow-delay="500ms"
                data-wow-duration="700ms"
              >
                <span>
                  <i className="flaticon-user-1"></i>
                </span>
                <h4 className="inner-title">
                  <a href="#">Build Your Career</a>
                </h4>
                <p>
                  There have lot's of oppertunity to show your experience with
                  us
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div
                className="bg-white help-info wow zoomIn"
                data-wow-delay="700ms"
                data-wow-duration="700ms"
              >
                <span>
                  <i className="flaticon-consulting-message"></i>
                </span>
                <h4 className="inner-title">
                  <a href="#">Free Consulting</a>
                </h4>
                <p>
                  Your can get consulting from our expert and also get a
                  estimate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpingFeatures;
