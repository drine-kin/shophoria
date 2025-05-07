import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import products from "../../../constants/products";
import Heading from "../../ui/Heading";
import ProductPreview from "../../ui/ProductPreview";

import "swiper/css";
import "swiper/css/navigation";
import Paragraph from "../../ui/Paragraph";
import Image from "../../ui/Image";

const LatestProducts = () => {
    return (
        <div className="bg-secondary">
            <div className="container relative px-16 py-8 space-y-4">
                <Heading className="font-medium">Latest Products</Heading>
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
                                nextEl: ".swiper-arrow-next",
                                prevEl: ".swiper-arrow-prev",
                            }}
                            loop
                            className="my-10"
                        >
                            {products.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <ProductPreview key={item.id} item={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="swiper-arrow swiper-arrow-next bg-primary lg:right-5 hover:bg-default-100/70 transition-colors delay-50 rounded-md">
                            <Image
                                src="/svg/chevron-right.svg"
                                alt="Slider Right Arrow"
                                className="w-[30px] h-[30px]"
                            />
                        </div>
                        <div className="swiper-arrow swiper-arrow-prev bg-primary lg:left-5 hover:bg-default-100/70 transition-colors delay-50 rounded-md">
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
