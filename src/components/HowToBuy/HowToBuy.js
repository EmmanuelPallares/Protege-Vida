import React, { useEffect } from "react";
import $ from "jquery";

const HowToBuy = () => {
  useEffect(() => {
    if ($(".according_details").length) {
      $(".according_title").on("click", function () {
        if ($(this).hasClass("active")) {
          $(this).addClass("active");
        }

        if ($(this).next(".according_details").is(":visible")) {
          $(this).removeClass("active");
        } else {
          $(".according_title").removeClass("active");
          $(".according_details").slideUp(300);
          $(this).addClass("active");
          $(this).next(".according_details").slideDown(300);
        }
      });
    }
  }, []);
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <div class="content-details">
            <h4 class="inner-title">Presupuesto.</h4>
            <p>
              Primero que nada deberás tener un gran interés en realizar tu
              proyecto, sin embargo, antes de poder ayudarte requerimos conocer
              algunos detalles para brindarte la ayuda que necesitas, por lo que
              te enviaremos un breve cuestionario para que lo contestes.
            </p>
            <p>
              Una vez que tengamos una idea clara de tus necesidades, enviaremos
              a la brevedad un presupuesto preliminar de lo que requieres para
              que valores tus alcances económicos. Si lo aceptas deberás
              solicitar un presupuesto formal* donde encontrarás toda la
              información que necesaria para realizar tu compra.
            </p>
            <span>
              *Los presupuestos formales mayores a $1,500 tienen un costo de
              $90; mayores a $10,000 tienen un costo de $200; mayores a $30,000
              tienen un costo de $500; mayores a $50,000 tienen un costo de
              $700, y mayores a $100,000 tienen un costo de $1,000. Si aceptas
              el presupuesto, el costo del presupuesto se te descontará de tu
              compra. No hay reembolso del costo del presupuesto, en caso de
              rechazar el presupuesto. Todos los precios son en pesos mexicanos.
            </span>
          </div>

          <div class="container">
            <div class="row">
              <div class="get-tch full-row">
                <div class="col-md-9 col-sm-8 col-xs-12">
                  <h4 class="banner-title color-white no-margin">
                    Solicita tu presupuesto ahora mismo por whatsapp
                  </h4>
                </div>
                <div class="col-md-3 col-sm-4 col-xs-12 box-right-middle">
                  <div class="btn-quote">
                    <a class="btn btn-primary" href="#">
                      <i class="fa fa-whatsapp fa-2x margin-right"></i>
                      Whatsapp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="content-details">
            <h3 class="inner-title">Pagos</h3>
            <p>Si aceptas el presupuesto tendrás cuatro opciones de pago:</p>
          </div>
        </div>
        <div class="col-md-12 col-sm-12">
          <div class="content-details">
            <div class="our-vsn">
              <div class="according_area">
                <div class="according_title active">1</div>
                <div class="according_details">
                  <p>
                    Pago por medio de Paypal. Paypal es la plataforma más segura
                    para pagos en línea, no genera comisión y cuenta con medios
                    de protección al consumidor, además, si cuentas con tarjeta
                    de crédito, podrás realizar la compra a Meses Sin Intereses.
                    Para comprar por medio de Paypal, deberás crear una cuenta
                    en www.paypal.com. Si ya tienes cuenta, se te enviará tu
                    factura de pago a tu email, y podrás realizar tu pago de
                    manera segura y confiable.
                  </p>
                </div>
              </div>
              <div class="according_area">
                <div class="according_title">2</div>
                <div class="according_details">
                  <p>
                    Mercado Libre. Una de las plataformas más seguras para
                    comprar y vender. Se te enviará un link de la publicación
                    para que puedas realizar tu compra directamente en la
                    plataforma de Mercado Libre. Sin embargo, si deseas pagar
                    por este medio, el presupuesto puede incrementarse de un 17%
                    a un 50% del costo final.
                  </p>
                </div>
              </div>
              <div class="according_area">
                <div class="according_title">3</div>
                <div class="according_details">
                  <p>
                    Transferencia bancaria, depósito bancario o depósito a
                    tarjeta en Oxxo. Podrás realizar el pago desde la aplicación
                    de tu banco, en ventanilla de banco o pagando al número de
                    tarjeta que se te proporcione, podrás realizar el pago donde
                    más te convenga. Guarda bien tu comprobante de pago y
                    envíalo por Whatsapp, Messenger o email, de acuerdo a tu
                    preferencia.
                  </p>
                </div>
              </div>
              <div class="according_area">
                <div class="according_title">4</div>
                <div class="according_details">
                  <p>
                    Pago en efectivo. Podrás visitar nuestra tienda física y
                    realizar el pago directamente con un vendedor. Una de las
                    mayores ventajas es que podrás ver físicamente los artículos
                    que se te están ofreciendo sin necesidad de especulaciones,
                    si los artículos están disponibles podrás llevarlos en ese
                    momento a tu domicilio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <h2 class="title">Logística</h2>
              <span class="sub-title">
                Todos los costos de envío e instalación tienen un costo
                negociable, sin embargo el cliente siempre tendrá que brindar
                las facilidades para que el proyecto se instale de la mejor
                manera.
              </span>
              <ul class="listing-article">
                <li>
                  <span class="color-default">Tiempo de entrega.</span>
                  <p>
                    Los tiempos de entrega varían dependiendo disponibilidad,
                    tiempo de fabricación, tiempo de empaque, tiempo de envío,
                    etc., por lo que te pedimos seas paciente. Es posible que
                    nuestro equipo esté realizando otro proyecto, si ese es el
                    caso te notificaremos en tu presupuesto, por lo que siempre
                    estaremos en comunicación. Cualquier espera valdrá la pena.
                  </p>
                </li>
                <li>
                  <span class="color-default">Envío e instalación.</span>
                  <p>
                    Todos los costos de envío e instalación tienen un costo
                    negociable, sin embargo el cliente siempre tendrá que
                    brindar las facilidades para que el proyecto se instale de
                    la mejor manera. Las recomendaciones generales son:
                    proporcionar acceso libre al personal de instalación,
                    proporcionar el área de trabajo limpia, proporcionar acceso
                    a servicio de sanitario y luz eléctrica. Los horarios y días
                    de instalación son de lunes a viernes de 7:00 a 19:00 horas.
                  </p>
                </li>
              </ul>
            </div>
            <div class="col-md-6 col-sm-6">
              <div class="background-shade">
                <img src="images/banner/tree.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
