import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Cart from "./pages/Cart";

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/shop" element={<Shop />} />
                    <Route path="/brands" element={<Brands />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/theme" element={<Contact />} /> */}
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
