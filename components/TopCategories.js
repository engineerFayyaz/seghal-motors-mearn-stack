import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const TopCategories = () => {
  const topCategoryApi = "http://localhost:8000/topcategory";
  const [top, setTop] = useState([]);

  const getTopCategoryApi = async (url) => {
    const res = await axios.get(url);
    const topCategrydata = res.data;
    setTop(topCategrydata);
  };
  useEffect(() => {
    getTopCategoryApi(topCategoryApi);
  }, []);

  return (
    <>
      <div className="home-content">
        <div>
          <div className="home_top_category">
            <div className="head-container">
              <h6>TOP CATEGORY</h6>
            </div>
            <div className="best-seller-product">
              {top &&
                top.map((val, i) => {
                  return (
                    <>
                      <a href="/collections" className="seller-card" key={i}>
                        <div className="seller-image">
                          <img src={val.img} />
                        </div>
                        <h6>{val.title}</h6>
                      </a>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TopCategories;
