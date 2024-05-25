import { useState, useEffect, useCallback } from "react";

const useWindow = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const handleResize = useCallback(() => {
        setIsMobile(window.innerWidth <= 768);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]);

    return [isMobile];
};

export default useWindow;