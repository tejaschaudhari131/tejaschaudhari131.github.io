"use client";

import React, { useState } from "react";
import { MacroGrid } from "../MacroGrid";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const VideoStory = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="py-12">
            <MacroGrid>
                {/* Left Content */}
                <div className="md:col-span-6 flex flex-col justify-center pr-12 mb-12 md:mb-0">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="px-3 py-1 border border-black/10 rounded-full text-xs font-mono text-gray-500 uppercase bg-gray-50">
                            Non-Profit Initiative
                        </span>
                        <div className="h-px bg-gray-200 flex-1" />
                    </div>

                    <h2 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 text-black">
                        thinkMINNT <br /> Foundation
                    </h2>

                    <div className="flex items-center gap-8 mb-8">
                        <div>
                            <span className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">Role</span>
                            <span className="block text-xl font-display font-bold text-accent">Founder & Director</span>
                        </div>
                        <div>
                            <span className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">Since</span>
                            <span className="block text-xl font-display font-bold text-black">Nov 2024</span>
                        </div>
                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed max-w-xl mb-8">
                        Dedicated to bridging the digital divide, thinkMINNT empowers students in underserved communities with hands-on engineering workshops and mentorship. We are building a future where technology is accessible to all.
                    </p>

                    <div className="flex items-center gap-12 mb-8">
                        <div>
                            <span className="text-4xl font-bold text-black font-display block">500+</span>
                            <span className="text-xs text-gray-400 font-mono uppercase">Students Impacted</span>
                        </div>
                        <div>
                            <span className="text-4xl font-bold text-black font-display block">10+</span>
                            <span className="text-xs text-gray-400 font-mono uppercase">Workshops Conducted</span>
                        </div>
                    </div>

                    <a
                        href="https://thinkminnt.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-black font-mono text-sm uppercase tracking-widest hover:text-accent transition-colors w-fit group"
                    >
                        Visit thinkminnt.com
                        <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </a>
                </div>

                {/* Right Browser Card */}
                <div className="md:col-span-6 perspective-1000 flex items-center">
                    <a href="https://thinkminnt.com" target="_blank" rel="noopener noreferrer" className="w-full block group/card">
                        <motion.div
                            className="relative w-full aspect-[16/10] bg-gray-900 rounded-xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:rotate-y-[-5deg] hover:rotate-x-[5deg] shadow-2xl hover:shadow-accent/20 border border-gray-800"
                            onHoverStart={() => setIsHovered(true)}
                            onHoverEnd={() => setIsHovered(false)}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Browser Frame Header */}
                            <div className="absolute top-0 left-0 w-full h-8 bg-gray-800 flex items-center px-3 gap-1.5 z-20 border-b border-gray-700">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                <div className="ml-2 px-2 py-0.5 bg-gray-900/50 rounded text-[8px] font-mono text-gray-400 flex-1 text-center truncate group-hover/card:text-accent transition-colors">
                                    thinkminnt.com
                                </div>
                            </div>

                            {/* Website Preview - No Overlay */}
                            <div className="absolute inset-0 top-8 bg-gray-900">
                                <img
                                    src="/thinkminnt_preview.png"
                                    alt="thinkMINNT Website"
                                    className="w-full h-full object-cover transition-all duration-700 filter grayscale contrast-125 group-hover/card:filter-none group-hover/card:scale-105"
                                />
                            </div>
                        </motion.div>
                    </a>
                </div>
            </MacroGrid>
        </section>
    );
};
