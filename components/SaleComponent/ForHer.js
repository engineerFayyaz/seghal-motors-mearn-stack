import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const ForHer = () => {
  const [Forher, setForHer] = useState([]);
  const getoffer = async () => {
    const url = "http://localhost:8000/ForHer";
    const res = await axios.get(url);
    const brandData = await res.data;
    setForHer(brandData);
  };
  useEffect(() => {
    getoffer();
  }, []);
  return (
    <div style={{ backgroundColor: "black" }}>
      <div className="sales-categories">
        <div className="categories-banner">
          <div className="mobile-banner">
            <img src="https://d30fs77zq6vq2v.cloudfront.net/media/14122021/qZHWscdVpQLTYm9awIo0U9iW-301103419989.png" />
          </div>
          <div className="desktop-banner">
            <img src="https://d30fs77zq6vq2v.cloudfront.net/media/14122021/5hy9kwnFEX8kn-uQYBKHdlvl-1186146650069.png" />
          </div>
        </div>
        <div className="best-seller-product">
          <div
            classNameName="parent"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {Forher &&
              Forher.map((val, i) => {
                return (
                  <div classNameName="main-catgery">
                    <a
                      data-v-c6f91d1e
                      href="#"
                      classNameName="offer-card"
                      key={i}
                    >
                      <div
                        classNameName="seller-image"
                        style={{ width: "195px" }}
                      >
                        <img classNameName="seller-image" src={val.url} />
                      </div>
                      <h6>{val.title}</h6>
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForHer;
