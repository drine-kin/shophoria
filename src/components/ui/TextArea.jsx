import Paragraph from "./Paragraph";

const TextArea = ({ name, label, placeholder, error, ...rest }) => {
    return (
        <div>
            <label className="block mb-2 font-medium">{label}</label>
            <textarea
                name={name}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-400"
                rows="5"
                placeholder={placeholder}
                {...rest}
            ></textarea>
            {error && (
                <Paragraph className="text-sm !font-medium text-red-500 mt-1">
                    {error}
                </Paragraph>
            )}
        </div>
    );
};

export default TextArea;
