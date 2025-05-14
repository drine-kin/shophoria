import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import { FiMapPin } from "react-icons/fi";

const contactInfo = {
    address: {
        icon: FiMapPin,
        label: "Yadanar Hninsi Residence, Yadanar Road, 61 Ward, Dagon Seikkan Tsp",
        href: "https://maps.google.com",
    },
    email: {
        icon: HiOutlineEnvelope,
        label: "contact@thetriotails.com",
        href: "mailto:contact@thetriotails.com",
    },
    phone: { 
        icon: HiOutlinePhone, 
        label: "09 400 200 008", 
        href: "tel:+959 400 200 008"  
    },
};

export default contactInfo;
