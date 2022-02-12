import React from "react";
import "./About.css";
import "./Bootstrap.css";
import "./Color.css";

const Choose = () => {
  return (
    <div>
      <section className="full-row bg-gray no-padding no-overflow">
        <div className="container-fluid">
          <div className="row flex-box">
            <div className="col-md-6 col-sm-6 choose_us2_banner none-mobile">
              <img src="" alt="" />
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="col-md-12 no-padding-mobile padding-80">
                <h2 className="title wow fadeInRight">Reason to Choose Us</h2>
                <span className="sub-title wow fadeInRight">
                  Pulvinar fringilla ac mauris. Augue bibendum netus molestie in
                  quis lacinia. Suspendisse placerat sit eleifend hac rhoncus
                  eros diam sagittis scelerisque adipiscing.
                </span>
                <div className="text-area">
                  <ul className="choose-reason">
                    <li>
                      <i className="flaticon-check-1"></i>
                      <div className="li-box">
                        <h5 className="inner-title">
                          We have 10+ years experience
                        </h5>
                        <span>
                          Auctor netus justo convallis vitae ipsum, maecenas
                          morbi. Purus dui nulla sociosqu. Natoque gravida
                          gravida etiam. Sodales dis tristique.
                        </span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-check-1"></i>
                      <div className="li-box">
                        <h5 className="inner-title">
                          We have expert and morden technology
                        </h5>
                        <span>
                          Auctor netus justo convallis vitae ipsum, maecenas
                          morbi. Purus dui nulla sociosqu. Natoque gravida
                          gravida etiam. Sodales dis tristique.
                        </span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-check-1"></i>
                      <div className="li-box">
                        <h5 className="inner-title">
                          Most experience architecture for planing
                        </h5>
                        <span>
                          Auctor netus justo convallis vitae ipsum, maecenas
                          morbi. Purus dui nulla sociosqu. Natoque gravida
                          gravida etiam. Sodales dis tristique.
                        </span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-check-1"></i>
                      <div className="li-box">
                        <h5 className="inner-title">
                          Free support and consultation
                        </h5>
                        <span>
                          Auctor netus justo convallis vitae ipsum, maecenas
                          morbi. Purus dui nulla sociosqu. Natoque gravida
                          gravida etiam. Sodales dis tristique.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Choose;
