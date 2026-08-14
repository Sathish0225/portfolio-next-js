"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Lightbulb,
  LockKeyhole,
  LucideIcon,
  MessageSquare,
  Smartphone,
  Users,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education } from "@/data/education";

const engineeringAreas = [
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    description:
      "Designing and developing production web applications, RESTful APIs, backend services, and modern frontend experiences.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Applications",
    description:
      "Building cross-platform mobile applications with Flutter alongside responsive web applications using React and Next.js.",
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    description:
      "Deploying and maintaining production applications with cloud infrastructure, CI/CD workflows, monitoring, and performance optimization.",
  },
  {
    icon: Database,
    title: "Data & Backend Systems",
    description:
      "Designing relational and NoSQL data models, optimizing queries, and building maintainable backend architectures.",
  },
  {
    icon: LockKeyhole,
    title: "Security & Access Control",
    description:
      "Implementing authentication, authorization, RBAC, API security, and secure application development practices.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Applications",
    description:
      "Currently expanding into Generative AI, LLM applications, RAG, embeddings, AI APIs, and intelligent application workflows.",
  },
];

const principles = [
  {
    icon: Layers3,
    number: "01",
    title: "Build for Maintainability",
    description:
      "I focus on clear architecture, separation of concerns, reusable components, and code that remains maintainable as systems evolve.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Solve the Real Problem",
    description:
      "Good engineering starts with understanding the business problem and choosing the simplest reliable solution that delivers measurable value.",
  },
  {
    icon: Users,
    number: "03",
    title: "Collaborate & Communicate",
    description:
      "I value clear communication, knowledge sharing, technical discussions, and close collaboration across engineering and business teams.",
  },
  {
    icon: MessageSquare,
    number: "04",
    title: "Keep Learning",
    description:
      "I continuously explore new technologies and currently focus on applying AI capabilities to practical software engineering problems.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-48 top-10 h-[450px] w-[450px] rounded-full bg-primary/5 blur-3xl" />

          <div className="absolute -bottom-48 -right-48 h-[450px] w-[450px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <Badge
              variant="outline"
              className="mb-5 gap-2 rounded-full px-3 py-1"
            >
              <BriefcaseBusiness className="h-3.5 w-3.5 text-primary" />
              About Me
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Building Software That{" "}
              <span className="text-primary">Solves Real Problems</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
              I&apos;m Sathishkumar Ranganathan, a Full-Stack Software Developer
              with 10+ years of experience across software development, IT
              infrastructure, web applications, mobile applications, and
              cloud-based systems.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
              My core experience is in building production systems using
              Laravel, React, Next.js, Flutter, Node.js, databases, and AWS.
              I&apos;m currently expanding this foundation into AI-powered
              application development, with a focus on Generative AI, LLMs, RAG,
              embeddings, and intelligent software workflows.
            </p>
          </motion.div>

          {/* Profile Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4"
          >
            <ProfileStat value="10+" label="Years in IT" />
            <ProfileStat value="5+" label="Years Full-Stack" />
            <ProfileStat value="Web + Mobile" label="Application Development" />
            <ProfileStat value="AI" label="Current Specialization" />
          </motion.div>
        </div>
      </section>

      <section className="border-y bg-muted/20 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeader
            icon={Code2}
            eyebrow="Engineering Profile"
            title={
              <>
                What I <span className="text-primary">Build</span>
              </>
            }
            description="My experience covers the complete software development lifecycle, from architecture and implementation to deployment, maintenance, and continuous improvement."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {engineeringAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                >
                  <Card className="group h-full bg-card/70 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="font-semibold">{area.title}</h3>

                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {area.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeader
            icon={GraduationCap}
            eyebrow="Education"
            title={
              <>
                Academic <span className="text-primary">Background</span>
              </>
            }
            description="My academic foundation and formal education."
          />

          <div className="mx-auto mt-10 max-w-4xl space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
              >
                <Card className="transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                  <CardHeader className="p-5 pb-3 md:p-6 md:pb-3">
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <CardTitle className="text-lg md:text-xl">
                          {edu.degree}
                        </CardTitle>

                        <p className="mt-1 text-sm font-medium text-primary">
                          {edu.institution}
                        </p>
                      </div>

                      <Badge variant="outline" className="w-fit">
                        {edu.startDate} - {edu.endDate}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="px-5 pb-5 pt-0 md:px-6 md:pb-6">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span>{edu.location}</span>

                      {edu.gpa && (
                        <>
                          <span>•</span>
                          <span>CGPA: {edu.gpa}</span>
                        </>
                      )}
                    </div>

                    {edu.description && (
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {edu.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y bg-muted/20 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl"
          >
            <Card className="overflow-hidden border-primary/20 bg-card/70 shadow-lg backdrop-blur">
              <CardContent className="p-6 md:p-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <BrainCircuit className="h-7 w-7" />
                  </div>

                  <div>
                    <Badge variant="outline" className="mb-3 rounded-full">
                      Current Focus
                    </Badge>

                    <h2 className="text-2xl font-bold md:text-3xl">
                      Expanding Into AI Engineering
                    </h2>

                    <p className="mt-4 leading-7 text-muted-foreground">
                      I&apos;m currently building practical knowledge in
                      Generative AI and exploring how AI capabilities can be
                      integrated into real-world software products.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {[
                        "Generative AI",
                        "LLM Applications",
                        "RAG",
                        "Embeddings",
                        "AI APIs",
                        "Intelligent Workflows",
                      ].map((technology) => (
                        <Badge key={technology} variant="secondary">
                          {technology}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeader
            icon={Lightbulb}
            eyebrow="Engineering Principles"
            title={
              <>
                How I <span className="text-primary">Work</span>
              </>
            }
            description="The principles that guide how I approach software engineering and problem solving."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <motion.div
                  key={principle.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                >
                  <Card className="group h-full transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                    <CardContent className="flex gap-5 p-6">
                      <div className="shrink-0">
                        <span className="text-sm font-bold text-primary/60">
                          {principle.number}
                        </span>
                      </div>

                      <div className="flex-1">
                        <div className="mb-3 flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <Icon className="h-4 w-4" />
                          </div>

                          <h3 className="font-semibold">{principle.title}</h3>
                        </div>

                        <p className="text-sm leading-6 text-muted-foreground">
                          {principle.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

interface SectionHeaderProps {
  icon: LucideIcon;
  eyebrow: string;
  title: React.ReactNode;
  description: string;
}

function SectionHeader({
  icon: Icon,
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-3xl text-center"
    >
      <Badge variant="outline" className="mb-4 gap-2 rounded-full px-3 py-1">
        <Icon className="h-3.5 w-3.5 text-primary" />
        {eyebrow}
      </Badge>

      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
        {description}
      </p>
    </motion.div>
  );
}

function ProfileStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border bg-card/60 p-4 text-center shadow-sm backdrop-blur">
      <div className="text-xl font-bold text-primary md:text-2xl">{value}</div>

      <div className="mt-1 text-xs text-muted-foreground md:text-sm">
        {label}
      </div>
    </div>
  );
}
