import { Link } from "react-router-dom";
import Image from "../components/ui/Image";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import Heading from "../components/ui/Heading";

const Brands = () => {
    return (
        <>
            <Breadcrumbs />
            <div className="container py-8">
                <Heading as="h2" className="text-accent font-medium">
                    Brands
                </Heading>
                <div className="bg-white rounded-md py-4">
                    <div className="flex flex-wrap -mx-3">
                        {Array(10)
                            .fill(0)
                            .map((item, idx) => (
                                <Link
                                    to={`/brands/${idx + 1}`}
                                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-3"
                                    key={idx}
                                >
                                    <Image
                                        src="https://dummyjson.com/image/300x200"
                                        alt={idx}
                                        className="rounded-md w-full h-full transition-transform duration-300 hover:scale-105"
                                    />
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Brands;
