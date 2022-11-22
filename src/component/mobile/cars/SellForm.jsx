import React from "react";

const SellForm = () => {
  const width = { width: "20rem", height: "20rem" };

  return (
    <div>
      <center>
        <h1 className="display-1 text-center bolder my-5">
          Sell your Car now.
        </h1>
        <div>
          <div
            class="card my-5 mx-5 border border-dark border-top-0"
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

              <a href="#" class="btn btn-primary">
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
