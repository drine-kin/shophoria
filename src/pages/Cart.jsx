import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import CartPreview from "../components/ui/CartPreview";
import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";
import useCartStore from "../store/cartStore";
import Breadcrumbs from "../components/ui/Breadcrumbs";

const Cart = () => {
    const navigate = useNavigate();
    const items = useCartStore((state) => state.items);

    const subtotal = items
        .reduce((sum, item) => {
            return sum + (item.discount || item.price) * item.cartQty;
        }, 0)
        .toFixed(2);

    return (
        <>
            <Breadcrumbs />
            <div className="bg-surface">
                <div className="container py-8 space-y-8">
                    <div className="flex flex-wrap justify-between items-center gap-3">
                        <Heading as="h2" className="text-accent font-medium">
                            Shopping Cart {`(${items.length})`}
                        </Heading>
                        <Link to="/shop">
                            <Button className="bg-primary text-white transition-colors duration-300 hover:bg-primary/80">
                                Continue Shopping
                            </Button>
                        </Link>
                    </div>
                    {items.length > 0 ? (
                        <div className="flex flex-wrap xl:flex-nowrap gap-8">
                            <div className="w-full xl:w-3/4 bg-white rounded-sm shadow-sm p-4 md:p-8">
                                <div className="hidden md:flex gap-4 justify-between items-center">
                                    <div className="w-full md:w-5/12">
                                        <Heading
                                            as="h3"
                                            className="text-lg font-normal text-accent"
                                        >
                                            Product
                                        </Heading>
                                    </div>
                                    <div className="w-full md:w-2/12">
                                        <Heading
                                            as="h3"
                                            className="text-lg font-normal text-accent"
                                        >
                                            Price
                                        </Heading>
                                    </div>
                                    <div className="w-full md:w-2/12">
                                        <Heading
                                            as="h3"
                                            className="text-lg font-normal text-accent"
                                        >
                                            Quantity
                                        </Heading>
                                    </div>
                                    <div className="w-full md:w-2/12">
                                        <Heading
                                            as="h3"
                                            className="text-lg font-normal text-accent"
                                        >
                                            Total Price
                                        </Heading>
                                    </div>
                                    <div className="w-full md:w-1/12"></div>
                                </div>
                                <div className="space-y-4 pt-4">
                                    {items.map((item, idx) => (
                                        <CartPreview
                                            key={item.id}
                                            item={item}
                                            className={`${
                                                idx !== items.length - 1
                                                    ? "border-b pb-4"
                                                    : ""
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="w-full h-fit xl:w-1/4 bg-white rounded-sm shadow-sm p-4 md:p-8 space-y-6">
                                <Heading
                                    as="h3"
                                    className="text-lg font-normal text-accent"
                                >
                                    Summary
                                </Heading>
                                <div className="space-y-4 border-b pb-6">
                                    <div className="flex gap-4 justify-between items-center">
                                        <div className="flex gap-1">
                                            <Paragraph>Subtotal</Paragraph>
                                            <Paragraph>
                                                (
                                                {items.length === 1
                                                    ? `${items.length} item`
                                                    : `${items.length} items`}
                                                )
                                            </Paragraph>
                                        </div>
                                        <Paragraph>{subtotal} MMK</Paragraph>
                                    </div>
                                    <div className="flex gap-4 justify-between items-center">
                                        <div className="flex gap-1">
                                            <Paragraph className="font-medium">
                                                Total
                                            </Paragraph>
                                        </div>
                                        <Paragraph className="font-medium">
                                            {subtotal} MMK
                                        </Paragraph>
                                    </div>
                                </div>
                                <div className="pt-2 flex justify-end xl:justify-center">
                                    <Button
                                        className="bg-primary text-white w-full sm:w-auto xl:w-full hover:bg-primary/80"
                                        onClick={() => {
                                            navigate("/confirm");
                                        }}
                                    >
                                        Check Out
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Paragraph>No record found.</Paragraph>
                    )}
                </div>
            </div>
        </>
    );
};

export default Cart;
