import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { HiMenuAlt1, HiX, HiChevronDown, HiChevronUp } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";

import navLinks from "../../constants/navLinks";
import brands from "../../constants/brands";
import categories from "../../constants/categories";
import Heading from "../ui/Heading";
import useCartStore from "../../store/cartStore";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isBrandsOpen, setIsBrandsOpen] = useState(false);
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
    // const [brandsTimeoutId, setBrandsTimeoutId] = useState(null);
    const [categoriesTimeoutId, setCategoriesTimeoutId] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const itemsCount = useCartStore((state) => state.items.length);

    // const isBrandsActive = brands.some((brand) =>
    //     location.pathname.startsWith(brand.link)
    // );

    const isCategoriesActive = categories.some((category) =>
        location.pathname.startsWith(category.link)
    );

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

    // const handleBrandsMouseEnter = () => {
    //     if (brandsTimeoutId) {
    //         clearTimeout(brandsTimeoutId);
    //     }
    //     if (categoriesTimeoutId) {
    //         clearTimeout(categoriesTimeoutId);
    //         setIsCategoriesOpen(false);
    //     }
    //     setIsBrandsOpen(true);
    // };

    // const handleBrandsMouseLeave = () => {
    //     const id = setTimeout(() => {
    //         setIsBrandsOpen(false);
    //     }, 300);
    //     setBrandsTimeoutId(id);
    // };

    const handleCategoriesMouseEnter = () => {
        if (categoriesTimeoutId) {
            clearTimeout(categoriesTimeoutId);
        }
        // if (brandsTimeoutId) {
        //     clearTimeout(brandsTimeoutId);
        //     setIsBrandsOpen(false);
        // }
        setIsCategoriesOpen(true);
    };

    const handleCategoriesMouseLeave = () => {
        const id = setTimeout(() => {
            setIsCategoriesOpen(false);
        }, 300);
        setCategoriesTimeoutId(id);
    };

    // const toggleBrands = () => {
    //     setIsBrandsOpen(!isBrandsOpen);
    //     if (isCategoriesOpen) {
    //         setIsCategoriesOpen(false);
    //     }
    // };

    const toggleCategories = () => {
        setIsCategoriesOpen(!isCategoriesOpen);
        if (isBrandsOpen) {
            setIsBrandsOpen(false);
        }
    };

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
                                    {/* {item.label === "Brands" ? (
                                        <div
                                            className={`font-light cursor-pointer ${
                                                isBrandsOpen || isBrandsActive
                                                    ? "text-secondary"
                                                    : "text-white"
                                            }`}
                                            onMouseEnter={
                                                handleBrandsMouseEnter
                                            }
                                            onMouseLeave={
                                                handleBrandsMouseLeave
                                            }
                                        >
                                            <div className="flex items-center text-lg">
                                                {item.label}
                                                {isBrandsOpen ? (
                                                    <HiChevronUp size={20} />
                                                ) : (
                                                    <HiChevronDown size={20} />
                                                )}
                                            </div>
                                            //  Brands Submenu 
                                            <div
                                                className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 transition-all duration-300 ease-in-out transform ${
                                                    isBrandsOpen
                                                        ? "opacity-100 translate-y-0"
                                                        : "opacity-0 -translate-y-2 pointer-events-none"
                                                }`}
                                                onMouseEnter={
                                                    handleBrandsMouseEnter
                                                }
                                                onMouseLeave={
                                                    handleBrandsMouseLeave
                                                }
                                            >
                                                {brands.map((brand) => (
                                                    <NavLink
                                                        key={brand.id}
                                                        to={brand.link}
                                                        className={({
                                                            isActive,
                                                        }) =>
                                                            `block px-4 py-2 hover:bg-primary hover:text-white transition-colors duration-200 ${
                                                                isActive
                                                                    ? "bg-primary text-white"
                                                                    : "text-gray-800"
                                                            }`
                                                        }
                                                    >
                                                        {brand.name}
                                                    </NavLink>
                                                ))}
                                            </div>
                                        </div>
                                    ) :   */}
                                    {item.label === "Categories" ? (
                                        <div
                                            className={`font-light cursor-pointer ${
                                                isCategoriesOpen ||
                                                isCategoriesActive
                                                    ? "text-secondary"
                                                    : "text-white"
                                            }`}
                                            onMouseEnter={
                                                handleCategoriesMouseEnter
                                            }
                                            onMouseLeave={
                                                handleCategoriesMouseLeave
                                            }
                                        >
                                            <div className="flex items-center text-lg">
                                                {item.label}
                                                {isCategoriesOpen ? (
                                                    <HiChevronUp size={20} />
                                                ) : (
                                                    <HiChevronDown size={20} />
                                                )}
                                            </div>
                                            {/* Categories Submenu */}
                                            <div
                                                className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 transition-all duration-300 ease-in-out transform ${
                                                    isCategoriesOpen
                                                        ? "opacity-100 translate-y-0"
                                                        : "opacity-0 -translate-y-2 pointer-events-none"
                                                }`}
                                                onMouseEnter={
                                                    handleCategoriesMouseEnter
                                                }
                                                onMouseLeave={
                                                    handleCategoriesMouseLeave
                                                }
                                            >
                                                {categories.map((category) => (
                                                    <NavLink
                                                        key={category.id}
                                                        to={category.link}
                                                        className={({
                                                            isActive,
                                                        }) =>
                                                            `block px-4 py-2 hover:bg-primary hover:text-white transition-colors duration-200 ${
                                                                isActive
                                                                    ? "bg-primary text-white"
                                                                    : "text-gray-800"
                                                            }`
                                                        }
                                                    >
                                                        {category.name}
                                                    </NavLink>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <NavLink
                                            to={item.href}
                                            end={item.href === '/'}
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
                                    )}
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center gap-6">
                            <div
                                className="relative text-white cursor-pointer transition-transform duration-300 hover:text-secondary"
                                onClick={() => navigate("/cart")}
                            >
                                <BsHandbag size={20} />
                                <span className="absolute -top-1.5  -right-1.5 text-xs text-white bg-secondary w-3.5 h-4 p-[0.2px] rounded-full flex justify-center items-center">
                                    {itemsCount}
                                </span>
                            </div>
                            <div className="text-white">
                                <GoPerson size={20} />
                            </div>
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
                                    {/* {item.label === "Brands" ? (
                                        <div>
                                            <button
                                                className={`flex items-center justify-between w-full font-light text-base ${
                                                    isBrandsOpen ||
                                                    isBrandsActive
                                                        ? "text-secondary"
                                                        : "text-white"
                                                }`}
                                                onClick={toggleBrands}
                                            >
                                                <span>{item.label}</span>
                                                {isBrandsOpen ? (
                                                    <HiChevronUp
                                                        size={18}
                                                        className="text-white"
                                                    />
                                                ) : (
                                                    <HiChevronDown
                                                        size={18}
                                                        className="text-white"
                                                    />
                                                )}
                                            </button>
                                            <div
                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                                    isBrandsOpen
                                                        ? "max-h-96 opacity-100"
                                                        : "max-h-0 opacity-0"
                                                }`}
                                            >
                                                <ul className="pl-4 py-1.5 space-y-1">
                                                    {brands.map((brand) => (
                                                        <li key={brand.id}>
                                                            <NavLink
                                                                to={brand.link}
                                                                className={({ isActive }) =>
                                                                    `font-light text-sm py-1.5 hover:text-primary transition-colors duration-200 ${
                                                                        isActive
                                                                            ? "text-gray-800"
                                                                            : "text-white"
                                                                    }`
                                                                }
                                                                onClick={() =>
                                                                    setIsMobileMenuOpen(false)
                                                                }
                                                            >
                                                                {brand.name}
                                                            </NavLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ) : */}
                                    {item.label === "Categories" ? (
                                        <div>
                                            <button
                                                className={`flex items-center justify-between w-full font-light text-base ${
                                                    isCategoriesOpen ||
                                                    isCategoriesActive
                                                        ? "text-secondary"
                                                        : "text-white"
                                                }`}
                                                onClick={toggleCategories}
                                            >
                                                <span>{item.label}</span>
                                                {isCategoriesOpen ? (
                                                    <HiChevronUp
                                                        size={18}
                                                        className="text-white"
                                                    />
                                                ) : (
                                                    <HiChevronDown
                                                        size={18}
                                                        className="text-white"
                                                    />
                                                )}
                                            </button>
                                            <div
                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                                    isCategoriesOpen
                                                        ? "max-h-96 opacity-100"
                                                        : "max-h-0 opacity-0"
                                                }`}
                                            >
                                                <ul className="pl-4 py-1.5 space-y-1">
                                                    {categories.map(
                                                        (category) => (
                                                            <li key={category.id}>
                                                                <NavLink
                                                                    to={category.link}
                                                                    end={category.link === '/'}
                                                                    className={({ isActive }) =>
                                                                        `font-light text-sm py-1.5 hover:text-primary transition-colors duration-200 ${
                                                                            isActive
                                                                                ? "text-secondary"
                                                                                : "text-white"
                                                                        }`
                                                                    }
                                                                    onClick={() =>
                                                                        setIsMobileMenuOpen(false)
                                                                    }
                                                                >
                                                                    {category.name}
                                                                </NavLink>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    ) : (
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
                                    )}
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
                            <div className="text-white">
                                <GoPerson size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
