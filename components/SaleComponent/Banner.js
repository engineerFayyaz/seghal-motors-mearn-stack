import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import axios from "axios";
import { useEffect, useState } from "react";
import productApi from "../../src/api/products";
import "swiper/css/bundle";
const Banner = () => {
  SwiperCore.use([Autoplay]);
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
        <div className="banner-slider-cosmetic">
          <div className="swiper mySwiper" style={{ height: "60vh" }}>
            <div className="swiper-wrapper">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={true}
              >
                {data &&
                  data.map((val, i) => (
                    <>
                      <SwiperSlide>
                        <div className="banner-slider-cosmetic" key={i}>
                          <a
                            href={val.image_path}
                            className="beauty-desktop router-link-active"
                          >
                            <img src={val.image_path} alt={data.title} />
                          </a>
                        </div>
                      </SwiperSlide>
                    </>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
