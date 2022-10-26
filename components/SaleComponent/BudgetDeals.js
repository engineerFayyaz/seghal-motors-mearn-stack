import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const BudgetDeals = () => {
  const [budget, setbudget] = useState([]);
  const getBudgetData = async () => {
    const url = "http://localhost:8000/BudgetDeals";
    const res = await axios.get(url);
    const brandData = await res.data;
    setbudget(brandData);
  };
  useEffect(() => {
    getBudgetData();
  }, []);
  return (
    <div style={{ backgroundColor: "black" }}>
      <div data-v-2d12b412 className="widget-best-seller">
        <div
          data-v-2d12b412
          classNameName="head-container"
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
            BUDGET DEALS
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
      </div>
      <div
        className="best-seller-product container "
        style={{ display: "flex" }}
      >
        {budget &&
          budget.map((val, i) => {
            return (
              <>
                <a data-v-c6f91d1e href="#" classNameName="offer-card" key={i}>
                  <div data-v-c6f91d1e classNameName="seller-image">
                    <img data-v-c6f91d1e src={val.url} />
                  </div>
                  <h6>{/* {val.title} */}</h6>
                </a>
              </>
            );
          })}
      </div>
    </div>
  );
};
export default BudgetDeals;
