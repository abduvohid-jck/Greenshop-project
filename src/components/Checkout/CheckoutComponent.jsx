import React, { useState } from "react";
import RedStar from "../../assets/icons/red-star.svg";
import { useDispatch, useSelector } from "react-redux";
import PaymentMethods from "../../assets/photos/payment-methods.svg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { makeEverythingZero } from "../../redux/shoppingSlice";

function CheckoutComponent() {
  let dispatch = useDispatch();
  let productsInCart = useSelector((state) => state.shopping.data);
  let total = useSelector((state) => state.shopping.total);
  let [additionalStreet, setAdditionalStreet] = useState("");
  let [country, setCountry] = useState("");
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [surname, setSurname] = useState("");
  let [payment, setPayment] = useState("cash-on-delivery");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [state, setState] = useState("");
  let [street, setStreet] = useState("");
  let [town, setTown] = useState("");
  let [zip, setZip] = useState("");
  let navigate = useNavigate();
  let [error, setError] = useState(false);

  let MakeOrder = async () => {
    if (
      additionalStreet === "" ||
      country === "" ||
      email === "" ||
      name === "" ||
      surname === "" ||
      phoneNumber === "" ||
      state === "" ||
      street === "" ||
      town === "" ||
      zip === ""
    ) {
      return setError(true);
    } else
      await axios
        .post(
          "https://green-shop-backend.onrender.com/api/order/make-order?access_token=6506e8bd6ec24be5de357927",
          {
            billing_address: {
              additional_street_address: additionalStreet,
              country: country,
              email: email,
              first_name: name,
              last_name: surname,
              payment_method: payment,
              phone_number: phoneNumber,
              state: state,
              street_address: street,
              town: town,
              zip: zip,
            },
            extra_shop_info: {
              total_price: total,
            },
            shop_list: productsInCart,
          }
        )
        .then(dispatch(makeEverythingZero()))
        .then(navigate("/"));
  };

  return (
    <div>
      <div className="container relative">
        {error ? (
          <div className="absolute text-center w-[200px] bg-[red] left-[50%] translate-x-[-50%] p-[5px] rounded-[5px] text-[white] top-[-45px]">
            <p>Fill all areas</p>
          </div>
        ) : null}
        <div className="w-[343px] mx-auto mb-[64px] desktop:mb-[211px] desktop:flex desktop:w-[100%] desktop:justify-between">
          <div>
            <p className="hidden desktop:block mt-[36px] font-inter font-[400] text-[15px] text-[#3D3D3D] cursor-pointer">
              <Link className="font-[700]" to="/">
                Home{" "}
              </Link>
              /
              <Link className="font-[700]" to="/cart">
                {" "}
                Shopping Cart{" "}
              </Link>
              / Checkout
            </p>
            <p className="font-inter font-[700] text-[17px] text-[#3D3D3D] mt-[48px] desktop:mt-[36px] mb-[24px]">
              Billing Address
            </p>
            <div className="desktop:flex desktop:gap-[22px] desktop:mb-[30px]">
              <div>
                <div className="flex items-center gap-[2px] mb-[10px]">
                  <p className="font-inter font-[400] text-[15px] text-[#3D3D3D]">
                    First Name
                  </p>
                  <img src={RedStar} alt="Red star" />
                </div>
                <input
                  className="desktop:w-[350px] w-[343px] h-[40px] p-[13px] font-inter font-[400] text-[14px] border-[1px] border-solid border-[#EAEAEA] rounded-[3px] outline-none mb-[16px] desktop:mb-[0px]"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <div className="flex items-center gap-[2px] mb-[10px]">
                  <p className="font-inter font-[400] text-[15px] text-[#3D3D3D]">
                    Last Name
                  </p>
                  <img src={RedStar} alt="Red star" />
                </div>
                <input
                  className="desktop:mb-[0px] desktop:w-[350px] w-[343px] h-[40px] p-[13px] font-inter font-[400] text-[14px] border-[1px] border-solid border-[#EAEAEA] rounded-[3px] outline-none mb-[16px]"
                  type="text"
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
            </div>
            <div className="desktop:flex desktop:gap-[22px] desktop:mb-[30px]">
              <div>
                <div className="flex items-center gap-[2px] mb-[10px]">
                  <p className="font-inter font-[400] text-[15px] text-[#3D3D3D]">
                    Country / Region
                  </p>
                  <img src={RedStar} alt="Red star" />
                </div>
                <input
                  className="desktop:mb-[0px] desktop:w-[350px] w-[343px] h-[40px] p-[13px] font-inter font-[400] text-[14px] border-[1px] border-solid border-[#EAEAEA] rounded-[3px] outline-none mb-[16px]"
                  type="text"
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div>
                <div className="flex items-center gap-[2px] mb-[10px]">
                  <p className="font-inter font-[400] text-[15px] text-[#3D3D3D]">
                    Town / City
                  </p>
                  <img src={RedStar} alt="Red star" />
                </div>
                <input
                  className="desktop:mb-[0px] desktop:w-[350px] w-[343px] h-[40px] p-[13px] font-inter font-[400] text-[14px] border-[1px] border-solid border-[#EAEAEA] rounded-[3px] outline-none mb-[16px]"
                  type="text"
                  onChange={(e) => setTown(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center gap-[2px] mb-[10px]">
              <p className="font-inter font-[400] text-[15px] text-[#3D3D3D]">
                Street Address
              </p>
              <img src={RedStar} alt="Red star" />
            </div>
            <input
              className="desktop:mr-[22px] desktop:mb-[0px] desktop:w-[350px] w-[343px] h-[40px] p-[13px] font-inter font-[400] text-[14px] border-[1px] border-solid border-[#EAEAEA] rounded-[3px] outline-none mb-[16px]"
              type="text"
              placeholder="House number and street name"
              onChange={(e) => setStreet(e.target.value)}
            />
            <input
              className="desktop:w-[350px] desktop:mb-[30px] w-[343px] h-[40px] p-[13px] font-inter font-[400] text-[14px] border-[1px] border-solid border-[#EAEAEA] rounded-[3px] outline-none mb-[16px]"
              type="text"
              placeholder="Appartment, suite, unit, etc. (optional)"
              onChange={(e) => setAdditionalStreet(e.target.value)}
            />
            <div className="desktop:flex desktop:gap-[22px] desktop:mb-[30px]">
              <div>
                <div className="flex items-center gap-[2px] mb-[10px]">
                  <p className="font-inter font-[400] text-[15px] text-[#3D3D3D]">
                    State
                  </p>
                  <img src={RedStar} alt="Red star" />
                </div>
                <input
                  className="desktop:w-[350px] desktop:mb-[0px] w-[343px] h-[40px] p-[13px] font-inter font-[400] text-[14px] border-[1px] border-solid border-[#EAEAEA] rounded-[3px] outline-none mb-[16px]"
                  type="text"
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div>
                <div className="flex items-center gap-[2px] mb-[10px]">
                  <p className="font-inter font-[400] text-[15px] text-[#3D3D3D]">
                    Zip
                  </p>
                  <img src={RedStar} alt="Red star" />
                </div>
                <input
                  className="desktop:w-[350px] desktop:mb-[0px] w-[343px] h-[40px] p-[13px] font-inter font-[400] text-[14px] border-[1px] border-solid border-[#EAEAEA] rounded-[3px] outline-none mb-[16px]"
                  type="text"
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
            </div>
            <div className="desktop:flex desktop:gap-[22px] desktop:mb-[32px]">
              <div>
                <div className="flex items-center gap-[2px] mb-[10px]">
                  <p className="font-inter font-[400] text-[15px] text-[#3D3D3D]">
                    Email address
                  </p>
                  <img src={RedStar} alt="Red star" />
                </div>
                <input
                  className="desktop:w-[350px] desktop:mb-[0px] w-[343px] h-[40px] p-[13px] font-inter font-[400] text-[14px] border-[1px] border-solid border-[#EAEAEA] rounded-[3px] outline-none mb-[16px]"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>{" "}
              <div>
                <div className="flex items-center gap-[2px] mb-[10px]">
                  <p className="font-inter font-[400] text-[15px] text-[#3D3D3D]">
                    Phone Number
                  </p>
                  <img src={RedStar} alt="Red star" />
                </div>
                <div className="flex gap-[8px] items-center mb-[24px]">
                  <div className="w-[78px] h-[40px] flex justify-center items-center font-inter font-[400] text-[15px] text-[#3D3D3D] border-[1px] border-solid border-[#EAEAEA] rounded-[3px]">
                    +998
                  </div>
                  <input
                    className="desktop:w-[265px] desktop:mb-[0px] w-[257px] h-[40px] p-[13px] font-inter font-[400] text-[14px] outline-none border-[1px] border-solid border-[#EAEAEA] rounded-[3px]"
                    type="text"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <p className="font-inter font-[400] text-[15px] text-[#3D3D3D] mb-[10px]">
              Order notes (optional)
            </p>
            <textarea
              className="desktop:w-[100%] desktop:h-[229.6px] w-[343px] h-[152px] border-[1px] border-solid border-[#EAEAEA] rounded-[3px] mb-[32px]"
              name=""
              id=""
            ></textarea>
          </div>
          <div>
            <p className="font-inter font-[700] text-[17px] mb-[16px] desktop:mt-[88px] desktop:mb-[21px]">
              Your Order
            </p>
            <div className="flex items-center justify-between pb-[8px] desktop:pb-[11px] border-b-[0.3px] border-b-solid border-b-[#46A35880] mb-[8px] desktop:mb-[11px]">
              <p className="font-inter font-[500] text-[16px] text-[#3D3D3D]">
                Products
              </p>
              <p className="font-inter font-[500] text-[16px] text-[#3D3D3D]">
                Subtotal
              </p>
            </div>
            <div className="mb-[80px] desktop:mb-[19px]">
              {productsInCart.map((product) => {
                return (
                  <div
                    key={product._id}
                    className="mb-[8px] desktop:w-[405px] flex w-[343px] bg-[#FBFBFB] items-center pt-[12px] pb-[12px] pl-[5px] pr-[16px]"
                  >
                    <img
                      className="w-[70px] h-[70px] border-[1px] border-solid border-[#46A358]"
                      src={product.image}
                      alt="Product image"
                    />
                    <div className="w-[147px] ml-[8px] desktop:ml-[11px]">
                      <p className="font-inter text-[16px] font-[500] text-[#3D3D3D]">
                        {product.title}
                      </p>
                      <p className="font-inter font-[400] text-[8px] text-[#727272] mt-[6px] mb-[8px] desktop:mb-[0px]">
                        SKU: <span className="text-black">{product._id}</span>
                      </p>
                      <p className="font-inter font-[700] text-[18px] text-[#46A358] desktop:hidden">
                        ${product.price}
                      </p>
                    </div>
                    <p className="ml-[63px] desktop:ml-[23px] font-inter font-[400] text-[14px] text-[#727272]">
                      {"(x "}
                      {product.count}
                      {")"}
                    </p>
                    <p className="font-inter font-[700] text-[18px] text-[#46A358] hidden desktop:block ml-[30px] text-right w-[70px]">
                      ${product.price}
                    </p>
                  </div>
                );
              })}
            </div>
            <div>
              <div className="flex items-center justify-between mb-[15px]">
                <p className="font-inter font-[400] text-[15px] text-[#3D3D3D]">
                  Subtotal
                </p>
                <p className="font-inter font-[500] text-[18px] text-[#3D3D3D]">
                  ${total.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center justify-between mb-[21px]">
                <p className="font-inter font-[400] text-[15px] text-[#3D3D3D]">
                  Coupon Discount
                </p>
                <p className="font-inter font-[400] text-[15px] text-[#3D3D3D]">
                  (-) 00.00
                </p>
              </div>
              <div className="flex items-center justify-between mb-[8px]">
                <p className="font-inter font-[400] text-[15px] text-[#3D3D3D]">
                  Shiping
                </p>
                <p className="font-inter font-[500] text-[18px] text-[#3D3D3D]">
                  $16.00
                </p>
              </div>
              <div className="flex items-center justify-between pt-[16px] border-t-[0.3px] border-t-solid border-t-[#46A35880] mb-[47px]">
                <p className="font-inter font-[700] text-[16px] text-[#3D3D3D]">
                  Total
                </p>
                <p className="font-inter font-[700] text-[18px] text-[#46A358]">
                  ${total.toFixed(2)}
                </p>
              </div>
              <p className="font-inter font-[700] text-[17px] text-[#3D3D3D] mb-[19px]">
                Payment Method
              </p>
              <div className="flex items-center gap-[10px] pl-[11px] h-[45px] border-[1px] border-solid border-[#EAEAEA] rounded-[3px] focus-within:border-[#46A358]">
                <input
                  className="appearance-none w-[16px] h-[16px] border-[1.2px] border-[#46A358] rounded-full cursor-pointer relative
         checked:border-[#46A358]
         before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 
         before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#46A358] before:opacity-0
         checked:before:opacity-100"
                  type="radio"
                  name="payment-method"
                  id="payment-method-1"
                />
                <label htmlFor="payment-method-1">
                  <img
                    className="inline"
                    src={PaymentMethods}
                    alt="Payment methods"
                  />
                </label>
              </div>
              <div className="mt-[15px] flex items-center gap-[10px] pl-[11px] h-[45px] border-[1px] border-solid border-[#EAEAEA] rounded-[3px] focus-within:border-[#46A358]">
                <input
                  className="appearance-none w-[16px] h-[16px] border-[1.2px] border-[#46A358] rounded-full cursor-pointer relative
         checked:border-[#46A358]
         before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 
         before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#46A358] before:opacity-0
         checked:before:opacity-100"
                  type="radio"
                  name="payment-method"
                  id="payment-method-2"
                />
                <label
                  className="font-inter font-[400] text-[15px] text-[#3D3D3D]"
                  htmlFor="payment-method-2"
                >
                  Dorect bank transfer
                </label>
              </div>
              <div className="mb-[49px] mt-[15px] flex items-center gap-[10px] pl-[11px] h-[45px] border-[1px] border-solid border-[#EAEAEA] rounded-[3px] focus-within:border-[#46A358]">
                <input
                  className="appearance-none w-[16px] h-[16px] border-[1.2px] border-[#46A358] rounded-full cursor-pointer relative
           checked:border-[#46A358]
           before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 
           before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#46A358] before:opacity-0
            checked:before:opacity-100"
                  type="radio"
                  name="payment-method"
                  id="payment-method-3"
                />
                <label
                  className="font-inter font-[400] text-[15px] text-[#3D3D3D]"
                  htmlFor="payment-method-3"
                >
                  Cash on delivery
                </label>
              </div>
              <button
                onClick={MakeOrder}
                className="w-[100%] h-[40px] flex justify-center items-center font-inter font-[700] text-[15px] text-[#FFFFFF] bg-[#46A358] rounded-[3px]"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutComponent;

// Checkout qismi tayyor bo'ldi. Place Order tugmasi bosilganda modal chiqadigan qilishimiz kerak
