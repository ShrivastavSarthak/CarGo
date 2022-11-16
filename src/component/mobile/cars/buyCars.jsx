import React from "react";

const BuyCars = () => {
  const width = { width: "14rem" };
  return (
    <div>
      <h1 className="text-center strong fw-bolder fs-1 my-3 ">Top new Cars</h1>
      <hr />
      <div>
        {[1, 2, 3, 4, 5].map(() => {
          <div class="card" style={width}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default BuyCars;
