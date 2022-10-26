import React, { useState, useEffect } from "react";
import productApi from '../../src/api/products'
import { useRouter } from "next/router";
import Link from "next/link";


export default function ProductScree() {
  const { query } = useRouter();
  const { slug } = query;
  let [data, setData] = useState([]);

  useEffect(() => {
    getBestSellerList();
  }, [])

  let getBestSellerList = async () => {
    try {
      productApi.getBestSelling().then(res => {
        setData(res.data);
      }).catch(error => {
        console.log("res", error)
      });

    } catch (error) {
      console.log(error)
    }
  }

  const product = data.find((x) => x.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  const img1 = "https://www.clicky.pk/DeliveryTime.svg";


  return (
    <>
      <div className="layout-with-footer">
        <main className="product__page">
          <div>
            <div className="d_container" style={{ position: "relative" }}>
              <div className="breadcrumb">
                <a href="/" className="router-link-active">
                  HOME
                </a>{" "}
                <span>
                  <span className="arrow">›</span>{" "}
                  <a href="/men" className="">
                    GADGETS
                  </a>
                </span>
                <span>
                  <span className="arrow">›</span>{" "}
                  <a href="#" className="">
                    LED AND LIGHTING
                  </a>
                </span>
                <span>
                  <span className="arrow">›</span>{" "}
                  <a href="#" className="">
                    INTERIOR
                  </a>
                </span>
                <span>
                  <span className="arrow">›</span>{" "}
                  <a href="#" className="">
                    PERFUME
                  </a>
                </span>
                <span>
                  <span className="arrow">›</span>{" "}
                  <a href="#" className="">
                    EXTERIOR
                  </a>
                </span>
              </div>
              <div className="mobile-product mobile-slide">
                <div className="slider-container" id="hiii">
                  <div className="product-cat-slider">
                    <div className="swiper pc-full-slide">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <img src="https://www.sehgalmotors.pk/images/ProductImages/Products265x265/637943584489645105.jpg" />
                        </div>
                        <div className="swiper-slide">
                          <img src="https://www.sehgalmotors.pk/images/ProductImages/Products265x265/637943584489645105.jpg" />
                        </div>
                        <div className="swiper-slide">
                          <img src="https://www.sehgalmotors.pk/images/ProductImages/Products265x265/637943584489645105.jpg" />
                        </div>
                        <div className="swiper-slide">
                          <img src="https://www.sehgalmotors.pk/images/ProductImages/Products265x265/637943584489645105.jpg" />
                        </div>
                        <div className="swiper-slide">
                          <img src="https://www.sehgalmotors.pk/images/ProductImages/Products265x265/637943584489645105.jpg" />
                        </div>
                        <div className="swiper-slide">
                          <img src="https://www.sehgalmotors.pk/images/ProductImages/Products265x265/637943584489645105.jpg" />
                        </div>
                      </div>
                      <div className="swiper-pagination"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product product-detail activeNew bigImage">
                <div className="images desktop-product main-image">
                  <div className="col">
                    <div className="imgs">
                      <div>
                        <img
                          className="current"
                          src="https://www.sehgalmotors.pk/images/ProductImages/Products265x265/637413095300267573.jpg"
                        />
                        <img
                          className=""
                          data-src="https://www.sehgalmotors.pk/images/ProductImages/Products265x265/637413095300267573.jpg"
                          src="https://www.sehgalmotors.pk/images/ProductImages/Products265x265/637413095300267573.jpg"
                          lazy="loaded"
                        />
                        <img
                          className=""
                          data-src="https://www.sehgalmotors.pk/images/ProductImages/Products265x265/637413095300267573.jpg"
                          src="https://www.sehgalmotors.pk/images/ProductImages/Products265x265/637413095300267573.jpg"
                          lazy="loaded"
                        />
                        <img
                          className=""
                          data-src="https://www.sehgalmotors.pk/images/ProductImages/Products265x265/637413095300267573.jpg"
                          src="https://www.sehgalmotors.pk/images/ProductImages/Products265x265/637413095300267573.jpg"
                          lazy="loaded"
                        />
                        <img
                          className=""
                          data-src="https://www.sehgalmotors.pk/images/ProductImages/Products265x265/637413095300267573.jpg"
                          src="https://www.sehgalmotors.pk/images/ProductImages/Products265x265/637413095300267573.jpg"
                          lazy="loaded"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="share-icon">
                    <div data-v-41ba019c="" className="share-container">
                      <div data-v-41ba019c="" className="icon">
                        <img
                          data-v-41ba019c=""
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNS45NDIiIGhlaWdodD0iMTguMjUiIHZpZXdCb3g9IjAgMCAxNS45NDIgMTguMjUiPgogIDxwYXRoIGlkPSJQYXRoXzEiIGRhdGEtbmFtZT0iUGF0aCAxIiBkPSJNMTcyLjI4NCw2MS42YTMsMywwLDAsMC0yLjg1NiwzLjkyM2wtNC45NTQsMi43NTVhMywzLDAsMSwwLDAsNC42NTJsNC45NjEsMi43NTVhMi45NDcsMi45NDcsMCwwLDAtLjE1MS45MTYsMy4wMTYsMy4wMTYsMCwxLDAsLjg3My0yLjEwNmwtNC44MjUtMi42ODNhMi45ODEsMi45ODEsMCwwLDAsLjI2LTEuMjExLDIuOTQ5LDIuOTQ5LDAsMCwwLS4yNi0xLjIxMUwxNzAuMTUsNjYuN2EzLDMsMCwxLDAsMi4xMzUtNS4xMDZabTAsMS4zODVhMS42MTUsMS42MTUsMCwxLDEtMS42MTUsMS42MTVBMS42LDEuNiwwLDAsMSwxNzIuMjg0LDYyLjk4NFptLTkuNjkyLDZhMS42MTUsMS42MTUsMCwxLDEtMS42MTUsMS42MTVBMS42LDEuNiwwLDAsMSwxNjIuNTkyLDY4Ljk4NFptOS42OTIsNmExLjYxNSwxLjYxNSwwLDEsMS0xLjYxNSwxLjYxNUExLjYsMS42LDAsMCwxLDE3Mi4yODQsNzQuOTg0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1OS40NjcgLTYxLjQ3NCkiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIwLjI1Ii8+Cjwvc3ZnPgo="
                        />
                      </div>
                    </div>
                  </div>
                  <div className="img resetImg">
                    {/* <img src={product.image} alt={product.name}></img> */}
                    <img src="https://www.sehgalmotors.pk/images/ProductImages/Main/636441134879558287-IMG_4075.jpg" />
                  </div>
                </div>
                <div className="details new-details">
                  <div className="name_style_box">
                    <h1 className="p_name">{product.name}</h1>
                    <div className="vendor_product_block">
                      <div className="product_style_code clearfix mt15">
                        By : Dummy Category
                      </div>
                    </div>
                    
                  </div>
                  <div className="promotion-container"></div>
                  <div
                    className="price_container_cl"
                    style={{ maxHeight: "130px" }}
                  >
                    <div className="price-hot">
                      <h2 className="price" style={{ marginTop: "10px" }}>
                        <del>Rs {product.discount}</del>
                        <span className="set">Rs {product.sell_price_inc_tax}</span>{" "}
                        <span className="percentage-text">
                          (-1000%)
                        </span>{" "}
                      </h2>
                      <div className="copy-wrap">
                        <p className="copy-tip"></p>
                      </div>
                    </div>

                    <div className="db11_price clearfix js-promote-price-elem"></div>
                  </div>
                  <div className="desktop-product">
                    <div className="copy-wrap"></div>
                  </div>

                  <div>
                    <div className="desktop-product">
                      <div>
                        <div className="flex checkout_buttons mobile_fixed_btn">
                          <div style={{ width: "100%" }}>
                            <button
                              className="add_to_bag btn-effect"
                              onClick={() => addItemToCart()}
                            >
                              <div>
                                <span>ADD TO BAG</span>
                              </div>
                            </button>
                          </div>
                          <div className="wishlist_button mobile_button">
                            <div className="">
                              <div className="heart fav">
                                <svg
                                  viewBox="0 0 18 16 "
                                  id="heart "
                                  width="100% "
                                  height="100%"
                                >
                                  <path
                                    d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                    stroke="#707070 "
                                    stroke-width="2 "
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="variants_container desktop-product"
                        style={{ padding: "0px" }}
                      >
                        <div className="shipping-container">
                          <div className="delivery-time-img">
                            <img src={img1} />
                          </div>
                          <div>
                            <h5>Delivery Time:</h5>
                            <div style={{ padding: "0px", fontSize: "14px" }}>
                        
                              Lahore, Rawalpindi, Islamabad: 1-2 days
                              <br /> Other cities: 1-4 days
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="review-container" className="mobile-product"></div>
              <div className="desktop-product"></div>
              <div className="goods-intro desktop-product">
                <div className="">
                  <div className="title">
                    Product Description
                    <div className="description_btns">
                      <div className="btn_minus_icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="18"
                          viewBox="0 0 24 24"
                          className="addalign"
                        >
                          <path d="M19 13H5v-2h14v2z"></path>
                          <path d="M0 0h24v24H0z" fill="none"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="description_content">
                    <div className="description_content_text">
                      <p>
                        <p>
                          <strong>Product Details:</strong>
                        </p>
                        <p>{product.product_description}</p>
                        <p>
                          <strong>Specifications:</strong>
                        </p>
                        <p>
                          <strong>Material:</strong>
                        </p>
                        <p>
                          <strong>Upper:&nbsp;</strong>&nbsp;Knitted Polyester
                          Quality.
                        </p>
                        <p>
                          <strong>Bottom:</strong> PolyVinyl Chloride With
                          Injection Moulding Machine Sole.
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desktop-product review">
                <div id="reviews" style={{ marginTop: "10px", width: "100%" }}>
                  <div style={{ marginTop: "10px" }}>
                    <div style={{ marginBottom: "10px" }}>
                      <a
                        href="/account/login?return=move-men-beige-stylish-sneakers-beige%3Fid%3D630dee795d237140e683ed1c"
                        className=""
                        style={{
                          padding: "20px",
                          background: "white",
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "10px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "17px",
                            fontWeight: " 500",
                          }}
                        >
                          Login to review
                        </div>
                      </a>
                    </div>
                    <div>
                      <div className="main-reviews">
                        <div className="reviews-header">
                          <div className="reviews-title">Reviews (11)</div>
                        </div>
                      </div>
                      <div className="rating">
                        <div className="rate-header">5.0</div>
                        <div className="rate-stars">
                          <div data-v-34cbeed1="" className="vue-star-rating">
                            <div data-v-34cbeed1="" className="vue-star-rating">
                              <span
                                data-v-34cbeed1=""
                                className="vue-star-rating-star"
                                style={{ marginRight: "0px" }}
                              >
                                <svg
                                  data-v-21f5376e=""
                                  data-v-34cbeed1=""
                                  height="25"
                                  width="25"
                                  viewBox="0 0 27.5 27.5"
                                  className="vue-star-rating-star"
                                  step="100"
                                >
                                  <linearGradient
                                    data-v-21f5376e=""
                                    id="wjvrj8"
                                    x1="0"
                                    x2="100%"
                                    y1="0"
                                    y2="0"
                                  >
                                    <stop
                                      data-v-21f5376e=""
                                      offset="100%"
                                      stop-color="#ffa800"
                                    ></stop>{" "}
                                    <stop
                                      data-v-21f5376e=""
                                      offset="100%"
                                      stop-color="#d8d8d8"
                                    ></stop>
                                  </linearGradient>{" "}
                                  <filter
                                    data-v-21f5376e=""
                                    id="rslmse"
                                    height="130%"
                                    width="130%"
                                    filterUnits="userSpaceOnUse"
                                  >
                                    <feGaussianBlur
                                      data-v-21f5376e=""
                                      stdDeviation="0"
                                      result="coloredBlur"
                                    ></feGaussianBlur>{" "}
                                    <feMerge data-v-21f5376e="">
                                      <feMergeNode
                                        data-v-21f5376e=""
                                        in="coloredBlur"
                                      ></feMergeNode>{" "}
                                      <feMergeNode
                                        data-v-21f5376e=""
                                        in="SourceGraphic"
                                      ></feMergeNode>
                                    </feMerge>
                                  </filter>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                    fill="url(#wjvrj8)"
                                    stroke="#fff"
                                    filter="url(#rslmse)"
                                  ></polygon>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                    fill="url(#wjvrj8)"
                                    stroke="transparent"
                                    stroke-width="5"
                                    stroke-linejoin="round"
                                  ></polygon>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                    fill="url(#wjvrj8)"
                                  ></polygon>
                                </svg>
                              </span>
                              <span
                                data-v-34cbeed1=""
                                className="vue-star-rating-star"
                                style={{ marginRight: "0px" }}
                              >
                                <svg
                                  data-v-21f5376e=""
                                  data-v-34cbeed1=""
                                  height="25"
                                  width="25"
                                  viewBox="0 0 27.5 27.5"
                                  className="vue-star-rating-star"
                                  step="100"
                                >
                                  <linearGradient
                                    data-v-21f5376e=""
                                    id="a1mckc"
                                    x1="0"
                                    x2="100%"
                                    y1="0"
                                    y2="0"
                                  >
                                    <stop
                                      data-v-21f5376e=""
                                      offset="100%"
                                      stop-color="#ffa800"
                                    ></stop>{" "}
                                    <stop
                                      data-v-21f5376e=""
                                      offset="100%"
                                      stop-color="#d8d8d8"
                                    ></stop>
                                  </linearGradient>{" "}
                                  <filter
                                    data-v-21f5376e=""
                                    id="02mb8y"
                                    height="130%"
                                    width="130%"
                                    filterUnits="userSpaceOnUse"
                                  >
                                    <feGaussianBlur
                                      data-v-21f5376e=""
                                      stdDeviation="0"
                                      result="coloredBlur"
                                    ></feGaussianBlur>{" "}
                                    <feMerge data-v-21f5376e="">
                                      <feMergeNode
                                        data-v-21f5376e=""
                                        in="coloredBlur"
                                      ></feMergeNode>{" "}
                                      <feMergeNode
                                        data-v-21f5376e=""
                                        in="SourceGraphic"
                                      ></feMergeNode>
                                    </feMerge>
                                  </filter>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                    fill="url(#a1mckc)"
                                    stroke="#fff"
                                    filter="url(#02mb8y)"
                                  ></polygon>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                    fill="url(#a1mckc)"
                                    stroke="transparent"
                                    stroke-width="5"
                                    stroke-linejoin="round"
                                  ></polygon>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                    fill="url(#a1mckc)"
                                  ></polygon>
                                </svg>
                              </span>
                              <span
                                data-v-34cbeed1=""
                                className="vue-star-rating-star"
                                style={{ marginRight: "0px" }}
                              >
                                <svg
                                  data-v-21f5376e=""
                                  data-v-34cbeed1=""
                                  height="25"
                                  width="25"
                                  viewBox="0 0 27.5 27.5"
                                  className="vue-star-rating-star"
                                  step="100"
                                >
                                  <linearGradient
                                    data-v-21f5376e=""
                                    id="bslpwt"
                                    x1="0"
                                    x2="100%"
                                    y1="0"
                                    y2="0"
                                  >
                                    <stop
                                      data-v-21f5376e=""
                                      offset="100%"
                                      stop-color="#ffa800"
                                    ></stop>{" "}
                                    <stop
                                      data-v-21f5376e=""
                                      offset="100%"
                                      stop-color="#d8d8d8"
                                    ></stop>
                                  </linearGradient>{" "}
                                  <filter
                                    data-v-21f5376e=""
                                    id="m9zaio"
                                    height="130%"
                                    width="130%"
                                    filterUnits="userSpaceOnUse"
                                  >
                                    <feGaussianBlur
                                      data-v-21f5376e=""
                                      stdDeviation="0"
                                      result="coloredBlur"
                                    ></feGaussianBlur>{" "}
                                    <feMerge data-v-21f5376e="">
                                      <feMergeNode
                                        data-v-21f5376e=""
                                        in="coloredBlur"
                                      ></feMergeNode>{" "}
                                      <feMergeNode
                                        data-v-21f5376e=""
                                        in="SourceGraphic"
                                      ></feMergeNode>
                                    </feMerge>
                                  </filter>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                    fill="url(#bslpwt)"
                                    stroke="#fff"
                                    filter="url(#m9zaio)"
                                  ></polygon>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                    fill="url(#bslpwt)"
                                    stroke="transparent"
                                    stroke-width="5"
                                    stroke-linejoin="round"
                                  ></polygon>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                    fill="url(#bslpwt)"
                                  ></polygon>
                                </svg>
                              </span>
                              <span
                                data-v-34cbeed1=""
                                className="vue-star-rating-star"
                                style={{ marginRight: "0px" }}
                              >
                                <svg
                                  data-v-21f5376e=""
                                  data-v-34cbeed1=""
                                  height="25"
                                  width="25"
                                  viewBox="0 0 27.5 27.5"
                                  className="vue-star-rating-star"
                                  step="100"
                                >
                                  <linearGradient
                                    data-v-21f5376e=""
                                    id="ff0jlf"
                                    x1="0"
                                    x2="100%"
                                    y1="0"
                                    y2="0"
                                  >
                                    <stop
                                      data-v-21f5376e=""
                                      offset="100%"
                                      stop-color="#ffa800"
                                    ></stop>{" "}
                                    <stop
                                      data-v-21f5376e=""
                                      offset="100%"
                                      stop-color="#d8d8d8"
                                    ></stop>
                                  </linearGradient>{" "}
                                  <filter
                                    data-v-21f5376e=""
                                    id="z7jlx"
                                    height="130%"
                                    width="130%"
                                    filterUnits="userSpaceOnUse"
                                  >
                                    <feGaussianBlur
                                      data-v-21f5376e=""
                                      stdDeviation="0"
                                      result="coloredBlur"
                                    ></feGaussianBlur>{" "}
                                    <feMerge data-v-21f5376e="">
                                      <feMergeNode
                                        data-v-21f5376e=""
                                        in="coloredBlur"
                                      ></feMergeNode>{" "}
                                      <feMergeNode
                                        data-v-21f5376e=""
                                        in="SourceGraphic"
                                      ></feMergeNode>
                                    </feMerge>
                                  </filter>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                    fill="url(#ff0jlf)"
                                    stroke="#fff"
                                    filter="url(#z7jlx)"
                                  ></polygon>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                    fill="url(#ff0jlf)"
                                    stroke="transparent"
                                    stroke-width="5"
                                    stroke-linejoin="round"
                                  ></polygon>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                    fill="url(#ff0jlf)"
                                  ></polygon>
                                </svg>
                              </span>
                              <span
                                data-v-34cbeed1=""
                                className="vue-star-rating-star"
                                style={{ marginRight: "0px" }}
                              >
                                <svg
                                  data-v-21f5376e=""
                                  data-v-34cbeed1=""
                                  height="25"
                                  width="25"
                                  viewBox="0 0 27.5 27.5"
                                  className="vue-star-rating-star"
                                  step="100"
                                >
                                  <linearGradient
                                    data-v-21f5376e=""
                                    id="y8x53w"
                                    x1="0"
                                    x2="100%"
                                    y1="0"
                                    y2="0"
                                  >
                                    <stop
                                      data-v-21f5376e=""
                                      offset="100%"
                                      stop-color="#ffa800"
                                    ></stop>{" "}
                                    <stop
                                      data-v-21f5376e=""
                                      offset="100%"
                                      stop-color="#d8d8d8"
                                    ></stop>
                                  </linearGradient>{" "}
                                  <filter
                                    data-v-21f5376e=""
                                    id="n3h6m"
                                    height="130%"
                                    width="130%"
                                    filterUnits="userSpaceOnUse"
                                  >
                                    <feGaussianBlur
                                      data-v-21f5376e=""
                                      stdDeviation="0"
                                      result="coloredBlur"
                                    ></feGaussianBlur>{" "}
                                    <feMerge data-v-21f5376e="">
                                      <feMergeNode
                                        data-v-21f5376e=""
                                        in="coloredBlur"
                                      ></feMergeNode>{" "}
                                      <feMergeNode
                                        data-v-21f5376e=""
                                        in="SourceGraphic"
                                      ></feMergeNode>
                                    </feMerge>
                                  </filter>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                    fill="url(#y8x53w)"
                                    stroke="#fff"
                                    filter="url(#n3h6m)"
                                  ></polygon>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                    fill="url(#y8x53w)"
                                    stroke="transparent"
                                    stroke-width="5"
                                    stroke-linejoin="round"
                                  ></polygon>{" "}
                                  <polygon
                                    data-v-21f5376e=""
                                    points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                    fill="url(#y8x53w)"
                                  ></polygon>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="reviews">
                        <div className="">
                          <div className="review-head">
                            <div className="icon-title">
                              <div className="icon">
                                <span
                                  style={{
                                    fontWeight: "bolder",
                                    alignSelf: "center",
                                    position: " relative",
                                    left: "4px",
                                  }}
                                ></span>
                              </div>
                              <div className="reviewer-name">
                                <span className="self-align">Mohsin Raza</span>
                              </div>
                            </div>
                            <div className="reviews-stars">
                              <div
                                data-v-34cbeed1=""
                                className="vue-star-rating"
                              >
                                <div
                                  data-v-34cbeed1=""
                                  className="vue-star-rating"
                                >
                                  <span
                                    data-v-34cbeed1=""
                                    className="vue-star-rating-star"
                                    style={{ marginRight: "0px" }}
                                  >
                                    <svg
                                      data-v-21f5376e=""
                                      data-v-34cbeed1=""
                                      height="25"
                                      width="25"
                                      viewBox="0 0 27.5 27.5"
                                      className="vue-star-rating-star"
                                      step="100"
                                    >
                                      <linearGradient
                                        data-v-21f5376e=""
                                        id="q4a91j"
                                        x1="0"
                                        x2="100%"
                                        y1="0"
                                        y2="0"
                                      >
                                        <stop
                                          data-v-21f5376e=""
                                          offset="100%"
                                          stop-color="#ffa800"
                                        ></stop>{" "}
                                        <stop
                                          data-v-21f5376e=""
                                          offset="100%"
                                          stop-color="#d8d8d8"
                                        ></stop>
                                      </linearGradient>{" "}
                                      <filter
                                        data-v-21f5376e=""
                                        id="kgua6s"
                                        height="130%"
                                        width="130%"
                                        filterUnits="userSpaceOnUse"
                                      >
                                        <feGaussianBlur
                                          data-v-21f5376e=""
                                          stdDeviation="0"
                                          result="coloredBlur"
                                        ></feGaussianBlur>{" "}
                                        <feMerge data-v-21f5376e="">
                                          <feMergeNode
                                            data-v-21f5376e=""
                                            in="coloredBlur"
                                          ></feMergeNode>{" "}
                                          <feMergeNode
                                            data-v-21f5376e=""
                                            in="SourceGraphic"
                                          ></feMergeNode>
                                        </feMerge>
                                      </filter>{" "}
                                      <polygon
                                        data-v-21f5376e=""
                                        points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                        fill="url(#q4a91j)"
                                        stroke="#fff"
                                        filter="url(#kgua6s)"
                                      ></polygon>{" "}
                                      <polygon
                                        data-v-21f5376e=""
                                        points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                        fill="url(#q4a91j)"
                                        stroke="transparent"
                                        stroke-width="5"
                                        stroke-linejoin="round"
                                      ></polygon>{" "}
                                      <polygon
                                        data-v-21f5376e=""
                                        points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                        fill="url(#q4a91j)"
                                      ></polygon>
                                    </svg>
                                  </span>
                                  <span
                                    data-v-34cbeed1=""
                                    className="vue-star-rating-star"
                                    style={{ marginRight: "0px" }}
                                  >
                                    <svg
                                      data-v-21f5376e=""
                                      data-v-34cbeed1=""
                                      height="25"
                                      width="25"
                                      viewBox="0 0 27.5 27.5"
                                      className="vue-star-rating-star"
                                      step="100"
                                    >
                                      <linearGradient
                                        data-v-21f5376e=""
                                        id="vilatm"
                                        x1="0"
                                        x2="100%"
                                        y1="0"
                                        y2="0"
                                      >
                                        <stop
                                          data-v-21f5376e=""
                                          offset="100%"
                                          stop-color="#ffa800"
                                        ></stop>{" "}
                                        <stop
                                          data-v-21f5376e=""
                                          offset="100%"
                                          stop-color="#d8d8d8"
                                        ></stop>
                                      </linearGradient>{" "}
                                      <filter
                                        data-v-21f5376e=""
                                        id="m790m8"
                                        height="130%"
                                        width="130%"
                                        filterUnits="userSpaceOnUse"
                                      >
                                        <feGaussianBlur
                                          data-v-21f5376e=""
                                          stdDeviation="0"
                                          result="coloredBlur"
                                        ></feGaussianBlur>{" "}
                                        <feMerge data-v-21f5376e="">
                                          <feMergeNode
                                            data-v-21f5376e=""
                                            in="coloredBlur"
                                          ></feMergeNode>{" "}
                                          <feMergeNode
                                            data-v-21f5376e=""
                                            in="SourceGraphic"
                                          ></feMergeNode>
                                        </feMerge>
                                      </filter>{" "}
                                      <polygon
                                        data-v-21f5376e=""
                                        points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                        fill="url(#vilatm)"
                                        stroke="#fff"
                                        filter="url(#m790m8)"
                                      ></polygon>{" "}
                                      <polygon
                                        data-v-21f5376e=""
                                        points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                        fill="url(#vilatm)"
                                        stroke="transparent"
                                        stroke-width="5"
                                        stroke-linejoin="round"
                                      ></polygon>{" "}
                                      <polygon
                                        data-v-21f5376e=""
                                        points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                        fill="url(#vilatm)"
                                      ></polygon>
                                    </svg>
                                  </span>
                                  <span
                                    data-v-34cbeed1=""
                                    className="vue-star-rating-star"
                                    style={{ marginRight: "0px" }}
                                  >
                                    <svg
                                      data-v-21f5376e=""
                                      data-v-34cbeed1=""
                                      height="25"
                                      width="25"
                                      viewBox="0 0 27.5 27.5"
                                      className="vue-star-rating-star"
                                      step="100"
                                    >
                                      <linearGradient
                                        data-v-21f5376e=""
                                        id="1djpjt"
                                        x1="0"
                                        x2="100%"
                                        y1="0"
                                        y2="0"
                                      >
                                        <stop
                                          data-v-21f5376e=""
                                          offset="100%"
                                          stop-color="#ffa800"
                                        ></stop>{" "}
                                        <stop
                                          data-v-21f5376e=""
                                          offset="100%"
                                          stop-color="#d8d8d8"
                                        ></stop>
                                      </linearGradient>{" "}
                                      <filter
                                        data-v-21f5376e=""
                                        id="aw4cps"
                                        height="130%"
                                        width="130%"
                                        filterUnits="userSpaceOnUse"
                                      >
                                        <feGaussianBlur
                                          data-v-21f5376e=""
                                          stdDeviation="0"
                                          result="coloredBlur"
                                        ></feGaussianBlur>{" "}
                                        <feMerge data-v-21f5376e="">
                                          <feMergeNode
                                            data-v-21f5376e=""
                                            in="coloredBlur"
                                          ></feMergeNode>{" "}
                                          <feMergeNode
                                            data-v-21f5376e=""
                                            in="SourceGraphic"
                                          ></feMergeNode>
                                        </feMerge>
                                      </filter>{" "}
                                      <polygon
                                        data-v-21f5376e=""
                                        points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                        fill="url(#1djpjt)"
                                        stroke="#fff"
                                        filter="url(#aw4cps)"
                                      ></polygon>{" "}
                                      <polygon
                                        data-v-21f5376e=""
                                        points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                        fill="url(#1djpjt)"
                                        stroke="transparent"
                                        stroke-width="5"
                                        stroke-linejoin="round"
                                      ></polygon>{" "}
                                      <polygon
                                        data-v-21f5376e=""
                                        points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                        fill="url(#1djpjt)"
                                      ></polygon>
                                    </svg>
                                  </span>
                                  <span
                                    data-v-34cbeed1=""
                                    className="vue-star-rating-star"
                                    style={{ marginRight: "0px" }}
                                  >
                                    <svg
                                      data-v-21f5376e=""
                                      data-v-34cbeed1=""
                                      height="25"
                                      width="25"
                                      viewBox="0 0 27.5 27.5"
                                      className="vue-star-rating-star"
                                      step="100"
                                    >
                                      <linearGradient
                                        data-v-21f5376e=""
                                        id="6sdqhc"
                                        x1="0"
                                        x2="100%"
                                        y1="0"
                                        y2="0"
                                      >
                                        <stop
                                          data-v-21f5376e=""
                                          offset="100%"
                                          stop-color="#ffa800"
                                        ></stop>{" "}
                                        <stop
                                          data-v-21f5376e=""
                                          offset="100%"
                                          stop-color="#d8d8d8"
                                        ></stop>
                                      </linearGradient>{" "}
                                      <filter
                                        data-v-21f5376e=""
                                        id="ogxib"
                                        height="130%"
                                        width="130%"
                                        filterUnits="userSpaceOnUse"
                                      >
                                        <feGaussianBlur
                                          data-v-21f5376e=""
                                          stdDeviation="0"
                                          result="coloredBlur"
                                        ></feGaussianBlur>{" "}
                                        <feMerge data-v-21f5376e="">
                                          <feMergeNode
                                            data-v-21f5376e=""
                                            in="coloredBlur"
                                          ></feMergeNode>{" "}
                                          <feMergeNode
                                            data-v-21f5376e=""
                                            in="SourceGraphic"
                                          ></feMergeNode>
                                        </feMerge>
                                      </filter>{" "}
                                      <polygon
                                        data-v-21f5376e=""
                                        points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                        fill="url(#6sdqhc)"
                                        stroke="#fff"
                                        filter="url(#ogxib)"
                                      ></polygon>{" "}
                                      <polygon
                                        data-v-21f5376e=""
                                        points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                        fill="url(#6sdqhc)"
                                        stroke="transparent"
                                        stroke-width="5"
                                        stroke-linejoin="round"
                                      ></polygon>{" "}
                                      <polygon
                                        data-v-21f5376e=""
                                        points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                        fill="url(#6sdqhc)"
                                      ></polygon>
                                    </svg>
                                  </span>
                                  <span
                                    data-v-34cbeed1=""
                                    className="vue-star-rating-star"
                                    style={{ marginRight: "0px" }}
                                  >
                                    <svg
                                      data-v-21f5376e=""
                                      data-v-34cbeed1=""
                                      height="25"
                                      width="25"
                                      viewBox="0 0 27.5 27.5"
                                      className="vue-star-rating-star"
                                      step="100"
                                    >
                                      <linearGradient
                                        data-v-21f5376e=""
                                        id="pcyqdh"
                                        x1="0"
                                        x2="100%"
                                        y1="0"
                                        y2="0"
                                      >
                                        <stop
                                          data-v-21f5376e=""
                                          offset="100%"
                                          stop-color="#ffa800"
                                        ></stop>{" "}
                                        <stop
                                          data-v-21f5376e=""
                                          offset="100%"
                                          stop-color="#d8d8d8"
                                        ></stop>
                                      </linearGradient>{" "}
                                      <filter
                                        data-v-21f5376e=""
                                        id="ahpmgq"
                                        height="130%"
                                        width="130%"
                                        filterUnits="userSpaceOnUse"
                                      >
                                        <feGaussianBlur
                                          data-v-21f5376e=""
                                          stdDeviation="0"
                                          result="coloredBlur"
                                        ></feGaussianBlur>{" "}
                                        <feMerge data-v-21f5376e="">
                                          <feMergeNode
                                            data-v-21f5376e=""
                                            in="coloredBlur"
                                          ></feMergeNode>{" "}
                                          <feMergeNode
                                            data-v-21f5376e=""
                                            in="SourceGraphic"
                                          ></feMergeNode>
                                        </feMerge>
                                      </filter>{" "}
                                      <polygon
                                        data-v-21f5376e=""
                                        points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                        fill="url(#pcyqdh)"
                                        stroke="#fff"
                                        filter="url(#ahpmgq)"
                                      ></polygon>{" "}
                                      <polygon
                                        data-v-21f5376e=""
                                        points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                        fill="url(#pcyqdh)"
                                        stroke="transparent"
                                        stroke-width="5"
                                        stroke-linejoin="round"
                                      ></polygon>{" "}
                                      <polygon
                                        data-v-21f5376e=""
                                        points="16.590909090909093,8.51010101010101,10.530303030303031,27.5,25.681818181818183,15.378787878787879,7.5,15.378787878787879,22.65151515151515,27.5"
                                        fill="url(#pcyqdh)"
                                      ></polygon>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="review-comment">
                            <p>Good quality thanks 👍</p>
                          </div>
                          <div className="review-images">
                            <div
                              className="review-image"
                              style={{
                                backgroundImage: ` url(&quot;https://d30fs77zq6vq2v.cloudfront.net/reviews/25092022/inbound638338453203268972-783265681369.jpg&quot;)`,
                              }}
                            ></div>
                          </div>
                          <div className="review-date">
                            <span>Sep. 25, 2022 at 9:38:59 PM</span>
                          </div>
                          <div className="divider"></div>
                        </div>
                      </div>
                      <div className="view-all-reviews">
                        <span
                          className="self-align"
                          style={{ fontSize: "14px", fontWeight: " bold" }}
                        >
                          View All
                          <img
                            src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0OTIuMDA0IDQ5Mi4wMDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5Mi4wMDQgNDkyLjAwNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM4Mi42NzgsMjI2LjgwNEwxNjMuNzMsNy44NkMxNTguNjY2LDIuNzkyLDE1MS45MDYsMCwxNDQuNjk4LDBzLTEzLjk2OCwyLjc5Mi0xOS4wMzIsNy44NmwtMTYuMTI0LDE2LjEyICAgIGMtMTAuNDkyLDEwLjUwNC0xMC40OTIsMjcuNTc2LDAsMzguMDY0TDI5My4zOTgsMjQ1LjlsLTE4NC4wNiwxODQuMDZjLTUuMDY0LDUuMDY4LTcuODYsMTEuODI0LTcuODYsMTkuMDI4ICAgIGMwLDcuMjEyLDIuNzk2LDEzLjk2OCw3Ljg2LDE5LjA0bDE2LjEyNCwxNi4xMTZjNS4wNjgsNS4wNjgsMTEuODI0LDcuODYsMTkuMDMyLDcuODZzMTMuOTY4LTIuNzkyLDE5LjAzMi03Ljg2TDM4Mi42NzgsMjY1ICAgIGM1LjA3Ni01LjA4NCw3Ljg2NC0xMS44NzIsNy44NDgtMTkuMDg4QzM5MC41NDIsMjM4LjY2OCwzODcuNzU0LDIzMS44ODQsMzgyLjY3OCwyMjYuODA0eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
                            style={{ width: "10px", height: " auto" }}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desktop-product recent-review">
                <div
                  className="d_container related"
                  style={{ padding: "25px 10px" }}
                >
                  <h2 className="center" style={{ marginLeft: "10px" }}>
                    Recent products
                  </h2>
                  <div className="related-container">
                    {
                      data && data.slice(0,4).map((value, index) =>{
                        return(
                          <>
                           <Link href={`/product/${product.slug}`}>
                              <div className="product" index={index}>
                      <div className="heart_wrapper">
                        <div className="">
                          <div className="heart fav">
                            <svg
                              viewBox="0 0 18 16 "
                              id="heart "
                              width="100% "
                              height="100%"
                            >
                              <path
                                d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                stroke="#707070 "
                                stroke-width="2 "
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="image">
                          <img
                            alt={value.name}
                            src={product.image ? product.image : "https://www.sehgalmotors.pk/images/ProductImages/Products265x265/636880903771408107.jpg"}
                          />
                        </div>
                        <div className="product__details">
                          <div className="brand_name">
                            <p className="brand_text"> {value.category} </p>
                          </div>
                          <div className="product_name">
                            <a
                              href="/move-men-gold-stylish-sneakers-gold?id=63254d4863f525322c46b0a5"
                              className="name"
                            >
                              {value.name}
                            </a>
                          </div>
                          <div className="price_box">
                            <p className="price">
                              <span className="discounted_price">Rs {value.sell_price_inc_tax}</span>{" "}
                              <del>Rs 3,250</del>{" "}
                              <span className="percentage-text">-39%</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    </Link>
                          </>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
              <div className="desktop-product similler-product">
                <div
                  className="d_container related"
                  style={{ padding: "25px 10px" }}
                >
                  <h2 className="center" style={{ marginLeft: "10px" }}>
                    similar products
                  </h2>
                  <div className="related-container">
                    {
                      data && data.slice(0,8).map((value, index) =>{
                        return(
                          <>
                           <Link href={`/product/${product.slug}`}>
                              <div className="product" index={index}>
                      <div className="heart_wrapper">
                        <div className="">
                          <div className="heart fav">
                            <svg
                              viewBox="0 0 18 16 "
                              id="heart "
                              width="100% "
                              height="100%"
                            >
                              <path
                                d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z "
                                stroke="#707070 "
                                stroke-width="2 "
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="image">
                          <img
                            alt={value.name}
                            src={product.image ? product.image : "https://www.sehgalmotors.pk/images/ProductImages/Products265x265/636880903771408107.jpg"}
                          />
                        </div>
                        <div className="product__details">
                          <div className="brand_name">
                            <p className="brand_text"> {value.category} </p>
                          </div>
                          <div className="product_name">
                            <a
                              href="/move-men-gold-stylish-sneakers-gold?id=63254d4863f525322c46b0a5"
                              className="name"
                            >
                              {value.name}
                            </a>
                          </div>
                          <div className="price_box">
                            <p className="price">
                              <span className="discounted_price">Rs {value.sell_price_inc_tax}</span>{" "}
                              <del>Rs 3,250</del>{" "}
                              <span className="percentage-text">-39%</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    </Link>
                          </>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
