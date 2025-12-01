import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ProjectRowProps {
    title: string;
    description: string;
    tags?: string[];
    category?: string;
    imageSrc?: string;
    year: string;
    index: string;
}

export const ProjectRow: React.FC<ProjectRowProps> = ({ title, description, tags, category, imageSrc, year, index }) => {
    return (
        <div className="py-8 border-b border-gray-200 bg-white group hover:bg-gray-50 transition-colors px-4 md:px-0">
            <div className="grid md:grid-cols-12 gap-4 md:gap-8 items-start md:items-center">
                {/* Index & Year */}
                <div className="md:col-span-2 flex items-center gap-3">
                    <span className="font-mono text-xs text-orange-500">0{index}</span>
                    <span className="font-mono text-xs text-gray-400">/ {year}</span>
                </div>

                {/* Title & Category */}
                <div className="md:col-span-4">
                    <h3 className="font-display text-xl font-bold mb-1 group-hover:text-orange-600 transition-colors">
                        {title}
                    </h3>
                    {category && (
                        <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider border border-gray-200 px-2 py-0.5 rounded-full">
                            {category}
                        </span>
                    )}
                </div>

                {/* Description */}
                <div className="md:col-span-5">
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Link */}
                <div className="md:col-span-1 flex justify-end">
                    <button className="p-2 rounded-full border border-gray-200 group-hover:bg-white group-hover:border-orange-200 transition-all">
                        <ArrowUpRight size={16} className="text-gray-400 group-hover:text-orange-600" />
                    </button>
                </div>
            </div>
        </div>
    );
};
