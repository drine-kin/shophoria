import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Cart from "./pages/Cart";
import About from "./pages/About";
import ScrollToTop from "./components/custom/ScrollToTop";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    {/* <Route path="/shop" element={<Shop />} />
                    <Route path="/brands" element={<Brands />} />
                    <Route path="/categories" element={<Categories />} /> */}
                    {/* <Route path="/blogs" element={<Blogs />} />
                    <Route path="/theme" element={<Contact />} /> */}
                    <Route path="/cart" element={<Cart />} />
                </Routes>
                <ScrollToTop />
            </Layout>
        </Router>
    );
};

export default App;
