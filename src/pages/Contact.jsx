import { Link } from "react-router-dom";
import Paragraph from "../components/ui/Paragraph";
import contactInfo from "../constants/contactInfo";
import Heading from "../components/ui/Heading";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import ContactForm from "../components/container/contact/ContactForm";

const Contact = () => {
    
    return (
        <>
            <Breadcrumbs />
            <ContactForm />
            <div className="bg-secondary">
                <div className="container text-center py-10">
                    <Heading className="text-accent font-medium pb-3">
                        Or reach us directly
                    </Heading>
                    <Link to={contactInfo.email.href}>
                        <Paragraph className="py-0.5 hover:text-primary">
                            {contactInfo.email.label}
                        </Paragraph>
                    </Link>
                    <Link to={contactInfo.phone.href}>
                        <Paragraph className="py-0.5 hover:text-primary">
                            {contactInfo.phone.label}
                        </Paragraph>
                    </Link>
                    <Link to={contactInfo.address.href}>
                        <Paragraph className="py-0.5 hover:text-primary">
                            {contactInfo.address.label}
                        </Paragraph>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Contact;
