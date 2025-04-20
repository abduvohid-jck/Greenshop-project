import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Decoration1 from "../../../../../../assets/photos/discount-card-decoration-1.svg";
import Decoration2 from "../../../../../../assets/photos/discount-card-decoration-2.svg";
import Decoration3 from "../../../../../../assets/photos/discount-card-decoration-3.svg";

function DiscountFlower() {
  let getDataF = async () => {
    let res = await axios.get(
      "https://green-shop-backend.onrender.com/api/features/discount?access_token=6506e8bd6ec24be5de357927"
    );
    return res?.data?.data;
  };
  let { data } = useQuery({
    queryKey: ["discount flower"],
    queryFn: getDataF,
  });

  return (
    <div>
      <div id="discount-flower" className="text-center pt-[18px] relative">
        <img
          className="absolute top-[105px] left-[38px]"
          src={Decoration1}
          alt="Decoration"
        />
        <img
          className="absolute top-[299px] left-[16px]"
          src={Decoration2}
          alt="Decoration"
        />
        <img
          className="absolute top-[343px] left-[248px]"
          src={Decoration3}
          alt="Decoration"
        />
        <p className="font-inter font-[400] text-[51px] text-[#46A358] w-[260px] m-auto">
          {data?.title}
        </p>
        <p className="mt-[11px] font-inter font-[700] text-[23px] text-[#3D3D3D]">
          UP TO {data?.discoount_up_to}% OFF
        </p>
        <img
          className="w-[312px] m-auto"
          src={data?.poster_image_url}
          alt="Discounted flower"
        />
      </div>
    </div>
  );
}

export default DiscountFlower;

