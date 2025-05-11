import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import Heading from "../components/ui/Heading";
import TextInput from "../components/ui/TextInput";
import Button from "../components/ui/Button";
import Paragraph from "../components/ui/Paragraph";
import { loginUser } from "../api/authApi";
import useAuthStore from "../store/authStore";

const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const setAuth = useAuthStore((state) => state.setAuth);

    const { mutate, isLoading, error } = useMutation({
        mutationFn: (data) => loginUser(data),
        onSuccess: (data) => {
            toast.success("Login successful!");

            const { user, token } = data.data;
            setAuth({ user, token });
            setFormData({ username: "", password: "" });
        },
        onError: () => {
            toast.error("Login failed. Please try again.");
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate(formData);
    };

    return (
        <div className="bg-surface">
            <div className="container py-16">
                <div className="max-w-xl mx-auto bg-white p-8 rounded-md shadow-sm space-y-6">
                    <Heading className="text-accent font-medium">Login</Heading>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <TextInput
                            name="username"
                            label="Username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            error={
                                error?.response?.data?.errors?.["username"]?.[0]
                            }
                            required
                        />
                        <TextInput
                            type="password"
                            name="password"
                            label="Password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            error={
                                error?.response?.data?.errors?.["password"]?.[0]
                            }
                            required
                        />
                        <div className="flex justify-center">
                            <Button
                                disabled={isLoading}
                                className="!my-3 px-6 py-2.5 bg-primary text-white hover:bg-primary/80"
                            >
                                Login
                            </Button>
                        </div>
                        <Paragraph className="text-center text-muted">
                            Don't have an account?{" "}
                            <Link
                                to="/register"
                                className="text-primary font-medium hover:underline"
                            >
                                Register
                            </Link>
                        </Paragraph>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
