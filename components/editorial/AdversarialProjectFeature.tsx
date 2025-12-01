import React from "react";
import { MacroGrid } from "../MacroGrid";
import { ArrowUpRight, Github, Terminal } from "lucide-react";
import Link from "next/link";

export const AdversarialProjectFeature = () => {
    return (
        <section className="py-24 text-black border-t border-gray-200">
            <MacroGrid>
                {/* Header & Narrative */}
                <div className="md:col-span-5 flex flex-col justify-between h-full">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
                                Cybersecurity / AI
                            </span>
                        </div>

                        <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-4">
                            Adversarial GAN for <br /> Intrusion Detection
                        </h2>
                        <p className="font-mono text-sm text-gray-500 mb-12">
                            Evaluated against CIC-IDS2017 Dataset
                        </p>

                        <div className="space-y-8 max-w-lg">
                            <div>
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-accent">01.</span> The Challenge
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Modern Deep Learning Intrusion Detection Systems (IDS) are excellent at detecting known attacks but dangerously fragile against &quot;Adversarial Examples&quot;—malicious traffic specifically engineered to look normal.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-accent">02.</span> The Solution
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    I developed a Generative Adversarial Network (GAN) framework to audit these vulnerabilities. By pitting a Generator Network (the attacker) against a Discriminator (the IDS), I trained the system to autonomously create novel attack vectors that bypass standard detection protocols.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-wrap gap-3">
                        {["Python 3.x", "TensorFlow", "CIC-IDS2017", "Adversarial ML"].map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs font-mono text-gray-600">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Visuals & Code */}
                <div className="md:col-span-7 mt-12 md:mt-0 pl-0 md:pl-12">
                    {/* Code Snippet Card */}
                    <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl mb-8 group transition-all duration-700 filter grayscale contrast-125 hover:filter-none">
                        <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-[#333]">
                            <div className="flex items-center gap-2">
                                <Terminal size={14} className="text-gray-400" />
                                <span className="text-xs font-mono text-gray-400">adversarial_loop.py</span>
                            </div>
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                            </div>
                        </div>
                        <div className="p-6 overflow-x-auto">
                            <pre className="font-mono text-xs md:text-sm leading-relaxed text-gray-300">
                                <code>
                                    <span className="text-[#569cd6]">def</span> <span className="text-[#dcdcaa]">train_step</span>(noise, real_traffic):{"\n"}
                                    {"    "}<span className="text-[#c586c0]">with</span> tf.GradientTape() <span className="text-[#c586c0]">as</span> gen_tape, tf.GradientTape() <span className="text-[#c586c0]">as</span> disc_tape:{"\n"}
                                    {"        "}generated_traffic = <span className="text-[#dcdcaa]">generator</span>(noise, training=<span className="text-[#569cd6]">True</span>){"\n"}
                                    {"\n"}
                                    {"        "}real_output = <span className="text-[#dcdcaa]">discriminator</span>(real_traffic, training=<span className="text-[#569cd6]">True</span>){"\n"}
                                    {"        "}fake_output = <span className="text-[#dcdcaa]">discriminator</span>(generated_traffic, training=<span className="text-[#569cd6]">True</span>){"\n"}
                                    {"\n"}
                                    {"        "}gen_loss = <span className="text-[#dcdcaa]">generator_loss</span>(fake_output){"\n"}
                                    {"        "}disc_loss = <span className="text-[#dcdcaa]">discriminator_loss</span>(real_output, fake_output){"\n"}
                                    {"\n"}
                                    {"    "}<span className="text-[#6a9955]"># Apply gradients to improve the attack</span>{"\n"}
                                    {"    "}gradients_of_generator = gen_tape.gradient(gen_loss, generator.trainable_variables){"\n"}
                                    {"    "}generator_optimizer.apply_gradients(<span className="text-[#dcdcaa]">zip</span>(gradients_of_generator, generator.trainable_variables))
                                </code>
                            </pre>
                        </div>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                            <span className="block text-xs font-mono text-gray-400 uppercase mb-2">Evasion Rate</span>
                            <span className="block text-3xl font-bold text-black">98.4%</span>
                            <p className="text-xs text-gray-500 mt-2">Against baseline IDS</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                            <span className="block text-xs font-mono text-gray-400 uppercase mb-2">Defense Strategy</span>
                            <span className="block text-lg font-bold text-black">Adversarial Training</span>
                            <p className="text-xs text-gray-500 mt-2">Proposed patch for next-gen IDS</p>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/tejaschaudhari131/adversarial-gan-ids"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-mono text-sm hover:bg-gray-800 transition-colors"
                        >
                            <Github size={16} />
                            View Source
                        </a>
                        <Link
                            href="/research/adversarial-gan"
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
