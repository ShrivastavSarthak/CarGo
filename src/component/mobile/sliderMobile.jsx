import { Container } from "@material-ui/core";
import React from "react";
import { Link } from "react-router";
import "../Mstyles.css";
function SliderMobile() {
  const CardStyle = {
    width: "24rem",
    backgroundColor: "#E2B0FF",
    height: "13rem",
  };
  return (
    <div className="d-lg-none d-xl-block d-xl-none d-xxl-none d-xxl-block">
      <Container
        className="w-auto p-3 h-50 shadow-lg"
        style={{ backgroundColor: "lightblue" }}
      >
        <h4>Welcome to</h4>
        <h1 className="bolder">GoCar</h1>
        <div
          id="carouselExampleInterval"
          class="carousel slide my-5 pb-3"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class=" carousel-item active" data-bs-interval="5000">
              <div
                class="shadow-lg border border-dark border-2 rounded card"
                style={CardStyle}
              >
                <div class="card-body">
                  <h1 class="card-title bolder">Book</h1>
                  <h6 class="card-subtitle mb-2 text-muted">
                    Your car test drive.
                  </h6>
                  <p>Book your test drive near you. at ant time.</p>
                  <a href="#" class="btn btn-outline-dark">
                    Book now
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="10000">
              <div
                class="shadow-lg border border-dark border-2 rounded card"
                style={CardStyle}
              >
                <div class="card-body">
                  <h1 class="card-title bolder">Sell your car</h1>
                  <h6 class="card-subtitle mb-2 text-muted">
                    By second hand cars under best condition.
                  </h6>
                  <p class="card-text">
                    Sell your car at geniun rate and all formalities will we done at your door step.
                  </p>
                  <a href="#" class="btn btn-outline-dark">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div
                class="shadow-lg border border-dark border-2 rounded card"
                style={CardStyle}
              >
                <div class="card-body">
                  <h1 class="card-title">Review</h1>
                  <h6 class="card-subtitle mb-2 text-muted">
                    Write a review and win exctitng gifts
                  </h6>
                  <p class="card-text">
                    our customer is out priority so we always do our best to fullfill our customer demands.
                  </p>
                  <a href="#" class="btn btn-outline-dark">
                    Give us feeedback
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SliderMobile;
