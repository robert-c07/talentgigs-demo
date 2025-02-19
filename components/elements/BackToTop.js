/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";

function BackToTop() {
    const [hasScrolled, setHasScrolled] = useState("false");
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    });

    // const scrollToTop = () => {
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    // };

    const onScroll = () => {
        if (window.scrollY > 100 && !hasScrolled) {
            setHasScrolled(true);
        } else if (window.scrollY < 100 && hasScrolled) {
            setHasScrolled(false);
        }
    };

    return (
        <>
            {hasScrolled && (
                <a id="scrollUp" href="#top" style={{position: 'fixed', margin: '90px 10px', zIndex: 2147483647 }}>
                    <i className="fi-rr-arrow-small-up" />
                </a>


            )}
        </>   
    );
}
export default BackToTop;