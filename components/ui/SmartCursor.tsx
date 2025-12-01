"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const SmartCursor = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")) {
                setCursorVariant("link");
            } else if (target.tagName === "P" || target.tagName === "H1" || target.tagName === "H2" || target.tagName === "H3") {
                setCursorVariant("text");
            } else {
                setCursorVariant("default");
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            height: 32,
            width: 32,
            x: mousePos.x - 16,
            y: mousePos.y - 16,
            backgroundColor: "transparent",
            border: "1px solid #111827",
            mixBlendMode: "difference" as const,
        },
        text: {
            height: 64,
            width: 2,
            x: mousePos.x - 1,
            y: mousePos.y - 32,
            backgroundColor: "#111827",
            border: "none",
            mixBlendMode: "difference" as const,
        },
        link: {
            height: 64,
            width: 64,
            x: mousePos.x - 32,
            y: mousePos.y - 32,
            backgroundColor: "rgba(255, 79, 0, 0.2)", // Accent color transparent
            border: "none",
            mixBlendMode: "normal" as const,
        },
    };

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
            variants={variants}
            animate={cursorVariant}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
    );
};
