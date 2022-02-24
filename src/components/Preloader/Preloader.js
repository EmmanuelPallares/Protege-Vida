import React from "react";

const Preloader = () => {
  return (
    <>
      <div class="preloader">
        <div id="cssload-global">
          <div id="cssload-top" class="cssload-mask">
            <div class="cssload-plane"></div>
          </div>
          <div id="cssload-middle" class="cssload-mask">
            <div class="cssload-plane"></div>
          </div>

          <div id="cssload-bottom" class="cssload-mask">
            <div class="cssload-plane"></div>
          </div>
          <div class="loading-text">Quultiva ...</div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
