import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import RightArrow from "../../../assets/icons/right-arrow.svg";
import LittleFlower from "../../../assets/photos/little-flower.svg";
import axios from "axios";

function Hero() {
  // Test
  // let [name, setName] = useState("");
  // let [surname, setSurname] = useState("");
  // let [password, setPassword] = useState("");
  // let [email, setEmail] = useState("");

  // function Register() {
  //   axios
  //     .post(
  //       "https://green-shop-backend.onrender.com/api/user/sign-up?access_token=6506e8bd6ec24be5de357927",
  //       {
  //         name: name,
  //         surname: surname,
  //         password: password,
  //         email: email,
  //       }
  //     )
  //     .then((res) => localStorage.setItem("token", res.data.data.token));
  // }

  // Test
  let swiperDatas = [
    {
      title: "LET'S MAKE A BETTER",
      flower:
        "https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nfXuygYLCAcQXq6pjVbISLqDaSjpolXGe0qRWUx8icaU06SYXB9K7M2HaAA1L-bK7N8PkuxsCHtuacJE5rokEtn8DEDF~s94~gevmgxhAJ5uyoJmcYbngHMswVd5Qmgz56b9a5R5mMmWmh4bF8innUSTdbgsDyDotQtnpdFKDty5VDaQt89-qBL4D58X53UhDFCz0MIO~NR9uETuNN5KT-5pWG0NXZoD6mT4vdD5IirS4yT7NS1zXodZtB256ntkM6H64cLO3Hqmvx4YHgz7POF0Tg9G7csGUoJ4KthiDtDCn3w9NBEZ~6JOF8cFYtJqOUvY-2L1QpZdWm~mbHNCxA__",
      button: "SHOP NOW",
    },
    {
      title: "LET'S LIVE IN A BETTER",
      flower:
        "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-1.png?alt=media&token=74ea8d3d-06b5-41e7-bb12-7caaf3035a6d",
      button: "LET'S START",
    },
    {
      title: "LET'S OBSERVE A BETTER",
      flower:
        "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-2.png?alt=media&token=5b5addec-d344-4897-a983-95c9b10a1662",
      button: "GET CREDITS",
    },
  ];
  return (
    <div>
      <div className="desktop:container desktop:mb-[46px]">
        {/* Test */}
        {/* Sign Up */}
        {/* <div>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <input
            onChange={(e) => setSurname(e.target.value)}
            type="text"
            placeholder="Surname"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Password"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <button onClick={Register}>Register</button>
        </div> */}
        {/* Test */}
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {swiperDatas.map((data) => {
            return (
              <SwiperSlide>
                <div className="desktop:relative bg-[#F5F5F580] flex items-center pt-[43px] pb-[43px] desktop:pt-[0px] desktop:pb-[0px] justify-between relative desktop:container desktop:mt-[12px]">
                  <div className="ml-[16px] desktop:ml-[40px]">
                    <p className="font-inter font-[500] text-[11px] desktop:text-[14px] text-[#3D3D3D]">
                      WELCOME TO GREENSHOP
                    </p>
                    <p className="leading-none font-interBold font-[1000] text-[24px] desktop:text-[70px] text-[#3D3D3D] w-[197px] desktop:w-[607.5px]">
                      {data.title}{" "}
                      <span className="hidden desktop:inline text-[#46A358]">
                        PLANET
                      </span>
                    </p>
                    <p className="font-interBold font-[1000] text-[24px] text-[#46A358] desktop:hidden">
                      PLANET
                    </p>
                    <p className="font-inter font-[400] text-[12px] desktop:text-[14px] text-[#727272] mt-[3px] w-[206px] desktop:w-[557px]">
                      We are an online plant shop offering a wide range of cheap
                      and trendy plants. Use our plants to create an unique
                      Urban Jungle. Order your favorite plants!
                    </p>
                    <button className="desktop:hidden font-inter font-[700] text-[12px] text-[#46A358] mt-[10px] flex items-center gap-[3.17px]">
                      {data.button}
                      <img src={RightArrow} alt="Right arrow" />
                    </button>
                    <button className="hidden desktop:block py-[11px] px-[26px] bg-[#46A358] rounded-[6px] mt-[44px] text-white uppercase font-inter font-[700] text-[16px]">
                      Shop now
                    </button>
                  </div>
                  <div>
                    <img
                      className="hidden desktop:block absolute bottom-[37px] right-[317px]"
                      src={LittleFlower}
                      alt="Little flower"
                    />
                    <img src={data.flower} alt="Flower" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;
