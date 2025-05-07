const Image = ({ src = "", alt = "", className = "", ...rest }) => {
    return <img src={src} className={`${className}`} alt={alt} {...rest} />;
};

export default Image;
