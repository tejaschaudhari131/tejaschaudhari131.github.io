"use client";

import React from "react";
import { ManifestoHero } from "../components/editorial/ManifestoHero";
import { VideoStory } from "../components/editorial/VideoStory";
import { AdversarialProjectFeature } from "../components/editorial/AdversarialProjectFeature";
import { BlueprintFeature } from "../components/editorial/BlueprintFeature";
import { HydrobotProjectFeature } from "../components/editorial/HydrobotProjectFeature";
import { DroneProjectFeature } from "../components/editorial/DroneProjectFeature";
import { HumanoidProjectFeature } from "../components/editorial/HumanoidProjectFeature";
import { DigitalTwinProjectFeature } from "../components/editorial/DigitalTwinProjectFeature";
import { FilmStripGallery } from "../components/editorial/FilmStripGallery";
import { ArchiveGrid } from "../components/editorial/ArchiveGrid";
import { ScrollyText } from "../components/ui/ScrollyText";
import { SectionHeader } from "../components/editorial/SectionHeader";
import { CommunityImpact } from "../components/editorial/CommunityImpact";

export default function Home() {
    return (
        <main className="bg-background min-h-screen relative">
            <ScrollyText />
            <div className="relative z-10">
                <ManifestoHero />

                <SectionHeader
                    number="01"
                    title="Experience"
                    subtitle="Professional & Community"
                />
                <BlueprintFeature />
                <VideoStory />
                <ArchiveGrid />

                <SectionHeader
                    number="02"
                    title="Selected Projects"
                    subtitle="System Engineering"
                />
                <AdversarialProjectFeature />
                <HydrobotProjectFeature />
                <DroneProjectFeature />
                <HumanoidProjectFeature />
                <DigitalTwinProjectFeature />

                <CommunityImpact />
                <FilmStripGallery />
            </div>
        </main>
    );
}
