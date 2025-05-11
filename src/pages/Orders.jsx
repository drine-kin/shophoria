import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchOrders } from "../api/orderApi";
import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";
import useAuthStore from "../store/authStore";
import PageContainer from "../components/custom/PageContainer";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import Pagination from "../components/ui/Pagination";
import SearchForm from "../components/ui/SearchForm";

const Orders = () => {
    const { token } = useAuthStore();
    const [searchParams, setSearchParams] = useSearchParams();
    const page = parseInt(searchParams.get("page") || "1", 10);
    const [searchText, setSearchText] = useState(
        searchParams.get("search") || ""
    );

    const navigate = useNavigate();

    const { data, isLoading, isError } = useQuery({
        queryKey: ["orders", page, searchText],
        queryFn: () => fetchOrders(page, searchText, token),
    });

    const handlePageChange = (newPage) => {
        searchParams.set("page", newPage);
        setSearchParams(searchParams);
    };

    const handleSearch = () => {
        if (searchText.trim()) {
            searchParams.set("search", searchText);
            searchParams.set("page", 1);
            setSearchParams(searchParams);
        }
    };

    const onSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    useEffect(() => {
        if (!searchText && searchParams.has("search")) {
            const newParams = new URLSearchParams(searchParams);
            newParams.delete("search");
            newParams.set("page", 1);
            setSearchParams(newParams);
        }
    }, [searchText, searchParams, setSearchParams]);

    const orders = data?.data;

    return (
        <>
            <Breadcrumbs />
            <div className="container py-8">
                <Heading as="h2" className="text-accent font-medium pb-6">
                    My Orders
                </Heading>
                <div className="flex justify-end pb-6">
                    <SearchForm
                        containerClass="w-full md:w-72"
                        value={searchText}
                        onChange={onSearchChange}
                        onKeyDown={handleKeyPress}
                    />
                </div>
                <div className="w-full overflow-x-auto">
                    <div className="space-y-4">
                        <PageContainer isLoading={isLoading} error={isError}>
                            {orders?.length > 0 ? (
                                <div className="relative overflow-x-auto space-y-8 ">
                                    <table className="w-full text-left rounded-md shadow-sm border border-spacing-0 border-collapse overflow-hidden">
                                        <thead className="text-white uppercase text-sm bg-primary">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 whitespace-nowrap"
                                                >
                                                    No
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3"
                                                >
                                                    Voucher No
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3"
                                                >
                                                    Qty
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3"
                                                >
                                                    Total
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3"
                                                >
                                                    Note
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3"
                                                >
                                                    Order Status
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3"
                                                >
                                                    Address
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.map((order, idx) => (
                                                <tr
                                                    key={order.id}
                                                    onClick={() =>
                                                        navigate(
                                                            `/orders/${order.id}`
                                                        )
                                                    }
                                                    className="bg-white border-b cursor-pointer transition-all duration-100 hover:bg-gray-100"
                                                >
                                                    <th
                                                        scope="row"
                                                        className="px-6 py-4 font-light whitespace-nowrap"
                                                    >
                                                        {/* {order.id} */}
                                                        {page === 1 ? idx + 1 : data.meta.from + idx}
                                                    </th>
                                                    <td className="px-6 py-4 font-light whitespace-nowrap">
                                                        {order.voucher_no}
                                                    </td>
                                                    <td className="px-6 py-4 font-light">
                                                        {order.total_qty}
                                                    </td>
                                                    <td className="px-6 py-4 font-light ">
                                                        {order.total_amount} MMK
                                                    </td>
                                                    <td className="px-6 py-4font-light ">
                                                        {order.msg || "—"}
                                                    </td>
                                                    <td
                                                        className={`px-6 py-4 font-light ${
                                                            order.status
                                                                ? "text-green-500"
                                                                : "text-yellow-500"
                                                        }`}
                                                    >
                                                        {order.status
                                                            ? "Confirmed"
                                                            : "Pending"}
                                                    </td>
                                                    <td className="px-6 py-4 font-light truncate">
                                                        {order.address}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className="flex flex-wrap justify-center items-center gap-8">
                                        <Pagination
                                            setPageNumber={handlePageChange}
                                            pageCount={data.meta.last_page}
                                            currentPage={page}
                                        />
                                        <Paragraph className="!font-medium">
                                            Showing {data.meta.from} to{" "}
                                            {data.meta.to} of {data.meta.total}
                                        </Paragraph>
                                    </div>
                                </div>
                            ) : <Paragraph>No record found.</Paragraph>}
                        </PageContainer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Orders;
