const TextArea = ({ name, label, placeholder, ...rest }) => {
    return (
        <div>
            <label className="block mb-2 font-medium">{label}</label>
            <textarea
                name={name}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                rows="5"
                placeholder={placeholder}
                {...rest}
            ></textarea>
        </div>
    );
};

export default TextArea;
