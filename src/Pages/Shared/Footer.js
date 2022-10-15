import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="bg-primary sticky top-[100vh]">
      <footer className="footer footer-center p-10 rounded">
        <div className="grid grid-flow-col gap-4 text-white font-semibold">
          <NavLink to="/" className="link link-hover">
            About Us
          </NavLink>
          <NavLink to="portfolio" className="link link-hover">
            Portfolio
          </NavLink>
          <NavLink to="blogs" className="link link-hover">
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
              <FaFacebook className="w-10 h-10 text-[#4267B2] transform transition duration-500 hover:scale-110"></FaFacebook>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-10 h-10 text-[#e95950] transform transition duration-500 hover:scale-110"></FaInstagram>
            </a>
            <a
              href="https://twitter.com/home?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="w-10 h-10 text-[#00acee] transform transition duration-500 hover:scale-110"></FaTwitter>
            </a>
          </div>
        </div>
        <div>
          <p className="text-white">
            Copyright © {year} - All right reserved by{" "}
            <span className="text-xl font-bold text-white">RIPON</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
