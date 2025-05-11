import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import { FiMapPin } from "react-icons/fi";

const contactInfo = {
    address: {
        icon: FiMapPin,
        label: "11051, Kan Street, Hlaing Township, Yangon, Myanmar",
        href: "https://maps.google.com",
    },
    email: {
        icon: HiOutlineEnvelope,
        label: "contact@thetriotails.com",
        href: "mailto:contact@thetriotails.com",
    },
    phone: { 
        icon: HiOutlinePhone, 
        label: "09 978475562", 
        href: "tel:+959978475562" 
    },
};

export default contactInfo;
