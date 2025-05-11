import { useState } from "react";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useCartStore from "../store/cartStore";
import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";
import TextArea from "../components/ui/TextArea";
import Button from "../components/ui/Button";
import { placeOrder } from "../api/orderApi";
import useAuthStore from "../store/authStore";

const ConfirmOrder = () => {
    const navigate = useNavigate();
    const { items, clearCart } = useCartStore();
    const { token } = useAuthStore();

    const total = items
        .reduce((sum, item) => {
            return sum + item.price * item.cartQty;
        }, 0)
        .toFixed(2);

    const [form, setForm] = useState({
        delivery: "cod", // cod = Cash on Delivery
        note: "",
    });

    const { mutate } = useMutation({
        mutationFn: (orderData) => placeOrder(orderData, token),
        onSuccess: () => {
            toast.success("Order placed successfully!");
            clearCart();
            navigate("/orders");
        },
        onError: () => {
            toast.error("Failed to place order.");
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        if (!items.length) {
            toast.error("Your cart is empty.");
            return;
        }

        const formData = new FormData();

        items.forEach((item) => {
            formData.append(`products[${item.id}]`, item.cartQty);
        });

        formData.append("note", form.note);

        mutate(formData);
    };

    return (
        <div className="bg-surface">
            <div className="container py-16">
                <div className="max-w-3xl m-auto bg-white p-8 rounded-md shadow-sm">
                    <div className="space-y-6">
                        <Heading className="text-accent font-medium">
                            Confirm Your Order
                        </Heading>

                        <div className="space-y-3">
                            <Paragraph className="font-medium">
                                Choose Delivery Option:
                            </Paragraph>
                            <label className="block">
                                <input
                                    type="radio"
                                    name="delivery"
                                    value="cod"
                                    checked={form.delivery === "cod"}
                                    onChange={handleChange}
                                    className="mr-2 accent-primary"
                                />
                                Cash on Delivery
                            </label>
                        </div>

                        <TextArea
                            name="note"
                            label="Note"
                            value={form.note}
                            onChange={handleChange}
                            placeholder="e.g. Leave at front door"
                        />

                        <div>
                            <Heading
                                as="h3"
                                className="text-lg font-normal text-accent"
                            >
                                Order Summary
                            </Heading>
                            <ul className="divide-y">
                                {items.map((item) => (
                                    <li
                                        key={item.id}
                                        className="py-2 flex justify-between"
                                    >
                                        <Paragraph>
                                            {item.name} x {item.cartQty}
                                        </Paragraph>
                                        <Paragraph>
                                            {item.price * item.cartQty} USD
                                        </Paragraph>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-right font-bold mt-4">
                                Total: {total} USD
                            </p>
                        </div>

                        <div className="flex justify-end">
                            <Button
                                onClick={handleSubmit}
                                className="bg-primary text-white rounded hover:bg-opacity-90"
                            >
                                Place Order
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmOrder;
