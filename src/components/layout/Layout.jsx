import { Toaster } from "react-hot-toast";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="relative min-h-[calc(100vh-80px)]">{children}</main>
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
                    error: {
                        duration: 3000,
                    }
                }}
            />
        </div>
    );
};

export default Layout;
