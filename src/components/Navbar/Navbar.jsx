import React from "react";
import Logo from "../../assets/photos/logo.svg";
import MagnifyingGlass from "../../assets/icons/magnifying-glass.svg";
import Cart from "../../assets/icons/cart.svg";
import BurgerMenu from "../../assets/icons/burger-menu.svg";
import LoginIcon from "../../assets/icons/login.svg";

function Navbar() {
  return (
    <div>
      <div className="container">
        <div className="flex items-center justify-between py-[16px] desktop:py-[0px] desktop:mt-[25px] desktop:pb-[17.7px] desktop:border-b-[0.3px] desktop:border-b-[#46A35880]">
          <img
            className="desktop:w-[150px] desktop:h-[34.3px]"
            src={Logo}
            alt="Logo"
          />
          <div className="hidden desktop:flex  items-center gap-[50px]">
            <p className="font-inter font-[400] text-[16px] text-[#3D3D3D]">
              Home
            </p>
            <p className="font-inter font-[400] text-[16px] text-[#3D3D3D]">
              Blog
            </p>
          </div>
          <div className="flex items-center gap-[24px] desktop:gap-[30px]">
            <img src={MagnifyingGlass} alt="Magnifying glass" />
            <img src={Cart} alt="Cart" />
            <img
              className="desktop:hidden"
              src={BurgerMenu}
              alt="Burger menu"
            />
            <button className="items-center py-[8px] pr-[16px] pl-[18.88px] gap-[5.84px] rounded-[6px] hidden desktop:flex bg-[#46A358] text-white">
              <img src={LoginIcon} alt="Login icon" />
              <p>Login</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
