import Sidebar from "../components/ui/Sidebar";
import Heading from "../components/ui/Heading";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import ProductList from "../components/container/product/ProductList";

const Shop = () => {
    return (
        <div className="bg-surface">
            <Breadcrumbs />
            <div className="container py-8">
                <div className="space-y-6">
                    <Heading as="h2" className="text-accent font-medium">
                        Shop
                    </Heading>
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="w-full lg:w-1/4">
                            <Sidebar />
                        </div>
                        <div className="w-full lg:w-3/4">
                            <ProductList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
