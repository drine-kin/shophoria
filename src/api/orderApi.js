import axios from "axios";
import { API_URL } from "../constants/api";
import useAuthStore from "../store/authStore";

const handleAuthError = (error) => {
    const logout = useAuthStore.getState().logout;
    if ([401, 403, 419].includes(error?.response?.status)) {
        logout();
    }
    throw error;
};

export const placeOrder = async (orderData, token) => {
    try {
        const res = await axios.post(`${API_URL}/new_order`, orderData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    } catch (error) {
        handleAuthError(error);
    }
};

export const fetchOrders = async (page, token) => {
    try {
        const res = await axios.get(`${API_URL}/orders?page=${page}&limit=10`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    } catch (error) {
        handleAuthError(error);
    }
};

export const fetchOrderDetail = async (id, token) => {
    try {
        const res = await axios.get(`${API_URL}/order/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    } catch (error) {
        handleAuthError(error);
    }
};
