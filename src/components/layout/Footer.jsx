import { Link } from "react-router-dom";
import navLinks from "../../constants/navLinks";
import contactInfo from "../../constants/contactInfo";
import socialLinks from "../../constants/socialLinks";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";

const IconLabelContainer = ({ item }) => {
    return (
        <li key={item.label}>
            <Link
                key={item.label}
                to={item.href}
                className="flex gap-2 items-center "
            >
                <Paragraph
                    className={`w-6 h-6 flex justify-center items-center text-secondary`}
                >
                    {<item.icon size={24} />}
                </Paragraph>
                <Paragraph className="font-light break-all text-white transition-colors duration-300 hover:text-primary">
                    {item.label}
                </Paragraph>
            </Link>
        </li>
    );
};

const Footer = () => {
    return (
        <footer className="bg-accent text-white py-8">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <Heading as="h3" className="text-xl font-bold mb-4">
                            Shophoria
                        </Heading>
                        <Paragraph className="font-light text-white ">
                            Shophoria is your one-stop online destination for
                            quality products, trusted brands, and a seamless
                            shopping experience.
                        </Paragraph>
                    </div>
                    <div className="flex flex-col md:items-center">
                        <div>
                            <Heading
                                as="h4"
                                className="text-lg font-semibold mb-4"
                            >
                                Menu
                            </Heading>
                            <ul className="space-y-2">
                                {navLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            to={link.href}
                                            className="font-light text-white transition-colors duration-300 hover:text-primary"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <Heading as="h4" className="text-lg font-semibold mb-4">
                            Contact Us
                        </Heading>
                        <ul className="space-y-4">
                            <IconLabelContainer item={contactInfo.address}/>
                            <IconLabelContainer item={contactInfo.email}/>
                            <IconLabelContainer item={contactInfo.phone}/>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-8 pt-6 pb-3 border-t-[0.5px] border-neutral-800">
                <div className="container flex flex-col md:flex-row justify-between items-center space-y-4 ">
                    <Paragraph className="font-light text-white">
                        © {new Date().getFullYear()} Shophoria. All rights
                        reserved.
                    </Paragraph>
                    <div className="flex flex-wrap justify-between items-center gap-4">
                        {socialLinks.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className="text-white bg-white/20 p-2 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110"
                            >
                                <span
                                    className={`w-4 h-4 flex justify-center items-center`}
                                >
                                    {<item.icon size={16} />}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
