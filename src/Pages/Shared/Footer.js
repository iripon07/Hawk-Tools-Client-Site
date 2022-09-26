import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import footerBg from "../../images/footerBg.jpg";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div
      style={{
        backgroundImage: `url(${footerBg})`,
      }}
      className="object-cover"
    >
      <footer className="footer footer-center p-10 rounded">
        <div className="grid grid-flow-col gap-4 text-primary font-semibold">
          <NavLink to="/about" className="link link-hover">
            About Us
          </NavLink>
          <NavLink to="" className="link link-hover">
            Portfolio
          </NavLink>
          <NavLink to="" className="link link-hover">
            Blogs
          </NavLink>
          <NavLink to="" className="link link-hover">
            User
          </NavLink>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-10 h-10 hover:text-[#4267B2] transform transition duration-500 hover:scale-110"></FaFacebook>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-10 h-10 hover:text-[#e95950] transform transition duration-500 hover:scale-110"></FaInstagram>
            </a>
            <a
              href="https://twitter.com/home?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="w-10 h-10 hover:text-[#00acee] transform transition duration-500 hover:scale-110"></FaTwitter>
            </a>
          </div>
        </div>
        <div>
          <p>
            Copyright © {year} - All right reserved by{" "}
            <span className="text-xl font-bold text-primary">RIPON</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
