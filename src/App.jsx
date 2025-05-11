import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Cart from "./pages/Cart";
import About from "./pages/About";
import ScrollToTop from "./components/custom/ScrollToTop";
import ProductDetail from "./pages/ProductDetail";
import Brands from "./pages/Brands";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import useAuthStore from "./store/authStore";
import CheckoutSuccess from "./pages/ConfirmOrder";
import ConfirmOrder from "./pages/ConfirmOrder";
import OrderDetail from "./pages/OrderDetail";

const queryClient = new QueryClient();

const AppRoutes = () => {
    const { isLoggedIn } = useAuthStore();

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route
                path="/register"
                element={isLoggedIn ? <Navigate to="/orders" /> : <Register />}
            />
            <Route
                path="/login"
                element={isLoggedIn ? <Navigate to="/orders" /> : <Login />}
            />
            <Route
                path="/confirm"
                element={isLoggedIn ? <ConfirmOrder /> : <Navigate to="/login" />}
            />
            <Route
                path="/orders"
                element={isLoggedIn ? <Orders /> : <Navigate to="/login" />}
            />
            <Route
                path="/orders/:id"
                element={isLoggedIn ? <OrderDetail /> : <Navigate to="/login" />}
            />
        </Routes>
    );
};

const App = () => {
    return (
        <Router>
            <QueryClientProvider client={queryClient}>
                <ScrollToTop />
                <Layout>
                    <AppRoutes />
                </Layout>
            </QueryClientProvider>
        </Router>
    );
};

export default App;
