import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import axios from "axios";
import { useEffect, useState } from "react";
import productApi from "../src/api/products";

import "swiper/css/bundle";
const Banner = () => {
  let [data, setData] = useState([]);
  SwiperCore.use([Autoplay]);
  useEffect(() => {
    getbanner();
  }, []);

  let getbanner = async () => {
    try {
      productApi
        .banner()
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.log("res", error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="desktop-banner hero-banner-swipe">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              autoplay={true}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              {data &&
                data.map((val, i) => (
                  <>
                    <SwiperSlide>
                      <div className="swiper-slide" key={i}>
                        <a href={val.image_path} className="beauty-desktop">
                          <img src={val.image_path} alt={val.title} />
                        </a>
                      </div>
                    </SwiperSlide>
                  </>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div class="mobile-banner hero-banner-swipe">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              // loop={true}
              // autoplay={true}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              {data &&
                data.map((val, i) => {
                  return (
                    <>
                      <SwiperSlide>
                        <div
                          class="swiper-slidee"
                          key={i}
                          style={{ height: "112px" }}
                        >
                          <a href={val.image_path} class="beauty-mobile">
                            <img src={val.image_path} />
                          </a>
                        </div>
                      </SwiperSlide>
                    </>
                  );
                })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
