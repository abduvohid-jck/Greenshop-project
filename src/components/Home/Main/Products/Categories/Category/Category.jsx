import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useSearchParams } from "react-router-dom";

function Category() {
  let getData = async () => {
    let res = await axios.get(
      "https://green-shop-backend.onrender.com/api/flower/category?access_token=6506e8bd6ec24be5de357927"
    );
    return res?.data?.data;
  };
  let { data } = useQuery({
    queryKey: ["category"],
    queryFn: getData,
  });

  let [searchParams, setSearchParams] = useSearchParams();

  let SetToURL = (value) => {
    searchParams.set("category", value);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <div className="pl-[18px] pt-[14px] bg-[#FBFBFB] pr-[24px] pb-[36px]">
        <p className="font-inter font-[700] text-[18px] text-[#3D3D3D]">
          Categories
        </p>
        <div className="flex-col gap-[1rem] flex mt-[10px] pl-[12px]">
          {data?.map((res) => {
            return (
              <button
                onClick={() => SetToURL(res.route_path)}
                className="flex justify-between w-[268px] hover:text-[#46A358] text-[#3D3D3D]  ease-in-out duration-[0.3s] transition focus:text-[#46A358]"
                key={res._id}
              >
                <p className="font-inter font-[400] text-[15px] text-inherit">
                  {res.title}
                </p>
                <p className="font-inter font-[400] text-[15px] text-inherit">
                  {"("}
                  {res.count}
                  {")"}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Category;
