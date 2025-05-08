import Heading from "../../ui/Heading";

import "swiper/css";
import "swiper/css/navigation";
import Image from "../../ui/Image";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";

const OurBrands = () => {
    return (
        <div className="bg-primary py-8">
            <div className="container space-y-6">
                <div className="flex justify-between items-center">
                    <Heading className="font-medium text-white">
                        Our Main Brands
                    </Heading>
                    <Link to="/brands">
                        <Button className="bg-white transition-colors duration-300 hover:bg-accent hover:text-white">
                            See More
                        </Button>
                    </Link>
                </div>
                <div className="bg-white rounded-md px-8 py-4">
                    <div className="flex flex-wrap -mx-3">
                        {Array(5)
                            .fill(0)
                            .map((item, idx) => (
                                <Link
                                    to={`/brands/${idx}`}
                                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-3"
                                    key={idx}
                                >
                                    <Image
                                        src="https://dummyjson.com/image/300x200"
                                        alt={idx}
                                        className="rounded-md w-full h-full transition-transform duration-300 hover:scale-105"
                                    />
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurBrands;
