import axios from "axios";
import { API_URL } from "../constants/api";

export const fetchBrands = async (page) => {
    const res = await axios.get(`${API_URL}/brands?page=${page}`);
    return res.data;
};
