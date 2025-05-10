import axios from "axios";
import { API_URL } from "../constants/api";

export const fetchCategories = async () => {
    const res = await axios.get(`${API_URL}/categories`);
    return res.data.data;
};
