import { useState, useEffect, useCallback, MouseEvent } from "react";

const useWindow = (sender?: string) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const handleResize = useCallback(() => {
        setIsMobile(window.innerWidth <= 768);
    }, []);

    const open = (e: MouseEvent<HTMLParagraphElement>) => {
        const id = e.currentTarget.id;
        const target = e.currentTarget.textContent;
        id !== "tel" && id !== "mailto"
            ? window.open(`${id}`, "_blank")
            : window.open(`${id}:${target}`);
    };

    useEffect(() => {
        if (sender) return;
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]);

    return { isMobile, open };
};

export default useWindow;