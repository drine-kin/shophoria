import { Link } from "react-router-dom";
import Heading from "../../ui/Heading";
import Image from "../../ui/Image";
import Button from "../../ui/Button";
import { useBrands } from "../../../hooks/queries";
import BrandList from "../../ui/BrandList";
import Paragraph from "../../ui/Paragraph";
import PageContainer from "../../custom/PageContainer";

const OurBrands = () => {
    const { data, isLoading, error } = useBrands(1);

    const brands = data?.data;

    return (
        <div className="bg-primary py-8">
            <div className="container space-y-6">
                <div className="flex justify-between items-center">
                    <Heading className="font-medium text-white">
                        Our Main Brands
                    </Heading>
                    <Link to="/brands">
                        <Button className="bg-white transition-colors duration-300 hover:bg-accent hover:text-white">
                            See More
                        </Button>
                    </Link>
                </div>
                <div className="bg-white rounded-md px-6 py-4">
                    <PageContainer isLoading={isLoading} error={error}>
                        {brands && brands.length > 0 ? (
                            <BrandList brands={brands.slice(0, 5)} hideLabel />
                        ) : (
                            <Paragraph>No record found.</Paragraph>
                        )}
                    </PageContainer>
                </div>
            </div>
        </div>
    );
};

export default OurBrands;
