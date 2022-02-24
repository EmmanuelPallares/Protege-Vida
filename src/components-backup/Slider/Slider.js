import React from "react";
import exampleimage from "../../images/exampleimage.jpg";

const Slider = () => {
  return (
    <>
      <div id="slider" class="no-padding">
        <div class="tp-banner-container revolution-slider">
          <div class="tp-banner">
            <ul>
              <li
                data-transition="slidedown"
                data-slotamount="1"
                data-masterspeed="1500"
                data-delay="15000"
                data-saveperformance="off"
              >
                <img
                  src={exampleimage}
                  alt="kenburns6"
                  data-bgposition="center top"
                  data-kenburns="on"
                  data-duration="16000"
                  data-ease="Linear.easeNone"
                  data-bgfit="110"
                  data-bgfitend="100"
                  data-bgpositionend="center center"
                />

                <div
                  class="tp-caption fullgradient_overlay tp-fade fadeout tp-resizeme"
                  data-x="center"
                  data-hoffset="0"
                  data-y="center"
                  data-voffset="0"
                  data-speed="1000"
                  data-start="100"
                  data-easing="Power4.easeOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.1"
                  data-endelementdelay="0.1"
                  data-endspeed="500"
                  data-endeasing="Power1.easeOut"
                  style="z-index: 2; max-width: auto; max-height: auto; white-space: nowrap;"
                ></div>

                <div
                  class="tp-caption white_heavy_45 tp-fade fadeout tp-resizeme"
                  data-x="center"
                  data-hoffset="0"
                  data-y="center"
                  data-voffset="-50"
                  data-speed="500"
                  data-start="1000"
                  data-easing="Power4.easeOut"
                  data-splitin="chars"
                  data-splitout="chars"
                  data-elementdelay="0.05"
                  data-endelementdelay="0.05"
                  data-endspeed="300"
                  data-endeasing="Power1.easeOut"
                  style="z-index: 3; max-width: auto; max-height: auto; white-space: nowrap;"
                >
                  MAKE YOUR HOME CHARMING
                </div>

                <div
                  class="tp-caption whiteline_long customin fadeout tp-resizeme"
                  data-x="center"
                  data-hoffset="0"
                  data-y="center"
                  data-voffset="0"
                  data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                  data-speed="500"
                  data-start="1200"
                  data-easing="Power4.easeOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.1"
                  data-endelementdelay="0.1"
                  data-endspeed="600"
                  data-endeasing="Power1.easeOut"
                  style="z-index: 4; max-width: auto; max-height: auto; white-space: nowrap;"
                ></div>

                <div
                  class="tp-caption light_medium_20 lfb fadeout tp-resizeme"
                  data-x="center"
                  data-hoffset="0"
                  data-y="center"
                  data-voffset="60"
                  data-speed="600"
                  data-start="1600"
                  data-easing="Power4.easeOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.1"
                  data-endelementdelay="0.1"
                  data-endspeed="600"
                  data-endeasing="Power1.easeIn"
                  style="z-index: 5; max-width: auto; max-height: auto; text-align: center; white-space: nowrap;"
                >
                  Vivamus ornare. Sem molestie. Ut interdum convallis, hac
                  fringilla ridiculus ultricies, <br />
                  ornare fringilla Dui blandit netus mollis netus augue
                  ridiculus duis odio <br />
                  velit lacinia tortor condimentum.
                </div>

                <div
                  class="tp-caption customin tp-resizeme rs-parallaxlevel-0"
                  data-x="center"
                  data-hoffset="0"
                  data-y="530"
                  data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                  data-speed="500"
                  data-start="2900"
                  data-easing="Power3.easeInOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.1"
                  data-endelementdelay="0.1"
                  data-linktoslide="next"
                  style="z-index: 12; max-width: auto; max-height: auto; white-space: nowrap;"
                >
                  <div class="text-center">
                    <a href="get_quote.html" class="btn btn-primary">
                      Get a Quote
                    </a>
                  </div>
                </div>
              </li>

              <li
                data-transition="slideleft"
                data-slotamount="1"
                data-masterspeed="1500"
                data-delay="15000"
                data-saveperformance="off"
              >
                <img
                  src={exampleimage}
                  alt="kenburns3"
                  data-bgposition="left top"
                  data-kenburns="on"
                  data-duration="16000"
                  data-ease="Linear.easeNone"
                  data-bgfit="130"
                  data-bgfitend="100"
                  data-bgpositionend="right bottom"
                />

                <div
                  class="tp-caption fullgradient_overlay tp-fade fadeout tp-resizeme"
                  data-x="center"
                  data-hoffset="0"
                  data-y="center"
                  data-voffset="0"
                  data-speed="1000"
                  data-start="100"
                  data-easing="Power4.easeOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.1"
                  data-endelementdelay="0.1"
                  data-endspeed="500"
                  data-endeasing="Power1.easeOut"
                  style="z-index: 2; max-width: auto; max-height: auto; white-space: nowrap;"
                ></div>

                <div
                  class="tp-caption white_heavy_45 skewfromleftshort fadeout tp-resizeme rs-parallaxlevel-10"
                  data-x="center"
                  data-hoffset="0"
                  data-y="center"
                  data-voffset="-50"
                  data-speed="500"
                  data-start="500"
                  data-easing="Power3.easeInOut"
                  data-splitin="chars"
                  data-splitout="none"
                  data-elementdelay="0.1"
                  data-endelementdelay="0.1"
                  data-endspeed="300"
                  style="z-index: 3; max-width: auto; max-height: auto; white-space: nowrap;"
                >
                  WE CAN HELP YOU TO MAKE A GARDEN
                </div>

                <div
                  class="tp-caption whiteline_long customin fadeout tp-resizeme"
                  data-x="center"
                  data-hoffset="0"
                  data-y="center"
                  data-voffset="0"
                  data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                  data-speed="500"
                  data-start="1200"
                  data-easing="Power4.easeOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.1"
                  data-endelementdelay="0.1"
                  data-endspeed="600"
                  data-endeasing="Power1.easeOut"
                  style="z-index: 4; top: 300px; max-width: auto; max-height: auto; white-space: nowrap;"
                ></div>

                <div
                  class="tp-caption light_medium_20 lfb fadeout tp-resizeme"
                  data-x="center"
                  data-hoffset="0"
                  data-y="center"
                  data-voffset="50"
                  data-speed="600"
                  data-start="1600"
                  data-easing="Power4.easeOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.1"
                  data-endelementdelay="0.1"
                  data-endspeed="600"
                  data-endeasing="Power1.easeIn"
                  style="z-index: 5; max-width: auto; max-height: auto; text-align: center; white-space: nowrap;"
                >
                  Vivamus ornare. Sem molestie. Ut interdum convallis, hac
                  fringilla ridiculus ultricies.
                  <br />
                  ornare fringilla Dui blandit netus mollis netus augue
                  ridiculus duis odio
                </div>

                <div
                  class="tp-caption customin tp-resizeme rs-parallaxlevel-0"
                  data-x="center"
                  data-hoffset="0"
                  data-y="500"
                  data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                  data-speed="500"
                  data-start="2900"
                  data-easing="Power3.easeInOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.1"
                  data-endelementdelay="0.1"
                  data-linktoslide="next"
                  style="z-index: 12; max-width: auto; max-height: auto; white-space: nowrap;"
                >
                  <div class="text-center">
                    <a href="contact.html" class="btn btn-default">
                      Get In Touch
                    </a>
                  </div>
                </div>
              </li>
              <li
                data-transition="slidedown"
                data-slotamount="1"
                data-masterspeed="1500"
                data-delay="15000"
                data-saveperformance="off"
              >
                <img
                  src={exampleimage}
                  alt="kenburns6"
                  data-bgposition="center top"
                  data-kenburns="on"
                  data-duration="16000"
                  data-ease="Linear.easeNone"
                  data-bgfit="110"
                  data-bgfitend="100"
                  data-bgpositionend="center center"
                />

                <div
                  class="tp-caption fullgradient_overlay tp-fade fadeout tp-resizeme"
                  data-x="center"
                  data-hoffset="0"
                  data-y="center"
                  data-voffset="0"
                  data-speed="1000"
                  data-start="100"
                  data-easing="Power4.easeOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.1"
                  data-endelementdelay="0.1"
                  data-endspeed="500"
                  data-endeasing="Power1.easeOut"
                  style="z-index: 2; max-width: auto; max-height: auto; white-space: nowrap;"
                ></div>

                <div
                  class="tp-caption white_heavy_45 tp-fade fadeout tp-resizeme"
                  data-x="left"
                  data-hoffset="50"
                  data-y="center"
                  data-voffset="-50"
                  data-speed="500"
                  data-start="1000"
                  data-easing="Power4.easeOut"
                  data-splitin="chars"
                  data-splitout="chars"
                  data-elementdelay="0.05"
                  data-endelementdelay="0.05"
                  data-endspeed="300"
                  data-endeasing="Power1.easeOut"
                  style="z-index: 3; max-width: auto; max-height: auto; white-space: nowrap;"
                >
                  WE HAVE RESEARCH CENTER
                </div>

                <div
                  class="tp-caption whiteline_long customin fadeout tp-resizeme"
                  data-x="left"
                  data-hoffset="50"
                  data-y="center"
                  data-voffset="0"
                  data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                  data-speed="500"
                  data-start="1200"
                  data-easing="Power4.easeOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.1"
                  data-endelementdelay="0.1"
                  data-endspeed="600"
                  data-endeasing="Power1.easeOut"
                  style="z-index: 4; max-width: auto; max-height: auto; white-space: nowrap;"
                ></div>

                <div
                  class="tp-caption light_medium_20 lfb fadeout tp-resizeme"
                  data-x="left"
                  data-hoffset="50"
                  data-y="center"
                  data-voffset="50"
                  data-speed="600"
                  data-start="1600"
                  data-easing="Power4.easeOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.1"
                  data-endelementdelay="0.1"
                  data-endspeed="600"
                  data-endeasing="Power1.easeIn"
                  style="z-index: 5; max-width: auto; max-height: auto; text-align: left; white-space: nowrap;"
                >
                  Vivamus ornare. Sem molestie. Ut interdum convallis, hac
                  fringilla ridiculus ultricies, <br />
                  ornare fringilla Dui blandit netus mollis netus augue
                  ridiculus duis odio.
                </div>

                <div
                  class="tp-caption white_bold_bg_15 sfr fadeout tp-resizeme rs-parallaxlevel-10"
                  data-x="left"
                  data-hoffset="80"
                  data-y="center"
                  data-voffset="120"
                  data-speed="300"
                  data-start="2000"
                  data-easing="Power3.easeInOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.1"
                  data-endelementdelay="0.1"
                  data-endspeed="300"
                  style="z-index: 6; max-width: auto; max-height: auto; white-space: nowrap;"
                >
                  Agricultural Research
                </div>

                <div
                  class="tp-caption greenbox30 customin fadeout tp-resizeme rs-parallaxlevel-10"
                  data-x="left"
                  data-hoffset="50"
                  data-y="center"
                  data-voffset="120"
                  data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                  data-speed="300"
                  data-start="2000"
                  data-easing="Power3.easeInOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.1"
                  data-endelementdelay="0.1"
                  data-endspeed="300"
                  style="z-index: 7; max-width: auto; max-height: auto; white-space: nowrap;"
                >
                  &nbsp;
                </div>

                <div
                  class="tp-caption arrowicon customin fadeout rs-parallaxlevel-10"
                  data-x="left"
                  data-hoffset="56"
                  data-y="center"
                  data-voffset="120"
                  data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                  data-speed="300"
                  data-start="2200"
                  data-easing="Power3.easeInOut"
                  data-elementdelay="0.1"
                  data-endelementdelay="0.1"
                  data-endspeed="300"
                  style="z-index: 8;"
                >
                  <img
                    src={exampleimage}
                    alt="sdfgZGg"
                    data-ww="17"
                    data-hh="17"
                    data-lazyload="images/check.png"
                  />
                </div>

                <div
                  class="tp-caption white_bold_bg_15 sfr fadeout tp-resizeme rs-parallaxlevel-10"
                  data-x="left"
                  data-hoffset="80"
                  data-y="center"
                  data-voffset="160"
                  data-speed="300"
                  data-start="2400"
                  data-easing="Power3.easeInOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.1"
                  data-endelementdelay="0.1"
                  data-endspeed="300"
                  style="z-index: 6; max-width: auto; max-height: auto; white-space: nowrap;"
                >
                  Interior Architecture
                </div>

                <div
                  class="tp-caption greenbox30 customin fadeout tp-resizeme rs-parallaxlevel-10"
                  data-x="left"
                  data-hoffset="50"
                  data-y="center"
                  data-voffset="160"
                  data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                  data-speed="300"
                  data-start="2600"
                  data-easing="Power3.easeInOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.1"
                  data-endelementdelay="0.1"
                  data-endspeed="300"
                  style="z-index: 7; max-width: auto; max-height: auto; white-space: nowrap;"
                >
                  &nbsp;
                </div>

                <div
                  class="tp-caption arrowicon customin fadeout rs-parallaxlevel-10"
                  data-x="left"
                  data-hoffset="56"
                  data-y="center"
                  data-voffset="160"
                  data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                  data-speed="300"
                  data-start="2800"
                  data-easing="Power3.easeInOut"
                  data-elementdelay="0.1"
                  data-endelementdelay="0.1"
                  data-endspeed="300"
                  style="z-index: 8;"
                >
                  <img
                    src={exampleimage}
                    alt="ASFFA"
                    data-ww="17"
                    data-hh="17"
                    data-lazyload="images/check.png"
                  />
                </div>

                <div
                  class="tp-caption white_bold_bg_15 sfr fadeout tp-resizeme rs-parallaxlevel-10"
                  data-x="left"
                  data-hoffset="80"
                  data-y="center"
                  data-voffset="200"
                  data-speed="300"
                  data-start="3000"
                  data-easing="Power3.easeInOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.1"
                  data-endelementdelay="0.1"
                  data-endspeed="300"
                  style="z-index: 6; max-width: auto; max-height: auto; white-space: nowrap;"
                >
                  Technology and Tools
                </div>

                <div
                  class="tp-caption greenbox30 customin fadeout tp-resizeme rs-parallaxlevel-10"
                  data-x="left"
                  data-hoffset="50"
                  data-y="center"
                  data-voffset="200"
                  data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                  data-speed="300"
                  data-start="3200"
                  data-easing="Power3.easeInOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.1"
                  data-endelementdelay="0.1"
                  data-endspeed="300"
                  style="z-index: 7; max-width: auto; max-height: auto; white-space: nowrap;"
                >
                  &nbsp;
                </div>

                <div
                  class="tp-caption arrowicon customin fadeout rs-parallaxlevel-10"
                  data-x="left"
                  data-hoffset="56"
                  data-y="center"
                  data-voffset="200"
                  data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                  data-speed="300"
                  data-start="3400"
                  data-easing="Power3.easeInOut"
                  data-elementdelay="0.1"
                  data-endelementdelay="0.1"
                  data-endspeed="300"
                  style="z-index: 8;"
                >
                  <img
                    src={exampleimage}
                    alt="sasd"
                    data-ww="17"
                    data-hh="17"
                    data-lazyload="images/check.png"
                  />
                </div>
              </li>
            </ul>
            <div class="tp-bannertimer"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
