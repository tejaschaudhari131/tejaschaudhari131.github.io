import React from "react";
import { MacroGrid } from "../MacroGrid";
import { ArrowUpRight, Github, Activity } from "lucide-react";
import Link from "next/link";

export const DigitalTwinProjectFeature = () => {
    return (
        <section className="py-24 text-black border-t border-gray-200">
            <MacroGrid>
                {/* Header & Narrative */}
                <div className="md:col-span-5 flex flex-col justify-between h-full">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
                                Industry 4.0
                            </span>
                        </div>

                        <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-2">
                            Secure Digital Twin for IoT Networks
                        </h2>
                        <p className="font-display text-xl text-gray-400 mb-4">
                            Real-time Simulation & Anomaly Detection
                        </p>
                        <p className="font-mono text-sm text-gray-500 mb-12">
                            Final Year Engineering Project
                        </p>

                        <div className="space-y-8 max-w-lg">
                            <div>
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-accent">01.</span> The Concept
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Managing distributed sensor networks requires real-time visibility. I architected a Cyber-Physical Digital Twin that mirrors the state of physical IoT assets in a virtual environment.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-accent">02.</span> The Security Layer
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Unlike standard dashboards, this system prioritizes data integrity. I implemented MQTT over TLS to ensure encrypted data ingestion from distributed sensors, preventing Man-in-the-Middle attacks.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-accent">03.</span> The Intelligence
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    The system integrates a Physics-Informed Model for accurate simulation and an LSTM (Long Short-Term Memory) Neural Network to predict system failures (Predictive Maintenance) before they occur.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 space-y-4">
                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs font-bold uppercase text-gray-400 w-full mb-1">Protocols</span>
                            {["MQTT", "TLS/SSL", "WebSockets"].map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-mono text-blue-600">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs font-bold uppercase text-gray-400 w-full mb-1">AI/ML</span>
                            {["LSTM", "Physics-Informed ML"].map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs font-mono text-gray-600">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs font-bold uppercase text-gray-400 w-full mb-1">Backend</span>
                            {["Python", "Cloud IoT Core"].map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs font-mono text-gray-600">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Visuals & Metrics */}
                <div className="md:col-span-7 mt-12 md:mt-0 pl-0 md:pl-12">

                    {/* Split Screen Visual */}
                    <div className="bg-gray-900 rounded-xl overflow-hidden mb-8 relative group aspect-video shadow-2xl">
                        {/* Split Screen Visual */}
                        <div className="w-full h-full flex relative group-hover:scale-[1.02] transition-all duration-700 filter grayscale contrast-125 group-hover:filter-none">
                            {/* Left: Physical World */}
                            <div className="w-1/2 bg-gray-900 relative overflow-hidden border-r border-gray-700">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-overlay grayscale" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90" />

                                {/* Scanning Line Animation */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent h-[20%] w-full animate-[scan_4s_ease-in-out_infinite]" />

                                {/* HUD Overlay */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div className="px-2 py-1 bg-black/60 border border-green-500/30 rounded text-[10px] text-green-400 font-mono backdrop-blur-sm">
                                            PHYSICAL_ASSET_01
                                        </div>
                                        <Activity size={16} className="text-green-500 animate-pulse" />
                                    </div>

                                    <div className="font-mono text-[10px] text-green-400 space-y-2">
                                        <div className="flex items-center justify-between border-b border-green-500/20 pb-1">
                                            <span>VIBRATION</span>
                                            <span className="text-white">0.04g</span>
                                        </div>
                                        <div className="flex items-center justify-between border-b border-green-500/20 pb-1">
                                            <span>TEMP</span>
                                            <span className="text-white">42.5°C</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>STATUS</span>
                                            <span className="bg-green-500/20 px-1 text-green-300">OPTIMAL</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Virtual Twin */}
                            <div className="w-1/2 bg-[#050b14] relative overflow-hidden">
                                {/* 3D Grid Effect */}
                                <div className="absolute inset-0"
                                    style={{
                                        backgroundImage: "linear-gradient(#1e40af 1px, transparent 1px), linear-gradient(to right, #1e40af 1px, transparent 1px)",
                                        backgroundSize: "40px 40px",
                                        opacity: 0.15,
                                        transform: "perspective(500px) rotateX(20deg)",
                                        transformOrigin: "top"
                                    }}
                                />

                                {/* Floating Hologram */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative w-32 h-32">
                                        <div className="absolute inset-0 border-2 border-blue-500/30 rounded-lg animate-[spin_10s_linear_infinite]" />
                                        <div className="absolute inset-2 border border-blue-400/20 rounded-lg animate-[spin_15s_linear_infinite_reverse]" />

                                        {/* Core Node */}
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_20px_#3b82f6] animate-pulse" />
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-blue-500/50 rounded-full animate-ping opacity-20" />
                                        </div>
                                    </div>
                                </div>

                                {/* Data Stream Particles */}
                                <div className="absolute inset-0 overflow-hidden opacity-30">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i}
                                            className="absolute w-1 h-1 bg-blue-400 rounded-full"
                                            style={{
                                                top: `${Math.random() * 100}%`,
                                                left: `${Math.random() * 100}%`,
                                                animation: `float ${3 + Math.random() * 2}s linear infinite`
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Virtual HUD */}
                                <div className="absolute top-4 right-4 px-2 py-1 bg-blue-900/30 border border-blue-500/30 rounded text-[10px] text-blue-300 font-mono backdrop-blur-sm">
                                    DIGITAL_TWIN_V2
                                </div>

                                <div className="absolute bottom-4 right-4 text-right">
                                    <div className="text-[10px] font-mono text-blue-400 mb-1">SYNC_STATUS</div>
                                    <div className="flex items-center gap-1.5 justify-end">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                                        <span className="text-xs font-bold text-white tracking-wider">CONNECTED</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                            <span className="block text-xs font-mono text-gray-400 uppercase mb-2">Latency</span>
                            <span className="block text-2xl font-bold text-black">&lt; 200ms</span>
                            <p className="text-xs text-gray-500 mt-1">Real-time Sync</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                            <span className="block text-xs font-mono text-gray-400 uppercase mb-2">Security</span>
                            <span className="block text-2xl font-bold text-black">100%</span>
                            <p className="text-xs text-gray-500 mt-1">Encrypted Transmission</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                            <span className="block text-xs font-mono text-gray-400 uppercase mb-2">Prediction</span>
                            <span className="block text-2xl font-bold text-black">High</span>
                            <p className="text-xs text-gray-500 mt-1">LSTM Accuracy</p>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-mono text-sm hover:bg-gray-800 transition-colors cursor-not-allowed opacity-70">
                            <Activity size={16} />
                            Live Demo (Offline)
                        </button>
                    </div>
                </div>
            </MacroGrid>
        </section>
    );
};
