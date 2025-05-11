import AboutIntro from "../components/container/home/AboutIntro";
import Banner from "../components/container/home/Banner";
import OurProducts from "../components/container/home/OurProducts";
import ClientFeedbacks from "../components/container/home/ClientFeedbacks";
import OurBrands from "../components/container/home/OurBrands";

const Home = () => {
    return (
        <div className="">
            <Banner />
            <AboutIntro btnLabel="More About Us" goToLink="/about"/>
            <OurProducts />
            <ClientFeedbacks />
            <OurBrands />
        </div>
    );
};

export default Home;
