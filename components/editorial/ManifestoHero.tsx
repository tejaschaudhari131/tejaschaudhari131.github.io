"use client";

import React, { useEffect, useRef } from "react";
import { MacroGrid } from "../MacroGrid";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Download } from "lucide-react";

export const ManifestoHero = () => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
            const width = rect.width;
            const height = rect.height;
            const mouseXVal = e.clientX - rect.left;
            const mouseYVal = e.clientY - rect.top;
            const xPct = mouseXVal / width - 0.5;
            const yPct = mouseYVal / height - 0.5;
            x.set(xPct);
            y.set(yPct);
        }
    };

    return (
        <section
            className="min-h-[90vh] flex items-center relative overflow-hidden"
            onMouseMove={handleMouseMove}
            ref={ref}
        >
            <MacroGrid className="w-full relative z-10">
                <div className="md:col-span-8 flex flex-col justify-end pb-12">
                    <h1 className="font-display text-[8vw] md:text-[7vw] leading-[0.85] font-bold tracking-tighter text-foreground mb-4 break-words">
                        TEJARAM <br /> CHAUDHARI
                    </h1>

                    <div className="flex items-center gap-4 text-xl md:text-2xl font-mono text-accent mb-8">
                        <span>&gt;</span>
                        <Typewriter
                            words={['Engineer. Researcher. Founder.', 'Hardware. Software. Security.']}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>

                    <div className="max-w-2xl">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Cyber-Physical Systems Engineer & Founder
                        </h2>
                        <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                            <p>
                                I combine technical security research with entrepreneurial leadership.
                            </p>

                            <div>
                                <strong className="text-black block mb-2">My background spans three key areas:</strong>
                                <ul className="space-y-1 text-base">
                                    <li><span className="font-medium text-black">Hardware Security:</span> Research Intern at BARC (Government of India).</li>
                                    <li><span className="font-medium text-black">Information Security:</span> Published author on Post-Quantum Cryptography & AI.</li>
                                    <li><span className="font-medium text-black">Management:</span> Founder & Director of the thinkMINNT Foundation.</li>
                                </ul>
                            </div>

                            <p>
                                I am focused on securing critical systems through both advanced engineering and strategic oversight.
                            </p>

                            <div className="pt-4">
                                <a
                                    href="/resume.pdf"
                                    download="Tejaram_Chaudhari_Resume.pdf"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-accent transition-colors group"
                                >
                                    <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-4 relative h-[50vh] md:h-auto flex items-center justify-center">
                    {/* 3D Parallax Image Container */}
                    <motion.div
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        className="relative w-full aspect-[3/4] max-w-md"
                    >
                        {/* Image Layer */}
                        <div className="absolute inset-0 bg-gray-200 overflow-hidden grayscale contrast-125">
                            <img
                                src="/me.jpg"
                                alt="Tejaram Chaudhari"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Cyber Overlay Layer (floats above) */}
                        <motion.div
                            style={{ translateZ: 40 }}
                            className="absolute inset-0 border-2 border-accent/30 pointer-events-none"
                        >
                            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-accent" />
                            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-accent" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-accent/20" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-full bg-accent/20" />
                        </motion.div>
                    </motion.div>
                </div>
            </MacroGrid>
        </section>
    );
};
