import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => {
    return (
        <Router>
            <QueryClientProvider client={queryClient}>
                <ScrollToTop />
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route
                            path="/products/:id"
                            element={<ProductDetail />}
                        />
                        <Route path="/brands" element={<Brands />} />
                        <Route path="/shop" element={<Shop />} />
                        {/* <Route path="/categories" element={<Categories />} /> */}
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </Layout>
            </QueryClientProvider>
        </Router>
    );
};

export default App;
