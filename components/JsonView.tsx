"use client";

import React from "react";

const profileData = {
    site_metadata: {
        title: "Tejaram Chaudhari | Cyber-Physical Systems Researcher",
        description: "Portfolio of Tejaram Chaudhari - Aspiring MS CS/Cybersecurity Candidate, Researcher, and Founder.",
    },
    profile: {
        name: "Tejaram Chaudhari",
        tagline: "Securing the Intersection of Hardware, AI, and Networks.",
        sub_headline: "Researcher @ BARC | Founder @ thinkMINNT | Electronics & Cyber-Sec Engineer",
        location: "Pune, India (Open to Relocation to USA)",
        email: "tejaschaudhari131@gmail.com",
        availability_status: "Applying for Fall 2025 Graduate Studies"
    },
    experience: [
        {
            company: "Bhabha Atomic Research Centre (BARC)",
            role: "Research Intern (Electron Beam Centre)",
            highlights: [
                "Designed a high-precision pulse generation system using Cypress PSoC 5LP, achieving 83.33ns timing precision.",
                "Implemented secure industrial communication using Modbus RTU over UART."
            ]
        },
        {
            company: "thinkMINNT Foundation",
            role: "Founder & Director",
            highlights: [
                "Established a Section-8 Non-Profit organization to bridge the gap in STEM education.",
                "Managed operations and peer-mentoring programs for 50+ high school students."
            ]
        }
    ],
    publications: [
        {
            title: "Guarding Against Quantum Threats: A Survey of Post-Quantum Cryptography",
            conference: "14th ATIS Conference (Springer)",
            status: "Published"
        },
        {
            title: "Hydrobot: Autonomous Aquatic Debris Collection using CNNs",
            conference: "5th Frontiers in Computing and Systems",
            status: "Accepted"
        }
    ],
    skills: {
        languages: ["Python", "C++", "SQL", "Bash", "PHP"],
        security: ["Intrusion Detection (IDS)", "Post-Quantum Cryptography", "Ethical Hacking"],
        hardware: ["PSoC 5LP", "Arduino", "Raspberry Pi", "Modbus RTU", "UART"]
    }
};

export const JsonView = () => {
    return (
        <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] p-8 font-mono text-sm overflow-x-auto">
            <pre>
                <code>{JSON.stringify(profileData, null, 2)}</code>
            </pre>
        </div>
    );
};
