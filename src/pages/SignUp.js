import React from "react";
import signupImg from "../assets/signup.jpg";
import Template from "../components/Template";
import Last from "../components/Last";

const SignUp = ({ setIsLoggedIn }) => {
  return (
    <div className="bg-sky-200 w-[1550px]">
      <Template
        title="Discover Bharat"
        desc1="Improve your Travel Experience With Saarathi"
        desc2=""
        image={signupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
      />
      <Last></Last>
    </div>
  );
};

export default SignUp;
