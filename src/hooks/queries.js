import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../api/categoryApi";
import { fetchSubCategories } from "../api/subcategoryApi";
import { fetchProducts } from "../api/productApi";
import { fetchBrands } from "../api/brandApi";

export const useCategories = () =>
    useQuery({ queryKey: ["categories"], queryFn: fetchCategories });

export const useSubcategories = () =>
    useQuery({ queryKey: ["subcategories"], queryFn: fetchSubCategories });

export const useProducts = (page, subCategory, brand) =>
    useQuery({
        queryKey: ["products", page, subCategory, brand],
        queryFn: () => fetchProducts(page, subCategory, brand),
        keepPreviousData: true,
    });

export const useBrands = (page) =>
    useQuery({
        queryKey: ["brands", page],
        queryFn: () => fetchBrands(page),
        keepPreviousData: true,
    });
