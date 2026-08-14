"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Cloud,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
  Terminal,
} from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/social";

const displayedSkills = [
  "AI Application Developer",
  "Full-Stack Software Engineer",
  "Backend & API Engineer",
  "Cloud Application Developer",
  "Flutter Developer",
];

const technologyBadges = [
  { label: "Laravel", icon: Code2 },
  { label: "React.js", icon: Code2 },
  { label: "Python", icon: Terminal },
  { label: "Node.js", icon: Code2 },
  { label: "Flutter", icon: Code2 },
  { label: "AWS", icon: Cloud },
  { label: "Generative AI", icon: BrainCircuit },
  { label: "LLM / RAG", icon: Sparkles },
];

const stats = [
  {
    value: "10+",
    label: "Years IT Experience",
  },
  {
    value: "5+",
    label: "Years Software Development",
  },
  {
    value: "3+",
    label: "Enterprise Platforms",
  },
  {
    value: "AWS",
    label: "Cloud Experience",
  },
];

export function Hero() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [0, 1000], [0, 280]);
  const imageY = useTransform(scrollY, [0, 500], [0, 120]);
  const contentY = useTransform(scrollY, [0, 500], [0, 60]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex(
        (previousIndex) => (previousIndex + 1) % displayedSkills.length,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getIconComponent = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "github":
        return <Github className="h-4 w-4" />;

      case "linkedin":
        return <Linkedin className="h-4 w-4" />;

      case "mail":
        return <Mail className="h-4 w-4" />;

      case "phone":
        return <Phone className="h-4 w-4" />;

      default:
        return null;
    }
  };

  return (
    <section className="relative isolate overflow-hidden border-b bg-background">
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute left-1/2 top-[-250px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

        <div className="absolute right-[-150px] top-[180px] h-[420px] w-[420px] rounded-full bg-secondary/10 blur-[100px]" />

        <div className="absolute bottom-[-200px] left-[-150px] h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </motion.div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto px-4 py-12 sm:px-6 md:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          {/* ============================================================
              MAIN HERO
          ============================================================ */}

          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            {/* ==========================================================
                LEFT CONTENT
            ========================================================== */}

            <motion.div
              style={{ y: contentY }}
              className="order-2 text-center lg:order-1 lg:text-left"
            >
              {/* Availability / positioning badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-5 flex justify-center lg:justify-start"
              >
                <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1.5 text-xs font-medium shadow-sm backdrop-blur">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  Building with AI & Modern Technologies
                </div>
              </motion.div>

              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05 }}
              >
                <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Hello, I&apos;m
                </p>

                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem]">
                  Sathishkumar
                  <span className="block text-primary">Ranganathan</span>
                </h1>
              </motion.div>

              {/* Animated role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="relative mt-5 h-10 overflow-hidden sm:h-12"
              >
                {displayedSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={false}
                    animate={{
                      y:
                        index === currentSkillIndex
                          ? 0
                          : index < currentSkillIndex
                            ? -45
                            : 45,
                      opacity: index === currentSkillIndex ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                    className="absolute inset-x-0 flex justify-center lg:justify-start"
                  >
                    <h2 className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">
                      {skill}
                    </h2>
                  </motion.div>
                ))}
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.25 }}
                className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg md:text-xl lg:mx-0"
              >
                Building scalable web, mobile, cloud, and AI-powered
                applications using modern technologies including Laravel,
                React.js, Python, Node.js, Flutter, and AWS.
              </motion.p>

              {/* AI positioning */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.32 }}
                className="mx-auto mt-5 flex max-w-2xl items-start gap-3 rounded-xl border bg-card/60 p-4 text-left shadow-sm backdrop-blur lg:mx-0"
              >
                <div className="mt-0.5 rounded-lg bg-primary/10 p-2 text-primary">
                  <BrainCircuit className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Expanding into AI Application Development
                  </p>

                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Currently developing expertise in Generative AI, LLM
                    applications, RAG, embeddings, AI API integration, and
                    intelligent enterprise workflows.
                  </p>
                </div>
              </motion.div>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.4 }}
                className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start"
              >
                <Button asChild size="lg" className="group">
                  <a href="#projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </Button>

                <Button variant="outline" size="lg" asChild>
                  <a
                    href="/resume.pdf"
                    download="Sathishkumar_Ranganathan_Resume.pdf"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.48 }}
                className="mt-5 flex justify-center gap-2 lg:justify-start"
              >
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.5 + index * 0.05,
                    }}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.92 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="rounded-full border bg-background/60 shadow-sm backdrop-blur hover:bg-primary/10 hover:text-primary"
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                      >
                        {getIconComponent(social.icon)}
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* ==========================================================
                RIGHT PROFILE IMAGE
            ========================================================== */}

            <motion.div
              style={{ y: imageY }}
              className="order-1 flex justify-center lg:order-2"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative"
              >
                {/* Decorative ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-5 rounded-full border border-dashed border-primary/20"
                />

                {/* Glow */}
                <div className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl" />

                {/* Image */}
                <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-background shadow-2xl ring-1 ring-primary/20 sm:h-72 sm:w-72 md:h-80 md:w-80">
                  <Image
                    src="/images/profile.png"
                    alt="Sathishkumar Ranganathan"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
                </div>

                {/* Floating AI badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-3 top-8 rounded-xl border bg-background/90 px-3 py-2 shadow-lg backdrop-blur sm:-right-8"
                >
                  <div className="flex items-center gap-2">
                    <BrainCircuit className="h-4 w-4 text-primary" />
                    <span className="text-xs font-semibold">AI</span>
                  </div>
                </motion.div>

                {/* Floating cloud badge */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-2 -left-4 rounded-xl border bg-background/90 px-3 py-2 shadow-lg backdrop-blur sm:-left-8"
                >
                  <div className="flex items-center gap-2">
                    <Cloud className="h-4 w-4 text-primary" />
                    <span className="text-xs font-semibold">AWS</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* ============================================================
              STATS
          ============================================================ */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mt-14 grid grid-cols-2 overflow-hidden rounded-2xl border bg-card/50 shadow-sm backdrop-blur md:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`relative p-5 text-center ${
                  index !== stats.length - 1
                    ? "border-b md:border-b-0 md:border-r"
                    : ""
                } ${
                  index === 1 ? "border-r" : index === 2 ? "md:border-r" : ""
                }`}
              >
                <div className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {stat.value}
                </div>

                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* ============================================================
              TECHNOLOGY STACK
          ============================================================ */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8"
          >
            <div className="mb-4 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground">
              <Terminal className="h-4 w-4" />
              <span>Core Technologies</span>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {technologyBadges.map((technology, index) => {
                const Icon = technology.icon;

                return (
                  <motion.div
                    key={technology.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.04,
                    }}
                    whileHover={{
                      y: -2,
                      scale: 1.03,
                    }}
                    className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1.5 text-xs font-medium shadow-sm backdrop-blur transition-colors hover:border-primary/30 hover:bg-primary/5 sm:text-sm"
                  >
                    <Icon className="h-3.5 w-3.5 text-primary" />
                    {technology.label}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ============================================================
              SCROLL INDICATOR
          ============================================================ */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-10 hidden justify-center md:flex"
          >
            <a
              href="#about"
              aria-label="Scroll to learn more"
              className="group flex flex-col items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <span>Explore my work</span>

              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-8 w-px bg-border transition-colors group-hover:bg-primary"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
