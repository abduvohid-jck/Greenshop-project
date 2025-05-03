import { ShoppingCartOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addDataToShopping } from "../../../../../../redux/shoppingSlice";

function FlowersCards() {
  let [searchParams] = useSearchParams();

  let dispatch = useDispatch();

  let category = searchParams.get("category") || "house-plants";
  let type = searchParams.get("type") || "all-plants";
  let sort = searchParams.get("sort") || "default-sorting";

  let getData = async ({ queryKey }) => {
    let [_key, category, type, sort] = queryKey;
    let res = await axios.get(
      `https://green-shop-backend.onrender.com/api/flower/category/${category}?access_token=64bebc1e2c6d3f056a8c85b7&sort=${sort}&type=${type}&range_min=0&range_max=1000`
    );
    return res?.data?.data;
  };

  let { data } = useQuery({
    queryKey: ["flowers", category, type, sort],
    queryFn: ({ queryKey }) => getData({ queryKey }),
  });

  return (
    <div>
      <div className="m-auto mt-[21px] grid grid-cols-2 gap-2 w-[343px] desktop:mt-[38px] desktop:w-auto desktop:grid-cols-3 desktop:gap-3">
        {data?.map((res) => {
          return (
            <div key={res._id} className="relative group">
              <button
                onClick={() =>
                  dispatch(
                    addDataToShopping({
                      _id: res._id,
                      price: res.price,
                      title: res.title,
                      image: res.main_image,
                    })
                  )
                }
                className="opacity-[0%] top-[160px] desktop:top-[257px] left-[50%] translate-x-[-50%] absolute w-[35px] h-[35px] group-hover:opacity-[100%] flex justify-center items-center bg-white rounded-[4px] transition ease-in-out duration-[0.3s] hover:text-[#46A358]"
              >
                <ShoppingCartOutlined className="text-[20px]" />
              </button>
              <div className=" w-[161px] h-[200px] rounded-[20px] overflow-hidden desktop:rounded-none desktop:w-[258px] desktop:h-[300px] bg-[#FBFBFB]">
                <img
                  className="w-[100%] h-[100%]"
                  src={res.main_image}
                  alt=""
                />
              </div>
              <p className="mt-[9px] font-inter font-[400] text-[15px] desktop:text-[16px] text-[#3D3D3D] desktop:mt-[12px]">
                {res.title}
              </p>
              {res.discount ? (
                <div className="flex items-center gap-[6px] mt-[4px] desktop:mt-[6px]">
                  <p className="font-inter font-[700] text-[16px] desktop:text-[18px] text-[#46A358]">
                    ${res.discount_price}
                  </p>
                  <p className="text-[16px] font-inter text-[#a5a5a5] line-through desktop:font-[400] desktop:text-[18px]">
                    ${res.price}
                  </p>
                </div>
              ) : (
                <p className="font-inter font-[700] text-[16px] text-[#46A358]">
                  {res.price}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FlowersCards;
