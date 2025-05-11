import axios from "axios";
import { API_URL } from "../constants/api";

export const registerUser = async (data) => {
    const res = await axios.post(`${API_URL}/register`, data);
    return res.data;
};

export const loginUser = async (data) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    const res = await axios.post(`${API_URL}/login`, formData);

    return res.data;
};
