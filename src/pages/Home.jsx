import Banner from "../components/container/home/Banner";
import LatestProducts from "../components/container/home/LatestProducts";
import TopCategories from "../components/container/home/TopCategories";

const Home = () => {
    return (
        <div className="">
            <Banner />
            <TopCategories />
            <LatestProducts />
        </div>
    );
};

export default Home;
