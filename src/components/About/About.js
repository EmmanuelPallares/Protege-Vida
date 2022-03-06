import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./About.css";
// import { gql, useQuery } from "urql";
import $ from "jquery";

// const AboutText = gql`
//   {
//     nosotrossConnection {
//       edges {
//         node {
//           tituloPrincipal
//           subtituloAbout
//           subtituloAbout2
//           imagenAbout1 {
//             url
//           }
//           soloImagen {
//             url
//           }
//         }
//       }
//     }
//   }
// `;

const Nosotros = () => {
  useEffect(() => {
    function factCounter() {
      if ($(".fact-counter").length) {
        $(".fact-counter .count.animated").each(function () {
          var $t = $(this),
            n = $t.find(".count-num").attr("data-stop"),
            r = parseInt($t.find(".count-num").attr("data-speed"), 10);

          if (!$t.hasClass("counted")) {
            $t.addClass("counted");
            $({
              countNum: $t.find(".count-text").text(),
            }).animate(
              {
                countNum: n,
              },
              {
                duration: r,
                easing: "linear",
                step: function () {
                  $t.find(".count-num").text(Math.floor(this.countNum));
                },
                complete: function () {
                  $t.find(".count-num").text(this.countNum);
                },
              }
            );
          }

          //set skill building height

          var size = $(this).children(".progress-bar").attr("aria-valuenow");
          $(this)
            .children(".progress-bar")
            .css("width", size + "%");
        });
      }
    }
    function jumptotop() {
      var $scrollsize = $(window).scrollTop();
      if ($scrollsize > 300) {
        $(".scroll-to-top").fadeIn(1000);
      } else {
        $(".scroll-to-top").fadeOut(1000);
      }
    }
    function headerStyle() {
      if ($("#header").length) {
        var windowpos = $(window).scrollTop();
        if (windowpos >= 200) {
          $("#header").addClass("fixed-header");
        } else {
          $("#header").removeClass("fixed-header");
        }
      }
    }

    if ($(".wow").length) {
      var wow = new WOW({
        boxClass: "wow", // animated element css class (default is wow)
        animateClass: "animated", // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: false, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
      });
      wow.init();
    }
    $(window).on("scroll", function () {
      jumptotop();
      headerStyle();
      factCounter();
    });
  });
  // const [result] = useQuery({ query: AboutText });

  // const { data, fetching, error } = result;

  // if (fetching) return <p>Fetching products</p>;
  // if (error) return <p>Oh no... {error.message}</p>;

  return (
    <section class="full-row about-company">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div
              class="wow fadeInLeft"
              data-wow-delay="300ms"
              data-wow-duration="700ms"
            >
              <h2 class="title wow">
                <span>Bienvenido a </span>
                Quultiva
              </h2>
              <span class="sub-title">
                Agricultura sustentable al alcance de todos
              </span>
              <div class="text-area">
                En quultiva encontrarás el apoyo técnico y suficiente para que
                puedas emprender esa idea que tienes, empleando técnicas y
                productos amigables con el medio ambiente. Con el apoyo de
                profesionales y aplicando las tecnologías disponibles, diseñamos
                proyectos funcionales a la medida del cliente haciendo uso
                eficiente de los recursos disponibles.
              </div>
            </div>

            <div class="row">
              <div class="fact-counter">
                <div class="col-lg-3 col-sm-3 col-xs-6">
                  <div
                    class="count color-dark wow fadeIn"
                    data-wow-delay="300ms"
                    data-wow-duration="700ms"
                  >
                    <span class="flat-icon flaticon-line-chart color-default"></span>
                    <div
                      class="amount count-num"
                      data-speed="3000"
                      data-stop="230"
                    >
                      10
                    </div>
                    <span>Años de Experiencia</span>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-3 col-xs-6">
                  <div
                    class="count color-dark wow fadeIn"
                    data-wow-delay="300ms"
                    data-wow-duration="700ms"
                  >
                    <span class="flat-icon flaticon-user-1 color-default"></span>
                    <div
                      class="amount count-num"
                      data-speed="3000"
                      data-stop="141"
                    >
                      +50
                    </div>
                    <span>Productos Quultiva</span>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-3 col-xs-6">
                  <div
                    class="count color-dark wow fadeIn"
                    data-wow-delay="300ms"
                    data-wow-duration="700ms"
                  >
                    <span class="flat-icon flaticon-nature-3 color-default"></span>
                    <div
                      class="amount count-num"
                      data-speed="3000"
                      data-stop="172"
                    >
                      +10
                    </div>
                    <span>Diseños Originales</span>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-3 col-xs-6">
                  <div
                    class="count color-dark wow fadeIn"
                    data-wow-delay="300ms"
                    data-wow-duration="700ms"
                  >
                    <span class="flat-icon flaticon-time color-default"></span>
                    <div
                      class="amount count-num"
                      data-speed="3000"
                      data-stop="2347"
                    >
                      +20
                    </div>
                    <span>
                      Proveedores que garantizan suministro de productos
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <img
              class="none-mobile"
              src="https://i.imgur.com/b3uHPlM.png"
              alt=""
            />
          </div>
        </div>

        {/* ICONOS DIVIDER */}
        <div class="row">
          <div class="col-md-4 col-sm-4">
            <div class="dark-gradient about-link">
              <img
                src="https://i.imgur.com/PnJn5BR.png"
                alt="mercado libre pagos"
              />
              <div class="overlay">
                <h5 class="inner-title">Protege tu inversión</h5>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-4">
            <div class="dark-gradient about-link">
              <img src="https://i.imgur.com/3caXb7M.png" alt="sdscsf" />
              <div class="overlay">
                <h5 class="inner-title">Biogreen</h5>
                <p class="inner-title">Agricultura en tu hogar</p>
                <Link to="biogreen" class="btn-link">
                  Ver Biogreens
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-4">
            <div class="dark-gradient about-link">
              <img src="https://i.imgur.com/bXRU0ci.png" alt="big" />
              <div class="overlay">
                <h5 class="inner-title">Insumos Agricolas</h5>
                <p class="inner-title">Los Mejores Precios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
