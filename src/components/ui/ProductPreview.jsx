import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineMinusSmall, HiOutlinePlusSmall } from "react-icons/hi2";
import Paragraph from "./Paragraph";
import Image from "./Image";
import Button from "./Button";
import Heading from "./Heading";
import useCartStore from "../../store/cartStore";

const ProductPreview = ({ item }) => {
    const [qty, setQty] = useState(1);
    const navigate = useNavigate();
    const addToCart = useCartStore((state) => state.addToCart);

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
        addToCart({ ...item, cartQty: qty });
        toast.success("Added to cart successfully");
        navigate("/cart");
        setQty(1);
    };

    return (
        <article className="bg-white rounded-md overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
            <div className="relative">
                <div className="w-full aspect-square m-auto cursor-pointer">
                    <Image
                        src={`${import.meta.env.VITE_IMAGE_URL}/download/${
                            item.logo
                        }`}
                        onError={(e) => {
                            e.target.onerror = null; // Prevent infinite loop
                            e.target.src =
                                "https://dummyjson.com/image/300x200";
                        }}
                        className="w-full h-full object-cover"
                        alt={item.title}
                        onClick={() => {
                            navigate(`/products/${item.id}`);
                        }}
                    />
                </div>
            </div>
            <div className="bg-accent p-4 space-y-2">
                <Link to={`/products/${item.id}`}>
                    <Heading
                        as="h2"
                        className="text-white font-light text-lg truncate"
                    >
                        {item.name}
                    </Heading>
                </Link>

                {item.discount ? (
                    <div className="flex gap-2">
                        <Paragraph className="text-white font-medium line-through">
                            {item.price} MMK
                        </Paragraph>
                        <Paragraph className="text-primary font-medium">
                            {item.discount} MMK
                        </Paragraph>
                    </div>
                ) : (
                    <Paragraph className="text-white font-medium">
                        {item.price} MMK
                    </Paragraph>
                )}
                <div className="flex flex-wrap justify-between items-center gap-4">
                    <div className="flex items-center gap-3">
                        <div
                            className="w-6 h-6 cursor-pointer flex justify-center items-center text-accent bg-secondary transition-colors duration-300 hover:bg-primary border border-accent rounded-full"
                            onClick={handleDecreaseQty}
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
                            className="text-white bg-transparent outline-none w-7 text-center"
                        />
                        <div
                            className="w-6 h-6 cursor-pointer flex justify-center items-center text-accent bg-secondary transition-colors duration-300 hover:bg-primary border border-accent rounded-full"
                            onClick={handleIncreaseQty}
                        >
                            <HiOutlinePlusSmall size={20} />
                        </div>
                    </div>
                    <Button
                        className="text-white bg-primary transition-transform duration-300 hover:bg-primary/80"
                        onClick={handleAddToCart}
                    >
                        Add To Cart
                    </Button>
                </div>
            </div>
        </article>
    );
};

export default ProductPreview;
