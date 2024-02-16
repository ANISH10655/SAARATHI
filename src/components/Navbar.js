import React, { useState } from "react";
import logo from "../assets/mmt logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={`flex w-full h-[100px]  justify-evenly
      ${color ? "bg-orange-800 text-white" : "transparent text-yellow-500"}
        fixed z-50 duration-100 ease-linear`}
    >
      <div className="flex flex-row items-center gap-2 ">
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="Bharat Business"
              className="animate__animated wow animate__flip h-[70px] -mt-4"
            />
            <div className="ml-[90px] -mt-12 flex gap-4 animate__animated wow animate__backInDown">
              <h2 className="font-bold text-[28px]">S A A R A T H I</h2>
              
            </div>
          </Link>
        </div>
      </div>
      <nav className="  h-full w-[800px] ">
        <ul className="flex  items-center mt-[45px] gap-3 justify-evenly  font-bold">
          <li>
            <Link to="/">
              <p className="hover:text-yellow-500">HOME</p>
            </Link>
            <div></div>
          </li>
          <li>
            <Link to="/flight">
              <p className="hover:text-yellow-500">FLIGHT</p>
            </Link>
            <div></div>
          </li>
          <li>
            <Link to="/trains">
              <p className="hover:text-yellow-500">TRAINS</p>
            </Link>
            <div></div>
          </li>
          <li>
            <Link to="/hotels">
              <p className="hover:text-yellow-500">HOTELS</p>
            </Link>
            <div></div>
          </li>
          <li>
            <Link to="/buses">
              <p className="hover:text-yellow-500">BUSES</p>
            </Link>
            <div></div>
          </li>
          <li>
            <Link to="/cabs">
              <p className="hover:text-yellow-500">CABS</p>
            </Link>
            <div></div>
          </li>
          <li>
            <Link to="/login">
              <p className="hover:text-yellow-500">LOGIN</p>
            </Link>
            <div></div>
          </li>
          <li>
            <Link to="/signUp">
              <p className="hover:text-yellow-500">SIGN-UP</p>
            </Link>
            <div></div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
