import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import Detail from "../components/container/product/Detail";
import products from "../constants/products";

const ProductDetail = () => {
    const { id } = useParams();



    return (
        <>
            <Breadcrumbs />
            <Detail product={products[0]} />
        </>
    );
};

export default ProductDetail;
