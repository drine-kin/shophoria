const Paragraph = ({ children, className = "", ...props }) => {
    return (
        <p
            className={`font-light text-base ${className}`}
            {...props}
        >
            {children}
        </p>
    );
};

export default Paragraph;
