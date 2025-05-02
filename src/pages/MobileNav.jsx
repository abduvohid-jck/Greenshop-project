import React from "react";
import { Link } from "react-router-dom";
import Login from "../assets/icons/login.svg";
import Bag from "../assets/icons/bag.svg";
import { UserOutlined } from "@ant-design/icons";
import Location from "../assets/icons/location-grey.svg";
import Heart from "../assets/icons/heart.svg";

function MobileNav() {
  let token = localStorage.getItem("token");
  function Logout() {
    localStorage.removeItem("token");
  }
  
  return (
    <div>
      <div>
        <div className="w-[257px] mx-auto mt-[90px]">
          {token ? (
            <div className="mb-[16px]">
              <p className="font-inter font-[500] text-[24px]">Profile</p>
              <button className="flex items-center gap-[11px] mt-[16px] leading-[45px] text-[#727272]">
                <UserOutlined />
                <p className="font-inter font-[400] text-[15px]">
                  Account Details
                </p>
              </button>
              <button className="flex items-center gap-[11px] leading-[45px] text-[#727272]">
                <img src={Bag} alt="Bag" />
                <p className="font-inter font-[400] text-[15px]">My products</p>
              </button>
              <button className="flex items-center gap-[11px] leading-[45px] text-[#727272]">
                <img src={Location} alt="Location" />
                <p className="font-inter font-[400] text-[15px]">Address</p>
              </button>
              <button className="flex items-center gap-[11px] leading-[45px] text-[#727272]">
                <img src={Heart} alt="Heart" />
                <p className="font-inter font-[400] text-[15px]">Wishlist</p>
              </button>
            </div>
          ) : null}

          <Link className="font-inter font-[500] text-[24px]" to="/">
            Home
          </Link>
          <Link
            className="font-inter font-[500] text-[24px] mt-[24px] mb-[41px] block"
            to="#"
          >
            Blog
          </Link>
          {token ? null : (
            <Link to="/login">
              <button className="w-[257px] h-[49px] mx-auto flex justify-center items-center bg-[#46A358] rounded-[6px] gap-[4px]">
                <img src={Login} alt="Login" />
                <p className="font-inter font-[500] text-[16px] text-[#FFFFFF]">
                  Login
                </p>
              </button>
            </Link>
          )}
          {token ? (
            <Link
              onClick={Logout}
              className="font-inter font-[500] text-[#FF7777] text-[16px] flex justify-center mt-[276px] mb-[64px]"
              to="/login"
            >
              Log out
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
