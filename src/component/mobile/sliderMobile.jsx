import React from "react";
import { Link } from "react-router";
import "../Mstyles.css";
function SliderMobile() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade mx-2  d-lg-none d-xl-block d-xl-none d-xxl-none d-xxl-block"
        data-bs-touch="true"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="Mobile_banner container row rounded-2 mt-2 ">
              <div className="col-sm-1 overflow-hidden  d-flex ">
                <center>
                  <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="position-absolute top-5 start-5 col-sm-2">
                      <h1 className="text-center fs-1 fw-bolder text-light mt-5 ">
                        Book
                      </h1>
                      <h1 className="text-center fs-1 fw-bolder text-light ms">
                        Your Car Now.
                      </h1>
                      <button
                        type="button"
                        class="btn btn-outline-light btn-lg mt-5"
                      >
                        Check-Out
                      </button>
                    </div>
                  </div>
                </center>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default SliderMobile;
