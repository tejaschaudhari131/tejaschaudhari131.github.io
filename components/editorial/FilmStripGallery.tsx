"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const slides = [
    {
        id: 4,
        title: "Hackathon Finals",
        subtitle: "Code Unnati / SAP",
        category: "Presentation",
        src: "/hackathon_finals.jpg"
    },
    {
        id: 5,
        title: "Humanoid Proto",
        subtitle: "Lab Development",
        category: "Robotics",
        src: "/me_with_robot.jpg"
    },
    {
        id: 6,
        title: "Quiz Winner",
        subtitle: "App Dev Day / Pune Tech Community",
        category: "Community",
        src: "/quiz_winner.jpg"
    },
    {
        id: 7,
        title: "First Runner Up",
        subtitle: "GDSC Impact Ideathon",
        category: "Hackathon",
        src: "/gdsc_ideathon_v2.jpg",
        objectPosition: "right"
    },
    {
        id: 8,
        title: "Poster Presentation",
        subtitle: "Digital Twin Showcase",
        category: "Research",
        src: "/digital_twin_poster.jpg"
    },
    {
        id: 9,
        title: "2nd Runner Up",
        subtitle: "Gujarat SAP Hackathon",
        category: "Hackathon",
        src: "/gujarat_sap_hackathon.jpg",
        objectPosition: "top"
    },
    {
        id: 10,
        title: "Engineering Next 2024",
        subtitle: "Infosys / Reimagining with AI",
        category: "Representation",
        src: "/infosys_engineering_next.jpg",
        objectPosition: "top"
    }
];

export const FilmStripGallery = () => {
    const [activeId, setActiveId] = useState<number | null>(null);

    return (
        <section className="py-32 bg-transparent text-gray-900 overflow-hidden relative border-t border-gray-200">
            {/* Grid Pattern Background (Dark Dots) - Optional, keeping for texture if needed, or remove if fully transparent desired. 
                User asked for transparent background, so let's use the dot pattern from CommunityImpact for consistency if it's transparent, 
                or just keep it clean. Let's keep the dot pattern but remove the noise.
            */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(#000000 1px, transparent 1px)",
                    backgroundSize: "30px 30px"
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="flex items-end justify-between mb-16">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="h-[1px] w-12 bg-gray-400" />
                            <span className="font-mono text-sm text-gray-500 uppercase tracking-widest">
                                Visual Archive
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 tracking-tight">
                            Moments in <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-500">Motion</span>
                        </h2>
                    </div>
                    <div className="hidden md:block text-right">
                        <p className="font-mono text-xs text-gray-400 uppercase tracking-widest">
                            Selected Works &<br />Achievements
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 h-[700px] w-full">
                    {slides.map((slide, index) => (
                        <motion.div
                            key={slide.id}
                            layout
                            onHoverStart={() => setActiveId(slide.id)}
                            onHoverEnd={() => setActiveId(null)}
                            className={`relative rounded-xl overflow-hidden cursor-pointer group transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${activeId === slide.id ? 'flex-[4]' : 'flex-1'
                                } ${activeId !== null && activeId !== slide.id ? 'opacity-60 grayscale' : 'opacity-100'}`}
                        >
                            {/* Photo Frame Border */}
                            <div className="absolute inset-0 border-[6px] border-white shadow-2xl z-20 pointer-events-none rounded-xl" />

                            {/* Background Image */}
                            <div className="absolute inset-0 bg-gray-200">
                                <img
                                    src={slide.src}
                                    alt={slide.title}
                                    className={`w-full h-full object-cover transition-transform duration-1000 ${activeId === slide.id ? 'scale-110' : 'scale-100'
                                        }`}
                                    style={{ objectPosition: (slide as any).objectPosition || 'center' }}
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${activeId === slide.id ? 'opacity-60' : 'opacity-30'
                                    }`} />
                            </div>

                            {/* Sequence Number */}
                            <div className={`absolute top-6 left-6 z-30 transition-all duration-500 ${activeId === slide.id ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
                                }`}>
                                <span className="font-display text-4xl font-bold text-white/90 drop-shadow-md">
                                    0{index + 1}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-30">
                                <AnimatePresence mode="wait">
                                    {activeId === slide.id ? (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.4, delay: 0.1 }}
                                            className="space-y-3"
                                        >
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="px-2 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-mono uppercase tracking-wider rounded">
                                                    {slide.category}
                                                </span>
                                            </div>
                                            <h3 className="text-4xl md:text-5xl font-display font-bold text-white leading-none tracking-tight drop-shadow-lg">
                                                {slide.title}
                                            </h3>
                                            <p className="text-gray-200 font-mono text-sm border-l-2 border-white/50 pl-3">
                                                {slide.subtitle}
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="rotate-[-90deg] whitespace-nowrap origin-center"
                                            >
                                                <span className="text-2xl font-display font-bold text-white tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md">
                                                    View
                                                </span>
                                            </motion.div>
                                        </div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Hover Indicator */}
                            <div className={`absolute top-6 right-6 z-30 transition-all duration-500 ${activeId === slide.id ? 'opacity-100 rotate-45' : 'opacity-0 rotate-0'
                                }`}>
                                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg">
                                    <ArrowUpRight className="w-6 h-6" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
