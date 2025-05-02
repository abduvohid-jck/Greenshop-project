import React, { useState } from "react";
import Close from "../assets/icons/Close.svg";
import { Link, useNavigate } from "react-router-dom";
import Google from "../assets/photos/google.svg";
import Facebook from "../assets/photos/facebook.svg";
import axios from "axios";

function Login() {
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let navigate = useNavigate();
  let [errorMessage, setErrorMessage] = useState("");

  function LoginSubmit() {
    axios
      .post(
        "https://green-shop-backend.onrender.com/api/user/sign-in?access_token=6506e8bd6ec24be5de357927",
        {
          password,
          email,
        }
      )
      .then((res) => localStorage.setItem("token", res.data.data.token))
      .then(() => navigate("/navigation"))
      .catch((res) => setErrorMessage(res.response.data.extraMessage));
  }
  return (
    <div className="desktop:hidden">
      <div className="relative">
        {errorMessage ? (
          <div className="absolute text-center w-[200px] bg-[red] left-[50%] translate-x-[-50%] top-[15px] p-[5px] rounded-[5px] text-[white]">
            {errorMessage}
          </div>
        ) : null}
        <div className="flex justify-end pt-[16px] pr-[16px]">
          <Link to="/navigation">
            <img src={Close} alt="Close" />
          </Link>
        </div>
        <div className="w-[304px] mx-auto mt-[91px] mb-[91px]">
          <div className="flex items-center gap-[10px] ml-[72px]">
            <p className="flex items-center pr-[11px] font-inter font-[500] text-[#46A358] text-[20px] border-r-[2px] border-r-[solid] border-r-black h-[16px]">
              Login
            </p>
            <Link to="/register">
              <p className="font-inter font-[500] text-[20px] text-[#3D3D3D]">
                Register
              </p>
            </Link>
          </div>
          <p className="font-inter font-[400] text-[13px] text-[#3D3D3D] mt-[53px] mb-[14px]">
            Enter your email and password to login.
          </p>
          <input
            className="border-[1px] border-[solid] border-[#EAEAEA] rounded-[5px] w-[300px] py-[12px] px-[14px] outline-none font-inter font-[400] text-[14px]"
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border-[1px] border-[solid] border-[#EAEAEA] rounded-[5px] py-[12px] px-[14px] w-[300px] mt-[17px] outline-none"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="font-inter font-[400] text-[14px] text-[#46A358] mt-[14px] ml-[185px] mb-[27px]">
            Forgot Password?
          </p>
          <button
            onClick={LoginSubmit}
            className="block w-[100%] bg-[#46A358] py-[13px] rounded-[5px] font-inter font-[700] text-[16px] text-[#FFFFFF] mb-[46px]"
          >
            Login
          </button>
          <div className="flex items-center justify-center gap-[10px]">
            <div className="w-[100px] border-[1px] border-[solid] border-[#EAEAEA]"></div>
            <p className="font-inter font-[400] text-[13px] text-[#3D3D3D]">
              Or login with
            </p>
            <div className="w-[100px] border-[1px] border-[solid] border-[#EAEAEA]"></div>
          </div>
          <button className="mb-[15px] mt-[27px] flex items-center justify-center gap-[10px] w-[300px] m-auto h-[40px] border-[1px] border-[solid] border-[#EAEAEA] rounded-[5px]">
            <img src={Google} alt="Google icon" />
            <p className="font-inter font-[500] text-[13px] text-[#727272]">
              Login with Google
            </p>
          </button>
          <button className="w-[300px] h-[40px] flex justify-center gap-[3px] items-center border-[1px] border-[solid] border-[#EAEAEA] rounded-[5px]">
            <img src={Facebook} alt="Facebook icon" />
            <p className="font-inter font-[500] text-[13px] text-[#727272]">
              Login with Facebook
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
