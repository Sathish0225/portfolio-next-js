"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExperienceCard } from "./experience-card";

export function ExperienceTimeline() {
  const [activeTab, setActiveTab] = useState<string>("all");

  // Filter experiences based on active tab
  const filteredExperiences =
    activeTab === "all"
      ? experiences
      : experiences.filter((exp) => exp.type === activeTab);

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Experience
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My professional journey in development and research
          </p>
        </motion.div>

        <div className="flex justify-center mt-8">
          <Tabs defaultValue="all" className="w-full max-w-md">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
                All
              </TabsTrigger>
              <TabsTrigger value="work" onClick={() => setActiveTab("work")}>
                Work
              </TabsTrigger>
              <TabsTrigger
                value="leadership"
                onClick={() => setActiveTab("leadership")}
              >
                Leadership
              </TabsTrigger>
              <TabsTrigger
                value="research"
                onClick={() => setActiveTab("research")}
              >
                Research
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="mx-auto max-w-3xl mt-12">
          <div className="relative mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 h-full w-[2px] -translate-x-1/2 bg-border" />

            {/* Timeline Items */}
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
    </section>
  );
}
