import { useRef, useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import TextArea from "../../ui/TextArea";
import TextInput from "../../ui/TextInput";

const ContactForm = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSending(true);

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            toast.success("Message sent successfully!");
            form.current.reset();
        } catch (error) {
            toast.error("Failed to send message. Please try again.");
            console.error("EmailJS Error:", error);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="bg-surface">
            <div className="container py-16">
                <div className="max-w-3xl m-auto bg-white p-8 rounded-md shadow-sm space-y-6">
                    <Heading className="text-accent font-medium">
                        Send us a message
                    </Heading>
                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                        <TextInput
                            name="name"
                            label="Name"
                            placeholder="Your Name"
                            required
                        />
                        <TextInput
                            type="email"
                            name="email"
                            label="Email"
                            placeholder="you@example.com"
                            required
                        />
                        <TextInput
                            name="subject"
                            label="Subject"
                            placeholder="Subject"
                            required
                        />
                        <TextArea
                            name="message"
                            label="Message"
                            placeholder="Your Message"
                            required
                        />
                        <div className="flex justify-end">
                            <Button
                                disabled={isSending}
                                className="bg-primary text-white hover:bg-primary/80"
                            >
                                Send Message
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
