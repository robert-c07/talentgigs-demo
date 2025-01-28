import { useState } from 'react';
import BackToTop from "../elements/BackToTop";
import Whatsapp from '../elements/Whatsapp';
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children, headerStyle }) => {
    const [openClass, setOpenClass] = useState('');

    const toggleMenu = () => {
        if (openClass === "sidebar-visible") {
            setOpenClass("")
            document.body.classList.remove("mobile-menu-active");
        } else {
            document.body.classList.add("mobile-menu-active");
            setOpenClass("sidebar-visible")
        }
    }

    const handleRemove = () => {
        if (openClass === "sidebar-visible") {
            setOpenClass("")
            document.body.classList.remove("mobile-menu-active");
        }
    }

    return (
        <>
            <div  className={openClass && "body-overlay-1"} onClick={handleRemove} />

            <Header toggleMenu={toggleMenu} headerStyle={headerStyle} />
            <Sidebar openClass={openClass} />
            <main className="main">
                {children}
            </main>
            <Footer />
            <Whatsapp/>
            <BackToTop/>
        </>
    );
};

export default Layout;