import React, { useState } from "react";
import Close from "../assets/icons/close.svg";
import { Link, useNavigate } from "react-router-dom";
import Google from "../assets/photos/google.svg";
import Facebook from "../assets/photos/facebook.svg";
import axios from "axios";

function Register() {
  let [name, setName] = useState("");
  let [surname, setSurname] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let navigate = useNavigate();
  let [errorMessage, setErrorMessage] = useState();

  function RegisterSubmit() {
    axios
      .post(
        "https://green-shop-backend.onrender.com/api/user/sign-up?access_token=6506e8bd6ec24be5de357927",
        {
          name: name,
          surname: surname,
          password: password,
          email: email,
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
        <div className="flex justify-end w-[100%] pt-[16px] pr-[16px]">
          <Link to="/navigation">
            <img src={Close} alt="Close icon" />
          </Link>
        </div>
        <div className="mt-[55px] mb-[55px] w-[300px] mx-auto">
          <div className="flex items-center justify-center gap-[10px]">
            <Link to="/login">
              <p className="font-inter font-[500] text-[20px] text-[#3D3D3D]">
                Login
              </p>
            </Link>
            <div className="h-[16px] border-[0.5px] border-[solid] border-[#3D3D3D]"></div>
            <p className="font-inter font-[500] text-[20px] text-[#46A358]">
              Register
            </p>
          </div>
          <p className="mt-[40px] mb-[14px] font-inter font-[400] text-[13px] text-[#3D3D3D]">
            Enter your email and password to register.
          </p>
          <input
            className="mb-[16px] w-[300px] h-[40px] mx-auto border-[1px] border-[solid] border-[#EAEAEA] rounded-[5px] py-[12px] px-[14px] font-inter font-[400] text-[14px] outline-none"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="mb-[16px] w-[300px] h-[40px] mx-auto border-[1px] border-[solid] border-[#EAEAEA] rounded-[5px] py-[12px] px-[14px] font-inter font-[400] text-[14px] outline-none"
            type="text"
            placeholder="Surname"
            onChange={(e) => setSurname(e.target.value)}
          />
          <input
            className="mb-[16px] w-[300px] h-[40px] mx-auto border-[1px] border-[solid] border-[#EAEAEA] rounded-[5px] py-[12px] px-[14px] font-inter font-[400] text-[14px] outline-none"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="mb-[41px] w-[300px] h-[40px] mx-auto border-[1px] border-[solid] border-[#EAEAEA] rounded-[5px] py-[12px] px-[14px] font-inter font-[400] text-[14px] outline-none"
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={RegisterSubmit}
            className="flex items-center justify-center w-[300px] h-[45px] mx-auto bg-[#46A358] rounded-[5px] mb-[36px] font-inter font-[700] text-[16px] text-[#FFFFFF]"
          >
            Register
          </button>
          <div className="flex items-center justify-center gap-[6px] mb-[27px]">
            <div className="w-[95px] border-[1px] border-[solid] border-[#EAEAEA]"></div>
            <p className="font-inter font-[400] text-[13px] text-[#3D3D3D]">
              Or register with
            </p>
            <div className="w-[95px] border-[1px] border-[solid] border-[#EAEAEA]"></div>
          </div>
          <button className="mb-[15px] flex items-center justify-center gap-[9px] w-[300px] h-[40px] border-[1px] border-[solid] border-[#EAEAEA] rounded-[5px]">
            <img src={Google} alt="Google icon" />
            <p className="font-inter font-[500] text-[13px] text-[#727272]">
              Continue with Google
            </p>
          </button>
          <button className="mx-auto flex items-center justify-center gap-[2px] w-[300px] h-[40px] border-[1px] border-[solid] border-[#EAEAEA] rounded-[5px]">
            <img src={Facebook} alt="Facebook icon" />
            <p className="font-inter font-[500] text-[13px] text-[#727272]">
              Continue with Facebook
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
