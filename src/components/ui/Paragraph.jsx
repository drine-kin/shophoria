const Paragraph = ({ children, className = "", ...props }) => {
    return (
        <p
            className={`font-light text-base text-accent ${className}`}
            {...props}
        >
            {children}
        </p>
    );
};

export default Paragraph;
