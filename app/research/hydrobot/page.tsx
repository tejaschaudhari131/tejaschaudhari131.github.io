"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function HydrobotReport() {
    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-blue-500 selection:text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 px-6 py-4">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-sm font-mono text-gray-500 hover:text-black transition-colors">
                        <ArrowLeft size={16} />
                        Back to Portfolio
                    </Link>
                    <span className="font-mono text-xs uppercase tracking-widest text-gray-400">
                        Research Report 02
                    </span>
                </div>
            </nav>

            {/* Content */}
            <article className="max-w-3xl mx-auto pt-32 pb-24 px-6">
                {/* Header */}
                <header className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-mono uppercase tracking-widest">
                            Robotics
                        </span>
                        <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-mono uppercase tracking-widest">
                            IoT
                        </span>
                    </div>
                    <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
                        HYDROBOT: Autonomous Cyber-Physical System
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        A fully autonomous surface vehicle for water quality monitoring and debris collection, featuring hierarchical control and edge AI integration.
                    </p>
                </header>

                {/* Abstract */}
                <section className="mb-12 p-8 bg-gray-50 rounded-2xl border border-gray-100">
                    <h2 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">Abstract</h2>
                    <p className="text-gray-700 leading-relaxed italic">
                        Water pollution in urban bodies requires scalable, automated solutions. This project presents "Hydrobot," a low-cost, autonomous surface vehicle (ASV) capable of navigating dynamic environments to collect floating debris and monitor water quality metrics in real-time. Utilizing a hierarchical control architecture and computer vision, the system achieves 95% navigational accuracy and 87% debris collection efficiency, offering a viable tool for environmental preservation.
                    </p>
                </section>

                {/* System Architecture */}
                <section className="mb-16">
                    <h2 className="font-display text-3xl font-bold mb-6">1. System Architecture</h2>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        The robot operates on a distributed computing model, splitting tasks between high-level planning and low-level actuation.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="p-6 border border-gray-200 rounded-xl">
                            <h3 className="font-bold text-lg mb-2">High-Level Controller (Brain)</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                <strong>Raspberry Pi 4</strong> running ROS 2.
                            </p>
                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                <li>Path Planning (A*)</li>
                                <li>Object Detection (YOLOv8)</li>
                                <li>Telemetry Transmission (Socket.IO)</li>
                            </ul>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-xl">
                            <h3 className="font-bold text-lg mb-2">Low-Level Controller (Spine)</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                <strong>Arduino Uno</strong> via Serial.
                            </p>
                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                <li>Motor PWM Control</li>
                                <li>Sensor Data Acquisition</li>
                                <li>Safety Interrupts</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Implementation */}
                <section className="mb-16">
                    <h2 className="font-display text-3xl font-bold mb-6">2. Implementation Details</h2>

                    <h3 className="font-bold text-xl mb-4">Computer Vision</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        We fine-tuned a YOLOv8 Nano model on a custom dataset of floating debris (plastic bottles, bags, styrofoam). The model was quantized to FP16 to run at 24 FPS on the Raspberry Pi 4 CPU.
                    </p>

                    <h3 className="font-bold text-xl mb-4">Sensor Fusion</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        A Kalman Filter fuses data from the GPS module and IMU (Inertial Measurement Unit) to estimate the robot's pose and velocity, compensating for drift caused by water currents.
                    </p>

                    <div className="bg-[#1e1e1e] p-6 rounded-xl overflow-x-auto mb-8">
                        <pre className="font-mono text-xs md:text-sm text-gray-300">
                            <code>
                                {`# State Machine Logic
def update_state(sensors, vision):
    if sensors.ultrasonic < THRESHOLD:
        return RobotState.AVOID
    elif vision.has_debris():
        return RobotState.COLLECT
    elif battery.is_low():
        return RobotState.RETURN_HOME
    else:
        return RobotState.PATROL`}
                            </code>
                        </pre>
                    </div>
                </section>

                {/* Results */}
                <section className="mb-16">
                    <h2 className="font-display text-3xl font-bold mb-6">3. Field Trials & Results</h2>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        The system was tested in a local lake under varying weather conditions.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                        <div className="p-4 bg-gray-50 rounded-lg text-center">
                            <span className="block text-3xl font-bold text-blue-600 mb-1">95%</span>
                            <span className="text-xs text-gray-500 font-mono uppercase">Navigational Accuracy</span>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg text-center">
                            <span className="block text-3xl font-bold text-black mb-1">87%</span>
                            <span className="text-xs text-gray-500 font-mono uppercase">Debris Collection</span>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg text-center">
                            <span className="block text-3xl font-bold text-black mb-1">8h</span>
                            <span className="text-xs text-gray-500 font-mono uppercase">Battery Life</span>
                        </div>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="mb-16">
                    <h2 className="font-display text-3xl font-bold mb-6">4. Conclusion</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Hydrobot demonstrates that effective environmental robotics need not be prohibitively expensive. By leveraging edge computing and efficient software architectures, we can deploy autonomous agents to maintain water bodies at scale.
                    </p>
                </section>

                <hr className="border-gray-200 mb-12" />

                <footer className="flex justify-between items-center text-sm text-gray-500 font-mono">
                    <span>© 2023 Tejas Chaudhari</span>
                    <span>Capstone Project ID: CP-2023-HB</span>
                </footer>
            </article>
        </main>
    );
}
