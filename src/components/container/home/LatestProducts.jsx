import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import products from "../../../constants/products";
import Heading from "../../ui/Heading";
import ProductPreview from "../../ui/ProductPreview";
import Paragraph from "../../ui/Paragraph";
import Image from "../../ui/Image";

import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";

const LatestProducts = () => {
    return (
        <div className="bg-secondary">
            <div className="container relative px-10 lg:px-16 py-8 space-y-4">
                <div className="flex justify-between items-center">
                    <Heading className="!font-medium">Our Products</Heading>
                    <Link to="/shop">
                        <Button className="bg-white transition-colors duration-300 hover:bg-primary hover:text-white">
                            See More
                        </Button>
                    </Link>
                </div>

                {products?.length > 0 ? (
                    <div>
                        <Swiper
                            slidesPerView={6}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                640: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                                1280: {
                                    slidesPerView: 4,
                                },
                            }}
                            spaceBetween={20}
                            modules={[Navigation]}
                            navigation={{
                                nextEl: ".next-products",
                                prevEl: ".prev-products",
                            }}
                            loop
                            className="my-8"
                        >
                            {products.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <ProductPreview key={item.id} item={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="swiper-arrow swiper-arrow-next next-products bg-primary !right-1 lg:!right-5 hover:bg-default-100/70 transition-colors delay-50 rounded-md">
                            <Image
                                src="/svg/chevron-right.svg"
                                alt="Slider Right Arrow"
                                className="w-[30px] h-[30px]"
                            />
                        </div>
                        <div className="swiper-arrow swiper-arrow-prev prev-products bg-primary !left-1 lg:!left-5 hover:bg-default-100/70 transition-colors delay-50 rounded-md">
                            <Image
                                src="/svg/chevron-left.svg"
                                alt="Slider Left Arrow"
                                className="w-[30px] h-[30px]"
                            />
                        </div>
                    </div>
                ) : (
                    <Paragraph>No record found.</Paragraph>
                )}
            </div>
        </div>
    );
};

export default LatestProducts;
