import Banner from "../components/container/home/Banner";
import LatestProducts from "../components/container/home/LatestProducts";
import TopCategories from "../components/container/home/TopCategories";
import useCartStore from "../store/cartStore";

const Home = () => {
    const items = useCartStore((state) => state.items);
    console.log("items", items);
    return (
        <div className="">
            <Banner />
            <TopCategories />
            <LatestProducts />
        </div>
    );
};

export default Home;
