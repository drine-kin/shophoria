import React from "react";
import { Link } from "react-router-dom";
import navLinks from "../../constants/navLinks";
import contactInfo from "../../constants/contactInfo";
import socialLinks from "../../constants/socialLinks";

const Footer = () => {
    return (
        <footer className="bg-accent text-white py-8">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Shophoria</h3>
                        <p className="font-light">
                            Shophoria is your one-stop online destination for
                            quality products, trusted brands, and a seamless
                            shopping experience.
                        </p>
                    </div>
                    <div className="flex flex-col md:items-center">
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Menu</h4>
                            <ul className="space-y-2">
                                {navLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            to={link.href}
                                            className="font-light transition-colors duration-400 hover:text-primary"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            {contactInfo.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        key={item.label}
                                        to={item.href}
                                        className="flex gap-2 items-center text-white transition-colors duration-400 hover:text-primary"
                                    >
                                        <p
                                            className={`w-6 h-6 flex justify-center items-center text-secondary`}
                                        >
                                            {<item.icon size={24} />}
                                        </p>
                                        <p className="font-light">
                                            {item.label}
                                        </p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-8 py-6 border-t-[0.5px] border-neutral-800">
                <div className="container flex justify-between items-center">
                    <p className="font-light">
                        © {new Date().getFullYear()} Shophoria. All rights
                        reserved.
                    </p>
                    <ul className="flex justify-between items-center gap-4">
                        {socialLinks.map((item) => (
                            <li
                                key={item.href}
                                className="text-white bg-white/20 p-2 rounded-full cursor-pointer transition-transform duration-400 hover:scale-110"
                            >
                                <span
                                    className={`w-4 h-4 flex justify-center items-center`}
                                >
                                    {<item.icon size={16} />}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
