import Breadcrumbs from "../components/ui/Breadcrumbs";
import AboutIntro from "../components/container/home/AboutIntro";
import Paragraph from "../components/ui/Paragraph";

const About = () => {
    return (
        <>
            <Breadcrumbs />
            <AboutIntro btnLabel="Go Shopping" goToLink="/shop" />

            <div className="bg-white">
                <div className="container py-12">
                    <div className="w-[1000px] max-w-full mx-auto">
                        <Paragraph className="leading-relaxed">
                            At Shophoria, we go beyond being just an ecommerce
                            site — we are a community built on trust,
                            convenience, and a love for great products. From the
                            moment you land on our site to the time your package
                            arrives at your doorstep, we strive to provide a
                            shopping experience that’s smooth, fast, and
                            worry-free. Our curated selections, regular
                            promotions, and secure payment options are all
                            designed to make your life easier.
                        </Paragraph>
                        <br />
                        <Paragraph className="leading-relaxed">
                            We believe online shopping should be as personal as
                            it is practical. That’s why our customer support
                            team is always just a click away — ready to help
                            with anything you need. Whether you're shopping for
                            essentials or treating yourself to something
                            special, Shophoria is here to deliver quality you
                            can count on.
                        </Paragraph>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
