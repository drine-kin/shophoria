import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../../hooks/queries";
import PageContainer from "../../custom/PageContainer";
import Pagination from "../../ui/Pagination";
import Paragraph from "../../ui/Paragraph";
import ProductPreview from "../../ui/ProductPreview";
import SearchForm from "../../ui/SearchForm";

export default function ProductList() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchText, setSearchText] = useState(
        searchParams.get("search") || ""
    );

    const page = parseInt(searchParams.get("page") || "1", 10);
    const subCategoryID = parseInt(searchParams.get("subcategory_id"));
    const brandID = parseInt(searchParams.get("brand_id"));

    const handlePageChange = (newPage) => {
        searchParams.set("page", newPage);
        setSearchParams(searchParams);
    };

    const { data, isLoading, error } = useProducts(
        page,
        subCategoryID,
        brandID,
        searchParams.get("search") || ""
    );

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
        if (!searchText) {
            const newParams = new URLSearchParams(searchParams);
            newParams.delete("search");
            newParams.set("page", 1);
            setSearchParams(newParams);
        }
    }, [searchText, searchParams, setSearchParams]);

    const products = data?.data;

    return (
        <PageContainer isLoading={isLoading} error={error}>
            <div className="flex justify-end pb-8">
                <SearchForm
                    containerClass="w-full md:w-72"
                    value={searchText}
                    onChange={onSearchChange}
                    onKeyDown={handleKeyPress}
                />
            </div>
            {products && products.length > 0 ? (
                <div className="flex flex-col gap-8">
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                            {products.map((product) => (
                                <ProductPreview
                                    key={product.id}
                                    item={product}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        <Pagination
                            setPageNumber={handlePageChange}
                            pageCount={data.last_page}
                            currentPage={page}
                        />
                        <Paragraph className="!font-medium">
                            Showing {data.from} to {data.to} of {data.total}
                        </Paragraph>
                    </div>
                </div>
            ) : (
                <Paragraph>No record found.</Paragraph>
            )}
        </PageContainer>
    );
}
