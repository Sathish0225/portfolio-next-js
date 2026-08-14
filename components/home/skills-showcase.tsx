"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Layers3,
  LockKeyhole,
  LucideIcon,
  Wrench,
} from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { TechIcon } from "@/components/tech-icon";
import { Badge } from "@/components/ui/badge";
import { skills, SkillCategory } from "@/data/skills";

const categoryIcons: Record<SkillCategory, LucideIcon> = {
  "AI & Generative AI": BrainCircuit,
  Languages: Code2,
  "Frameworks/Libraries": Layers3,
  Databases: Database,
  "Cloud/DevOps": Cloud,
  Tools: Wrench,
  "Architecture & Security": LockKeyhole,
};

export function SkillsShowcase() {
  const categories = Object.keys(skills) as SkillCategory[];

  const defaultCategory: SkillCategory = categories.includes(
    "AI & Generative AI",
  )
    ? "AI & Generative AI"
    : categories[0];

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-y bg-muted/20 py-16 md:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-48 top-20 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute -bottom-48 -right-48 h-[450px] w-[450px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        {/* ============================================================
            SECTION HEADER
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge
            variant="outline"
            className="mb-4 gap-2 rounded-full px-3 py-1"
          >
            <Code2 className="h-3.5 w-3.5 text-primary" />
            Engineering Toolkit
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Technologies I <span className="text-primary">Build With</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            A production-focused technology stack built through years of
            developing web, mobile, cloud, and enterprise applications.
          </p>
        </motion.div>

        {/* ============================================================
            CAPABILITY CARDS
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4"
        >
          <Capability
            icon={Code2}
            title="Full Stack"
            description="Web & APIs"
          />

          <Capability
            icon={BrainCircuit}
            title="AI"
            description="LLM Applications"
          />

          <Capability
            icon={Cloud}
            title="Cloud"
            description="AWS & Deployment"
          />

          <Capability
            icon={LockKeyhole}
            title="Architecture"
            description="Security & Scale"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 md:mt-14"
        >
          <Tabs defaultValue={defaultCategory} className="w-full">
            <div className="mb-8 flex justify-center">
              <TabsList className="h-auto max-w-5xl flex-wrap justify-center gap-1.5 bg-muted/60 p-1.5">
                {categories.map((category) => {
                  const Icon = categoryIcons[category];

                  return (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className="gap-2 p-2 text-xs sm:text-sm"
                    >
                      <Icon className="h-3.5 w-3.5" />

                      <span>{category}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            {/* Technology list */}
            {categories.map((category) => {
              const Icon = categoryIcons[category];

              return (
                <TabsContent
                  key={category}
                  value={category}
                  className="mt-0 focus-visible:outline-none"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-2xl border bg-card/70 p-6 shadow-sm backdrop-blur md:p-8"
                  >
                    {/* Category header */}
                    <div className="mb-6 flex items-center justify-center gap-3">
                      <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="text-left font-semibold">{category}</h3>

                        <p className="text-left text-xs text-muted-foreground">
                          {skills[category].length} technologies
                        </p>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap justify-center gap-3">
                      {skills[category].map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{
                            opacity: 0,
                            scale: 0.9,
                            y: 8,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.04,
                          }}
                          whileHover={{
                            y: -3,
                            scale: 1.03,
                          }}
                        >
                          <Badge
                            variant="outline"
                            className="group flex items-center gap-2 rounded-lg bg-background px-3 py-2 text-sm font-medium shadow-sm transition-all duration-200 hover:border-primary/30 hover:bg-primary/5 hover:shadow-md"
                          >
                            <TechIcon
                              logoKey={skill.logoKey}
                              name={skill.name}
                              className="h-5 w-5 transition-transform duration-200 group-hover:scale-110"
                            />

                            <span>{skill.name}</span>
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>
              );
            })}
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-8 max-w-3xl"
        >
          <div className="flex items-start gap-3 rounded-xl border border-primary/10 bg-primary/5 p-4">
            <div className="mt-0.5 shrink-0 rounded-lg bg-primary/10 p-2 text-primary">
              <BrainCircuit className="h-4 w-4" />
            </div>

            <div>
              <p className="text-sm font-semibold">
                Currently expanding into AI engineering
              </p>

              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Building practical expertise in Generative AI, LLM applications,
                RAG, embeddings, AI API integration, and intelligent application
                workflows.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface CapabilityProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function Capability({ icon: Icon, title, description }: CapabilityProps) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="rounded-xl border bg-card/60 p-4 text-center shadow-sm backdrop-blur transition-shadow hover:shadow-md"
    >
      <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </div>

      <p className="text-sm font-semibold">{title}</p>

      <p className="mt-0.5 text-xs text-muted-foreground">{description}</p>
    </motion.div>
  );
}
