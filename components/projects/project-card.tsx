"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
      }}
      className="h-full"
    >
      <Card className="group relative flex h-full flex-col overflow-hidden border-border/60 bg-card/80 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
        {/* Project Image */}
        {project.image && (
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={project.featured}
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

            {/* Category */}
            <div className="absolute left-4 top-4">
              <Badge className="border-white/20 bg-background/90 text-foreground shadow-lg backdrop-blur">
                {project.category}
              </Badge>
            </div>

            {/* Featured */}
            {project.featured && (
              <div className="absolute right-4 top-4">
                <Badge className="gap-1 border-0 bg-primary/90 text-xs shadow-sm backdrop-blur">
                  <Sparkles className="h-3 w-3" />
                  Featured
                </Badge>
              </div>
            )}

            {/* Hover action */}
            <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <Button
                asChild
                size="icon"
                variant="secondary"
                className="rounded-full shadow-lg"
              >
                <Link
                  href={`/projects/${project.id}`}
                  aria-label={`View ${project.title}`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        )}

        {/* Header */}
        <CardHeader className="pb-3">
          <CardTitle className="text-xl transition-colors group-hover:text-primary">
            {project.title}
          </CardTitle>

          <CardDescription className="line-clamp-3 leading-6">
            {project.description}
          </CardDescription>
        </CardHeader>

        {/* Content */}
        <CardContent className="flex-1 space-y-5">
          {/* Technology stack */}
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <CodeIcon />
              Technology Stack
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 5).map((technology) => (
                <Badge
                  key={technology}
                  variant="secondary"
                  className="rounded-md px-2 py-1 text-xs font-medium"
                >
                  {technology}
                </Badge>
              ))}

              {project.technologies.length > 5 && (
                <Badge
                  variant="outline"
                  className="rounded-md px-2 py-1 text-xs"
                >
                  +{project.technologies.length - 5}
                </Badge>
              )}
            </div>
          </div>

          {/* Key achievements */}
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Key Contributions
            </div>

            <ul className="space-y-2.5">
              {project.achievements
                .slice(0, 3)
                .map((achievement, achievementIndex) => (
                  <motion.li
                    key={achievementIndex}
                    className="flex items-start text-sm leading-6 text-muted-foreground"
                  >
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

                    <span className="line-clamp-2">{achievement}</span>
                  </motion.li>
                ))}
            </ul>
          </div>
        </CardContent>

        {/* Footer */}
        <CardFooter className="flex-1 w-full items-center justify-between border-t bg-muted/20 px-5 py-4">
          <Button asChild size="sm" className="group/button">
            <Link href={`/projects/${project.id}`}>
              Case Study
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
            </Link>
          </Button>

          <div className="flex items-center gap-1">
            {project.github && (
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}

            {project.liveUrl && (
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary"
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live demo`}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

/**
 * Small inline icon component.
 * Keeps the technology-stack heading clean without
 * adding another dependency.
 */
function CodeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-primary"
      aria-hidden="true"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
