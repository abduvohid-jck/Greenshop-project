import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Minus from "../../assets/photos/minus.svg";
import Plus from "../../assets/photos/plus.svg";
import NoData from "../../assets/photos/no-data.png";
import {
  decreaseCountFromShopping,
  deleteFlowerFromShopping,
  increaseCountFromShopping,
  setCoupon,
} from "../../redux/shoppingSlice";
import { DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function CartComponent() {
  let productsInCart = useSelector((state) => state.shopping.data);
  let total = useSelector((state) => state.shopping.total);
  let dispatch = useDispatch();

  return (
    <div>
      <div className="container mb-[64px]">
        <div className="mb-[80px]">
          {productsInCart.length == 0 ? (
            <div className="w-[184px] mx-auto flex items-center flex-col mt-[80px]">
              <img className="h-[100px]" src={NoData} alt="No data" />
              <p className="font-inter text-[14px]">No data</p>
              <Link to="/">
                <button className="mt-[10px] bg-[#46a358] text-white p-[10px] font-inter text-[16px] rounded-[3px]">
                  Let's shop
                </button>
              </Link>
            </div>
          ) : (
            productsInCart?.map((product) => {
              return (
                <div
                  className="flex items-end justify-start w-[343px] mx-auto border-b-[0.3px] border-b-solid border-b-[#46A35880] pb-[16px] pt-[16px]"
                  key={product._id}
                >
                  <img
                    className="h-[70px] w-[70px] mr-[16px]"
                    src={product.image}
                    alt="Product image"
                  />
                  <div className="w-[147px]">
                    <p className="font-inter font-[500] text-[16px] text-[#3D3D3D]">
                      {product.title}
                    </p>
                    <p className="font-inter font-[400] text-[8px] mt-[6px] text-[#727272]">
                      SKU: <span className="text-black">{product._id}</span>
                    </p>
                    <p className="mt-[16px] font-inter font-[500] text-[16px] text-[#727272]">
                      ${product.price}
                    </p>
                  </div>
                  <div className="ml-[21px] flex flex-col items-center justify-center ">
                    <button
                      className="mb-[20px]"
                      onClick={() =>
                        dispatch(deleteFlowerFromShopping({ _id: product._id }))
                      }
                    >
                      <DeleteOutlined />
                    </button>
                    <div className="flex justify-center gap-[16px] items-center">
                      <button
                        onClick={() =>
                          dispatch(
                            decreaseCountFromShopping({ _id: product._id })
                          )
                        }
                      >
                        <img src={Minus} alt="Increment button" />
                      </button>
                      <p className="font-inter font-[400] text-[20px]">
                        {product.count}
                      </p>
                      <button
                        onClick={() => {
                          dispatch(
                            increaseCountFromShopping({
                              _id: product._id,
                            })
                          );
                        }}
                      >
                        <img src={Plus} alt="Decrement button" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="w-[335px] mx-auto ">
          <p className="font-inter font-[700] text-[18px] pb-[18px] border-b-[1px] border-b-solid border-b-[#46A35880]">
            Cart Totals
          </p>
          <p className="font-inter font-[400] text-[14px] mt-[11px] mb-[8px]">
            Coupon Apply
          </p>
          <div className="border-[1px] border-solid border-[#46A358] w-[332px] mx-auto rounded-[3px] flex justify-center mb-[30px]">
            <input
              onChange={(e) => setCoupon(e.target.value)}
              type="text"
              placeholder="Enter coupon code here..."
              className="font-inter font-[400] text-[14px] w-[230px] px-[10px] py-[12px] rounded-[3px] outline-none"
            />
            <button className="bg-[#46A358] w-[102px] font-inter font-[700] text-[15px] text-white">
              Apply
            </button>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-inter font-[400] text-[15px] text-[#3D3D3D]">
              Subtotal
            </p>
            <p className="font-inter font-[500] text-[18px] text-[#3D3D3D]">
              ${total}
            </p>
          </div>
          <div className="mt-[15px] flex items-center justify-between">
            <p className="font-inter font-[400] text-[15px] text-[#3D3D3D]">
              Coupon Discount
            </p>
            <p className="font-inter font-[400] text-[15px] text-[#3D3D3D]">{`(-) 00.00`}</p>
          </div>
          <div className="mt-[21px] flex items-center justify-between">
            <p className="font-inter font-[400] text-[15px] text-[#3D3D3D]">
              Shiping
            </p>
            <p className="font-inter font-[500] text-[18px] text-[#3D3D3D]">
              $16.00
            </p>
          </div>
          <div className="flex items-center justify-between mt-[50px]">
            <p className="font-inter font-[700] text-[16px] text-[#3D3D3D]">
              Total
            </p>
            <p className="font-inter font-[700] text-[18px] text-[#46A358]">
              ${total}
            </p>
          </div>
          <button className="w-[332px] text-center mx-auto py-[12px] bg-[#46A358] mt-[29px] rounded-[3px] font-inter font-[700] text-[15px] text-white">
            Proceed To Checkout
          </button>
          <div className="font-inter font-[400] text-[15px] text-[#46A358] w-[133.41px] mx-auto mt-[14px]">
            <Link to="/">Continue Shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartComponent;

// Cart sahifasi mobile dizayni tayyor bo'ldi. Endi uni Desktop versiyasini yasash kerak
