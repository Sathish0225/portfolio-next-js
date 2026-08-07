"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  Briefcase,
  GraduationCap,
  Users,
  Microscope,
  Globe,
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

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const getExperienceIcon = () => {
    switch (experience.type) {
      case "work":
        return <Briefcase className="h-6 w-6" />;

      case "research":
        return <Microscope className="h-6 w-6" />;

      case "education":
        return <GraduationCap className="h-6 w-6" />;

      case "leadership":
        return <Users className="h-6 w-6" />;

      default:
        return <Briefcase className="h-6 w-6" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.15,
      }}
      className="relative mb-12 flex flex-col md:flex-row"
    >
      {/* Timeline Icon */}

      <div
        className={`absolute hidden md:block text-primary -translate-y-6 ${
          index % 2 === 0 ? "right-[calc(50%+12px)]" : "left-[calc(50%+12px)]"
        }`}
      >
        {getExperienceIcon()}
      </div>

      {/* Mobile */}

      <div className="absolute md:hidden left-1/2 -translate-x-1/2 -translate-y-6 text-primary">
        {getExperienceIcon()}
      </div>

      {/* Card */}

      <div
        className={`mx-5 md:w-1/2 ${
          index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
        }`}
      >
        <Card className="overflow-hidden border hover:border-primary transition-all duration-300">
          <CardHeader className="bg-muted/50">
            <div className="flex justify-between gap-2">
              <div className="flex gap-2">
                {experience.companyLogo && (
                  <Image
                    src={experience.companyLogo}
                    alt={experience.company}
                    width={56}
                    height={56}
                    className="rounded-lg border"
                  />
                )}

                <div>
                  <h3 className="text-lg font-bold">{experience.title}</h3>

                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="font-medium">{experience.company}</span>

                    {experience.companyWebsite && (
                      <Link href={experience.companyWebsite} target="_blank">
                        <Globe className="h-4 w-4 text-primary" />
                      </Link>
                    )}

                    <Badge variant="secondary">
                      {experience.employmentType}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-1 mt-2 text-muted-foreground text-sm">
                    <MapPin className="h-4 w-4" />

                    {experience.location}
                  </div>
                </div>
              </div>

              <Badge
                variant="outline"
                className="flex items-center gap-1 h-fit"
              >
                <Calendar className="h-3 w-3" />
                {formatDate(experience.startDate)} —{" "}
                {experience.isCurrent
                  ? "Present"
                  : formatDate(experience.endDate)}
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-2">
            <p className="text-sm leading-7">{experience.description}</p>

            {experience.techStack && experience.techStack.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2">Technologies</h4>

                <div className="flex flex-wrap gap-2">
                  {experience.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <Separator />

            <div>
              <h4 className="font-semibold mb-3">Key Achievements</h4>

              <ul className="space-y-3">
                {experience.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-1 shrink-0" />

                    <span className="text-sm leading-6">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
