import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import frameImg from "../assets/frame.png";
import { FcGoogle } from "react-icons/fc";


const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 justify-between gap-y-0">
      
      {/* Left Section (Text + Form) */}
      <div className="w-11/12 max-w-[450px]">
        <h1 className="text-white font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
        <p className="text-[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-white">{desc1}</span>
          <br />
          <span className="text-blue-100">{desc2}</span>
        </p>

        {formtype === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        {/* OR Divider */}
        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="bg-gray-500 h-[1px] w-full"></div>
          <p className="text-gray-500">OR</p>
          <div className="bg-gray-500 h-[1px] w-full"></div>
        </div>

        {/* Google Button */}
        <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-white border border-gray-500 px-[12px]  py-[8px] gap-x-2 mt-6">
        <FcGoogle />

          <p>Sign Up With Google</p>
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="relative w-11/12 max-w-[450px] ">
        <img src={frameImg} alt="frame" loading="lazy" />
        <img src={image} alt="student" loading="lazy" className="absolute -top-4 right-4" />
      </div>

    </div>
  );
};

export default Template;
