import Loading from "../ui/Loading";
import Paragraph from "../ui/Paragraph";

const PageContainer = ({ isLoading, error, children }) => {
    if (isLoading) return <Loading />;

    if (error) {
        return (
            <Paragraph className="text-red-500">
                {error.message || "Something went wrong."}
            </Paragraph>
        );
    }

    return children;
};

export default PageContainer;
