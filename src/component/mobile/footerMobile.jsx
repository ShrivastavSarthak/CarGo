import React from "react";
import "../Mstyles.css";
function FooterMob() {
  return (
    <div className="d-lg-none d-xl-block d-xl-none d-xxl-none d-xxl-block">
      <footer class="text-center text-white footer">
        <div class="container pt-4">
          <section class="mb-4">
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-facebook-f"></i>
            </a>

            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-twitter"></i>
            </a>

            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-google"></i>
            </a>

            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-instagram"></i>
            </a>

            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-linkedin"></i>
            </a>

            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div class="text-center text-dark p-3 copyright">
          © 2020 Copyright:GoCar
        </div>
      </footer>
    </div>
  );
}

export default FooterMob;
