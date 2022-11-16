import React from "react";
import TopCarMob from "../mobile/TopCarMob";
import { Link } from "react-router-dom";
import "../styles.css";
function Car() {
  const width = { width: "14rem" };
  return (
    <>
      <div className="mt-5 shadow-lg rounded carTemp shadow container-md d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block">
        <h1 className="strong  ps-2 text-start">The most search cars</h1>
        <hr />
        <div className="row pb-3">
          <div className="col-sm-3  ">
            <div className="card" style={width}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card" style={width}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card" style={width}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card" style={width}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5  shadow-lg rounded carTemp shadow container-md d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block">
        <div>
          <h1 className="strong  ps-2 text-start">Popular cars</h1>
          <hr />
          <div className="row pb-3 border border-white">
            {[1, 2, 3, 4].map(() => (
              <div className="card col-sm-3 mx-5" style={width}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5  shadow-lg rounded carTemp shadow container-md d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block">
        <div>
          <h1 className="strong  ps-2 text-start">Latest Cars</h1>
          <hr />
          <div className="row pb-3">
            {[1, 2, 3, 4].map(() => (
              <div className="card col-sm-3 mx-5" style={width}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <TopCarMob />
    </>
  );
}

export default Car;
