import { Toaster } from "react-hot-toast";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster
                position="bottom-right"
                toastOptions={{
                    success: {
                        duration: 3000,
                        iconTheme: {
                            primary: "#E3462C",
                            secondary: "#fff",
                        },
                    },
                }}
            />
        </div>
    );
};

export default Layout;
