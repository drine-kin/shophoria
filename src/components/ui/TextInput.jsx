import Paragraph from "./Paragraph";

const TextInput = ({ type = "name", name, label, placeholder, error, ...rest }) => {
    return (
        <div>
            <label className="block mb-2 font-medium">{label}</label>
            <input
                type={type}
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                name={name}
                placeholder={placeholder}
                {...rest}
            />
            {error && (
                <Paragraph className="text-sm !font-medium text-red-500 mt-1">
                    {error}
                </Paragraph>
            )}
        </div>
    );
};

export default TextInput;
