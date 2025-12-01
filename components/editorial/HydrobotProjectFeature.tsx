import React from "react";
import { MacroGrid } from "../MacroGrid";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

export const HydrobotProjectFeature = () => {
    return (
        <section className="py-24 text-black border-t border-gray-200">
            <MacroGrid>
                {/* Header & Narrative */}
                <div className="md:col-span-5 flex flex-col justify-between h-full">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
                                Industrial & Tech
                            </span>
                        </div>

                        <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-2">
                            HYDROBOT
                        </h2>
                        <p className="font-display text-xl text-gray-400 mb-4">
                            Autonomous Cyber-Physical System
                        </p>
                        <p className="font-mono text-sm text-gray-500 mb-12">
                            Capstone Project (Code Unnati / SAP)
                        </p>

                        <div className="space-y-8 max-w-lg">
                            <div>
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-accent">01.</span> The System
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    I architected a fully autonomous surface vehicle capable of navigating dynamic water environments. Unlike standard remote-controlled robots, Hydrobot operates on a Hierarchical Control Architecture—handling high-level path planning on a Raspberry Pi while delegating low-level motor actuation to an Arduino.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-accent">02.</span> The Intelligence
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    The core vision system utilizes YOLOv8, optimized for Edge Computing, to perform real-time object detection and classification (87% accuracy).
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-accent">03.</span> The IoT Dashboard
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    To enable remote monitoring, I developed a full-stack telemetry dashboard (React + Node.js) that visualizes sensor fusion data (pH, turbidity, GPS) via Socket.IO for low-latency communication.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 space-y-4">
                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs font-bold uppercase text-gray-400 w-full mb-1">Edge AI</span>
                            {["YOLOv8", "OpenCV", "PyTorch"].map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-mono text-blue-600">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs font-bold uppercase text-gray-400 w-full mb-1">Hardware</span>
                            {["Raspberry Pi 4", "Arduino Uno", "Ultrasonic/LiDAR"].map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs font-mono text-gray-600">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs font-bold uppercase text-gray-400 w-full mb-1">Full Stack</span>
                            {["React.js", "Node.js", "Socket.IO"].map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs font-mono text-gray-600">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Visuals & Code */}
                <div className="md:col-span-7 mt-12 md:mt-0 pl-0 md:pl-12">
                    {/* Hydrobot Prototype Image */}
                    <div className="bg-gray-900 rounded-xl overflow-hidden mb-8 relative group aspect-video shadow-2xl">
                        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-mono border border-white/10 shadow-sm z-10">
                            Prototype Field Trial
                        </div>
                        <img
                            src="/projects/hydrobot_prototype.jpg"
                            alt="Hydrobot Prototype"
                            className="w-full h-full object-cover opacity-90 transition-all duration-700 filter grayscale contrast-125 group-hover:filter-none group-hover:opacity-100 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                            <span className="block text-xs font-mono text-gray-400 uppercase mb-2">Accuracy</span>
                            <span className="block text-2xl font-bold text-black">95%</span>
                            <p className="text-xs text-gray-500 mt-1">Obstacle Avoidance</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                            <span className="block text-xs font-mono text-gray-400 uppercase mb-2">Efficiency</span>
                            <span className="block text-2xl font-bold text-black">87%</span>
                            <p className="text-xs text-gray-500 mt-1">Debris Collection</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                            <span className="block text-xs font-mono text-gray-400 uppercase mb-2">Autonomy</span>
                            <span className="block text-2xl font-bold text-black">8 Hours</span>
                            <p className="text-xs text-gray-500 mt-1">Continuous Operation</p>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-4 items-center">
                        <a
                            href="https://github.com/tejaschaudhari131/SAP_Hydrobot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-mono text-sm hover:bg-gray-800 transition-colors"
                        >
                            <Github size={16} />
                            View Source
                        </a>
                        <Link
                            href="/research/hydrobot"
                            className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-full font-mono text-sm hover:bg-gray-50 transition-colors text-gray-600"
                        >
                            Read Report
                            <ArrowUpRight size={16} />
                        </Link>
                        <div className="flex items-center gap-2 px-4 py-2 bg-yellow-50 text-yellow-700 rounded-full text-xs font-bold border border-yellow-100">
                            🏆 2nd Runner Up @ Code Unnati
                        </div>
                    </div>
                </div>
            </MacroGrid>
        </section>
    );
};
