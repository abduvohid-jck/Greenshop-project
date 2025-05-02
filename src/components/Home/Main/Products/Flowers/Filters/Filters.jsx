import React, { useState } from "react";
import { Modal } from "antd";
import Filter from "../../../../../../assets/icons/filter.svg";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Select, Space } from "antd";
import { useSearchParams } from "react-router-dom";

function valuetext(value) {
  return `${value}°C`;
}

function Filters() {
  let [searchParams, setSearchParams] = useSearchParams();

  let Type = (typeFlowers) => {
    searchParams.set("type", typeFlowers);
    setSearchParams(searchParams);
  };
  let Sort = (sortFlowers) => {
    searchParams.set("sort", sortFlowers);
    setSearchParams(searchParams);
  };
  const [value, setValue] = useState([0, 1000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let getData = async () => {
    let res = await axios.get(
      "https://green-shop-backend.onrender.com/api/flower/category?access_token=6506e8bd6ec24be5de357927"
    );
    return res?.data?.data;
  };
  let { data } = useQuery({
    queryKey: ["categoryMobile"],
    queryFn: getData,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="flex items-center justify-between desktop:gap-[383px]">
        <div className="flex items-center gap-[27px]">
          <button
            className="box-border font-inter font-[400] text-[14px] text-[#3D3D3D] desktop:text-[15px] cursor-pointer hover:text-[#46A358] transition ease-in-out duration-[0.5s] focus:text-[#46A358] border-b-[white] border-b-[1px] border-b-[solid] focus:border-b-[#46A358]"
            onClick={() => Type("all-plants")}
          >
            All Plants
          </button>
          <button
            className="font-inter font-[400] text-[14px] text-[#3D3D3D] desktop:text-[15px] cursor-pointer hover:text-[#46A358] transition ease-in-out duration-[0.5s] focus:text-[#46A358] border-b-[white] border-b-[1px] border-b-[solid] focus:border-b-[#46A358]"
            onClick={() => Type("new-arrivals")}
          >
            New Arrivals
          </button>
          <button
            className="font-inter font-[400] text-[14px] text-[#3D3D3D] desktop:text-[15px] cursor-pointer hover:text-[#46A358] transition ease-in-out duration-[0.5s] focus:text-[#46A358] border-b-[white] border-b-[1px] border-b-[solid] focus:border-b-[#46A358]"
            onClick={() => Type("sale")}
          >
            Sale
          </button>
        </div>
        <div className="desktop:hidden">
          <button onClick={showModal}>
            <img src={Filter} alt="Filter" />
          </button>
          <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
            <p className="font-inter font-[700] text-[14px]">Categories</p>
            <div className="flex-col gap-[1rem] flex mt-[10px] pl-[12px]">
              {data?.map((res) => {
                return (
                  <button
                    className="flex justify-between w-[295.2px]"
                    key={res._id}
                  >
                    <p className="font-inter font-[400] text-[15px] text-[#3D3D3D]">
                      {res.title}
                    </p>
                    <p className="font-inter font-[400] text-[15px] text-[#3D3D3D]">
                      {"("}
                      {res.count}
                      {")"}
                    </p>
                  </button>
                );
              })}
            </div>
            <div className=" mt-[15px]">
              <p className="font-inter font-[700] text-[14px] text-[#3D3D3D]">
                Price Range
              </p>
              <Box className="!m-auto !w-[285.2px]">
                <Slider
                  className="!text-[#46A358] !w-[285.2px]"
                  min={0}
                  max={1000}
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </Box>
              <div>
                <p className="font-inter font-[400] text-[15px] text-[#3D3D3D] flex items-center">
                  Price:
                  <span className=" text-[#46A358] font-inter font-[700] text-[15px] ml-[5px]">
                    ${value[0]} - ${value[1]}
                  </span>
                </p>
              </div>
            </div>
            <button
              className="px-[23px] py-[8px] bg-[#46A358] rounded-[.5rem] text-[14px] font-inter text-[#ffffff] mt-[16px]"
              onClick={handleOk}
            >
              Filter
            </button>
          </Modal>
        </div>
        <div className="hidden desktop:flex desktop:items-center desktop:gap-[6px]">
          <p className="font-inter font-[400] text-[15px] text-[#3D3D3D]">
            Sort by:
          </p>
          <Space wrap>
            <Select
              className="!w-[142.15px] !text-[14px] !font-inter !font-[1000] !text-[#000000e0]"
              defaultValue="Default Sorting"
              style={{ width: 120 }}
              onChange={(value) => Sort(value)}
              options={[
                { value: "default-sorting", label: "Default Sorting" },
                { value: "the-cheapest", label: "The Cheapest" },
                { value: "most-expensive", label: "Most Expensive" },
              ]}
            />
          </Space>
        </div>
      </div>
    </div>
  );
}

export default Filters;
