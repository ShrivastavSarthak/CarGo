import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

function Slider() {
  return (
    <>
      <div className="d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block mx-5">
        <div className=" shadow-lg board container-lg">
          <div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-bs-ride="false"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="my-5 row">
                  <div className="col-sm-3 ms-5">
                    <img
                      src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                      class="d-block w-100"
                      alt="car1"
                    />
                  </div>
                  <div className="col-sm-3 ">
                    <img
                      src="https://images.unsplash.com/photo-1598586958772-8bf368215c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                      class="d-block w-100"
                      alt="car1"
                    />
                  </div>
                  <div className="ms-auto me-auto col-sm-3">
                    <div className="mt-5 ">
                      <h1 className="display-1 pt-auto pt-5 text-start fs-1 fw-bold text-light">
                        Book
                      </h1>
                      <h1 className=" text-start text-light">Your car now.</h1>
                      <button
                        type="button"
                        class="btn mt-3 btn-lg btn-outline-light"
                      >
                        Check out
                      </button>
                    </div>
                  </div>
                </div>
                <div class="carousel-caption d-none d-md-block">
                  <h4 className="mb-0">Book test drive</h4>
                </div>
              </div>
              <div class="carousel-item">
                <div className="my-5 row">
                  <div className="col-sm-6">
                    <img
                      src="https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      class="d-block w-100"
                      alt="car1"
                    />
                  </div>
                  <div className="col-sm-6">
                    <form>
                      <div class="mb-3">
                        <h1 className="display-1 text-light ">Sell your car</h1>
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                          />
                          <label for="floatingInput">Your name</label>
                        </div>

                        <div class="form-floating mb-3">
                          <input
                            type="email"
                            class="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                          />
                          <label for="floatingInput">Email address</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-4">
                          <select
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>how old your car</option>
                            <option value="1">under 5 year</option>
                            <option value="2">under 7 year</option>
                            <option value="3">older then 7 year</option>
                          </select>
                        </div>
                        <div className="col-sm-3">
                          <select
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Discount</option>
                            <option value="1">Upto 10%</option>
                            <option value="2">Upto 20%</option>
                            <option value="3">Upto 40%</option>
                          </select>
                        </div>
                      </div>
                      <div class="mb-3"></div>
                      <div class="mb-3 form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="exampleCheck1"
                        />
                      </div>
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
                <div class="carousel-caption d-none d-md-block">
                  <h4>Sell Your car</h4>
                </div>
              </div>
              <div class="carousel-item">
                <div className="container">
                  <div className=" row my-5">
                    <div className="col-sm-6 ms-5">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1661277604802-17ee93c1263c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="col-sm-6"></div>
                  </div>
                </div>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Feedback</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
