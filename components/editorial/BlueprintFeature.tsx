import React from "react";
import { MacroGrid } from "../MacroGrid";

export const BlueprintFeature = () => {
    return (
        <section className="py-24 bg-[#0a192f] text-white relative overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(to right, #4f46e5 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
            />

            <MacroGrid>
                <div className="md:col-span-7 relative z-10">
                    <div className="border-l-2 border-accent pl-8 py-4">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                            <span className="font-mono text-accent text-xl md:text-2xl tracking-widest uppercase block font-bold">
                                Research Intern @ BARC
                            </span>
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="px-3 py-1 border border-white/20 rounded-full text-sm font-mono text-white uppercase bg-white/5">
                                    Jan 2025 - March 2025
                                </span>
                                <span className="px-3 py-1 border border-white/20 rounded-full text-sm font-mono text-white uppercase bg-white/5">
                                    Navi Mumbai, Pune
                                </span>
                            </div>
                        </div>

                        <h2 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-8">
                            Precision at the <br /> Nanosecond Scale.
                        </h2>

                        <div className="max-w-2xl text-gray-300 text-lg leading-relaxed space-y-6">
                            <p>
                                At the <span className="text-white font-bold">Bhabha Atomic Research Centre (BARC)</span>, I engineered a microcontroller-based pulse generation system critical for high-speed synchronization tasks.
                            </p>
                            <p>
                                The challenge was maintaining signal integrity over long distances. I implemented <span className="text-white font-bold">Modbus RTU over UART</span> to ensure robust industrial communication.
                            </p>
                            <p>
                                By optimizing the firmware for the <span className="text-white font-bold">Cypress PSoC 5LP</span>, I achieved a timing precision of <span className="text-accent font-mono text-2xl">83.33ns</span>, significantly outperforming standard implementations.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Visuals - Evidence Stack */}
                <div className="md:col-span-5 relative h-[500px] group perspective-1000 mt-12 md:mt-0 flex items-center justify-center z-20">

                    {/* Photo 1: With Mentor (Bottom -> Top on Hover) */}
                    <div className="absolute w-80 h-96 bg-white p-3 shadow-xl transform rotate-[-6deg] translate-x-[-15px] transition-all duration-500 group-hover:rotate-[-5deg] group-hover:translate-x-0 group-hover:scale-105 z-10 group-hover:z-30 origin-bottom-left">
                        <div className="w-full h-full overflow-hidden relative bg-gray-200">
                            <img src="/barc_sir.jpg" alt="With Mentor" className="w-full h-full object-cover transition-all duration-500 filter grayscale contrast-125 group-hover:filter-none" />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full bg-white p-3 border-t border-gray-100">
                            <p className="font-handwriting text-black text-sm text-center opacity-70">Mentorship @ BARC</p>
                        </div>
                    </div>

                    {/* Photo 2: Lab Setup (Top -> Bottom on Hover) */}
                    <div className="absolute w-80 h-96 bg-white p-3 shadow-2xl transform rotate-[4deg] translate-x-[15px] transition-all duration-500 group-hover:rotate-[10deg] group-hover:translate-x-[40px] group-hover:scale-95 z-20 group-hover:z-10 origin-bottom-right">
                        <div className="w-full h-full overflow-hidden relative">
                            <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay z-10" />
                            <img src="/barc.jpg" alt="Lab Setup" className="w-full h-full object-cover transition-all duration-500 filter grayscale contrast-125 group-hover:filter-none" />

                            {/* Badge */}
                            <div className="absolute top-3 right-3 w-10 h-10 rounded-full border border-accent flex items-center justify-center bg-accent/10">
                                <div className="w-5 h-5 bg-accent rounded-full animate-pulse" />
                            </div>
                        </div>
                        <div className="absolute bottom-4 right-4 bg-accent/10 px-2 py-1 border border-accent/50">
                            <span className="text-[10px] font-mono text-accent uppercase tracking-widest">FIG 2.1</span>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-0 right-0 z-0 opacity-20 pointer-events-none">
                        <svg width="250" height="250" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                            <path d="M50 10 L50 90 M10 50 L90 50" stroke="white" strokeWidth="1" />
                        </svg>
                    </div>
                </div>
            </MacroGrid>
        </section>
    );
};
