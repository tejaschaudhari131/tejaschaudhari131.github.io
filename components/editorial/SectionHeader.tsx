import React from "react";
import { MacroGrid } from "../MacroGrid";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    number: string;
}

export const SectionHeader = ({ title, subtitle, number }: SectionHeaderProps) => {
    return (
        <section className="py-12 md:py-24">
            <MacroGrid>
                <div className="md:col-span-12 border-t border-black/10 pt-8 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-4">
                        <span className="font-mono text-accent text-sm tracking-widest">
                            {number}
                        </span>
                        <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-black">
                            {title}
                        </h2>
                    </div>
                    {subtitle && (
                        <p className="font-mono text-gray-500 text-sm uppercase tracking-widest max-w-xs text-right">
                            {subtitle}
                        </p>
                    )}
                </div>
            </MacroGrid>
        </section>
    );
};
