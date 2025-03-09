import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    console.log('Printing the formData');
    console.log(formData)
    navigate("/dashboard");
  }

  return (
    <div>
      <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
        {/* Email Field */}
        <label className="w-full">
          <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
            Email Address <sup className="text-pink-800">*</sup>
          </p>
          <input
            required
            type="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter your email"
            name="email"
            className="bg-gray-800 rounded-[0.5rem] text-gray-500 w-full p-[12px]"
          />
        </label>

        {/* Password Field */}
        <label className="w-full relative">
          <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
            Password <sup className="text-pink-800">*</sup>
          </p>
          <div>
            <input
              required
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter your password"
              name="password"
              className="bg-gray-800 rounded-[0.5rem] text-gray-500 w-full p-[12px]"
            />
            <span 
             className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
            </span>
          </div>
          <Link>
           <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">Forgot Password?</p>
          </Link>
        </label>

        {/* Submit Button */}
        <button className="bg-yellow-400 rounded-[8px] font-medium text-gray-500 px-[12px] py-[8px] mt-6">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

