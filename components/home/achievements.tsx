"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  QrCode,
  WifiOff,
  Cloud,
  Users,
  LockKeyhole,
  Server,
  BrainCircuit,
  LucideIcon,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface EngineeringHighlight {
  icon: LucideIcon;
  title: string;
  description: string;
  category: string;
}

const highlights: EngineeringHighlight[] = [
  {
    icon: ShieldCheck,
    category: "Enterprise Platform",
    title: "Built iSecure360",
    description:
      "Designed and delivered a security workforce management platform spanning web and mobile applications.",
  },
  {
    icon: QrCode,
    category: "Visitor Management",
    title: "Built a Visitor Management System",
    description:
      "Developed a multi-location VMS with QR-based check-in/out, visitor registration, access workflows, and real-time notifications.",
  },
  {
    icon: WifiOff,
    category: "Mobile Engineering",
    title: "Implemented Offline-First Workflows",
    description:
      "Engineered offline guard-tour functionality with local data handling and synchronization when connectivity is restored.",
  },
  {
    icon: Cloud,
    category: "Cloud & Infrastructure",
    title: "Deployed Production Systems on AWS",
    description:
      "Configured and managed cloud infrastructure with a focus on availability, security, deployment, and application performance.",
  },
  {
    icon: LockKeyhole,
    category: "Application Security",
    title: "Implemented Secure Access Control",
    description:
      "Built authentication and role-based authorization using Laravel security patterns and Spatie Permissions.",
  },
  {
    icon: Server,
    category: "Infrastructure",
    title: "Managed IT Infrastructure",
    description:
      "Worked with Windows servers, firewalls, deployment environments, and production troubleshooting across application infrastructure.",
  },
  {
    icon: Users,
    category: "Technical Leadership",
    title: "Mentored Developers",
    description:
      "Supported junior developers, reviewed implementations, and collaborated across technical and business teams.",
  },
  {
    icon: BrainCircuit,
    category: "AI Engineering",
    title: "Expanding into AI-Powered Applications",
    description:
      "Currently developing practical expertise in Generative AI, LLM applications, RAG, embeddings, and AI API integration.",
  },
];

export function Achievements() {
  return (
    <section
      id="highlights"
      className="relative overflow-hidden border-y bg-muted/20 py-16 md:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-48 top-20 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute -bottom-48 -right-48 h-[450px] w-[450px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        {/* Section Header */}
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
            <Server className="h-3.5 w-3.5 text-primary" />
            Engineering Experience
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What I&apos;ve <span className="text-primary">Built & Solved</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            Selected engineering work across enterprise applications, mobile
            systems, cloud infrastructure, security, and emerging AI
            technologies.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;

            return (
              <motion.div
                key={highlight.title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-50px",
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
              >
                <Card className="group h-full border bg-card/70 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                  <CardContent className="p-5">
                    {/* Icon */}
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Category */}
                    <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
                      {highlight.category}
                    </p>

                    {/* Title */}
                    <h3 className="text-base font-semibold leading-6">
                      {highlight.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.35,
          }}
          className="mx-auto mt-10 max-w-3xl text-center"
        >
          <p className="text-sm leading-6 text-muted-foreground">
            My focus is on building{" "}
            <span className="font-medium text-foreground">
              reliable, secure, and maintainable software
            </span>{" "}
            that solves real business problems — from backend architecture and
            APIs to cloud infrastructure, mobile applications, and AI-powered
            workflows.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
