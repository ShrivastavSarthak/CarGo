import React, { useState } from "react";
import { Link } from "react-router-dom";

function Log() {
  return (
    <>
      <section class="">
        <div class="px-4 py-5 px-md-5 text-center text-lg-start">
          <div class="container">
            <div class="row gx-lg-5 align-items-center">
              <div class="col-lg-6 mb-5 mb-lg-0 d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block">
                <h1 class="my-5 display-3 fw-bold ls-tight">
                  The best offer <br />
                  <span class="text-primary">for your business</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                  quibusdam tempora at cupiditate quis eum maiores libero
                  veritatis? Dicta facilis sint aliquid ipsum atque?
                </p>
              </div>

              <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="card">
                  <div class="card-body py-5 px-md-5">
                    <form>
                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3"
                          class="form-control"
                        />
                        <label class="form-label" for="form3Example3">
                          Email address
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4"
                          class="form-control"
                        />
                        <label class="form-label" for="form3Example4">
                          Password
                        </label>
                      </div>

                      <div class="form-check d-flex justify-content-center mb-4">
                        <label class="form-check-label" for="form2Example33">
                          Don't have any account{" "}
                          <Link to="/registration">click here</Link>
                        </label>
                      </div>

                      <button
                        type="submit"
                        class="btn btn-primary btn-block mb-4"
                      >
                        Sign up
                      </button>

                      <div class="text-center">
                        <p>or sign up with:</p>
                        <button
                          type="button"
                          class="btn btn-link btn-floating mx-1"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </button>

                        <button
                          type="button"
                          class="btn btn-link btn-floating mx-1"
                        >
                          <i class="fab fa-google"></i>
                        </button>

                        <button
                          type="button"
                          class="btn btn-link btn-floating mx-1"
                        >
                          <i class="fab fa-twitter"></i>
                        </button>

                        <button
                          type="button"
                          class="btn btn-link btn-floating mx-1"
                        >
                          <i class="fab fa-github"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Log;
