import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const TopBrands = () => {
  const [brand, setbrand] = useState([]);
  const getDealZone = async () => {
    const url = "http://localhost:8000/TopBrands";
    const res = await axios.get(url);
    const brandData = await res.data;
    setbrand(brandData);
  };
  useEffect(() => {
    getDealZone();
  }, []);
  return (
    <div style={{ backgroundColor: "black" }}>
      <div className="brand-offers-container">
        <div data-v-c6f91d1e>
          <div
            data-v-c6f91d1e
            className="head-container"
            style={{ display: "flex", alignItems: "center" }}
          >
            <hr
              style={{
                width: "50%",
                height: "1px",
                backgroundColor: "white",
                color: "white",
              }}
            />
            <h6
              style={{
                margin: "10px 15px",
                color: "white",
                textAlign: "center",
                fontSize: "18px",
                fontWeight: "600",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              TOP BRANDS
            </h6>
            <hr
              style={{
                width: "50%",
                height: "1px",
                backgroundColor: "white",
                color: "white",
              }}
            />
          </div>

          <div data-v-c6f91d1e class="offer-product">
            {brand &&
              brand.map((val, i) => {
                return (
                  <>
                    <a data-v-c6f91d1e href="#" className="offer-card" key={i}>
                      <div className="seller-image">
                        <img data className="seller-image" src={val.url} />
                      </div>
                      <h6>{/* {val.title} */}</h6>
                    </a>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopBrands;
