import React from "react";
import Slider from "./slider";
import "../styles.css";
import Car from "./car";
import SliderMobile from "../mobile/sliderMobile";
// import Footer from "./footer";

function Home() {
  return (
    <>
      <center>
        <div className="board ">
          <Slider />
        </div>

        <SliderMobile />
        <Car />
      </center>
    </>
  );
}

export default Home;
