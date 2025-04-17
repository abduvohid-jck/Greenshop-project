import React from "react";
import GardenCare from "../../../assets/photos/garden-care.svg";
import PlantRenovation from "../../../assets/photos/plant-renovation.svg";
import WateringGraden from "../../../assets/photos/watering-graden.svg";

function TopFoooter() {
  return (
    <div>
      <div className="bg-[#FBFBFB] pt-[32px] pb-[48px] desktop:flex desktop:items-center desktop:justify-center desktop:pt-[25px] desktop:pb-[24px]">
        <div className="desktop:items-center desktop:flex">
          <div className="text-center desktop:text-left desktop:pr-[34px] desktop:border-r-[1px] desktop:border-r-[#46A3581A]">
            <img
              className="m-auto mb-[16px] desktop:m-[0px] desktop:mb-[15px]"
              src={GardenCare}
              alt="Flower"
            />
            <p className="font-inter font-[700] text-[17px] text-[#3D3D3D] mb-[8px]">
              Garden Care
            </p>
            <p className="font-inter font-[400] text-[14px] text-[#727272]">
              We are an online plant shop <br /> offering a wide range of cheap
              <br />
              and trendy plants.
            </p>
          </div>
          <div className="text-center desktop:text-left mt-[48px] desktop:mt-[0px] desktop:pl-[27px] desktop:pr-[26px] desktop:border-r-[1px] desktop:border-r-[#46A3581A]">
            <img
              className="m-auto mb-[16px] desktop:m-[0px] desktop:mb-[15px]"
              src={PlantRenovation}
              alt="Flower"
            />
            <p className="font-inter font-[700] text-[17px] text-[#3D3D3D] mb-[8px]">
              Plant Renovation
            </p>
            <p className="font-inter font-[400] text-[14px] text-[#727272]">
              We are an online plant shop <br /> offering a wide range of cheap
              <br />
              and trendy plants.
            </p>
          </div>
          <div className="text-center desktop:text-left mt-[48px] mb-[56px] desktop:mt-[0px] desktop:mb-[0px] desktop:pl-[35px] desktop:mr-[62px]">
            <img
              className="m-auto mb-[16px] desktop:m-[0px] desktop:mb-[15px]"
              src={WateringGraden}
              alt="Flower"
            />
            <p className="font-inter font-[700] text-[17px] text-[#3D3D3D] mb-[8px]">
              Watering Graden
            </p>
            <p className="font-inter font-[400] text-[14px] text-[#727272]">
              We are an online plant shop <br /> offering a wide range of cheap
              <br />
              and trendy plants.
            </p>
          </div>
        </div>
        <div>
          <p className="font-inter font-[700] text-[18px] text-[#3D3D3D] ml-[16px] desktop:ml-[0px]">
            Would you like to join newsletters?
          </p>
          <div className="shadow-custom flex items-center w-[340.41px] m-auto mt-[16px] rounded-l-[6px]">
            <input
              className="leading-none w-[258px] py-[12px] px-[11px] font-inter font-[400] text-[14px] outline-none rounded-l-[6px]"
              type="text"
              placeholder="Enter your email address..."
            />
            <button className="leading-none font-inter font-[700] text-[18px] text-white bg-[#46A358] py-[12px] pl-[26px] pr-[21px] rounded-r-[6px]">
              Join
            </button>
          </div>
          <p className="font-inter font-[400] text-[13px] text-[#727272] ml-[16px] mt-[16px] desktop:ml-[0px]">
            We usually post offers and challenges in newsletter. <br /> We’re
            your online houseplant destination. We offer a <br /> wide range of
            houseplants and accessories shipped <br /> directly from our
            (green)house to yours!
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopFoooter;
