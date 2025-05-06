const Paragraph = ({
    children,
    size = "base", // sm | base | lg
    weight = "normal", // light | normal | medium | semibold | bold
    align = "left", // left | center | right
    className = "",
    ...props
}) => {
    const sizeClasses = {
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
    };

    const weightClasses = {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
    };

    const alignClasses = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
    };

    return (
        <p
            className={`text-textMain ${sizeClasses[size]} ${weightClasses[weight]} ${alignClasses[align]} ${className}`}
            {...props}
        >
            {children}
        </p>
    );
};

export default Paragraph;
