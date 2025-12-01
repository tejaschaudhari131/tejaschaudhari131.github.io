"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function HumanoidReport() {
    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-red-500 selection:text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 px-6 py-4">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-sm font-mono text-gray-500 hover:text-black transition-colors">
                        <ArrowLeft size={16} />
                        Back to Portfolio
                    </Link>
                    <span className="font-mono text-xs uppercase tracking-widest text-gray-400">
                        Research Report 04
                    </span>
                </div>
            </nav>

            {/* Content */}
            <article className="max-w-3xl mx-auto pt-32 pb-24 px-6">
                {/* Header */}
                <header className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-mono uppercase tracking-widest">
                            Robotics
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-mono uppercase tracking-widest">
                            Biomechanics
                        </span>
                    </div>
                    <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
                        Autonomous Bipedal Humanoid
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        A 12-DOF 3D-printed humanoid robot capable of static walking gaits, featuring custom kinematic modeling and active stability control.
                    </p>
                </header>

                {/* Abstract */}
                <section className="mb-12 p-8 bg-gray-50 rounded-2xl border border-gray-100">
                    <h2 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">Abstract</h2>
                    <p className="text-gray-700 leading-relaxed italic">
                        Replicating human locomotion in robotic systems presents significant challenges in stability and control. This project details the development of a low-cost, 3D-printed bipedal robot. By implementing inverse kinematics for gait generation and IMU-based feedback loops for balance, the system achieves stable static walking on flat surfaces, demonstrating accessible methods for advanced robotics research.
                    </p>
                </section>

                {/* Mechanical Design */}
                <section className="mb-16">
                    <h2 className="font-display text-3xl font-bold mb-6">1. Mechanical Design</h2>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        The robot's chassis was designed from scratch in Autodesk Fusion 360 and manufactured using FDM 3D printing (PLA/ABS).
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="p-6 border border-gray-200 rounded-xl">
                            <h3 className="font-bold text-lg mb-2">Kinematic Structure</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                <strong>12 Degrees of Freedom (DOF)</strong>
                            </p>
                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                <li>Legs: 6 DOF each (Hip x3, Knee x1, Ankle x2)</li>
                                <li>Arms: Passive balancing / Aesthetic</li>
                            </ul>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-xl">
                            <h3 className="font-bold text-lg mb-2">Actuation</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                <strong>High-Torque Servos</strong>
                            </p>
                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                <li>MG996R Metal Gear Servos (10kg/cm)</li>
                                <li>PCA9685 PWM Driver Board</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Control Systems */}
                <section className="mb-16">
                    <h2 className="font-display text-3xl font-bold mb-6">2. Control Systems</h2>

                    <h3 className="font-bold text-xl mb-4">Inverse Kinematics (IK)</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Unlike simple pre-programmed motions, IK allows the robot to calculate the necessary joint angles to place its foot at a specific 3D coordinate (x, y, z). This enables dynamic gait generation where step height and length can be adjusted in real-time.
                    </p>

                    <h3 className="font-bold text-xl mb-4">Active Stability</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        An MPU6050 IMU provides real-time data on the robot's pitch and roll. A PID controller adjusts the ankle and hip joints to shift the Center of Mass (CoM) and counteract tilting, ensuring the robot remains upright during the single-support phase of walking.
                    </p>
                </section>

                {/* Results */}
                <section className="mb-16">
                    <h2 className="font-display text-3xl font-bold mb-6">3. Results</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        The robot successfully demonstrated a static walking gait, where the CoM is shifted completely over the stance foot before the swing foot is lifted. This approach ensures stability at low speeds.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
                        <li><strong>Walking Speed:</strong> 5 cm/s</li>
                        <li><strong>Step Height:</strong> 3 cm</li>
                        <li><strong>Battery Life:</strong> 20 minutes (2S LiPo)</li>
                    </ul>
                </section>

                {/* Conclusion */}
                <section className="mb-16">
                    <h2 className="font-display text-3xl font-bold mb-6">4. Conclusion</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        This project highlights the potential of rapid prototyping in robotics. Future work will focus on implementing dynamic walking gaits (Zero Moment Point control) and integrating vision sensors for obstacle avoidance.
                    </p>
                </section>

                <hr className="border-gray-200 mb-12" />

                <footer className="flex justify-between items-center text-sm text-gray-500 font-mono">
                    <span>© 2023 Tejas Chaudhari</span>
                    <span>Project ID: ROBOT-BIPED-V1</span>
                </footer>
            </article>
        </main>
    );
}
