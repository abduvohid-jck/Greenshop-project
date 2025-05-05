import React, { useState } from "react";
import Logo from "../../assets/photos/logo.svg";
import MagnifyingGlass from "../../assets/icons/magnifying-glass.svg";
import Cart from "../../assets/icons/cart.svg";
import BurgerMenu from "../../assets/icons/burger-menu.svg";
import LoginIcon from "../../assets/icons/login.svg";
import { Link } from "react-router-dom";
import { Button, Input, Modal } from "antd";
import Google from "../../assets/photos/google.svg";
import Facebook from "../../assets/photos/facebook.svg";
import axios from "axios";
import { useSelector } from "react-redux";

function Navbar() {
  let productsInCart = useSelector((state) => state.shopping.data).length;
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [errorMessage, setErrorMessage] = useState("");
  let [registered, setRegistered] = useState(true);
  const [openResponsive, setOpenResponsive] = useState(false);
  let token = localStorage.getItem("token");

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
      .then(() => setOpenResponsive(false))
      .catch((res) => setErrorMessage(res.response.data.extraMessage));
  }

  return (
    <div>
      <div className="container">
        <div className="flex items-center justify-between py-[16px] desktop:py-[0px] desktop:mt-[25px] desktop:pb-[17.7px] desktop:border-b-[0.3px] desktop:border-b-[#46A35880]">
          <Link to="/">
            <img
              className="desktop:w-[150px] desktop:h-[34.3px]"
              src={Logo}
              alt="Logo"
            />
          </Link>

          <div className="hidden desktop:flex  items-center gap-[50px]">
            <Link to="/">
              <p className="font-inter font-[400] text-[16px] text-[#3D3D3D]">
                Home
              </p>
            </Link>
            <p className="font-inter font-[400] text-[16px] text-[#3D3D3D]">
              Blog
            </p>
          </div>
          <div className="flex items-center gap-[24px] desktop:gap-[30px]">
            <img src={MagnifyingGlass} alt="Magnifying glass" />
            <Link to="/cart" className="relative">
              {productsInCart != 0 ? (
                <div className="flex justify-center items-center rounded-[100%] absolute top-[0px] right-[-5px] font-inter font-[500] text-[7px] text-[white] bg-[#46A358] h-[15px] w-[15px] border-[2px] border-[solid] border-[white]">
                  <p>{productsInCart}</p>
                </div>
              ) : null}

              <img src={Cart} alt="Cart" />
            </Link>
            <Link to="/navigation">
              <img
                className="desktop:hidden"
                src={BurgerMenu}
                alt="Burger menu"
              />
            </Link>
            {token == null ? (
              <Button
                className="!items-center !py-[8px] !pr-[16px] !pl-[18.88px] !gap-[5.84px] !rounded-[6px] !hidden desktop:!flex !bg-[#46A358] !text-white"
                type="primary"
                onClick={() => setOpenResponsive(true)}
              >
                <img src={LoginIcon} alt="Login icon" />
                <p>Login</p>
              </Button>
            ) : null}

            <Modal
              footer={false}
              className="!w-[500px] !relative"
              centered
              open={openResponsive}
              onOk={() => setOpenResponsive(false)}
              onCancel={() => setOpenResponsive(false)}
              width={{
                xs: "90%",
                sm: "80%",
                md: "70%",
                lg: "60%",
                xl: "50%",
                xxl: "40%",
              }}
            >
              {errorMessage ? (
                <div className="absolute text-center w-[200px] bg-[red] left-[50%] translate-x-[-50%] top-[15px] p-[5px] rounded-[5px] text-[white]">
                  {errorMessage}
                </div>
              ) : null}
              <div className="w-[300px] mx-auto mt-[50px] mb-[58px]">
                <div className="flex items-center justify-center gap-[10px]">
                  <p
                    onClick={() => setRegistered(true)}
                    className={`${
                      registered ? "text-[#46A358]" : "text-[#3D3D3D]"
                    } cursor-pointer font-inter font-[500] text-[20px]  hover:text-[#46A358] transition ease-in-out duration-[0.5s]`}
                  >
                    Login
                  </p>
                  <div className="h-[16px] border-[1px] border-[solid] border-[#3D3D3D]"></div>
                  <p
                    onClick={() => setRegistered(false)}
                    className={`${
                      registered ? "text-[#3D3D3D]" : "text-[#46A358]"
                    } font-inter font-[500] text-[20px] text-[#3D3D3D] cursor-pointer hover:text-[#46A358] transition ease-in-out duration-[0.5s]`}
                  >
                    Register
                  </p>
                </div>
                {registered ? (
                  <div>
                    <p className="font-inter font-[400] text-[13px] text-[#3D3D3D] mt-[53px]">
                      Enter your email and password to login.
                    </p>
                    <Input
                      className="!mt-[14px] !w-[300px] !mx-auto !py-[12px] !px-[14px] !border-solid !border-[1px] !border-[#EAEAEA] !rounded-[5px] !outline-[#46A358] !font-inter !font-[400] !text-[14px]"
                      placeholder="Enter your email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input.Password
                      className="!w-[300px] !mx-auto !mt-[17px] !border-solid !border-[1px] !border-[#EAEAEA] !rounded-[5px] !outline-[#46A358] !py-[12px] !px-[14px] !font-inter !font-[400] !text-[14px]"
                      placeholder="Enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="mt-[14px] flex justify-end font-inter font-[400] text-[14px] text-[#46A358] mb-[27px]">
                      Forgot Password?
                    </p>
                    <button
                      onClick={() => {
                        LoginSubmit();
                      }}
                      className="w-[300px] h-[45px] mx-auto flex justify-center items-center bg-[#46A358] rounded-[5px] font-inter font-[700] text-[16px] text-[#FFFFFF]"
                    >
                      Login
                    </button>
                    <div className="mt-[46px] flex justify-center items-center gap-[10px]">
                      <div className="w-[100px] border-[1px] border-solid border-[#EAEAEA]"></div>
                      <p className="font-inter font-[400] text-[13px]">
                        Or login with
                      </p>
                      <div className="w-[100px] border-[1px] border-solid border-[#EAEAEA]"></div>
                    </div>
                    <button className="mx-auto mt-[27px] w-[300px] h-[40px] flex justify-center items-center gap-[10px] border-[1px] border-solid border-[#EAEAEA] rounded-[5px] ">
                      <img src={Google} alt="Google icon" />
                      <p className="font-inter font-[500] text-[13px] text-[#727272]">
                        Login with Google
                      </p>
                    </button>
                    <button className=" mt-[15px] w-[300px] h-[40px] mx-auto flex justify-center items-center border-solid border-[1px] border-[#EAEAEA] rounded-[5px] gap-[3px]">
                      <img src={Facebook} alt="Facebook icon" />
                      <p className="font-inter font-[500] text-[13px] text-[#727272]">
                        Login with Facebook
                      </p>
                    </button>
                  </div>
                ) : null}
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

// Login qismi to'laqonli tayyor bo'ldi. Register qismini yasash kerak
