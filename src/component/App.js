import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./desktop/navBar";
import About from "./desktop/About";
import Log from "./Login";
import Home from "./desktop/Home";
import { useState } from "react";
import Reg from "./Reg";
import BuyCars from "./mobile/cars/buyCars";
import Footer from "./desktop/footer";
import SellForm from "./mobile/cars/SellForm";

function App() {
  return (
    <div className="base">
      <Router>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Log />} />
          <Route path="/registration" element={<Reg/>} />
          <Route path="/buycars" element={<BuyCars/>} />
          <Route path="/car-Collection" element={<newCar />} />
          <Route path="/SellForm" element={<SellForm/>} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
