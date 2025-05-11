import { Link } from "react-router-dom";
import Paragraph from "./Paragraph";
import Image from "./Image";

const BrandList = ({ brands, hideLabel }) => {
    return (
        <div className="flex flex-wrap -mx-3">
            {brands.map((item, idx) => (
                <Link
                    to={`/shop?brand_id=${item.id}&brand_name=${item.name}`}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-3 space-y-4"
                    key={idx}
                >
                    <div className="w-full aspect-square border rounded-md shadow-sm">
                        <Image
                            src={`${import.meta.env.VITE_IMAGE_URL}/download/${
                                item.logo
                            }`}
                            onError={(e) => {
                                e.target.onerror = null; // Prevent infinite loop
                                e.target.src =
                                    "https://dummyjson.com/image/300x200";
                            }}
                            alt={idx}
                            className="rounded-md w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    {hideLabel ? null : <Paragraph>{item.name}</Paragraph>}
                </Link>
            ))}
        </div>
    );
};

export default BrandList;
