import AboutIntro from "../components/container/home/AboutIntro";
import Banner from "../components/container/home/Banner";
import ClientFeedbacks from "../components/container/home/ClientFeedbacks";
import LatestProducts from "../components/container/home/LatestProducts";
import OurBrands from "../components/container/home/OurBrands";
import TopCategories from "../components/container/home/TopCategories";

const Home = () => {
    return (
        <div className="">
            <Banner />
            {/* <TopCategories /> */}
            <AboutIntro btnLabel="More About Us" goToLink="/about"/>
            <LatestProducts />
            <ClientFeedbacks />
            <OurBrands />
        </div>
    );
};

export default Home;
