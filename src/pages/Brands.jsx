import { useState } from "react";
import { useBrands } from "../hooks/queries";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";
import Pagination from "../components/ui/Pagination";
import BrandList from "../components/ui/BrandList";
import PageContainer from "../components/custom/PageContainer";

const Brands = () => {
    const [page, setPage] = useState(1);
    const { data, isLoading, error } = useBrands(page);

    const brands = data?.data;

    return (
        <>
            <Breadcrumbs />
            <div className="container py-8">
                <Heading as="h2" className="text-accent font-medium pb-6">
                    Brands
                </Heading>
                <div className="bg-white rounded-md px-6 py-4">
                    <PageContainer isLoading={isLoading} error={error}>
                        {brands && brands.length > 0 ? (
                            <div className="space-y-8">
                                <BrandList brands={brands} />
                                <div className="flex justify-center">
                                    <Pagination
                                        setPageNumber={setPage}
                                        pageCount={data.last_page}
                                        currentPage={page}
                                    />
                                </div>
                            </div>
                        ) : (
                            <Paragraph>No record found.</Paragraph>
                        )}
                    </PageContainer>
                </div>
            </div>
        </>
    );
};

export default Brands;
