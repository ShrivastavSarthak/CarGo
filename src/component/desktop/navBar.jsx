import React, { useEffect, useState } from "react";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";
import DriveEtaRoundedIcon from "@mui/icons-material/DriveEtaRounded";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Link, useLocation } from "react-router-dom";
import NavMob from "../mobile/navBarMobile";
import { pink, orange, purple, red, blue } from "@mui/material/colors";

function MouseOver(e) {
  e.target.style.color = "red";
}
function MouseLeave(e) {
  e.target.style.color = "";
}
function Nav() {
  const [isHover, setHover] = useState(false);
  function handleMouseEnter() {
    setHover(true);
  }

  let location = useLocation();
  const [isTrue, setTrue] = useState(false);

  return (
    <>
      <nav className="navbar shadow navbar-expand-lg bg-light NavShadow d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block  ">
        <div className="container-fluid ">
          <Link
            className="navbar-brand GoCar"
            onMouseOver={MouseOver}
            onMouseLeave={MouseLeave}
          >
            GoCar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link active mx-5 ${
                    location.pathname === "/" ? "shadow " : ""
                  }rounded-circle`}
                  aria-current="page"
                  href="#"
                >
                  <HomeRoundedIcon
                    sx={{ color: orange[500] }}
                    fontSize="large"
                  />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/About"
                  className={`nav-link active mx-5 ${
                    location.pathname === "/About" ? "shadow " : ""
                  }rounded-circle`}
                  aria-current="page"
                >
                  <ImportContactsRoundedIcon
                    fontSize="large"
                    sx={{ color: purple[500] }}
                  />
                </Link>
              </li>
              <li className="nav-item">
                
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link active mx-5 shadow rounded-circle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onMouseEnter={handleMouseEnter}
                >
                  <MoreHorizTwoToneIcon
                    fontSize="large"
                    sx={{ color: pink[300] }}
                  />
                </Link>
                {isHover ? (
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" href="#">
                        Loan
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        EMI calculator
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Ask a Question
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </li>
            </ul>
              <Link to="/login" class="d-flex btn btn-outline-dark" type="submit">
                <LoginSharpIcon/>
              </Link>

          </div>
        </div>
      </nav>
      <NavMob />
    </>
  );
}

export default Nav;
