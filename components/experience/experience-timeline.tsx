"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase } from "lucide-react";

import { experiences } from "@/data/experience";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExperienceCard } from "./experience-card";

type ExperienceFilter = "all" | "work" | "leadership" | "education";

const filters: {
  value: ExperienceFilter;
  label: string;
}[] = [
  { value: "all", label: "All" },
  { value: "work", label: "Professional" },
  { value: "leadership", label: "Leadership" },
  { value: "education", label: "Education" },
];

export function ExperienceTimeline() {
  const [activeTab, setActiveTab] = useState<ExperienceFilter>("all");

  const filteredExperiences =
    activeTab === "all"
      ? experiences
      : experiences.filter((experience) => experience.type === activeTab);

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-muted/20 py-16 md:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-200px] top-20 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-150px] h-[450px] w-[450px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 flex justify-center">
            <div className="flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 text-xs font-medium">
              <Briefcase className="h-3.5 w-3.5 text-primary" />
              Professional Journey
            </div>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Experience & <span className="text-primary">Impact</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            10+ years of experience across software engineering, enterprise
            application development, mobile platforms, cloud infrastructure, and
            technical leadership.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 flex justify-center"
        >
          <Tabs
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as ExperienceFilter)}
          >
            <TabsList className="h-auto flex-wrap justify-center gap-1.5 p-1.5">
              {filters.map((filter) => (
                <TabsTrigger
                  key={filter.value}
                  value={filter.value}
                  className="px-4 py-2 text-xs sm:text-sm"
                >
                  {filter.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Timeline */}
        <div className="mx-auto mt-14 max-w-5xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:left-1/2 md:block md:-translate-x-1/2" />

            <div className="space-y-10 md:space-y-16">
              {filteredExperiences.map((experience, index) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-14 max-w-3xl text-center"
        >
          <p className="text-sm leading-6 text-muted-foreground">
            My focus has evolved from application development toward designing
            scalable systems, solving complex engineering problems, and building
            intelligent software with modern AI technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
