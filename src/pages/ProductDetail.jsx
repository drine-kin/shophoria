import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import Detail from "../components/container/product/Detail";
import { useProductDetail } from "../hooks/queries";
import PageContainer from "../components/custom/PageContainer";

const ProductDetail = () => {
    const { id } = useParams();

    const { data: product, isLoading, isError } = useProductDetail(id);

    return (
        <>
            <Breadcrumbs />
            <PageContainer isLoading={isLoading} error={isError}>
                {product && <Detail data={product} />}
            </PageContainer>
        </>
    );
};

export default ProductDetail;
