import React from "react";
import Template from "../components/Template";
import loginImg from "../assets/login.jpg";
import Last from "../components/Last";

const Logoin = ({ setIsLoggedIn }) => {
  return (
    <div className="bg-sky-300 w-[1550px]">
      <Template
        title="Welcome Back"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={loginImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
      />
      <Last></Last>
    </div>
  );
};

export default Logoin;
