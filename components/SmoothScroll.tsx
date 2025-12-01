"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
    return (
        <ReactLenis root>
            {children as any}
        </ReactLenis>
    );
};
