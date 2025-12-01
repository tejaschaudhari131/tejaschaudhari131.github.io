"use client";

import React from "react";
import { Users, Cloud, PenTool, Globe, ArrowUpRight, Activity } from 'lucide-react';
import { motion } from "framer-motion";

const roles = [
    {
        id: 1,
        title: "Co-Founder & Webmaster",
        org: "Cybersecurity Club (TCOER)",
        date: "July 2024 – Present",
        icon: <Globe className="w-8 h-8 text-cyan-600" />,
        desc: "Architected the digital presence for the college's first security community.",
        stats: ["Co-Founded Club", "Web Architecture", "Event Ops"],
        gradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
        border: "group-hover:border-cyan-500/50",
        text: "group-hover:text-cyan-600",
        bg: "group-hover:bg-cyan-50/50"
    },
    {
        id: 2,
        title: "Cloud Co-Lead",
        org: "Google Developer Student Club",
        date: "Aug 2023 – Aug 2024",
        icon: <Cloud className="w-8 h-8 text-amber-600" />,
        desc: "Spearheaded the Cloud Computing pathway and GenAI workshops.",
        stats: ["120+ Mentees", "GenAI Workshops", "20% Growth"],
        gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
        border: "group-hover:border-amber-500/50",
        text: "group-hover:text-amber-600",
        bg: "group-hover:bg-amber-50/50"
    },
    {
        id: 3,
        title: "Editor-in-Chief",
        org: "Dept. Technical Newsletter",
        date: "Jan 2024 – Nov 2024",
        icon: <PenTool className="w-8 h-8 text-fuchsia-600" />,
        desc: "Managed editorial team and published 11 editions of technical content.",
        stats: ["11 Editions", "Team Leadership", "Tech Writing"],
        gradient: "from-fuchsia-500/10 via-purple-500/5 to-transparent",
        border: "group-hover:border-fuchsia-500/50",
        text: "group-hover:text-fuchsia-600",
        bg: "group-hover:bg-fuchsia-50/50"
    }
];

export const CommunityImpact = () => {
    return (
        <section className="py-32 bg-transparent text-gray-900 relative overflow-hidden">

            {/* Dot Pattern Overlay (Dark Dots) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(#000000 1px, transparent 1px)",
                    backgroundSize: "30px 30px"
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto mb-20 text-center">
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-500 text-xs font-mono uppercase tracking-widest">
                        <Activity size={12} />
                        <span>Community Impact</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-gray-900">
                        Leadership <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">Modules</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                        Driving technical initiatives and fostering developer communities through mentorship, leadership, and content strategy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {roles.map((role, index) => (
                        <motion.div
                            key={role.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-full"
                        >
                            {/* Card Container */}
                            <div className={`relative h-full bg-white border border-gray-200 p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 ${role.border} ${role.bg} group-hover:translate-y-[-5px] shadow-sm hover:shadow-md`}>

                                {/* Role Specific Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                {/* HUD Corners (Darker for Light Mode) */}
                                <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gray-200 ${role.border.replace('group-hover:', 'group-hover:')} transition-colors duration-500`} />
                                <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gray-200 ${role.border.replace('group-hover:', 'group-hover:')} transition-colors duration-500`} />
                                <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gray-200 ${role.border.replace('group-hover:', 'group-hover:')} transition-colors duration-500`} />
                                <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gray-200 ${role.border.replace('group-hover:', 'group-hover:')} transition-colors duration-500`} />

                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`p-3 bg-gray-50 rounded-lg border border-gray-100 ${role.border} transition-colors duration-300`}>
                                            {role.icon}
                                        </div>
                                        <span className={`font-mono text-xs text-gray-400 ${role.text} transition-colors`}>
                                            0{role.id}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <h3 className={`text-xl font-bold font-display mb-2 text-gray-900 ${role.text} transition-colors`}>
                                        {role.title}
                                    </h3>
                                    <p className="text-sm font-mono text-gray-500 mb-4 border-b border-gray-100 pb-4">
                                        {role.org}
                                    </p>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                        {role.desc}
                                    </p>
                                </div>

                                {/* Footer / Stats */}
                                <div className="relative z-10 space-y-3">
                                    <div className="flex flex-wrap gap-2">
                                        {role.stats.map((stat, i) => (
                                            <span
                                                key={i}
                                                className={`px-2 py-1 text-[10px] font-mono uppercase tracking-wider bg-gray-50 border border-gray-100 text-gray-500 rounded ${role.border} group-hover:text-gray-700 transition-colors`}
                                            >
                                                {stat}
                                            </span>
                                        ))}
                                    </div>
                                    <div className={`flex items-center gap-2 text-xs font-mono text-gray-400 pt-4 border-t border-gray-100 ${role.text} transition-colors`}>
                                        <span>View Details</span>
                                        <ArrowUpRight size={12} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
