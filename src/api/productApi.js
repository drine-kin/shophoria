import axios from "axios";
import { API_URL } from "../constants/api";

export const fetchProducts = async (page, subCategory, brand) => {
    const res = await axios.get(
        `${API_URL}/products?limit=9&page=${page}${
            subCategory ? `&subcategory_id=${subCategory}` : ""
        }
        ${brand ? `&brand_id=${brand}` : ""}`
    );
    return res.data;
};

export const fetchProductDetail = async (id) => {
    const res = await axios.get(
        `${API_URL}/product/${id}`
    );
    return res.data;
};
