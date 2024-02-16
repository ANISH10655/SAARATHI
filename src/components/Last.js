import React from "react";

import { FaPhoneAlt } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFillHouseAddFill } from "react-icons/bs";
import linkedin from "../assets/twitter.png";
import logo from "../assets/mmt logo.png";
import insta from "../assets/instagram.png";
import facebook from "../assets/facebook.png";

const Last = () => {
  return (
    <div>
      <div className="w-[1550px] h-[290px] bg-orange-800">
        <div className="h-full w-[70%]  mx-auto  flex gap-20 justify-between">
          <div className="flex item-center h-[70%] w-[30%]  mt-14 gap-3 justify-evenly">
            <img src={logo} className="h-[30%] mt-[30%]"></img>
            <div className="flex flex-col gap-3">
              <div className="flex mt-20 space-x-2">
                <FaPhoneAlt className="text-white"></FaPhoneAlt>
                <p className="text-white ">+91 2345678923</p>
              </div>
              <div className="flex  space-x-2">
                <BsFillEnvelopeFill className="text-white"></BsFillEnvelopeFill>
                <p className="text-white ">saarathi@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="h-[50%] w-1 bg-white mt-16"></div>

          <div className="flex flex-col item-center h-[70%] w-[30%]  mt-14 gap-3">
            <div className="flex mt-[20%] gap-2">
              <BsFillHouseAddFill className="text-white ml-3 text-3xl"></BsFillHouseAddFill>
              <p className="text-white text-2xl">location</p>
            </div>
            <p className="text-white ml-2">
              Registered. Office - A/7 Uttarayan, Sarani, North Nowadapara,
              Jharkhand, Parganas North,Ranchi, India - 56789
            </p>
          </div>

          <div className="h-[50%] w-1 bg-white mt-20"></div>
          <div className="flex flex-col item-center h-[70%] w-[30%]  mt-16 gap-3">
            <div className="flex ml-10 gap-4">
              <img src={linkedin} className="h-10 mt-[20%] ml-3"></img>
              <img src={insta} className="h-10 mt-[20%] ml-3"></img>
              <img src={facebook} className="h-10 mt-[20%] ml-3"></img>
            </div>
            <div className="flex flex-col ml-10 gap-1 mt-3 text-white">
              <p>© 2023 Saarathi, Inc.</p>
              <p>All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Last;
