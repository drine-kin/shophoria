import React, { useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineMinusSmall, HiOutlinePlusSmall } from "react-icons/hi2";
import Heading from "../../ui/Heading";
import Paragraph from "../../ui/Paragraph";
import Image from "../../ui/Image";
import Button from "../../ui/Button";
import Rating from "../../ui/Rating";
import useCartStore from "../../../store/cartStore";

const product = {
    id: 4,
    name: "exercitationem",
    code_no: "CNo-1",
    price: 8,
    discount: null,
    qty: 1997537154,
    logo: "0",
    description: "Dolorum possimus consequuntur velit voluptatibus.",
    rating: 0,
    subcategory_id: 24,
    brand_id: 40,
    deleted_at: null,
    created_at: "2025-05-06T15:50:25.000000Z",
    updated_at: "2025-05-06T15:50:25.000000Z",
    subcategory: {
        id: 24,
        name: "maiores",
    },
    brand: {
        id: 40,
        name: "a",
    },
};

const Detail = () => {
    const [qty, setQty] = useState(1);
    const addToCart = useCartStore((state) => state.addToCart);
    const isOutOfStock = product.qty ? false : true;

    const handleOnChange = (e) => {
        const intQty = parseInt(e.target.value);

        const regx = /^\d+$/;

        if (
            (!regx.test(intQty) && e.target.value.length > 0) ||
            e.target.value < 0
        ) {
            return;
        }

        setQty(intQty || "");
    };

    const handleDecreaseQty = () => {
        if (qty > 1) {
            setQty((prev) => prev - 1);
        }
    };

    const handleIncreaseQty = () => {
        if (qty >= 1) {
            setQty((prev) => prev + 1);
        }
    };

    const handleAddToCart = () => {
        addToCart(product);
        toast.success("Added to cart successfully");
        setQty(1);
    };

    return (
        <div className="bg-surface">
            <div className="container py-8">
                <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
                    <div className="w-full md:w-1/2">
                        <Image
                            src={`${import.meta.env.VITE_API_URL}/download/${product.logo}`}
                            onError={(e) => {
                                e.target.onerror = null; // Prevent infinite loop
                                e.target.src = "https://dummyjson.com/image/300x200";
                            }}
                            alt={product.name}
                            className="object-cover w-full h-auto lg:h-[450px] border rounded-md"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col space-y-3">
                            {product.qty ? (
                                <Paragraph className="text-primary font-medium w-fit px-4 py-2 border border-primary rounded-md">
                                    In Stock
                                </Paragraph>
                            ) : (
                                <Paragraph className="text-primary font-medium w-fit px-4 py-2 border border-primary rounded-md">
                                    Out of stock
                                </Paragraph>
                            )}
                            <Heading as="h3" className="text-accent">
                                {product.name}
                            </Heading>
                            <Paragraph className="text-primary font-medium">
                                ${product.price}
                            </Paragraph>
                            <Paragraph className="text-accent font-medium">
                                {product.description || "No Description"}
                            </Paragraph>
                            <div className="flex items-center gap-2">
                                <Paragraph className="text-accent font-medium">
                                    Category :
                                </Paragraph>
                                <Paragraph className="text-primary font-medium">
                                    {product.subcategory.name}
                                </Paragraph>
                            </div>
                            <div className="flex items-center gap-2">
                                <Paragraph className="text-accent font-medium">
                                    Brand :
                                </Paragraph>
                                <Paragraph className="text-primary font-medium">
                                    {product.brand.name}
                                </Paragraph>
                            </div>
                            <div className="flex items-center gap-2">
                                <Paragraph className="text-accent font-medium">
                                    Item Code :
                                </Paragraph>
                                <Paragraph className="text-primary font-medium">
                                    {product.code_no}
                                </Paragraph>
                            </div>
                            <Rating rating={product.rating || 2.1} />
                            <div className="flex flex-wrap items-center gap-8">
                                <div className="flex items-center gap-3">
                                    <div
                                        className={`w-6 h-6 cursor-pointer flex justify-center items-center text-accent bg-secondary transition-colors duration-300 ${
                                            isOutOfStock
                                                ? "cursor-not-allowed"
                                                : "hover:bg-primary"
                                        } border border-accent rounded-full`}
                                        onClick={
                                            isOutOfStock
                                                ? undefined
                                                : handleDecreaseQty
                                        }
                                    >
                                        <HiOutlineMinusSmall size={20} />
                                    </div>
                                    <input
                                        type="text"
                                        name="quantity"
                                        value={qty}
                                        onChange={handleOnChange}
                                        onMouseLeave={() => {
                                            if (!qty) {
                                                setQty(1);
                                            }
                                        }}
                                        className="text-accent bg-transparent outline-none w-7 text-center"
                                    />
                                    <div
                                        className={`w-6 h-6 cursor-pointer flex justify-center items-center text-accent bg-secondary transition-colors duration-300 ${
                                            isOutOfStock
                                                ? "cursor-not-allowed"
                                                : "hover:bg-primary"
                                        } border border-accent rounded-full`}
                                        onClick={
                                            isOutOfStock
                                                ? undefined
                                                : handleIncreaseQty
                                        }
                                    >
                                        <HiOutlinePlusSmall size={20} />
                                    </div>
                                </div>
                                <Button
                                    className={`text-white bg-primary transition-transform duration-300 hover:bg-primary/80 ${
                                        isOutOfStock ? "cursor-not-allowed" : ""
                                    }`}
                                    onClick={
                                        isOutOfStock
                                            ? undefined
                                            : handleAddToCart
                                    }
                                >
                                    Add To Cart
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
