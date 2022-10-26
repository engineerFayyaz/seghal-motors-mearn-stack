import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/bundle";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from 'react-redux'
import Link from "next/link";
import productApi from '../src/api/products'
import { useEffect, useState } from "react";
import { addList } from '../redux/bestselling'

const BestInBeauty = () => {
  const router = useRouter();
  const bestselling = useSelector((state) => state.bestselling);
  const dispatch = useDispatch()
  let [data, setData] = useState([]);
  let [apiLoader, setSetApiLoader] = useState(true);

  useEffect(() => {
    getBestSellerList();
  }, [])

  let getBestSellerList = async () => {
    try {
      productApi.getBestSelling().then(res => {
        console.log("res", res);
        setData(res.data);
        dispatch(addList(res.data));
        setSetApiLoader(false)
      }).catch(error => {
        setSetApiLoader(false)
        console.log("res", error)
      });

    } catch (error) {
      setSetApiLoader(false)
      console.log(error)
    }
  }

  return (
    <>
      <div className="best-seller-main">
        <div className="head-container">
          <h6 onClick={() => getBestSellerList()}>BEST IN BEAUTY</h6>
        </div>
        {apiLoader ? "Loading" : (
          <div className="swiper swipe-product-slide">
            <div className="swiper-wrapper">
              <Swiper
                spaceBetween={50}
                slidesPerView={4}
                loop={false}
                autoplay={false}
              >
                {bestselling.map((product, index) => (
                  <SwiperSlide>
                    <div
                      className="swiper-slide"
                      style={{ flexDirection: "column" }}
                    >
                      <div className="homeseller-image">
                        <Link href={`/product/${product.slug}`}>
                          <img src={product.image ? product.image : "https://www.sehgalmotors.pk/images/ProductImages/Products265x265/636880903771408107.jpg"} alt={product.name} />
                        </Link>
                      </div>
                      <div className="homeseller-detail">
                        <h6>Rs {product.sell_price_inc_tax}</h6>
                        <div className="percent">
                          <del>Rs 100</del>
                          <span className="percentage-text">(-50%)</span>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}

      </div>
    </>
  );
};

export default BestInBeauty;
