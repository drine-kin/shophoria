import { BsSearch } from "react-icons/bs";

const SearchForm = ({ containerClass, value, onChange, ...rest }) => {
    return (
        <div
            className={`relative bg-white border border-gray-300 rounded-lg overflow-hidden max-w-full ${
                containerClass ? containerClass : ""
            }`}
        >
            <div className="absolute left-5 top-1/2 -translate-y-1/2"> 
                <BsSearch className="text-accent" size={20} />
            </div>
            <input
                type="search"
                className="peer w-full outline-none pl-14 px-4 py-3"
                placeholder="Search"
                value={value}
                onChange={onChange}
                {...rest}
            />
        </div>
    );
};

export default SearchForm;
