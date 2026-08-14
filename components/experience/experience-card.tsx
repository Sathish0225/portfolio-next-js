"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import {
  ArrowUpRight,
  MapPin,
  Briefcase,
  GraduationCap,
  Users,
  Calendar,
} from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { Experience } from "@/data/experience";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const formatDate = (date?: string) => {
  if (!date) return "Present";

  const [year, month] = date.split("-");

  return new Date(Number(year), Number(month) - 1).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

function getExperienceIcon(type: Experience["type"]) {
  switch (type) {
    case "education":
      return GraduationCap;

    case "leadership":
      return Users;

    default:
      return Briefcase;
  }
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const Icon = getExperienceIcon(experience.type);
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
      }}
      className="relative"
    >
      {/* Timeline node */}
      <div
        className={`absolute left-4 top-8 z-10 hidden h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border bg-background text-primary shadow-sm md:flex md:left-1/2`}
      >
        <Icon className="h-4 w-4" />
      </div>

      <div className={`grid md:grid-cols-2 md:gap-14 ${isLeft ? "" : ""}`}>
        {/* Empty side */}
        <div className={isLeft ? "hidden md:block" : "hidden md:block"}>
          {!isLeft && (
            <div className="flex h-full items-center justify-end">
              <div className="max-w-xs text-right">
                <p className="text-sm font-medium text-muted-foreground">
                  {experience.startDate ? formatDate(experience.startDate) : ""}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  {experience.isCurrent
                    ? "Current Position"
                    : "Professional Experience"}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Main card */}
        <div
          className={
            isLeft
              ? "md:col-start-1 md:row-start-1"
              : "md:col-start-2 md:row-start-1"
          }
        >
          <Card className="group overflow-hidden border bg-card/80 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
            <CardHeader className="border-b bg-muted/30 p-5 md:p-6">
              <div className="flex flex-col gap-4">
                {/* Company / logo */}
                <div className="flex items-start gap-4">
                  {experience.companyLogo && (
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border bg-background">
                      <Image
                        src={experience.companyLogo}
                        alt={experience.company}
                        fill
                        sizes="48px"
                        className="object-contain p-1.5"
                      />
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold tracking-tight">
                        {experience.title}
                      </h3>

                      <Badge
                        variant={experience.isCurrent ? "default" : "secondary"}
                      >
                        {experience.employmentType}
                      </Badge>
                    </div>

                    <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className="font-medium">{experience.company}</span>

                      {experience.companyWebsite && (
                        <Link
                          href={experience.companyWebsite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground transition-colors hover:text-primary"
                          aria-label={`Visit ${experience.company}`}
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(experience.startDate)} —{" "}
                    {experience.isCurrent
                      ? "Present"
                      : formatDate(experience.endDate)}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {experience.location}
                  </span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6 p-5 md:p-6">
              {/* Description */}
              <div>
                <p className="text-sm leading-7 text-muted-foreground">
                  {experience.description}
                </p>
              </div>

              {/* Impact */}
              {experience.achievements?.length > 0 && (
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />

                    <h4 className="text-sm font-semibold uppercase tracking-wider">
                      Key Impact
                    </h4>
                  </div>

                  <ul className="space-y-3">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-primary" />

                        <span className="text-sm leading-6 text-muted-foreground">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              {(experience.techStack?.length ?? 0) > 0 && (
                <>
                  <Separator />

                  <div>
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Technology Stack
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {experience.techStack?.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-background"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Date on alternate side */}
        <div
          className={`hidden md:flex ${
            isLeft
              ? "md:col-start-2 md:row-start-1"
              : "md:col-start-1 md:row-start-1"
          } items-center ${isLeft ? "justify-start" : "justify-end"}`}
        >
          <div className={`max-w-xs ${isLeft ? "text-left" : "text-right"}`}>
            <p className="text-sm font-semibold">
              {formatDate(experience.startDate)}
              {" — "}
              {experience.isCurrent
                ? "Present"
                : formatDate(experience.endDate)}
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              {experience.isCurrent
                ? "Current Position"
                : "Professional Experience"}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
