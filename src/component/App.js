import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./desktop/navBar";
import About from "./desktop/About";
import Log from "./Login";
import Home from "./desktop/Home";
import { useState } from "react";
import Reg from "./Reg";
import newCar from "./desktop/car";
import Footer from "./desktop/footer";
function App() {
  return (
    <div className="base">
      <Router>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Log />} />
          <Route path="/registration" element={<Reg />} />
          <Route path="/car-Collection" element={<newCar />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
