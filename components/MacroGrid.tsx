import React from "react";

interface MacroGridProps {
    children: React.ReactNode;
    className?: string;
}

export const MacroGrid: React.FC<MacroGridProps> = ({ children, className = "" }) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 max-w-[1600px] mx-auto px-4 md:px-8 ${className}`}>
            {children}
        </div>
    );
};
