import axios from "axios";
import { API_URL } from "../constants/api";

export const fetchSubCategories = async () => {
    const res = await axios.get(`${API_URL}/subcategories`);
    return res.data.data;
};
