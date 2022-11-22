import React, {useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import DehazeIcon from "@mui/icons-material/Dehaze";
import HomeIcon from "@mui/icons-material/Home";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import GoCar from "../Animation/mobGoCar/mobGoCar";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import { pink, orange, purple, red } from "@mui/material/colors";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";



function NavMob() {

    const location= useLocation();


  return (
    <>
      <div className="shadow-lg d-lg-none d-xl-block d-xl-none d-xxl-none d-xxl-block">
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <GoCar />
            {/* <h1 className="fw-bold text-secondary">GoCar</h1> */}
            <div className="d-flex">
              <button
                className="btn btn-Dark"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                <DehazeIcon />
              </button>

              <div
                className="offcanvas offcanvas-start w-50"
                tabindex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
              >
                <div className="offcanvas-header">
                  {/* <h1 className="offcanvas-title" id="offcanvasExampleLabel">
                    GoCar
                  </h1> */}
                  <GoCar />
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <div>
                    <div className="col ms-3 mt-3">
                        <Link
                        to="/Login"
                        className={`col  mt-3 px-5 py-2 button rounded-top rounded-bottom ${location.pathname==="/Login" ? "shadow": ""}`}
                          
                        >
                          <LoginRoundedIcon
                            fontSize="large"
                            sx={{ color: pink[300] }}
                          />
                        </Link>
                    </div>
                    <div className="col ms-3 mt-3">
                      <Link to="/" className={`px-5 py-2 button rounded-top rounded-bottom ${location.pathname==="/" ? "shadow": ""}`}>
                        <HomeIcon
                          fontSize="large"
                          sx={{ color: orange[500] }}
                        />
                      </Link>
                    </div>
                    <div className="col ms-3 mt-3">
                      <Link to="/About" className={`px-5 py-2 button rounded-top rounded-bottom ${location.pathname==="/About" ? "shadow": ""}`}>
                        <ImportContactsOutlinedIcon
                          fontSize="large"
                          sx={{ color: purple[500] }}
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
