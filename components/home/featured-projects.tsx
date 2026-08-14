"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  ExternalLink,
  Github,
  Layers3,
} from "lucide-react";
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
import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

export function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  const isAIProject = (technologies: string[]) =>
    technologies.some((technology) =>
      [
        "AI",
        "Artificial Intelligence",
        "Generative AI",
        "LLM",
        "RAG",
        "OpenAI",
        "Python",
        "Machine Learning",
        "Computer Vision",
      ].some((keyword) =>
        technology.toLowerCase().includes(keyword.toLowerCase()),
      ),
    );

  const isCloudProject = (technologies: string[]) =>
    technologies.some((technology) =>
      ["AWS", "Azure", "GCP", "Vercel", "Cloud"].some((keyword) =>
        technology.toLowerCase().includes(keyword.toLowerCase()),
      ),
    );

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-y bg-muted/30 py-16 md:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-200px] top-20 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute bottom-[-200px] right-[-150px] h-[450px] w-[450px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="mb-4 flex justify-center">
            <Badge variant="outline" className="gap-2 rounded-full px-3 py-1">
              <Layers3 className="h-3.5 w-3.5 text-primary" />
              Selected Work
            </Badge>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Projects That Solve{" "}
            <span className="text-primary">Real Problems</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            A selection of enterprise platforms, cloud applications, mobile
            solutions, and intelligent systems built across security, workforce,
            visitor management, and access control.
          </p>
        </motion.div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => {
            const aiProject = isAIProject(project.technologies);
            const cloudProject = isCloudProject(project.technologies);

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
                  {project.image && (
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                      />

                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

                      {/* Category */}
                      <div className="absolute left-4 top-4">
                        <Badge className="border-white/20 bg-background/90 text-foreground shadow-lg backdrop-blur">
                          {project.category}
                        </Badge>
                      </div>

                      {/* AI / Cloud indicators */}
                      <div className="absolute right-4 top-4 flex gap-2">
                        {aiProject && (
                          <Badge
                            variant="secondary"
                            className="gap-1.5 border-primary/20 bg-background/90 backdrop-blur"
                          >
                            <BrainCircuit className="h-3.5 w-3.5 text-primary" />
                            AI
                          </Badge>
                        )}

                        {cloudProject && (
                          <Badge
                            variant="secondary"
                            className="gap-1.5 border-primary/20 bg-background/90 backdrop-blur"
                          >
                            <Cloud className="h-3.5 w-3.5 text-primary" />
                            Cloud
                          </Badge>
                        )}
                      </div>

                      {/* Bottom project title */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="text-xs font-medium uppercase tracking-wider text-white/70">
                          Featured Project
                        </p>

                        <h3 className="mt-1 text-xl font-bold text-white">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  )}

                  <CardHeader className="pb-3">
                    {!project.image && (
                      <div className="mb-2 flex items-center gap-2">
                        <Badge variant="outline">{project.category}</Badge>

                        {aiProject && (
                          <Badge
                            variant="outline"
                            className="gap-1.5 border-primary/20"
                          >
                            <BrainCircuit className="h-3 w-3 text-primary" />
                            AI
                          </Badge>
                        )}
                      </div>
                    )}

                    <CardTitle className="text-xl transition-colors group-hover:text-primary">
                      {project.title}
                    </CardTitle>

                    <CardDescription className="line-clamp-3 leading-6">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

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

                              <span className="line-clamp-2">
                                {achievement}
                              </span>
                            </motion.li>
                          ))}
                      </ul>
                    </div>
                  </CardContent>

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
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 flex flex-col items-center text-center"
        >
          <p className="mb-4 text-sm text-muted-foreground">
            Interested in the architecture, technical decisions, or
            implementation details?
          </p>

          <Button asChild variant="outline" size="lg" className="group">
            <Link href="/projects">
              Explore All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
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
