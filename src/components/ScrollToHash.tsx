import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Wait for the page to render, then scroll to the element
            const timeout = setTimeout(() => {
                const el = document.querySelector(hash);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            // No hash — scroll to top
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToHash;
