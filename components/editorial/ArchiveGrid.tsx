"use client";

import React, { useState } from "react";
import { MacroGrid } from "../MacroGrid";
import { ArrowUpRight, Download, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const papers = [
    {
        id: "pqc-2025",
        year: "2025",
        publisher: "Springer",
        type: "Conference Paper",
        title: "Guarding Against Quantum Threats: A Survey of Post-Quantum Cryptography Standardization, Techniques, and Current Implementations",
        authors: ["Aditya Joshi", "Pritam Bhalgat", "Pratibha Chavan", "Tejaram Chaudhari", "Sumit Patil"],
        abstract: "As the quantum computers are rapidly advancing, the traditional cryptographic systems, which rely on computational hardness will face significant challenges that quantum computers will eventually break. Widely adopted algorithms in present such as RSA, ECC and Diffie-Hellman are already threatened by Shor's algorithm. This paper surveys the domain of Post-Quantum Cryptography (PQC) with focus on the development of algorithms that can withstand quantum attacks and also preserve security against traditional adversaries. The study outlines the quantum threats and importance of shifting towards PQC. Various PQC approaches such as lattice-based, code-based, multi-variate, hash-based, and isogeny-based cryptography has been reviewed based on their underlying principle and resilience against quantum adversaries. The NIST's Post-Quantum Cryptography Standardization Process is emphasized as a critical focus area, detailing its multi-phase evaluation methodology and the selection of finalists and alternate candidates.",
        impact: "Quantum Security",
        publisherColor: "bg-orange-500",
        link: "https://doi.org/10.1007/978-981-97-9743-1_3",
        bibtex: `@InProceedings{10.1007/978-981-97-9743-1_3,
author="Joshi, Aditya
and Bhalgat, Pritam
and Chavan, Pratibha
and Chaudhari, Tejaram
and Patil, Sumit",
editor="Shankar Sriram, V.S.
and H., Anila Glory
and Li, Gang
and Pokhrel, Shiva Raj",
title="Guarding Against Quantum Threats: A Survey of Post-Quantum Cryptography Standardization, Techniques, and Current Implementations",
booktitle="Applications and Techniques in Information Security",
year="2025",
publisher="Springer Nature Singapore",
address="Singapore",
pages="33--46",
isbn="978-981-97-9743-1"
}`
    },
    {
        id: "solar-2024",
        year: "2024",
        publisher: "IEEE",
        type: "Conference Paper",
        title: "A Comparative Study of Ensemble Learning Models for Accurate Solar Irradiance Forecasting",
        authors: ["Tejaram Chaudhari", "Aditya Joshi", "Devkumar Bharti", "Pratibha Chavan", "M. K. Deshmukh", "Pritam Bhalgat"],
        abstract: "Reliable renewable energy requires accurate forecasting. This paper presents a comparative analysis of advanced ensemble models—including XGBoost, CatBoost, and Random Forest—to predict solar irradiance. The study demonstrates that ensemble learners significantly outperform traditional regression models in data-sparse meteorological conditions, providing a robust framework for sustainable energy management.",
        impact: "Machine Learning",
        publisherColor: "bg-blue-600",
        link: "https://doi.org/10.1109/CSITSS64042.2024.10816817",
        bibtex: `@INPROCEEDINGS{10816817,
author={Chaudhari, Tejaram and Joshi, Aditya and Bharti, Devkumar and Chavan, Pratibha and Deshmukh, M. K. and Bhalgat, Pritam},
booktitle={2024 8th International Conference on Computational System and Information Technology for Sustainable Solutions (CSITSS)},
title={A Comparative Study of Ensemble Learning Models for Accurate Solar Irradiance Forecasting},
year={2024},
pages={1-5},
doi={10.1109/CSITSS64042.2024.10816817}}`
    },
    {
        id: "hydrobot-2025",
        year: "2025",
        publisher: "Springer",
        type: "Book Chapter (In Press)",
        title: "Hydrobot: Autonomous Solution for Aquatic Debris Collection",
        authors: ["Tejaram Chaudhari", "Team Hydrobot"],
        abstract: "Developing an autonomous surface vehicle for environmental conservation. The system integrates Convolutional Neural Networks (CNNs) for real-time waste classification with an autonomous navigation stack. Successfully combined computer vision with low-level actuator control for autonomous river cleaning.",
        impact: "Robotics/Systems",
        publisherColor: "bg-orange-500",
        link: "https://link.springer.com/book/9789819683086",
        bibtex: `@article{chaudhari2025hydrobot, 
title={Hydrobot: Autonomous Aquatic Debris Collection}, 
author={Chaudhari, Tejaram and others}, 
journal={Frontiers in Computing}, 
year={2025}, 
publisher={Springer},
note={In Press}}`
    }
];

const ResearchRow = ({ paper }: { paper: typeof papers[0] }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(paper.bibtex);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        // Refresh ScrollTrigger to account for height change
        import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
            ScrollTrigger.refresh();
        });
    };

    return (
        <div
            className="group relative border-b border-gray-200 bg-white transition-colors hover:bg-gray-50"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Publisher Color Bar */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${paper.publisherColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            <div className="grid grid-cols-12 gap-4 p-6 md:p-8 items-start">
                {/* Meta-Data Column (Left) */}
                <div className="col-span-12 md:col-span-2 flex flex-row md:flex-col gap-4 md:gap-2 items-center md:items-start text-gray-500">
                    <span className="font-mono text-xl md:text-2xl font-bold text-gray-900">{paper.year}</span>
                    <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${paper.publisherColor}`} />
                        <span className="text-xs font-bold uppercase tracking-wider">{paper.publisher}</span>
                    </div>
                    <span className="hidden md:block text-[10px] uppercase tracking-widest opacity-60">{paper.type}</span>
                </div>

                {/* Content Core (Center) */}
                <div className="col-span-12 md:col-span-7 pr-0 md:pr-8">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-700 transition-colors">
                        {paper.title}
                    </h3>
                    <div className="text-sm text-gray-600 mb-3 font-mono">
                        {paper.authors.map((author, i) => (
                            <span key={i} className={author.includes("Tejaram") ? "font-bold text-black border-b border-gray-300" : ""}>
                                {author}{i < paper.authors.length - 1 ? ", " : ""}
                            </span>
                        ))}
                    </div>

                    {/* Abstract Reveal */}
                    <div className="relative overflow-hidden">
                        <motion.div
                            initial={{ height: "3em" }}
                            animate={{ height: isHovered ? "auto" : "3em" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="text-gray-500 text-sm leading-relaxed"
                        >
                            {paper.abstract}
                        </motion.div>

                        {/* BibTeX Button */}
                        <AnimatePresence>
                            {isHovered && (
                                <motion.button
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    onClick={handleCopy}
                                    className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-black transition-colors"
                                >
                                    {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                                    {copied ? "Copied to Clipboard" : "Copy BibTeX"}
                                </motion.button>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Impact Tag & Action (Right) */}
                <div className="col-span-12 md:col-span-3 flex flex-row md:flex-col justify-between items-center md:items-end h-full gap-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider rounded-full">
                        {paper.impact}
                    </span>

                    <a
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                    >
                        <ArrowUpRight size={18} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export const ArchiveGrid = () => {
    return (
        <section className="py-32 bg-white border-t border-gray-200">
            <MacroGrid>
                <div className="md:col-span-12 mb-16">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-[1px] w-12 bg-gray-300" />
                        <span className="font-mono text-sm text-gray-400 uppercase tracking-widest">Scientific Ledger</span>
                    </div>
                    <h2 className="font-display text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        Research Publications
                    </h2>
                    <p className="text-xl text-gray-500 font-serif italic max-w-2xl">
                        "Contributing to the body of knowledge in Security, AI, and Systems."
                    </p>
                </div>

                <div className="md:col-span-12 border-t border-gray-200">
                    {papers.map((paper) => (
                        <ResearchRow key={paper.id} paper={paper} />
                    ))}
                </div>
            </MacroGrid>
        </section>
    );
};
