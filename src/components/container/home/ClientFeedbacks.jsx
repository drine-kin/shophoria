import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import feedbacks from "../../../constants/feedbacks";
import Image from "../../ui/Image";
import Heading from "../../ui/Heading";
import Paragraph from "../../ui/Paragraph";

const ClientFeedbacks = () => {
    return (
        <div className="bg-surface">
            <div className="container md:px-16 py-8 space-y-8">
                <Heading className="font-medium text-center pt-4">
                    What our clients say about us
                </Heading>
                <div className="relative">
                    <Swiper
                        slidesPerView={1}
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".next-feedbacks",
                            prevEl: ".prev-feedbacks",
                        }}
                        loop
                    >
                        {feedbacks.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="md:w-[65%] m-auto bg-secondary px-6 lg:px-16 py-8 rounded-md">
                                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 justify-between items-center">
                                        <div className="w-56 aspect-square flex-none">
                                            <Image 
                                                src={item.src}
                                                alt={item.title}
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-6">
                                            <div className="space-y-2 text-left">
                                                <Heading
                                                    as="h2"
                                                    className="text-accent font-bold text-xl"
                                                >
                                                    {item.title}
                                                </Heading>
                                                <Paragraph className="text-accent text-base">
                                                    {item.description}
                                                </Paragraph>
                                            </div>
                                            <div className="space-y-2 text-left">
                                                <Heading
                                                    as="h2"
                                                    className="text-accent text-lg"
                                                >
                                                    {item.name}
                                                </Heading>
                                                <Paragraph className="text-accent">
                                                    {item.position}
                                                </Paragraph>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-arrow swiper-arrow-next next-feedbacks bg-primary !-right-3 md:!right-10 hover:bg-default-100/70 transition-colors delay-50 rounded-md">
                        <Image
                            src="/svg/chevron-right.svg"
                            alt="Slider Right Arrow"
                            className="w-[30px] h-[30px]"
                        />
                    </div>
                    <div className="swiper-arrow swiper-arrow-prev prev-feedbacks bg-primary !-left-3 md:!left-10 hover:bg-default-100/70 transition-colors delay-50 rounded-md">
                        <Image
                            src="/svg/chevron-left.svg"
                            alt="Slider Left Arrow"
                            className="w-[30px] h-[30px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientFeedbacks;
