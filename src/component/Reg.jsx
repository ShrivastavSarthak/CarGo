import React, {useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
const Reg = () => {
  const[credentials, SetCredentials] =useState({name:"",email: "", password: ""})
  const navigate = useNavigate();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name,email ,password} = credentials
    const responce = await fetch("http://localhost:5000/api/auth/createuser", {
      
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name,email,password})
    });
    const json = await responce.json();
    console.log(json);
    if (json.success){
      // SAVE THE AUTH TOKEN AND REDIRECT
        localStorage.setItem("token",json.authtoken)
        navigate("/login")

    }else{
      alert("Invalid Credentials")
    }
  };
  const onChange =(e)=>{
      SetCredentials({...credentials, [e.target.name]:e.target.value})
  }





  return (
    <>
      <section class="">
        <div class="px-4 py-5 px-md-5 text-center text-lg-start">
          <div class="container">
            <div class="row gx-lg-5 align-items-center">
              <div class="col-lg-6 mb-5 mb-lg-0 d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block">
                <h1 class="my-5 display-3 fw-bold ls-tight">
                  The best offer <br />
                  <span class="text-primary">for your business</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                  quibusdam tempora at cupiditate quis eum maiores libero
                  veritatis? Dicta facilis sint aliquid ipsum atque?
                </p>
              </div>

              <div class=" col-lg-6 mb-5 mb-lg-0">
                <div class="card">
                  <div class="shadow-lg card-body py-5 px-md-5">
                    <form  onSubmit={handleSubmit}>
                      <div>
                        <div class="col-md-6 mb-4">
                          <h1 className="strong">Regrestration</h1>
                        </div>
                        <div className="row">
                          <div class="form-outline  ">
                            <input
                              type="text"
                              id="name"
                              class="form-control"
                              name="name"
                              onChange={onChange}
                            />
                            <label class="form-label" for="name">
                              Your name
                            </label>
                          </div>
                          
                        </div>
                        <div class="col-md-6 mb-4"></div>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          class="form-control"
                          name="email"
                          onChange={onChange}
                        />
                        <label class="form-label" for="email">
                          Email address
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          class="form-control"
                          name="password"
                          onChange={onChange}
                          minLength={5}
                          required
                        />
                        <label class="form-label" for="password">
                          Password
                        </label>
                      </div>

                      <div class="form-check d-flex justify-content-center mb-4">
                        <label class="form-check-label" for="form2Example33">
                          Have allready account{" "}
                          <Link to="/login">click here</Link>
                        </label>
                      </div>

                      <button
                        type="submit"
                        class="btn btn-primary btn-block mb-4 text-center"
                      >
                        Sign up
                      </button>

                      <div class="text-center">
                        <p>or sign up with:</p>
                        <button
                          type="button"
                          class="btn btn-link btn-floating mx-1"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </button>

                        <button
                          type="button"
                          class="btn btn-link btn-floating mx-1"
                        >
                          <i class="fab fa-google"></i>
                        </button>

                        <button
                          type="button"
                          class="btn btn-link btn-floating mx-1"
                        >
                          <i class="fab fa-twitter"></i>
                        </button>

                        <button
                          type="button"
                          class="btn btn-link btn-floating mx-1"
                        >
                          <i class="fab fa-github"></i>
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
};

export default Reg;
