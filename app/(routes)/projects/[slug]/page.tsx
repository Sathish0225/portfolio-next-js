"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Github, ExternalLink, Tag } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects, Project } from "@/data/projects";

export default function ProjectPage() {
  const router = useRouter();
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const slug = params?.slug?.toString() || "";
    const foundProject = projects.find((p) => p.id === slug);
    if (foundProject) {
      setProject(foundProject);
    } else {
      router.push("/projects");
    }
  }, [params, router]);

  if (!project) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <div className="animate-pulse text-center">
          <p>Loading project...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border/50 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>
          <div className="flex gap-2">
            {project.github && (
              <Button asChild variant="outline" size="sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button asChild variant="outline" size="sm">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Project Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Image */}
        {project.image && (
          <div className="mb-8 rounded-xl overflow-hidden relative shadow-lg h-64 sm:h-96">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        )}

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            {project.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="flex items-center gap-1"
              >
                <Tag className="h-3 w-3" />
                {tech}
              </Badge>
            ))}
          </div>
        </header>

        {/* Project Content */}
        <div className="mb-12 prose max-w-none">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="mb-6">
            {project.longDescription || project.description}
          </p>

          <h2 className="text-2xl font-bold mb-4">Achievements</h2>
          <ul className="space-y-2 mb-6">
            {project.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-2 font-bold">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>

          {project.github || project.liveUrl ? (
            <>
              <h2 className="text-2xl font-bold mb-4">Links</h2>
              <div className="flex flex-col sm:flex-row gap-2 mb-6">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:underline gap-1"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:underline gap-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </>
          ) : null}
        </div>
      </article>
    </div>
  );
}
