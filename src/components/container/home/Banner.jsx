import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Image from "../../ui/Image";

const Banner = () => {
    return (
        <div className="bg-primary">
            <div className="container py-20 md:py-8">
                <div className="flex flex-wrap justify-between items-center space-y-6">
                    <div className="w-full md:w-1/2 space-y-6">
                        <Heading className="text-3xl text-white font-normal">
                            Discover top brands, exclusive deals, and everything
                            you need — all in one place.
                        </Heading>
                        <Link to="/shop" className="block">
                            <Button className="bg-white text-accent transition-colors duration-300 hover:bg-accent hover:text-white">Shop Now</Button>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2 hidden md:flex justify-center">
                        <Image 
                            src="/images/banner.png"
                            alt="Banner Image"
                            className="w-auto h-auto md:h-[400px] max-h-[400px] md:-mb-8"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
