import React, { useState } from "react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  // console.log("donennnnn", user);

  return (
    <nav className="w-full bg-primary sticky top-0 z-50">
      <div className="justify-between px-4 mx-auto lg:max-w-screen-xl lg:items-center lg:flex lg:px-8">
        <div>
          <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
            <h2 className="text-5xl font-extrabold text-white">
            <Link to="/"> HA<span className="text-yellow-600">W</span>K</Link>
            </h2>
            <div className="lg:hidden">
              <button onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <XMarkIcon className="block lg:hidden w-16 h-16 p-2 cursor-pointer text-white"></XMarkIcon>
                ) : (
                  <Bars2Icon className="block lg:hidden w-16 h-16 p-2 cursor-pointer text-white"></Bars2Icon>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex justify-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
              <li className="text-white text-xl font-serif hover:underline">
                <Link to="/">Home</Link>
              </li>
              {user && (
                <li className="text-white text-xl font-serif hover:underline">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              )}
              <li className="text-white text-xl font-serif hover:underline">
                <Link to="/blogs">Blogs</Link>
              </li>
              <li className="text-white text-xl font-serif hover:underline">
                <Link to="/portfolio">PortFolio</Link>
              </li>

              {user ? (
                <li className="text-white text-xl font-serif hover:underline">
                  <Link to="/" onClick={logout}>
                    SignOut
                  </Link>
                </li>
              ) : (
                <li className="text-white text-xl font-serif hover:underline">
                  <Link to="/signin">SignIn</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
