import { useEffect, useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import {
    // useBrands,
    useCategories,
    useSubcategories,
} from "../../hooks/queries";
import Heading from "./Heading";
import Image from "./Image";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import PageContainer from "../custom/PageContainer";
import Paragraph from "./Paragraph";

export default function Sidebar() {
    const { search } = useLocation();
    const [searchParams] = useSearchParams();
    const categoryIdFromUrl = searchParams.get("category_id");

    const [openCategory, setOpenCategory] = useState(null);
    // const {
    //     data: brands,
    //     isLoading: loadingBrands,
    //     error: brandsError,
    // } = useBrands();
    const {
        data: categories,
        isLoading: loadingCategories,
        error: categoriesError,
    } = useCategories();
    const {
        data: subcategories,
        isLoading: loadingSubcategories,
        error: subCategoriesError,
    } = useSubcategories();

    useEffect(() => {
        if (categoryIdFromUrl) {
            setOpenCategory(parseInt(categoryIdFromUrl));
        } else {
            setOpenCategory(null);
        }
    }, [search, categoryIdFromUrl]);

    const handleToggle = (id) => {
        setOpenCategory((prev) => (prev === id ? null : id));
    };

    return (
        <aside className="sticky top-24 bg-primary p-6 rounded-md shadow-sm overflow-y-auto">
            <div className="space-y-8">
                <>
                    <Heading
                        as="h2"
                        className="text-white text-xl mb-4 font-semibold"
                    >
                        Categories
                    </Heading>
                    <ul className="space-y-2">
                        <PageContainer
                            isLoading={
                                loadingCategories || loadingSubcategories
                            }
                            error={categoriesError || subCategoriesError}
                        >
                            {categories &&
                            subcategories &&
                            categories.length > 0 ? (
                                categories.map((category) => {
                                    const isOpen = openCategory === category.id;
                                    const filteredSubs = subcategories.filter(
                                        (sub) => sub.category_id === category.id
                                    );

                                    if (filteredSubs.length === 0) return null;

                                    return (
                                        <li key={category.id}>
                                            <button
                                                onClick={
                                                    filteredSubs.length > 0
                                                        ? () =>
                                                              handleToggle(
                                                                  category.id
                                                              )
                                                        : undefined
                                                }
                                                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-md bg-white hover:bg-gray-200 ${
                                                    isOpen ? "bg-accent" : ""
                                                }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Image
                                                        src={`${import.meta.env.VITE_API_URL}/download/${category.logo}`}
                                                        onError={(e) => {
                                                            e.target.onerror = null; // Prevent infinite loop
                                                            e.target.src = "https://dummyjson.com/image/300x200";
                                                        }}
                                                        alt={category.name}
                                                        className="w-8 h-8 object-cover rounded-md"
                                                    />
                                                    <span className="text-sm font-medium">
                                                        {category.name}
                                                    </span>
                                                </div>
                                                {filteredSubs.length > 0 ? (
                                                    <>
                                                        {isOpen ? (
                                                            <HiChevronUp className="w-5 h-5 text-gray-500" />
                                                        ) : (
                                                            <HiChevronDown className="w-5 h-5 text-gray-500" />
                                                        )}
                                                    </>
                                                ) : null}
                                            </button>

                                            <div
                                                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                                    isOpen
                                                        ? "max-h-96 pt-2"
                                                        : "max-h-0"
                                                }`}
                                            >
                                                <div className="space-y-1 text-sm text-gray-700">
                                                    {filteredSubs.map((sub) => (
                                                        <Link
                                                            key={sub.id}
                                                            to={`/shop?category_id=${category.id}&subcategory_id=${sub.id}&subcategory_name=${sub.name}`}
                                                            className={`hover:bg-gray-200 pl-8 pr-4 py-2.5 rounded-md bg-white cursor-pointer flex items-center gap-2 ${
                                                                categoryIdFromUrl ===
                                                                category.id
                                                                    ? "bg-accent"
                                                                    : ""
                                                            }`}
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <Image
                                                                    src={`${import.meta.env.VITE_API_URL}/download/${sub.logo}`}
                                                                    onError={(e) => {
                                                                        e.target.onerror = null; // Prevent infinite loop
                                                                        e.target.src = "https://dummyjson.com/image/300x200";
                                                                    }}
                                                                    alt={sub.name}
                                                                    className="w-8 h-8 object-cover rounded"
                                                                />
                                                                {sub.name}
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })
                            ) : (
                                <Paragraph>No record found.</Paragraph>
                            )}
                        </PageContainer>
                    </ul>
                </>
                {/* <div>
                    <Heading
                        as="h2"
                        className="text-white text-xl mb-4 font-semibold"
                    >
                        Brands
                    </Heading>
                    <ul className="space-y-2">
                        <PageContainer
                            isLoading={loadingBrands}
                            error={brandsError}
                        >
                            {brands && brands.length > 0 ? (
                                brands.map((brand) => {
                                    return (
                                        <li key={brand.id}>
                                            <Link
                                                to={`/shop?brand_id=${brand.id}`}
                                                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-md bg-white hover:bg-gray-200 `}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Image
                                                        src="https://dummyjson.com/image/300x200"
                                                        alt={brand.name}
                                                        className="w-8 h-8 object-cover rounded-md"
                                                    />
                                                    <span className="text-sm font-medium">
                                                        {brand.name}
                                                    </span>
                                                </div>
                                            </Link>
                                        </li>
                                    );
                                })
                            ) : (
                                <Paragraph>No record found.</Paragraph>
                            )}
                        </PageContainer>
                    </ul>
                </div> */}
            </div>
        </aside>
    );
}
