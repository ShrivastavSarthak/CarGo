import React from "react";

const SellForm = () => {
  const width = { width: "20rem" };

  return (
    <div>
      <center>
        <h1 className="display-1 text-center bolder my-5">
          Sell your Car now.
        </h1>
        <div>
          <div
            class="card my-5 mx-5 border border-dark border-top-0 shadow-lg"
            style={width}
          >
            <div class="card-body">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Your full name</label>
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
              <div class="form-floating">
                <select
                  class="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option selected>select</option>
                  <option value="1">less the 5 year</option>
                  <option value="2">5 year</option>
                  <option value="3">more the 5 year</option>
                </select>
                <label for="floatingSelect">How old your car</label>
              </div>
              <input
                class="form-check-input mt-2"
                type="checkbox"
                value=""
                id="invalidCheck2"
                required
              />
              <label class="form-check-label mt-2" for="invalidCheck2">
                Agree to terms and conditions
              </label>

              <a href="#" class="btn btn-primary my-5">
                Submit
              </a>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default SellForm;
