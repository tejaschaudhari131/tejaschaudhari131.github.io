"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ScrollyText = () => {
    const { scrollYProgress } = useScroll();

    const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const x2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 flex flex-col justify-center opacity-[0.03] overflow-hidden select-none">
            <motion.div style={{ x: x1 }} className="whitespace-nowrap mb-8">
                <span className="text-[15vw] font-display font-bold leading-none">
                    ADVERSARIAL ML ROBOTICS QUANTUM ADVERSARIAL ML ROBOTICS QUANTUM
                </span>
            </motion.div>
            <motion.div style={{ x: x2 }} className="whitespace-nowrap">
                <span className="text-[15vw] font-display font-bold leading-none">
                    CYBER-PHYSICAL SYSTEMS IOT CYBER-PHYSICAL SYSTEMS IOT
                </span>
            </motion.div>
        </div>
    );
};
