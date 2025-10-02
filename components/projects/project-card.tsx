"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
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
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group flex flex-col overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-md h-full">
      {project.image && (
        <div className="relative overflow-hidden aspect-video w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={project.featured}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <Badge variant={"default"} className="text-xs">
              {project.category}
            </Badge>
          </div>
        </div>
      )}
      <CardHeader className="items-start">
        <CardTitle className="text-left">{project.title}</CardTitle>
        <CardDescription className="text-justify">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 items-start">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline">+{project.technologies.length - 4}</Badge>
          )}
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {project.achievements.slice(0, 2).map((achievement, i) => (
            <li key={i} className="flex items-start">
              <ArrowRight className="mr-2 h-4 w-4 text-primary mt-0.5 shrink-0" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-row w-full justify-between gap-2">
        <Button asChild variant="default" size="sm">
          <Link href={`/projects/${project.id}`}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>

        <div className="flex flex-row gap-2">
          {project.github && (
            <Button asChild variant="ghost" size="icon">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button asChild variant="ghost" size="icon">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
