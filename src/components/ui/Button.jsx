const Button = ({
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...props
}) => {
    const variantClasses = {
        primary: "bg-[#E3462C] text-white hover:bg-[#cc3924]",
        secondary: "bg-[#F9D045] text-[#1A1F16] hover:bg-yellow-400",
        accent: "bg-[#253239] text-white hover:bg-[#1a252a]",
        neutral: "bg-[#F4F4F4] text-[#1A1F16] hover:bg-[#e0e0e0]",
    };

    const sizeClasses = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    return (
        <button
            className={`rounded font-medium transition duration-200 focus:outline-none ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
