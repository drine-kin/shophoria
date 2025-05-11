import toast from "react-hot-toast";
import {
    HiOutlineMinusSmall,
    HiOutlinePlusSmall,
    HiOutlineTrash,
} from "react-icons/hi2";
import Heading from "./Heading";
import Image from "./Image";
import Paragraph from "./Paragraph";
import useCartStore from "../../store/cartStore";

const CartPreview = ({ item, className }) => {
    const currentItem = useCartStore((state) =>
        state.items.find((i) => i.id === item.id)
    );
    const addToCart = useCartStore((state) => state.addToCart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);

    const handleDecreaseQty = () => {
        const newQuantity = currentItem.cartQty - 1;
        if (newQuantity) {
            addToCart({ ...currentItem, cartQty: newQuantity });
        }
    };

    const handleIncreaseQty = () => {
        const newQuantity = currentItem.cartQty + 1;
        if (newQuantity) {
            addToCart({ ...currentItem, cartQty: newQuantity });
        }
    };

    const handleDeleteFromCart = () => {
        removeFromCart(item.id);
        toast.success("Removed successfully");
    };

    return (
        <>
            <div className={`hidden md:flex items-center gap-4 ${className}`}>
                <div className="w-full md:w-5/12 flex items-center gap-2 space-y-4">
                    <div className="w-32 lg:w-44 aspect-square">
                        <Image
                            src={`${import.meta.env.VITE_IMAGE_URL}/download/${item.logo}`}
                            onError={(e) => {
                                e.target.onerror = null; // Prevent infinite loop
                                e.target.src =
                                    "https://dummyjson.com/image/300x200";
                            }}
                            alt={item.name}
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                    <Heading as="h3" className="font-normal text-base px-4">
                        {item.name}
                    </Heading>
                </div>
                <div className="w-full md:w-2/12">
                    <Paragraph className="text-accent font-medium">
                        {item.discount || item.price} MMK
                    </Paragraph>
                </div>
                <div className="w-full md:w-2/12 flex items-center gap-2">
                    <div
                        className="w-6 h-6 cursor-pointer flex justify-center items-center text-accent bg-secondary transition-colors duration-300 hover:bg-primary border border-accent rounded-full"
                        onClick={handleDecreaseQty}
                    >
                        <HiOutlineMinusSmall size={20} />
                    </div>
                    <Paragraph className="text-accent font-medium bg-transparent outline-none w-7 text-center overflow-x-auto">
                        {currentItem.cartQty}
                    </Paragraph>
                    <div
                        className="w-6 h-6 cursor-pointer flex justify-center items-center text-accent bg-secondary transition-colors duration-300 hover:bg-primary border border-accent rounded-full"
                        onClick={handleIncreaseQty}
                    >
                        <HiOutlinePlusSmall size={20} />
                    </div>
                </div>
                <div className="w-full md:w-2/12">
                    <Paragraph className="text-primary font-medium">
                        {(item.discount || item.price * item.cartQty).toFixed(2)} MMK
                    </Paragraph>
                </div>
                <div className="w-full md:w-1/12">
                    <HiOutlineTrash
                        size={20}
                        className="cursor-pointer text-red-500 transition-colors duration-300 hover:scale-110"
                        onClick={handleDeleteFromCart}
                    />
                </div>
            </div>

            <div className={`flex md:hidden items-center gap-4 ${className}`}>
                <div className="flex justify-between items-center gap-4 w-full">
                    <div className="w-1/3">
                        <div className="w-32 lg:w-44 aspect-square">
                            <Image
                                src={`${import.meta.env.VITE_IMAGE_URL}/download/${item.logo}`}
                                onError={(e) => {
                                    e.target.onerror = null; // Prevent infinite loop
                                    e.target.src =
                                        "https://dummyjson.com/image/300x200";
                                }}
                                alt={item.name}
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                    </div>
                    <div className="w-2/3 flex flex-col space-y-3">
                        <Heading as="h3" className="font-normal text-sm">
                            {item.name}
                        </Heading>
                        <div className="flex flex-wrap justify-between items-center gap-2">
                            <Paragraph className="text-accent text-xs">
                                {item.price} MMK
                            </Paragraph>
                            <div className="flex justify-between items-center gap-2">
                                <div
                                    className="w-5 h-5 cursor-pointer flex justify-center items-center text-accent bg-secondary transition-colors duration-300 hover:bg-primary border border-accent rounded-full"
                                    onClick={handleDecreaseQty}
                                >
                                    <HiOutlineMinusSmall size={20} />
                                </div>
                                <Paragraph className="text-accent font-medium bg-transparent outline-none w-5 text-center">
                                    {currentItem.cartQty}
                                </Paragraph>
                                <div
                                    className="w-5 h-5 cursor-pointer flex justify-center items-center text-accent bg-secondary transition-colors duration-300 hover:bg-primary border border-accent rounded-full"
                                    onClick={handleIncreaseQty}
                                >
                                    <HiOutlinePlusSmall size={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartPreview;
