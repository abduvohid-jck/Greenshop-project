import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React, { useEffect } from "react";

function valuetext(value) {
  return `${value}°C`;
}

function PriceRange() {
  const [value, setValue] = React.useState([0, 1000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="bg-[#FBFBFB]">
        <p className="ml-[18px] font-inter font-[700] text-[18px] text-[#3D3D3D] mb-[20px]">
          Price Range
        </p>
        <Box sx={{ width: 209 }} className="!ml-[30px] ">
          <Slider
            className="!text-[#46A358]"
            min={0}
            max={1000}
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box>
        <div className="mt-[15px]">
          <p className="font-inter font-[400] text-[15px] ml-[30px] text-[#3D3D3D] flex items-center">
            Price:
            <span className="ml-[5px] text-[#46A358] font-inter font-[700] text-[15px]">
              ${value[0]} - ${value[1]}
            </span>
          </p>
        </div>
        <button className="pt-[8px] pb-[7px] pl-[26px] pr-[23px] font-inter font-[700] text-[16px] text-[#FFFFFF] rounded-[6px] bg-[#46A358] ml-[30px] mt-[16px]">
          Filter
        </button>
      </div>
    </div>
  );
}

export default PriceRange;
