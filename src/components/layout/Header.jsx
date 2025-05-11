import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import {
    HiChevronDown,
    HiChevronRight,
    HiChevronUp,
    HiMenuAlt1,
    HiX,
} from "react-icons/hi";
import { IoIosClose } from "react-icons/io";

import navLinks from "../../constants/navLinks";
import Heading from "../ui/Heading";
import useCartStore from "../../store/cartStore";
import useAuthStore from "../../store/authStore";
import Paragraph from "../ui/Paragraph";
import { useCategories, useSubcategories } from "../../hooks/queries";

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [hoveredCategoryId, setHoveredCategoryId] = useState(null);
    const [showMobileCatMenu, setMobileCatMenu] = useState(false);
    const [expandedCategoryId, setExpandedCategoryId] = useState(null);
    const hideTimeoutRef = useRef(null);
    const userMenuRef = useRef(null);
    const categoryRef = useRef(null);
    const navigate = useNavigate();
    const { user } = useAuthStore();
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    const logout = useAuthStore((state) => state.logout);
    const itemsCount = useCartStore((state) => state.items.length);

    const { data: categories } = useCategories();
    const { data: subcategories } = useSubcategories();

    const categoriesWithSubs =
        categories && subcategories
            ? categories.map((cat) => ({
                  ...cat,
                  subcategories: subcategories.filter(
                      (sub) => sub.category_id === cat.id
                  ),
              }))
            : [];

    useEffect(() => {
        if (showMobileMenu) {
            document.body.classList.add("overflow-y-hidden");
        } else {
            document.body.classList.remove("overflow-y-hidden");
        }
    }, [showMobileMenu]);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    const handleUserMenuToggle = () => {
        setShowUserMenu((prev) => !prev);
    };

    const handleLogout = () => {
        setShowMobileMenu(false);
        logout();
        navigate("/");
    };

    const handleCatMenu = () => {
        setShowCatMenu((prev) => !prev);
    };

    const handleMobileCatMenu = () => {
        setMobileCatMenu((prev) => !prev);
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

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                categoryRef.current &&
                !categoryRef.current.contains(event.target)
            ) {
                setShowCatMenu(false);
                setHoveredCategoryId(false);
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
                            The TRIO Tails
                        </Heading>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        <ul className="flex gap-8 justify-between items-center text-white">
                            {navLinks.map((item) => (
                                <li key={item.label} className="relative">
                                    {item.hasChildren ? (
                                        <button
                                            onClick={handleCatMenu}
                                            className="text-lg font-light text-white hover:text-secondary transition-colors duration-200"
                                        >
                                            <div className="flex items-center gap-1">
                                                {item.label}
                                                {showCatMenu ? (
                                                    <HiChevronUp />
                                                ) : (
                                                    <HiChevronDown />
                                                )}
                                            </div>
                                        </button>
                                    ) : (
                                        <NavLink
                                            to={item.href}
                                            end={item.href === "/"}
                                            className={`text-lg font-light hover:text-secondary transition-colors duration-200 `}
                                        >
                                            {item.label}
                                        </NavLink>
                                    )}
                                    {item.hasChildren && showCatMenu ? (
                                        <div
                                            className="overflow-scroll h-[90vh] w-[28rem] absolute top-full left-0 mt-3 z-50 transform"
                                            style={{ scrollbarWidth: "none" }}
                                        >
                                            <div
                                                className="bg-white rounded-lg w-48 shadow-lg p-1 py-2 z-50 transition-all duration-300 ease-in-out transform"
                                                ref={categoryRef}
                                            >
                                                {categoriesWithSubs.length >
                                                0 ? (
                                                    <>
                                                        {categoriesWithSubs.map(
                                                            (cat) => (
                                                                <div
                                                                    key={cat.id}
                                                                    className="relative"
                                                                    onMouseEnter={() => {
                                                                        if (
                                                                            hideTimeoutRef.current
                                                                        )
                                                                            clearTimeout(
                                                                                hideTimeoutRef.current
                                                                            );
                                                                        setHoveredCategoryId(
                                                                            cat.id
                                                                        );
                                                                    }}
                                                                    onMouseLeave={() => {
                                                                        hideTimeoutRef.current =
                                                                            setTimeout(
                                                                                () => {
                                                                                    setHoveredCategoryId(
                                                                                        null
                                                                                    );
                                                                                },
                                                                                300
                                                                            );
                                                                    }}
                                                                >
                                                                    <div className="w-full flex justify-between items-center px-4 py-2 space-y-1 rounded-md text-accent hover:bg-primary hover:text-white">
                                                                        <Paragraph className="font-medium text-sm text-inherit">
                                                                            {
                                                                                cat.name
                                                                            }
                                                                        </Paragraph>
                                                                        <div className="w-5 h-5">
                                                                            {cat
                                                                                .subcategories
                                                                                .length >
                                                                            0 ? (
                                                                                <HiChevronRight
                                                                                    size={
                                                                                        20
                                                                                    }
                                                                                />
                                                                            ) : null}
                                                                        </div>
                                                                    </div>

                                                                    {cat
                                                                        .subcategories
                                                                        .length >
                                                                        0 &&
                                                                        hoveredCategoryId ===
                                                                            cat.id && (
                                                                            <ul className="absolute left-full top-0 p-1 ml-2 w-52 bg-white rounded-md shadow-lg py-2 z-50 transition-all duration-300 ease-in-out transform">
                                                                                {cat.subcategories.map(
                                                                                    (
                                                                                        sub
                                                                                    ) => (
                                                                                        <Link
                                                                                            key={
                                                                                                sub.id
                                                                                            }
                                                                                            to={`/shop?category_id=${cat.id}&subcategory_id=${sub.id}&subcategory_name=${sub.name}`}
                                                                                            className="block px-4 py-2.5 text-sm text-accent hover:bg-primary hover:text-white rounded-md cursor-pointer"
                                                                                            onClick={() => {
                                                                                                setShowCatMenu(
                                                                                                    false
                                                                                                );
                                                                                                setHoveredCategoryId(
                                                                                                    false
                                                                                                );
                                                                                            }}
                                                                                        >
                                                                                            <Paragraph className="font-medium text-sm text-inherit">
                                                                                                {
                                                                                                    sub.name
                                                                                                }
                                                                                            </Paragraph>
                                                                                        </Link>
                                                                                    )
                                                                                )}
                                                                            </ul>
                                                                        )}
                                                                </div>
                                                            )
                                                        )}
                                                    </>
                                                ) : (
                                                    <Paragraph>
                                                        Failed to load
                                                        Categories
                                                    </Paragraph>
                                                )}
                                            </div>
                                        </div>
                                    ) : null}
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
                                            onClick={() =>
                                                setShowUserMenu(false)
                                            }
                                            className={({ isActive }) =>
                                                `block px-4 py-2 rounded-md hover:bg-primary hover:text-white transition-colors duration-200 ${
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
                                            className={`w-full text-left px-4 py-2 rounded-md hover:bg-primary hover:text-white transition-colors duration-200`}
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
                        {showMobileMenu ? (
                            <IoIosClose size={24} />
                        ) : (
                            <HiMenuAlt1 size={24} />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`fixed lg:hidden top-0 left-0 w-full h-screen overflow-y-auto bg-primary transition-all duration-300 ease-in-out transform ${
                        showMobileMenu ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <div className="container py-4">
                        <div className="flex justify-between items-center mb-6">
                            <Heading as="h2" className="text-white font-light">
                                The TRIO Tails
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
                                    {item.hasChildren ? (
                                        <div
                                            className="flex items-center gap-2"
                                            onClick={handleMobileCatMenu}
                                        >
                                            <Paragraph className="text-white">
                                                {item.label}
                                            </Paragraph>
                                            {showMobileCatMenu ? (
                                                <HiChevronUp size={18} />
                                            ) : (
                                                <HiChevronDown size={18} />
                                            )}
                                        </div>
                                    ) : (
                                        <NavLink
                                            to={item.href}
                                            className={({ isActive }) =>
                                                `font-light text-base py-2 duration-200 ${
                                                    isActive
                                                        ? "text-secondary"
                                                        : "text-white"
                                                }`
                                            }
                                            onClick={() =>
                                                setShowMobileMenu(false)
                                            }
                                        >
                                            {item.label}
                                        </NavLink>
                                    )}
                                    {item.hasChildren && showMobileCatMenu ? (
                                        <div className="pt-2">
                                            {categoriesWithSubs.length > 0 ? (
                                                <ul className="flex flex-col space-y-1">
                                                    {categoriesWithSubs.map(
                                                        (cat) => (
                                                            <li key={cat.id}>
                                                                <div
                                                                    className="w-full text-left text-sm font-light text-white px-2 py-1 rounded-md"
                                                                    onClick={() => {
                                                                        if (
                                                                            hideTimeoutRef.current
                                                                        )
                                                                            clearTimeout(
                                                                                hideTimeoutRef.current
                                                                            );
                                                                        setExpandedCategoryId(
                                                                            cat.id
                                                                        );
                                                                    }}
                                                                >
                                                                    <div className="flex justify-between items-center">
                                                                        <Paragraph className="text-sm text-inherit">
                                                                            {
                                                                                cat.name
                                                                            }
                                                                        </Paragraph>
                                                                        <div className="w-5 h-5">
                                                                            {cat
                                                                                .subcategories
                                                                                .length >
                                                                            0 ? (
                                                                                <>
                                                                                    {expandedCategoryId ===
                                                                                    cat.id ? (
                                                                                        <HiChevronUp
                                                                                            size={
                                                                                                20
                                                                                            }
                                                                                        />
                                                                                    ) : (
                                                                                        <HiChevronDown
                                                                                            size={
                                                                                                20
                                                                                            }
                                                                                        />
                                                                                    )}
                                                                                </>
                                                                            ) : null}
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {expandedCategoryId ===
                                                                    cat.id &&
                                                                    cat
                                                                        .subcategories
                                                                        .length >
                                                                        0 && (
                                                                        <ul className="ml-4 mt-1 space-y-1">
                                                                            {cat.subcategories.map(
                                                                                (
                                                                                    sub
                                                                                ) => (
                                                                                    <li
                                                                                        key={
                                                                                            sub.id
                                                                                        }
                                                                                    >
                                                                                        <Link
                                                                                            to={`/shop?category_id=${cat.id}&subcategory_id=${sub.id}&subcategory_name=${sub.name}`}
                                                                                            className="block font-light text-sm text-white px-2 py-1 rounded-md hover:bg-primary"
                                                                                            onClick={() =>
                                                                                                setShowMobileMenu(
                                                                                                    false
                                                                                                )
                                                                                            }
                                                                                        >
                                                                                            {
                                                                                                sub.name
                                                                                            }
                                                                                        </Link>
                                                                                    </li>
                                                                                )
                                                                            )}
                                                                        </ul>
                                                                    )}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            ) : (
                                                <Paragraph className="text-sm text-white">
                                                    No record found
                                                </Paragraph>
                                            )}
                                        </div>
                                    ) : null}
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center gap-6 mt-6">
                            <div
                                className="relative text-white cursor-pointer transition-transform duration-300 hover:text-secondary"
                                onClick={() => {
                                    navigate("/cart");
                                    setShowMobileMenu(false);
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
                                        onClick={() => setShowMobileMenu(false)}
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
                                    onClick={() => setShowMobileMenu(false)}
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
