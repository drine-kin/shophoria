const TextInput = ({ type = "name", name, label, placeholder, ...rest }) => {
    return (
        <div>
            <label className="block mb-2 font-medium">{label}</label>
            <input
                type={type}
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                name={name}
                placeholder={placeholder}
                {...rest}
            />
        </div>
    );
};

export default TextInput;
