import React, { useState } from "react";
import { Link } from "react-router-dom";
import { pink, red, orange, purple } from "@mui/material/colors";
import CalculateIcon from "@mui/icons-material/Calculate";
import CarRentalIcon from "@mui/icons-material/CarRental";
import SellIcon from "@mui/icons-material/Sell";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import newCar from "../desktop/car";
import BuyCars from "./cars/buyCars";

function TopCarMob() {
  const [isTrue, SetTrue] = useState(true);
  function handleTrue() {
    SetTrue(!isTrue);
  }

  return (
    <div className="d-lg-none d-xl-block d-xl-none d-xxl-none d-xxl-block  mt-5 ">
      <div className="row mx-2">
        <div className="col-6">
          <Link
           to="/buycars"
            type="button"
            className="shadow-lg btn btn-secondary btn-lg p-1 w-75"
          >
            <DirectionsCarIcon fontSize="large" />
            Buy Car
          </Link>
        </div>
        <div className="col-6 ">
          <Link type="button" className="shadow-lg btn btn-warning btn-lg p-1 w-75">
            <SellIcon fontSize="large" />
            Sell Car
          </Link>
        </div>
        <div className="col-6 mt-4">
          <Link type="button" className="shadow-lg btn btn-warning btn-lg w-75">
            <CarRentalIcon fontSize="large" />
            <p>Car For Rent</p>
          </Link>
        </div>
        <div className="col-6 mt-4">
          <Link type="button" className="shadow-lg btn btn-secondary btn-lg w-75">
            <CalculateIcon fontSize="large" />
            <p>Buy Used Car</p>
          </Link>
        </div>

        <div className="collapse mt-5" id="collapseExample">
          <div className="row mx-2">
            <div className="col-4 mt-4">
              <Link
                type="button"
                className="shadow btn btn-warning btn-lg px-3 w-75"
              >
                <h6>News</h6>
              </Link>
            </div>
            <div className="col-4 mt-4">
              <Link type="button" className="shadow btn btn-secondary btn-lg w-75">
                <h6>Videos</h6>
              </Link>
            </div>
            <div className="col-4 mt-4">
              <Link type="button" className="shadow btn btn-warning btn-lg w-75">
                <h6>Offers</h6>
              </Link>
            </div>
            <div className="col-4 mt-4">
              <Link type="button" className="shadow btn btn-secondary btn-lg w-75">
                <h6>Loan</h6>
              </Link>
            </div>
            <div className="col-4 mt-4">
              <Link type="button" className="shadow btn btn-warning btn-lg w-75">
                <h6>EMI cal. </h6>
              </Link>
            </div>
            <div className="col-4 mt-4 ps-2">
              <Link type="button" className="shadow btn btn-secondary btn-lg w-75 ">
                <h6>Insurance</h6>
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-5">
          <a
            data-bs-toggle="collapse"
            href="#collapseExample"
            className="link-dark"
            aria-expanded="false"
            aria-controls="collapseExample"
            onClick={handleTrue}
          >
            {isTrue ? "view more" : "view less"}
          </a>
        </p>
      </div>
      
    </div>
  );
}

export default TopCarMob;
