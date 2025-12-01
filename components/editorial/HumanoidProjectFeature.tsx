import React from "react";
import { MacroGrid } from "../MacroGrid";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

export const HumanoidProjectFeature = () => {
    return (
        <section className="py-24 text-black border-t border-gray-200">
            <MacroGrid>
                {/* Header & Narrative */}
                <div className="md:col-span-5 flex flex-col justify-between h-full">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
                                Robotics & Control
                            </span>
                        </div>

                        <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-2">
                            BIPEDAL HUMANOID
                        </h2>
                        <p className="font-display text-xl text-gray-400 mb-4">
                            21+ DOF Dynamic Humanoid Robot
                        </p>
                        <p className="font-mono text-sm text-gray-500 mb-12">
                            Research & Development
                        </p>

                        <div className="space-y-8 max-w-lg">
                            <div>
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-accent">01.</span> The Challenge
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Replicating human locomotion and interaction requires robust actuation. I designed a custom 3D-printed structure integrated with high-torque servo motors.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-accent">02.</span> The Solution
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    The working prototype features 21+ DOF actuation driven by 30kg-cm torque servos. It incorporates onboard camera vision for object tracking and gesture-responsive motion control.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 space-y-4">
                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs font-bold uppercase text-gray-400 w-full mb-1">Core Tech</span>
                            {["Inverse Kinematics", "PID Control", "Gait Generation"].map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-red-50 border border-red-100 rounded-full text-xs font-mono text-red-600">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs font-bold uppercase text-gray-400 w-full mb-1">Hardware</span>
                            {["Arduino Mega", "30kg High-Torque Servos", "MPU6050 IMU"].map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs font-mono text-gray-600">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs font-bold uppercase text-gray-400 w-full mb-1">Tools</span>
                            {["Fusion 360", "C++", "Python"].map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs font-mono text-gray-600">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Visuals & Metrics */}
                <div className="md:col-span-7 mt-12 md:mt-0 pl-0 md:pl-12">
                    {/* Robot Image */}
                    <div className="bg-gray-900 rounded-xl overflow-hidden mb-8 relative group aspect-square shadow-2xl">
                        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-mono border border-white/10 shadow-sm z-10">
                            Prototype V1
                        </div>
                        <img
                            src="/projects/humanoid.png"
                            alt="Bipedal Humanoid Robot"
                            className="w-full h-full object-cover object-top opacity-90 transition-all duration-700 filter grayscale contrast-125 group-hover:filter-none group-hover:opacity-100 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                            <span className="block text-xs font-mono text-gray-400 uppercase mb-2">Complexity</span>
                            <span className="block text-2xl font-bold text-black">21+ DOF</span>
                            <p className="text-xs text-gray-500 mt-1">Total Actuators</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                            <span className="block text-xs font-mono text-gray-400 uppercase mb-2">Speed</span>
                            <span className="block text-2xl font-bold text-black">5 cm/s</span>
                            <p className="text-xs text-gray-500 mt-1">Static Walking</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                            <span className="block text-xs font-mono text-gray-400 uppercase mb-2">Endurance</span>
                            <span className="block text-2xl font-bold text-black">20 min</span>
                            <p className="text-xs text-gray-500 mt-1">Continuous Operation</p>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                        <Link
                            href="/research/humanoid"
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
