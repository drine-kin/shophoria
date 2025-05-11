import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";

import navLinks from "../../constants/navLinks";
import Heading from "../ui/Heading";
import useCartStore from "../../store/cartStore";
import useAuthStore from "../../store/authStore";
import Paragraph from "../ui/Paragraph";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const userMenuRef = useRef(null);
    const navigate = useNavigate();
    const { user } = useAuthStore();
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    const logout = useAuthStore((state) => state.logout);
    const itemsCount = useCartStore((state) => state.items.length);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add("overflow-y-hidden");
        } else {
            document.body.classList.remove("overflow-y-hidden");
        }
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleUserMenuToggle = () => {
        setShowUserMenu((prev) => !prev);
    };

    const handleLogout = () => {
        setIsMobileMenuOpen(false)
        logout();
        navigate("/");
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                userMenuRef.current &&
                !userMenuRef.current.contains(event.target)
            ) {
                setShowUserMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-primary py-6 sticky top-0 z-50">
            <div className="container">
                <div className="flex justify-between items-center">
                    <Link to="/">
                        <Heading as="h2" className="text-white font-light">
                            SHOPHORIA
                        </Heading>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        <ul className="flex gap-8 justify-between items-center text-white">
                            {navLinks.map((item) => (
                                <li key={item.label} className="relative">
                                    <NavLink
                                        to={item.href}
                                        end={item.href === "/"}
                                        className={({ isActive }) =>
                                            `text-lg font-light hover:text-secondary transition-colors duration-200 ${
                                                isActive
                                                    ? "text-secondary"
                                                    : "text-white"
                                            }`
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <div
                            className="flex items-center gap-6 relative"
                            ref={userMenuRef}
                        >
                            <div
                                className="relative text-white cursor-pointer transition-transform duration-300 hover:text-secondary"
                                onClick={() => navigate("/cart")}
                            >
                                <BsHandbag size={20} />
                                <span className="absolute -top-1.5  -right-1.5 text-xs text-white bg-secondary w-3.5 h-4 p-[0.2px] rounded-full flex justify-center items-center">
                                    {itemsCount}
                                </span>
                            </div>
                            {isLoggedIn ? (
                                <>
                                    <div
                                        className="w-9 h-9 rounded-full text-white border flex items-center justify-center cursor-pointer"
                                        onClick={handleUserMenuToggle}
                                    >
                                        <Paragraph className="text-white">
                                            {user?.name
                                                ?.split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </Paragraph>
                                    </div>
                                    <div
                                        className={`absolute top-full right-0 mt-3 p-1 w-32 bg-white rounded-lg shadow-lg py-2 z-50 transition-all duration-300 ease-in-out transform ${
                                            showUserMenu
                                                ? "opacity-100 translate-y-0"
                                                : "opacity-0 -translate-y-2 pointer-events-none"
                                        }`}
                                    >
                                        <NavLink
                                            to="/orders"
                                            onClick={() => setShowUserMenu(false)}
                                            className={({ isActive }) =>
                                                `block px-4 py-2 hover:bg-primary hover:text-white transition-colors duration-200 ${
                                                    isActive
                                                        ? "bg-primary text-white"
                                                        : "text-gray-800"
                                                }`
                                            }
                                        >
                                            Orders
                                        </NavLink>
                                        <button
                                            onClick={handleLogout}
                                            className={`w-full text-left px-4 py-2 hover:bg-primary hover:text-white transition-colors duration-200`}
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                        `cursor-pointer hover:text-secondary transition-colors ${
                                            isActive
                                                ? "text-secondary"
                                                : "text-white"
                                        }`
                                    }
                                >
                                    <GoPerson size={20} />
                                </NavLink>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white font-light hover:text-primary focus:outline-none transition-colors duration-200"
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? (
                            <IoIosClose size={24} />
                        ) : (
                            <HiMenuAlt1 size={24} />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`fixed lg:hidden top-0 left-0 w-full h-screen bg-primary transition-all duration-300 ease-in-out transform ${
                        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <div className="container py-4">
                        <div className="flex justify-between items-center mb-6">
                            <Heading as="h2" className="text-white font-light">
                                SHOPHORIA
                            </Heading>
                            <button
                                className="text-white hover:text-primary focus:outline-none transition-colors duration-200"
                                onClick={toggleMobileMenu}
                            >
                                <HiX size={24} />
                            </button>
                        </div>
                        <ul className="flex flex-col text-white space-y-2">
                            {navLinks.map((item) => (
                                <li key={item.label}>
                                    <NavLink
                                        to={item.href}
                                        className={({ isActive }) =>
                                            `font-light text-base py-2 hover:text-primary transition-colors duration-200 ${
                                                isActive
                                                    ? "text-secondary"
                                                    : "text-white"
                                            }`
                                        }
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center gap-6 mt-6">
                            <div
                                className="relative text-white cursor-pointer transition-transform duration-300 hover:text-secondary"
                                onClick={() => {
                                    navigate("/cart");
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                <BsHandbag size={20} />
                                <span className="absolute -top-1.5  -right-1.5 text-xs text-white bg-secondary w-3.5 h-4 p-[0.2px] rounded-full flex justify-center items-center">
                                    {itemsCount}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col pt-2">
                            {isLoggedIn ? (
                                <>
                                    <NavLink
                                        to="/orders"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `font-light text-base py-1 ${
                                                isActive
                                                    ? "text-secondary"
                                                    : "text-white"
                                            }`
                                        }
                                    >
                                        Orders
                                    </NavLink>
                                    <div
                                        onClick={handleLogout}
                                        className="text-white font-light text-base py-1"
                                    >
                                        Logout
                                    </div>
                                </>
                            ) : (
                                <NavLink
                                    to="/login"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `pt-2 cursor-pointer hover:text-secondary transition-colors ${
                                            isActive
                                                ? "text-secondary"
                                                : "text-white"
                                        }`
                                    }
                                >
                                    <GoPerson size={20} />
                                </NavLink>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
