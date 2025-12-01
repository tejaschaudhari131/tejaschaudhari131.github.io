"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function DroneReport() {
    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-orange-500 selection:text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 px-6 py-4">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-sm font-mono text-gray-500 hover:text-black transition-colors">
                        <ArrowLeft size={16} />
                        Back to Portfolio
                    </Link>
                    <span className="font-mono text-xs uppercase tracking-widest text-gray-400">
                        Research Report 03
                    </span>
                </div>
            </nav>

            {/* Content */}
            <article className="max-w-3xl mx-auto pt-32 pb-24 px-6">
                {/* Header */}
                <header className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-mono uppercase tracking-widest">
                            Aerospace
                        </span>
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-mono uppercase tracking-widest">
                            Systems Engineering
                        </span>
                    </div>
                    <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
                        F450 Autonomous Surveillance Platform
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        A custom-engineered UAV designed for stable autonomous waypoint navigation and surveillance missions, featuring Pixhawk 4 integration and vibration-dampened sensor stacks.
                    </p>
                </header>

                {/* Abstract */}
                <section className="mb-12 p-8 bg-gray-50 rounded-2xl border border-gray-100">
                    <h2 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">Abstract</h2>
                    <p className="text-gray-700 leading-relaxed italic">
                        Developing a reliable autonomous aerial platform requires a holistic systems engineering approach. This project focused on the integration of flight control hardware, power systems, and mission planning software to create a robust F450-class quadcopter. The system successfully demonstrated autonomous waypoint navigation with high stability in varying wind conditions.
                    </p>
                </section>

                {/* System Architecture */}
                <section className="mb-16">
                    <h2 className="font-display text-3xl font-bold mb-6">1. System Architecture</h2>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        The platform is built around the Pixhawk 4 flight controller, running the ArduPilot firmware stack.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="p-6 border border-gray-200 rounded-xl">
                            <h3 className="font-bold text-lg mb-2">Avionics & Control</h3>
                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                <li><strong>FC:</strong> Pixhawk 4 (STM32F765)</li>
                                <li><strong>GPS:</strong> Ublox Neo-M8N</li>
                                <li><strong>Telemetry:</strong> 915MHz Radio</li>
                            </ul>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-xl">
                            <h3 className="font-bold text-lg mb-2">Propulsion & Power</h3>
                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                <li><strong>Motors:</strong> 920KV BLDC</li>
                                <li><strong>ESCs:</strong> 30A Electronic Speed Controllers</li>
                                <li><strong>Power:</strong> 3S/4S LiPo Battery System</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Engineering Challenges */}
                <section className="mb-16">
                    <h2 className="font-display text-3xl font-bold mb-6">2. Engineering Challenges</h2>

                    <h3 className="font-bold text-xl mb-4">Vibration Dampening</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        High-frequency vibrations from the motors can introduce noise into the IMU data, destabilizing the flight controller. I implemented a custom vibration dampening mount for the flight controller and balanced the propellers to minimize mechanical noise.
                    </p>

                    <h3 className="font-bold text-xl mb-4">PID Tuning</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Achieving stable flight required iterative tuning of the Proportional-Integral-Derivative (PID) controller gains. I performed in-flight tuning sessions to optimize the roll, pitch, and yaw response, ensuring the drone could hold position even in 15km/h winds.
                    </p>
                </section>

                {/* Mission Planning */}
                <section className="mb-16">
                    <h2 className="font-display text-3xl font-bold mb-6">3. Mission Planning</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Using Mission Planner ground control software, I designed complex waypoint missions for autonomous surveillance. The system supports:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
                        <li>Automated Takeoff and Landing</li>
                        <li>Waypoint Navigation with adjustable altitude and speed</li>
                        <li>Failsafe Return-to-Launch (RTL) on signal loss or low battery</li>
                        <li>Region of Interest (ROI) targeting for camera gimbal control</li>
                    </ul>
                </section>

                {/* Conclusion */}
                <section className="mb-16">
                    <h2 className="font-display text-3xl font-bold mb-6">4. Conclusion</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        The F450 Autonomous Surveillance Platform demonstrates the successful integration of complex cyber-physical subsystems. It serves as a versatile testbed for future research in aerial robotics, including swarm intelligence and computer vision-based navigation.
                    </p>
                </section>

                <hr className="border-gray-200 mb-12" />

                <footer className="flex justify-between items-center text-sm text-gray-500 font-mono">
                    <span>© 2023 Tejas Chaudhari</span>
                    <span>Project ID: UAV-F450-SYS</span>
                </footer>
            </article>
        </main>
    );
}
