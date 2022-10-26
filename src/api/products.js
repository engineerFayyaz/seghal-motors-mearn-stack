import axios from "../../utils/axios";

let productApi = {
  getBestSelling: () => {
    return axios({
      url: "/getbestselling",
      method: "get",
    });
  },
  banner: () => {
    return axios({
      url: "/banners",
      method: "get",
    });
  },
  latestproduct: () => {
    return axios({
      url: "/getlatestproducts",
      method: "get",
    });
  },
  getnavbar: () => {
    return axios({
      url: "/categories",
      method: "get",
    });
  },
};

export default productApi;
