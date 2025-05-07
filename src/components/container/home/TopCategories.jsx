import { Link } from "react-router-dom";
import categories from "../../../constants/categories";
import Heading from "../../ui/Heading";
import Image from "../../ui/Image";

const TopCategories = () => {
    return (
        <div className="container py-8 space-y-4">
            <Heading className="font-medium">Top Categories</Heading>
            <div className="flex flex-wrap justify-start items-center -mx-4">
                {categories.map((category) => (
                    <Link
                        to={category.link}
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 cursor-pointer transition-transform duration-500 hover:scale-[1.03]"
                        key={category.id}
                    >
                        <div className="p-6 border rounded-md space-y-4">
                            <Image
                                src={category.image}
                                alt={category.name}
                                className="w-full h-52 object-cover"
                            />
                            <Heading as="h2" className="font-normal text-lg">
                                {category.name}
                            </Heading>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TopCategories;
