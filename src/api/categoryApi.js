import axios from "axios";
import { API_URL } from "../constants/api";

export const fetchCategories = async (pageSize) => {
    const res = await axios.get(`${API_URL}/categories${pageSize ? `?limit=${pageSize}`: ""}`);
    return res.data.data;
};
