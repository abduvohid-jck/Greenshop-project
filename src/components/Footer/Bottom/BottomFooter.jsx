import React from "react";
import Facebook from "../../../assets/icons/facebook.svg";
import Instagram from "../../../assets/icons/instagram.svg";
import Twitter from "../../../assets/icons/twitter.svg";
import Linkedin from "../../../assets/icons/linkedin.svg";
import Union from "../../../assets/icons/union.svg";
import PaymentMethods from "../../../assets/photos/payment-methods.svg";

function BottomFooter() {
  return (
    <div>
      <div className="bg-[#FBFBFB] pt-[32px] pb-[56px] desktop:flex desktop:gap-[295px] desktop:pb-[29px] desktop:border-b-[1px] desktop:border-b-[#46A35833]">
        <div className="flex gap-[76px] mb-[32px] desktop:gap-[295px] desktop:mb-[0px]">
          <div className="ml-[16px] desktop:ml-[23px]">
            <p className="font-inter font-[700] text-[18px] text-[#3D3D3D] mb-[8px]">
              My Account
            </p>
            <p className="font-inter font-[400] text-[14px] text-[#3D3D3D] leading-[30px]">
              My Account <br /> Address <br /> Wishlist
            </p>
          </div>
          <div>
            <p className="font-inter font-[700] text-[18px] text-[#3D3D3D] mb-[8px]">
              Categories
            </p>
            <p className="font-inter font-[400] text-[14px] text-[#3D3D3D] leading-[30px]">
              House Plants <br /> Potter Plants <br /> Seeds <br /> Small Plants
              <br />
              Accessories
            </p>
          </div>
        </div>
        <div>
          <div className="ml-[16px] mb-[32px] desktop:ml-[0px]">
            <p className="text-[18px] font-inter font-[700] text-[#3D3D3D] mb-[20px]">
              Social Media
            </p>
            <div className="flex items-center gap-[10px]">
              <div className="h-[30px] w-[30px] rounded-[4px] border-[1px] border-[#46A35833] flex justify-center items-center">
                <img src={Facebook} alt="Facebook" />
              </div>
              <div className="h-[30px] w-[30px] rounded-[4px] border-[1px] border-[#46A35833] flex justify-center items-center">
                <img src={Instagram} alt="Instagram" />
              </div>
              <div className="h-[30px] w-[30px] rounded-[4px] border-[1px] border-[#46A35833] flex justify-center items-center">
                <img src={Twitter} alt="Twitter" />
              </div>
              <div className="h-[30px] w-[30px] rounded-[4px] border-[1px] border-[#46A35833] flex justify-center items-center">
                <img src={Linkedin} alt="Linkedin" />
              </div>
              <div className="h-[30px] w-[30px] rounded-[4px] border-[1px] border-[#46A35833] flex justify-center items-center">
                <img src={Union} alt="Union" />
              </div>
            </div>
          </div>
          <div className="ml-[16px] desktop:ml-[0px]">
            <p className="font-inter font-[700] text-[18px] text-[#3D3D3D] mb-[13px]">
              We accept
            </p>
            <img src={PaymentMethods} alt="Payment methods" />
          </div>
        </div>
      </div>
      <p className="text-center font-inter font-[400] text-[14px] text-[#3D3D3D] py-[8px]">
        © 2021 GreenShop. All Rights Reserved.
      </p>
    </div>
  );
}

export default BottomFooter;
