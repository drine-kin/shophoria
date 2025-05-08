import { Link } from "react-router-dom";
import { IoMdCheckbox } from "react-icons/io";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import Image from "../../ui/Image";
import Paragraph from "../../ui/Paragraph";

const IconContainer = ({ label }) => {
    return (
        <div className="flex items-center gap-3">
            <IoMdCheckbox size={20} className="text-primary" />
            <Paragraph>{label}</Paragraph>
        </div>
    );
};

const AboutIntro = ({ btnLabel, goToLink }) => {
    return (
        <div className="bg-surface">
            <div className="container py-16">
                <div className="flex flex-col md:flex-row md:gap-5 justify-between lg:items-center space-y-6">
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/images/about-us.jpg"
                            alt="Banner Image"
                            className="object-cover w-auto h-full rounded-md xl:h-[360px] md:m-auto"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col space-y-6">
                            <Heading className="text-3xl text-accent font-normal">
                                About Us
                            </Heading>
                            <Paragraph>
                                Discover a smarter way to shop at Shophoria,
                                where quality meets affordability. We bring
                                top-rated products to your doorstep with ease
                                and care.
                            </Paragraph>

                            <div className="space-y-3">
                                <IconContainer label="High-quality items across all categories" />
                                <IconContainer label="Fast & reliable shipping nationwide" />
                                <IconContainer label="Friendly support, always ready to help" />
                            </div>
                            <Link to={goToLink} className="pt-2">
                                <Button className="bg-primary text-white transition-colors duration-300 hover:bg-primary/80">
                                    {btnLabel}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutIntro;
