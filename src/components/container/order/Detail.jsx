import Heading from "../../ui/Heading";
import Image from "../../ui/Image";
import Paragraph from "../../ui/Paragraph";

const LabelValueContainer = ({ label, value }) => {
    return (
        <div>
            <Heading className="text-lg font-medium">{label}</Heading>
            <Paragraph>{value}</Paragraph>
        </div>
    );
};

const Detail = ({ data }) => {
    const order = data?.data;

    return (
        <div className="bg-surface">
            <div className="container py-8">
                {order ? (
                    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
                        <div>
                            <Heading className="text-primary font-medium">
                                Order #{order.id}
                            </Heading>
                            <Paragraph className="text-accent">
                                Voucher: {order.voucher_no}
                            </Paragraph>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <LabelValueContainer
                                label={`Customer Name`}
                                value={`${order.customer_name} (
                                    ${order.customer_username})`}
                            />
                            <LabelValueContainer
                                label={`Delivery Address`}
                                value={order.address}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <LabelValueContainer
                                label={`Total Quantity`}
                                value={`${order.total_qty} items`}
                            />
                            <LabelValueContainer
                                label={`Total Amount`}
                                value={`$${order.total_amount}`}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Heading className="text-lg font-medium">
                                    Status
                                </Heading>
                                <Paragraph
                                    className={`inline-block text-sm mt-1 px-3 py-1 rounded-full ${
                                        order.status
                                            ? "bg-green-100 text-green-700"
                                            : "bg-yellow-100 text-yellow-700"
                                    }`}
                                >
                                    {order.status ? "Confirmed" : "Pending"}
                                </Paragraph>
                            </div>
                            <LabelValueContainer
                                label={`Note`}
                                value={order.msg || "-"}
                            />
                        </div>

                        <div>
                            <Heading className="text-lg font-medium mb-4">
                                Products
                            </Heading>
                            <div className="divide-y border rounded-lg overflow-hidden">
                                {order.products.map((product, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 transition"
                                    >
                                        <div className="w-24 aspect-square flex-none">
                                            <Image
                                                src={`${
                                                    import.meta.env.VITE_API_URL
                                                }/download/${
                                                    product.product_logo
                                                }`}
                                                onError={(e) => {
                                                    e.target.onerror = null; // Prevent infinite loop
                                                    e.target.src =
                                                        "https://dummyjson.com/image/300x200";
                                                }}
                                                alt={product.product_name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium text-gray-900">
                                                {product.product_name}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Qty: {product.qty}
                                            </p>
                                        </div>
                                        <p className="text-primary font-semibold text-sm">
                                            ${product.price}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <Paragraph>No record found.</Paragraph>
                )}
            </div>
        </div>
    );
};

export default Detail;
