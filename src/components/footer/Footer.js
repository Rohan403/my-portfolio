import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="footerContainer">
          <div class="footerLogo">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/63b3fa47902895.58887b32da6e6.gif"
              alt="Logo"
            />
          </div>
          <div class="footerNav">
            <p>
              <a href="#about">About me</a>
            </p>
            <p>
              <a href="#services">services</a>
            </p>
            <p>
              <a href="#">blogs</a>
            </p>
            <p>
              <a href="./template/portifolio.html">Portifolio</a>
            </p>
            <p>
              <a href="#contact">contact me</a>
            </p>
          </div>
          <div class="footerMedias">
            <div class="footerMedia">
              <a href="https://www.linkedin.com/in/laura-irene-paul">
                <i class="bi bi-linkedin"></i>
              </a>
            </div>
            <div class="footerMedia">
              <a href="https://www.facebook.com/irene.mmassy.1466">
                <i class="bi bi-facebook"></i>
              </a>
            </div>
            <div class="footerMedia">
              <a href="https://www.instagram.com/minaheryy/">
                <i class="bi bi-instagram"></i>
              </a>
            </div>
            <div class="footerMedia">
              <a href="https://github.com/irenemmassy">
                <i class="bi bi-github"></i>
              </a>
            </div>
          </div>
          <span>Copyright ©2024 All rights reserved </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
