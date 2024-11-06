import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {" "}
      <footer className="section__container footer__container">
        <div className="footer__col">
          <h4>CONTACT INFO</h4>
          <p>
            <span>
              <i className="ri-map-pin-2-fill"></i>
            </span>
            123, India Aroma Circle, India
          </p>

          <p>
            <span>
              <i className="ri-mail-fill"></i>
            </span>
            krunal@gmail.com
          </p>

          <p>
            <span>
              <i className="ri-phone-fill"></i>
            </span>
            +91 7435045502
          </p>
        </div>

        <div className="footer__col">
          <h4>COMPANY</h4>
          <Link to="/">Home</Link>
          <Link to="/">About Us</Link>
          <Link to="/">Work With Us</Link>
          <Link to="/">Our Blogs</Link>
          <Link to="/">Term & Conditions</Link>
        </div>

        <div className="footer__col">
          <h4>USEFULL LINKS</h4>
          <Link to="/">Help</Link>
          <Link to="/">Track Your Orders</Link>
          <Link to="/">Men</Link>
          <Link to="/">Women</Link>
          <Link to="/">Dresses</Link>
        </div>

        <div className="flex flex-col gap-8">
          <h4>Social Media Handle</h4>
          <div className="flex gap-5">
            <a href="" className="text-3xl hover:text-red-500">
              <i class="ri-instagram-line"></i>
            </a>
            <a href="" className="text-3xl hover:text-red-500">
              <i class="ri-facebook-circle-line"></i>
            </a>
          </div>
        </div>
      </footer>
      <div className="footer__bar">
        Copyright © 2025 All rights reserved By Let's Shop
      </div>
    </>
  );
};

export default Footer;
