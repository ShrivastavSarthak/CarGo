import { SendTwoTone } from "@mui/icons-material";
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

function Log() {

  const navigate = useNavigate();
  const[credentials, SetCredentials] =useState({email: "", password: ""})
  const handleSubmit = async (e) => {
    e.preventDefault();
    const responce = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: credentials.email,password: credentials.password })
    });
    const json = await responce.json();
    console.log(json);
    if (json.success){
      // SAVE THE AUTH TOKEN AND REDIRECT
        localStorage.setItem("token",json.authtoken)
        navigate("/")

    }else{
      alert("Invalid Credentials")
    }
  };
  const onChange =(e)=>{
      SetCredentials({...credentials, [e.target.name]:e.target.value})
  }

  return (
    <>
      <section className="">
        <div className="px-4 py-5 px-md-5 text-center text-lg-start ">
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0 d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  The best offer <br />
                  <span className="text-primary ">for your business</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                  quibusdam tempora at cupiditate quis eum maiores libero
                  veritatis? Dicta facilis sint aliquid ipsum atque?
                </p>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card shadow-lg">
                  <div className="card-body py-5 px-md-5">





                    <form onSubmit={handleSubmit}>
                      <h1 className="strong">Login</h1>
                      <div className="form-outline mt-5 mb-4">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={credentials.email}
                          onChange={onChange}
                          className="form-control"
                        />
                        <label
                          className="form-label"
                          htmlhtmlfor="form3Example3"
                        >
                          Email address
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                        value={credentials.password}
                          type="password"
                          id="password"
                          name="password"
                          onChange={onChange}
                          className="form-control"
                        />
                        <label className="form-label" htmlfor="form3Example4">
                          Password
                        </label>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-4">
                        <label
                          className="form-check-label"
                          htmlfor="form2Example33"
                        >
                          Don't have any account{" "}
                          <Link to="/registration">click here</Link>
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4"
                      >
                        Sign in
                      </button>

                      <div className="text-center">
                        <p>or sign up with:</p>
                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </button>

                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-google"></i>
                        </button>

                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-twitter"></i>
                        </button>

                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-github"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Log;
