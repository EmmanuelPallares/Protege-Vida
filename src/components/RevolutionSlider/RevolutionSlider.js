import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

const RevolutionSlider = () => {
  useEffect(() => {
    if ($(".revolution-slider .tp-banner").length) {
      jQuery(".revolution-slider .tp-banner")
        .show()
        .revolution({
          dottedOverlay: "none",
          delay: 16000,
          startwidth: 1170,
          startheight: 800,
          hideThumbs: 200,

          thumbWidth: 100,
          thumbHeight: 50,
          thumbAmount: 5,

          navigationType: "bullet",
          navigationArrows: "solo",
          navigationStyle: "round",

          touchenabled: "on",
          onHoverStop: "on",

          swipe_velocity: 0.7,
          swipe_min_touches: 1,
          swipe_max_touches: 1,
          drag_block_vertical: false,

          parallax: "mouse",
          parallaxBgFreeze: "on",
          parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],

          keyboardNavigation: "off",

          navigationHAlign: "center",
          navigationVAlign: "bottom",
          navigationHOffset: 0,
          navigationVOffset: 50,

          soloArrowLeftHalign: "left",
          soloArrowLeftValign: "center",
          soloArrowLeftHOffset: 20,
          soloArrowLeftVOffset: 0,

          soloArrowRightHalign: "right",
          soloArrowRightValign: "center",
          soloArrowRightHOffset: 20,
          soloArrowRightVOffset: 0,

          shadow: 0,
          fullWidth: "on",
          fullScreen: "off",

          spinner: "spinner4",

          stopLoop: "off",
          stopAfterLoops: -1,
          stopAtSlide: -1,

          shuffle: "off",

          autoHeight: "off",
          forceFullWidth: "off",

          hideThumbsOnMobile: "off",
          hideNavDelayOnMobile: 1500,
          hideBulletsOnMobile: "off",
          hideArrowsOnMobile: "off",
          hideThumbsUnderResolution: 0,

          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          startWithSlide: 0,
          videoJsPath: "rs-plugin/videojs/",
          fullScreenOffsetContainer: "",
        });
    }
  }, []);

  return (
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
              {/* Main Image */}
              <img
                src="https://i.imgur.com/atZltws.jpg"
                alt="kenburns6"
                data-bgposition="center top"
                data-kenburns="on"
                data-duration="16000"
                data-ease="Linear.easeNone"
                data-bgfit="110"
                data-bgfitend="100"
                data-bgpositionend="center center"
              />
              {/* Slider 1 */}
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
              >
                Bienvenido a Quultiva
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
              >
                Ya estamos en la WEB <br />
                <br />
                Siempre pensando en nuestros clientes.
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
              >
                {/* <div class="text-center">
                  <a href="get_quote.html" class="btn btn-primary">
                    Get a Quote
                  </a>
                </div> */}
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
                src="https://i.imgur.com/raTQa1t.jpg"
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
              >
                Invernaderos Comerciales
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
              >
                <br />
                Tipo t??nel, ventana cenital fija y abatible.
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
              >
                <div class="text-center">
                  <Link to="invernaderos-comerciales" class="btn btn-default">
                    Ver todo
                  </Link>
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
                src="https://i.imgur.com/l6ROPrx.jpg"
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
              >
                Producto Nuevo
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
              >
                Biogreen <br />
                Huertos de Terraza.
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
              >
                Optimiza tu espacio
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
              >
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
                >
                  <div class="text-center">
                    <Link to="invernaderos-comerciales" class="btn btn-default">
                      Ver todo
                    </Link>
                  </div>
                </div>
                <img
                  src="https://i.imgur.com/XyzeKN2.png"
                  alt="check"
                  data-ww="17"
                  data-hh="17"
                  data-lazyload="https://i.imgur.com/XyzeKN2.png"
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
              >
                Mejora tu producci??n
              </div>
              <Link to="biogreen" class="btn btn-default">
                Ver todo
              </Link>

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
              >
                <img
                  src="https://i.imgur.com/XyzeKN2.png"
                  alt=""
                  data-ww="17"
                  data-hh="17"
                  data-lazyload="https://i.imgur.com/XyzeKN2.png"
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
              >
                Controla Plagas y Enfermedades
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
              >
                <img
                  src="https://i.imgur.com/XyzeKN2.png"
                  alt=""
                  data-ww="17"
                  data-hh="17"
                  data-lazyload="https://i.imgur.com/XyzeKN2.png"
                />
              </div>
            </li>
          </ul>
          <div class="tp-bannertimer"></div>
        </div>
      </div>
    </div>
  );
};
export default RevolutionSlider;
