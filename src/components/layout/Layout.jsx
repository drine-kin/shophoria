import { Toaster } from "react-hot-toast";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="relative bg-surface min-h-[70vh]">{children}</main>
            <Footer />
            <Toaster
                position="bottom-right"
                toastOptions={{
                    success: {
                        duration: 3000,
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
