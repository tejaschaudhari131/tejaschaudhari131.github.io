"use client";

import React, { createContext, useContext, useState } from "react";

interface ViewContextType {
    isJsonView: boolean;
    toggleView: () => void;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export const ViewProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isJsonView, setIsJsonView] = useState(false);

    const toggleView = () => setIsJsonView((prev) => !prev);

    return (
        <ViewContext.Provider value={{ isJsonView, toggleView }}>
            {children}
        </ViewContext.Provider>
    );
};

export const useView = () => {
    const context = useContext(ViewContext);
    if (context === undefined) {
        throw new Error("useView must be used within a ViewProvider");
    }
    return context;
};
