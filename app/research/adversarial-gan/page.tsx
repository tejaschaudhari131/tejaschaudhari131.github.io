"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AdversarialGANReport() {
    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-accent selection:text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 px-6 py-4">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-sm font-mono text-gray-500 hover:text-black transition-colors">
                        <ArrowLeft size={16} />
                        Back to Portfolio
                    </Link>
                    <span className="font-mono text-xs uppercase tracking-widest text-gray-400">
                        Research Report 01
                    </span>
                </div>
            </nav>

            {/* Content */}
            <article className="max-w-3xl mx-auto pt-32 pb-24 px-6">
                {/* Header */}
                <header className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-mono uppercase tracking-widest">
                            Cybersecurity
                        </span>
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-mono uppercase tracking-widest">
                            Machine Learning
                        </span>
                    </div>
                    <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
                        Adversarial GAN for Intrusion Detection: A Vulnerability Assessment
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Investigating the robustness of Deep Learning-based Intrusion Detection Systems against autonomously generated adversarial attacks.
                    </p>
                </header>

                {/* Abstract */}
                <section className="mb-12 p-8 bg-gray-50 rounded-2xl border border-gray-100">
                    <h2 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">Abstract</h2>
                    <p className="text-gray-700 leading-relaxed italic">
                        As Intrusion Detection Systems (IDS) increasingly rely on Deep Learning, their susceptibility to adversarial examples becomes a critical vulnerability. This study proposes a Generative Adversarial Network (GAN) framework designed to systematically probe these weaknesses. By training a generator to produce synthetic malicious traffic that mimics benign patterns, we demonstrate a 98.4% evasion rate against a standard IDS trained on the CIC-IDS2017 dataset, highlighting the urgent need for adversarial training in next-generation cybersecurity protocols.
                    </p>
                </section>

                {/* Introduction */}
                <section className="mb-16">
                    <h2 className="font-display text-3xl font-bold mb-6">1. Introduction</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Traditional signature-based IDS are ineffective against zero-day attacks, leading to the adoption of anomaly-based systems powered by Deep Learning. However, these models operate in a high-dimensional feature space where slight perturbations—imperceptible to humans but significant to algorithms—can cause misclassification.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        This research aims to answer a pivotal question: <span className="font-bold">Can an automated agent learn to disguise malicious network traffic as benign activity without human intervention?</span>
                    </p>
                </section>

                {/* Methodology */}
                <section className="mb-16">
                    <h2 className="font-display text-3xl font-bold mb-6">2. Methodology</h2>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        The core architecture consists of a Wasserstein GAN (WGAN) with Gradient Penalty, chosen for its training stability compared to standard GANs.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="p-6 border border-gray-200 rounded-xl">
                            <h3 className="font-bold text-lg mb-2">The Generator (G)</h3>
                            <p className="text-sm text-gray-600">
                                Takes a noise vector <code>z</code> and outputs a synthetic feature vector <code>x&apos;</code>. Its goal is to maximize the probability of the Discriminator classifying <code>x&apos;</code> as benign.
                            </p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-xl">
                            <h3 className="font-bold text-lg mb-2">The Discriminator (D)</h3>
                            <p className="text-sm text-gray-600">
                                Acts as the IDS. It tries to distinguish between real benign traffic <code>x</code> and synthetic traffic <code>x&apos;</code>.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#1e1e1e] p-6 rounded-xl overflow-x-auto mb-8">
                        <pre className="font-mono text-xs md:text-sm text-gray-300">
                            <code>
                                {`# WGAN-GP Loss Calculation
def discriminator_loss(real_img, fake_img):
    real_loss = tf.reduce_mean(real_img)
    fake_loss = tf.reduce_mean(fake_img)
    return fake_loss - real_loss

def generator_loss(fake_img):
    return -tf.reduce_mean(fake_img)`}
                            </code>
                        </pre>
                    </div>
                </section>

                {/* Results */}
                <section className="mb-16">
                    <h2 className="font-display text-3xl font-bold mb-6">3. Results & Analysis</h2>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        The model was evaluated using the CIC-IDS2017 dataset. After 500 epochs, the Generator successfully learned to mimic the statistical distribution of benign traffic features.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                        <div className="p-4 bg-gray-50 rounded-lg text-center">
                            <span className="block text-3xl font-bold text-accent mb-1">98.4%</span>
                            <span className="text-xs text-gray-500 font-mono uppercase">Evasion Rate</span>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg text-center">
                            <span className="block text-3xl font-bold text-black mb-1">0.02s</span>
                            <span className="text-xs text-gray-500 font-mono uppercase">Generation Time</span>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg text-center">
                            <span className="block text-3xl font-bold text-black mb-1">15%</span>
                            <span className="text-xs text-gray-500 font-mono uppercase">IDS Accuracy Drop</span>
                        </div>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="mb-16">
                    <h2 className="font-display text-3xl font-bold mb-6">4. Conclusion</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        The high evasion rate demonstrates that current Deep Learning IDS implementations are insufficient for high-security environments. The ability of the GAN to automatically discover evasion strategies suggests that attackers could leverage similar AI tools to automate penetration testing.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Future work will focus on <strong>Adversarial Training</strong>—injecting these generated examples back into the training set to harden the IDS against such attacks.
                    </p>
                </section>

                <hr className="border-gray-200 mb-12" />

                <footer className="flex justify-between items-center text-sm text-gray-500 font-mono">
                    <span>© 2024 Tejas Chaudhari</span>
                    <span>Research Report ID: GAN-IDS-2024</span>
                </footer>
            </article>
        </main>
    );
}
