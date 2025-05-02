import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import RightArrow from "../../../assets/icons/right-arrow.svg";
import LittleFlower from "../../../assets/photos/little-flower.svg";

function Hero() {
  let swiperDatas = [
    {
      title: "LET'S MAKE A BETTER",
      flower:
        "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d",
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
