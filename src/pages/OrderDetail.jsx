import { useParams } from "react-router-dom";
import { useOrderDetail } from "../hooks/queries";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import PageContainer from "../components/custom/PageContainer";
import useAuthStore from "../store/authStore";
import Detail from "../components/container/order/Detail";

const OrderDetail = () => {
    const { id } = useParams();
    const { token } = useAuthStore();

    const { data: order, isLoading, isError } = useOrderDetail(id, token);

    return (
        <>
            <Breadcrumbs />
            <PageContainer isLoading={isLoading} error={isError}>
                {order && <Detail data={order} />}
            </PageContainer>
        </>
    );
};

export default OrderDetail;
