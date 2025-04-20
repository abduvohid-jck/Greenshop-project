import React from "react";

function Size() {
  return (
    <div>
      <div className="bg-[#FBFBFB] pt-[46px] pb-[19px] pl-[18px]">
        <p className="font-inter font-[700] text-[18px] text-[#3D3D3D] mb-[7px]">
          Size
        </p>
        <button className="flex items-center mb-[1rem] justify-between w-[268px] font-inter font-[400] text-[15px] text-[#3D3D3D] pl-[12px]">
          <p>Small</p>
          <p>(119)</p>
        </button>
        <button className="flex items-center mb-[1rem] justify-between w-[268px] font-inter font-[400] text-[15px] text-[#3D3D3D] pl-[12px]">
          <p>Medium</p>
          <p>(86)</p>
        </button>
        <button className="flex items-center justify-between w-[268px] font-inter font-[400] text-[15px] text-[#3D3D3D] pl-[12px]">
          <p>Large</p>
          <p>(78)</p>
        </button>
      </div>
    </div>
  );
}

export default Size;