import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../api/categoryApi";
import { fetchSubCategories } from "../api/subcategoryApi";
import { fetchProductDetail, fetchProducts } from "../api/productApi";
import { fetchBrands } from "../api/brandApi";
import { fetchOrderDetail } from "../api/orderApi";

export const useCategories = (pageSize) =>
    useQuery({
        queryKey: ["categories", pageSize],
        queryFn: () => fetchCategories(pageSize),
    });

export const useSubcategories = () =>
    useQuery({ queryKey: ["subcategories"], queryFn: fetchSubCategories });

export const useProducts = (page, subCategory, brand) =>
    useQuery({
        queryKey: ["products", page, subCategory, brand],
        queryFn: () => fetchProducts(page, subCategory, brand),
    });

export const useBrands = (page) =>
    useQuery({
        queryKey: ["brands", page],
        queryFn: () => fetchBrands(page),
    });

export const useProductDetail = (id) =>
    useQuery({
        queryKey: ["product", id],
        queryFn: () => fetchProductDetail(id),
    });

export const useOrderDetail = (id, token) =>
    useQuery({
        queryKey: ["order", id],
        queryFn: () => fetchOrderDetail(id, token),
    });
