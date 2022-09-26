import React, { useState } from "react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaUserAlt } from "react-icons/fa";
import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";
import {  signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
console.log('donennnnn',user);

  return (
    <div className="max-w-screen-lg mx-auto py-10">
      <nav className="lg:flex justify-between items-center px-5 md:relative">
        <div className="flex items-center justify-between">
          <img className="w-20 h-20" src={logo} alt="" />
          <input
            className="border-2 border-primary h-10 rounded-lg text-primary text-sm lg:ml-28 focus:outline-none text-center"
            type="search"
            name="search"
            placeholder="Search"
          ></input>
          <div>
            {open ? (
              <XMarkIcon
                onClick={() => setOpen(!open)}
                className="block lg:hidden w-10 h-10 p-2 cursor-default text-primary"
              ></XMarkIcon>
            ) : (
              <Bars2Icon
                onClick={() => setOpen(!open)}
                className="block lg:hidden w-10 h-10 p-2 cursor-default text-primary"
              ></Bars2Icon>
            )}
          </div>
        </div>
        <ul
          className={`  md:text-center md:absolute lg:flex lg:static absolute w-fit transition duration-500 ${
            open ? "left-1/2" : "top-[-300px]"
          }`}
        >
          <li className="uppercase text-sm font-semibold hover:bg-primary hover:text-white text-primary py-2 lg:px-4 rounded-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="uppercase text-sm font-semibold hover:bg-primary hover:text-white text-primary py-2 lg:px-4 rounded-lg">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="uppercase text-sm font-semibold hover:bg-primary hover:text-white text-primary py-2 lg:px-4 rounded-lg">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="uppercase text-sm font-semibold hover:bg-primary hover:text-white text-primary py-2 lg:px-4 rounded-lg">
            <Link to="/portfolio">PortFolio</Link>
          </li>
          {
          user ? <li className="uppercase text-sm font-semibold hover:bg-primary hover:text-white text-primary py-2 lg:px-4 rounded-lg">
          <Link to="/"
          onClick={logout}>SignOut</Link>
          </li>
          :
          <li className="uppercase text-sm font-semibold hover:bg-primary hover:text-white text-primary py-2 lg:px-4 rounded-lg">
          <Link to="/signin">SignIn</Link>
        </li>
         }
        
         {
          user &&  <li className="flex justify-center items-center">
          <FaUserAlt className="text-primary"></FaUserAlt>
        </li>
         }
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

//(open ? "left-0" : "-left-full") +
// " lg:static lg:flex lg:w-auto fixed bottom-0 top-20 w-fit  text-primary
