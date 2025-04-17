import React from "react";
import Logo from "../../../assets/photos/logo.svg";
import Phone from "../../../assets/icons/phone.svg";
import LocationIcon from "../../../assets/icons/location.svg";
import Message from "../../../assets/icons/message.svg";

function MiddleFooter() {
  return (
    <div>
      <div className="bg-[#46A3581A] pt-[32px] pb-[48px] desktop:pt-[25px] desktop:pb-[19px] desktop:flex desktop:items-center desktop:border-t-[1px] desktop:border-t-[#46A3581A] desktop:border-b-[1px] desktop:border-b-[#46A3581A]">
        <img
          className="m-auto desktop:m-[0px] desktop:mr-[87px] desktop:ml-[23px]"
          src={Logo}
          alt="Logo"
        />
        <div className="hidden desktop:flex items-center gap-[9px] m-auto w-[200px] mt-[16px] desktop:m-[0px] desktop:mr-[51px]">
          <img src={LocationIcon} alt="Location" />
          <p className="font-inter font-[400] text-[14px] text-[#3D3D3D]">
            70 West Buckingham Ave. <br /> Farmingdale, NY 11735
          </p>
        </div>
        <div className="hidden desktop:flex items-center gap-[10px] m-auto w-[197px] mt-[16px] desktop:m-[0px] desktop:mr-[71px]">
          <img src={Message} alt="Message" />
          <p className="font-inter font-[400] text-[14px] text-[#3D3D3D]">
            contact@greenshop.com
          </p>
        </div>
        <div className="flex items-center gap-[8px] m-auto w-[153px] mt-[32px] desktop:m-[0px]">
          <img src={Phone} alt="Phone" />
          <p className="font-inter font-[400] text-[14px] text-[#3D3D3D]">
            +88 01911 717 490
          </p>
        </div>
        <div className="flex items-center gap-[9px] m-auto w-[200px] mt-[16px] desktop:hidden">
          <img src={LocationIcon} alt="Location" />
          <p className="font-inter font-[400] text-[14px] text-[#3D3D3D]">
            70 West Buckingham Ave. <br /> Farmingdale, NY 11735
          </p>
        </div>
        <div className="flex items-center gap-[10px] m-auto w-[197px] mt-[16px] desktop:hidden">
          <img src={Message} alt="Message" />
          <p className="font-inter font-[400] text-[14px] text-[#3D3D3D]">
            contact@greenshop.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default MiddleFooter;
