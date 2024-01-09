// Sign in page
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [emailAdd, setEmailAdd] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate();

  // Function for submiting your details
  const onSubmit = (e) => {
    console.log("email", emailAdd);
    console.log("password", password);
    navigation("/home");
  };

  return (
    <div className="flex flex-wrap w-full justify-center items-center min-h-screen gradient-bg-welcome">
      <div className="md:flex hidden justify-center items-center md:w-1/2 w-full bg-blue-800 h-screen">
        <div className="flex flex-col justify-center items-center md:p-14">
          <p className="font-semibold text-4xl text-bold text-white">
            TASK MANAGEMENT APP
          </p>
          <p className="text-xl text-center text-white my-4">Task Completed</p>
          <p className="md:text-2xl text-sm font-light text-white text-center my-4">
            I paid attention to the instructions, used the necessary tools and
            give it my best.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start md:w-1/2 w-full bg-white h-screen md:p-32">
        <div className="flex flex-col md:hidden justify-center items-center w-full bg-blue-800 p-4">
          <div className="flex flex-col justify-center items-center md:p-14">
            <p className="font-semibold text-4xl text-bold text-white text-center">
              TASK MANAGEMENT APP
            </p>
            <p className="text-xl text-center text-white my-4">
              Task Completed
            </p>
            <p className="md:text-2xl text-sm font-light text-white text-center my-4">
              I paid attention to the instructions, used the necessary tools and
              give it my best.
            </p>
          </div>
        </div>
        <div className="p-4 w-full">
          <div className="flex justify-center items-center flex-col w-full">
            <p className="font-semibold text-black text-3xl">Welcome back</p>
            <p>Please enter your details.</p>
          </div>
          <form className="w-full" onSubmit={onSubmit}>
            <div className="my-8">
              {/* Email input form */}
              <div className="w-full h-10 rounded-lg border-[#667085] border-2">
                <input
                  onChange={(e) => setEmailAdd(e.target.value)}
                  value={emailAdd}
                  type="text"
                  placeholder="Enter your e-mail address"
                  className="w-full h-full p-2 bg-white rounded-xl"
                />
              </div>
              {/* Password input form */}
              <div className="w-full h-10 rounded-lg border-[#667085] border-2 my-4">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Enter your password"
                  className="w-full h-full p-2 bg-white rounded-xl"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg flex justify-center items-center bg-blue-600 h-10 text-white hover:bg-blue-800"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
