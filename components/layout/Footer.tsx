"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, FileText, Check, Copy } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [copied, setCopied] = useState(false);

    const bibtex = `@misc{chaudhari2024portfolio,
  author = {Chaudhari, Tejaram},
  title = {Cyber-Physical Systems Portfolio},
  year = {2024},
  url = {https://tejaram.com},
  note = {Accessed: ${new Date().toISOString().split('T')[0]}}
}`;

    const handleCopyBibtex = () => {
        navigator.clipboard.writeText(bibtex);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer className="bg-[#0a192f] text-white relative overflow-hidden border-t border-white/10">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(to right, #4f46e5 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
            />

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="md:col-span-5 space-y-8">
                        <div>
                            <h2 className="text-3xl font-display font-bold tracking-tight mb-3">
                                TEJARAM CHAUDHARI
                            </h2>
                            <p className="font-mono text-base text-accent uppercase tracking-widest">
                                Cyber-Physical Systems
                            </p>
                        </div>
                        <p className="text-gray-300 text-lg max-w-md leading-relaxed font-medium">
                            Ready to engineer secure systems.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <SocialLink href="https://github.com/tejaschaudhari131" icon={<Github size={24} />} label="GitHub" />
                            <SocialLink href="https://www.linkedin.com/in/tejaramchaudhari/" icon={<Linkedin size={24} />} label="LinkedIn" />
                            <SocialLink href="https://x.com/TejasCh32900009" icon={<Twitter size={24} />} label="Twitter" />
                            <SocialLink href="mailto:tejaschuadhari131@gmail.com" icon={<Mail size={24} />} label="Email" />
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="md:col-span-3 md:col-start-7">
                        <h3 className="font-mono text-base font-bold text-gray-200 uppercase tracking-wider mb-8">
                            Sitemap
                        </h3>
                        <ul className="space-y-6">
                            <FooterLink href="/" label="Home" />
                            <FooterLink href="/#experience" label="Experience" />
                            <FooterLink href="/#research" label="Research" />
                            <FooterLink href="/#projects" label="Projects" />
                            <FooterLink href="/#community" label="Community" />
                        </ul>
                    </div>

                    {/* Legal / Meta */}
                    <div className="md:col-span-3">
                        <h3 className="font-mono text-base font-bold text-gray-200 uppercase tracking-wider mb-8">
                            Legal
                        </h3>
                        <ul className="space-y-6">
                            <FooterLink href="/privacy" label="Privacy Policy" />
                            <FooterLink href="/terms" label="Terms of Use" />
                        </ul>

                        {/* System Status */}
                        <div className="mt-10 p-6 bg-white/5 border border-white/10 rounded-xl">
                            <p className="text-sm text-gray-400 font-mono mb-3">System Status</p>
                            <div className="flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-sm font-bold text-green-400">Operational</span>
                            </div>
                        </div>

                        {/* BibTeX Easter Egg */}
                        <button
                            onClick={handleCopyBibtex}
                            className="mt-6 flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-accent transition-colors group"
                            title="Copy Citation"
                        >
                            <AnimatePresence mode="wait">
                                {copied ? (
                                    <motion.span
                                        key="check"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        className="flex items-center gap-2 text-green-400"
                                    >
                                        <Check size={14} />
                                        <span>Citation Copied!</span>
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="copy"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        className="flex items-center gap-2"
                                    >
                                        <FileText size={14} />
                                        <span>[Cite this Portfolio]</span>
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400 font-mono">
                        © {currentYear} Tejaram Chaudhari. All rights reserved.
                    </p>
                    <p className="text-sm text-gray-500 font-mono flex items-center gap-2">
                        Designed & Engineered in India <span className="text-accent">⚡</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 group"
        aria-label={label}
    >
        {icon}
    </a>
);

const FooterLink = ({ href, label }: { href: string; label: string }) => (
    <li>
        <Link href={href} className="text-base text-gray-400 hover:text-accent transition-colors flex items-center gap-3 group">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-accent transition-colors" />
            {label}
        </Link>
    </li>
);
