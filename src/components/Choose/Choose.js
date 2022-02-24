import React from "react";
import { gql, useQuery } from "urql";
const ChooseUs = gql`
  {
    porqueNosotrossConnection {
      edges {
        node {
          imagenCompleta {
            url
          }
          subtituloPorqueNosotros
          tituloPorqueNosotros
          razon
        }
      }
    }
  }
`;

const Choose = () => {
  const [result] = useQuery({ query: ChooseUs });

  const { data, fetching, error } = result;

  if (fetching) return <p>Fetching products</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  return (
    <div>
      <section class="full-row bg-gray no-padding no-overflow">
        <div class="container-fluid">
          <div class="row flex-box">
            <div class="col-md-6 col-sm-6  none-mobile">
              <img
                src={
                  result.data.porqueNosotrossConnection.edges[0].node
                    .imagenCompleta.url
                }
                alt=""
              />
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="col-md-12 no-padding-mobile padding-80">
                <h2 class="title wow fadeInRight">
                  {
                    result.data.porqueNosotrossConnection.edges[0].node
                      .tituloPorqueNosotros
                  }
                </h2>
                <span class="sub-title wow fadeInRight">
                  {
                    result.data.porqueNosotrossConnection.edges[0].node
                      .subtituloPorqueNosotros
                  }
                </span>
                <div class="text-area">
                  <ul class="choose-reason">
                    <li>
                      <i class="flaticon-check-1"></i>
                      <div class="li-box">
                        <h5 class="inner-title">
                          {
                            result.data.porqueNosotrossConnection.edges[0].node
                              .razon
                          }
                        </h5>
                      </div>
                    </li>
                    <li>
                      <i class="flaticon-check-1"></i>
                      <div class="li-box">
                        <h5 class="inner-title">
                          {
                            result.data.porqueNosotrossConnection.edges[1].node
                              .razon
                          }
                        </h5>
                      </div>
                    </li>
                    <li>
                      <i class="flaticon-check-1"></i>
                      <div class="li-box">
                        <h5 class="inner-title">
                          {
                            result.data.porqueNosotrossConnection.edges[2].node
                              .razon
                          }
                        </h5>
                      </div>
                    </li>
                    <li>
                      <i class="flaticon-check-1"></i>
                      <div class="li-box">
                        <h5 class="inner-title">
                          {
                            result.data.porqueNosotrossConnection.edges[3].node
                              .razon
                          }
                        </h5>
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
