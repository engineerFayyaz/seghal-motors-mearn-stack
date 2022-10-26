import Banner from "../components/Banner";
import TopCategories from "../components/TopCategories";
import Exclusive from "../components/Exclusive";
import BestSeller from "../components/BestSeller";
import BestInBeauty from "../components/BestInBeauty";
import DealZone from "../components/DealZone";
import TopBrands from "../components/TopBrands";
import TopTrend from "../components/TopTrend";
// import CarFilterModal from "../components/carFilters";
const axios = require("axios").default;

const Home = ({ banner, getMakers }) => {
  return (
    <>
      <div id="__nuxt">
        <div id="__layout">
          <div>
            <Banner banner={banner} />
            <TopCategories />
            <Exclusive />
            <BestSeller />
            <BestInBeauty />
            <DealZone />
            <TopBrands />
            <TopTrend />
            {/* <CarFilterModal /> */}
          </div>
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps() {
  let res = await axios.get(`${process.env.NEXT_PUBLIC_API}/banners`);
  let res1 = await axios.get(`${process.env.NEXT_PUBLIC_API}/getMakers`);

  return { props: { banner: res.data, getMakers: res1.data } };
}
export default Home;
