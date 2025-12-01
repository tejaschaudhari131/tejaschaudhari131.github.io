import React from "react";
import { MacroGrid } from "../MacroGrid";
import { ArrowUpRight, Github, Wind, Map, Users } from "lucide-react";
import Link from "next/link";

export const DroneProjectFeature = () => {
    return (
        <section className="py-24 text-black border-t border-gray-200">
            <MacroGrid>
                {/* Header & Narrative */}
                <div className="md:col-span-5 flex flex-col justify-between h-full">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                            <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
                                Aerospace & Systems
                            </span>
                        </div>

                        <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-2">
                            F450 AUTONOMOUS
                        </h2>
                        <p className="font-display text-xl text-gray-400 mb-4">
                            UAV Systems Engineering & Mission Planning
                        </p>
                        <p className="font-mono text-sm text-gray-500 mb-12">
                            University Project & Leadership Initiative
                        </p>

                        <div className="space-y-8 max-w-lg">
                            <div>
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-accent">01.</span> The Platform
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    I engineered a custom F450-class Quadcopter designed for autonomous surveillance missions. By integrating a Pixhawk 4 flight controller with high-precision GPS and telemetry modules, I achieved stable autonomous waypoint navigation.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-accent">02.</span> The Engineering
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    The build focused on Payload-to-Weight optimization and vibration dampening for the sensor stack. I configured the ArduPilot firmware to handle failsafe protocols (Return-to-Launch) and mission scripting, ensuring safe operation in complex environments.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 space-y-4">
                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs font-bold uppercase text-gray-400 w-full mb-1">Flight Control</span>
                            {["Pixhawk 4", "ArduPilot", "Mission Planner"].map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-orange-50 border border-orange-100 rounded-full text-xs font-mono text-orange-600">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs font-bold uppercase text-gray-400 w-full mb-1">Hardware</span>
                            {["BLDC Motors", "LiPo Power", "Telemetry Radios"].map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs font-mono text-gray-600">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs font-bold uppercase text-gray-400 w-full mb-1">Skills</span>
                            {["PID Tuning", "UAV Regulations", "Event Management"].map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs font-mono text-gray-600">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Visuals & Metrics */}
                <div className="md:col-span-7 mt-12 md:mt-0 pl-0 md:pl-12">
                    {/* Drone Image */}
                    <div className="bg-gray-900 rounded-xl overflow-hidden mb-8 relative group aspect-video shadow-2xl">
                        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-mono border border-white/10 shadow-sm z-10">
                            System Integration Testing
                        </div>
                        <img
                            src="/projects/drone_f450.jpg"
                            alt="F450 Drone Setup"
                            className="w-full h-full object-cover opacity-90 transition-all duration-700 filter grayscale contrast-125 group-hover:filter-none group-hover:opacity-100 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                            <span className="block text-xs font-mono text-gray-400 uppercase mb-2">Autonomy</span>
                            <span className="block text-2xl font-bold text-black">10+</span>
                            <p className="text-xs text-gray-500 mt-1">Waypoint Missions</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                            <span className="block text-xs font-mono text-gray-400 uppercase mb-2">Stability</span>
                            <span className="block text-2xl font-bold text-black">15 km/h</span>
                            <p className="text-xs text-gray-500 mt-1">Wind Resistance</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                            <span className="block text-xs font-mono text-gray-400 uppercase mb-2">Community</span>
                            <span className="block text-2xl font-bold text-black">50+</span>
                            <p className="text-xs text-gray-500 mt-1">Participants Managed</p>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                        <Link
                            href="/research/drone-f450"
                            className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-full font-mono text-sm hover:bg-gray-50 transition-colors text-gray-600"
                        >
                            Read Report
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>
                </div>
            </MacroGrid>
        </section>
    );
};