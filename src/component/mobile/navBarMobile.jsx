import React from "react";
import { Link } from "react-router-dom";
import DehazeIcon from "@mui/icons-material/Dehaze";
import HomeIcon from "@mui/icons-material/Home";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import GoCar from "../Animation/mobGoCar/mobGoCar";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import { pink, orange, purple, red } from "@mui/material/colors";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

function NavMob() {
  return (
    <>
      <div className="d-lg-none d-xl-block d-xl-none d-xxl-none d-xxl-block">
        <nav class="navbar bg-light">
          <div class="container-fluid">
            <GoCar />
            {/* <h1 class="fw-bold text-secondary">GoCar</h1> */}
            <div class="d-flex">
              <button
                class="btn btn-Dark"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                <DehazeIcon />
              </button>

              <div
                class="offcanvas offcanvas-start w-50"
                tabindex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
              >
                <div class="offcanvas-header">
                  {/* <h1 class="offcanvas-title" id="offcanvasExampleLabel">
                    GoCar
                  </h1> */}
                  <GoCar />
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body">
                  <div>
                    <div className="col ms-3 mt-3">
                        <Link
                          className="col  mt-3"
                        >
                          <LoginRoundedIcon
                            fontSize="large"
                            sx={{ color: pink[300] }}
                          />
                        </Link>
                    </div>
                    <div className="col ms-3 mt-3">
                      <Link to="/">
                        <HomeIcon
                          fontSize="large"
                          sx={{ color: orange[500] }}
                        />
                      </Link>
                    </div>
                    <div className="col ms-3 mt-3">
                      <Link to="/About">
                        <ImportContactsOutlinedIcon
                          fontSize="large"
                          sx={{ color: purple[500] }}
                        />
                      </Link>
                    </div>
                    <div className="col mt-3 ms-3">
                      <Link to="/car-Collection">
                        <DirectionsCarIcon
                          fontSize="large"
                          sx={{ color: red[500] }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavMob;
