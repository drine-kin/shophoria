import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import Heading from "../components/ui/Heading";
import TextInput from "../components/ui/TextInput";
import TextArea from "../components/ui/TextArea";
import Button from "../components/ui/Button";
import Paragraph from "../components/ui/Paragraph";
import { registerUser } from "../api/authApi";

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        name: "",
        password: "",
        address: "",
    });

    const navigate = useNavigate();

    const { mutate, isLoading, error } = useMutation({
        mutationFn: registerUser,
        onSuccess: () => {
            toast.success("Registration successful!");
            navigate("/login");
            setFormData({ username: "", name: "", password: "", address: "" });
        },
        onError: () => {
            toast.error("Registration failed. Please try again.");
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
        <div className="bg-surface min-h-[calc(100vh-80px)]">
            <div className="container py-16">
                <div className="max-w-xl mx-auto bg-white p-8 rounded-md shadow-sm space-y-6">
                    <Heading className="text-accent font-medium">
                        Create an Account
                    </Heading>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <TextInput
                            name="username"
                            label="Username"
                            placeholder="Your UserName"
                            value={formData.username}
                            onChange={handleChange}
                            error={
                                error?.response?.data?.errors?.["username"]?.[0]
                            }
                            required
                        />
                        <TextInput
                            name="name"
                            label="Name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            error={error?.response?.data?.errors?.["name"]?.[0]}
                            required
                        />
                        <TextInput
                            type="password"
                            name="password"
                            label="Password"
                            placeholder="Create a password"
                            value={formData.password}
                            onChange={handleChange}
                            error={
                                error?.response?.data?.errors?.["password"]?.[0]
                            }
                            required
                        />
                        <TextArea
                            name="address"
                            label="Address"
                            placeholder="Your address"
                            value={formData.address}
                            onChange={handleChange}
                            error={
                                error?.response?.data?.errors?.["address"]?.[0]
                            }
                            required
                        />
                        <div className="flex justify-center">
                            <Button
                                disabled={isLoading}
                                className="!my-3 px-6 py-2.5 bg-primary text-white hover:bg-primary/80"
                            >
                                Register
                            </Button>
                        </div>
                        <Paragraph className="text-center text-muted">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-primary font-medium hover:underline"
                            >
                                Login
                            </Link>
                        </Paragraph>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
