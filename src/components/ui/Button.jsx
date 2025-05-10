const Button = ({
    children,
    className = "",
    ...rest
}) => {

    return (
        <button
            className={`rounded font-medium transition duration-200 focus:outline-none px-4 py-2 text-base ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
