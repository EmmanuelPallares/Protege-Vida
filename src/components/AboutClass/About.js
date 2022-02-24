import WOW from "wowjs";
import React, { Component } from "react";

export default class AboutClass extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: true,
    }).init();
  }
  render() {
    return (
      <section>
        <h2>Ejemplos de WOW.js</h2>
        <h3>1. data-wow-duration (5s):</h3>
        <div class="wow rotateOutDownRight pink" data-wow-duration="5s">
          <div />
        </div>
        <h3>2. data-wow-delay (5s):</h3>
        <div class="wow flipOutX blue" data-wow-delay="5s">
          <div />
        </div>
        <h3>3. data-wow-delay (5 iteraciones):</h3>
        <div class="wow fadeInLeftBig green" data-wow-iteration="5">
          <div />
        </div>
        <h3>4. data-wow-offset (100px):</h3>
        <div class="wow zoomIn orange" data-wow-offset="100">
          <div />
        </div>
      </section>
    );
  }
}
