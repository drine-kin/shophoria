import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ rating }) => {
    return (
        <div className="flex">
            {[...Array(5)].map((_, i) => {
                const full = i + 1 <= Math.floor(rating);
                const half =
                    i + 0.5 === rating || (i < rating && i + 1 > rating);

                return full ? (
                    <FaStar key={i} className="text-secondary" />
                ) : half ? (
                    <FaStarHalfAlt key={i} className="text-secondary" />
                ) : (
                    <FaRegStar key={i} className="text-gray-200" />
                );
            })}
        </div>
    );
};

export default Rating;
