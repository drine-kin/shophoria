const Heading = ({
    as: Component = "h1",
    children,
    className = "",
    ...props
}) => {
    return (
        <Component
            className={`text-2xl font-bold tracking-wide ${className}`}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Heading;
