"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Layers3 } from "lucide-react";

import { ProjectCard } from "@/components/projects/project-card";
import { Badge } from "@/components/ui/badge";
import {
  ProjectCategory,
  projectCategoryConfig,
  projects,
} from "@/data/projects";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const featuredProjects = filteredProjects.filter(
    (project) => project.featured,
  );

  const otherProjects = filteredProjects.filter((project) => !project.featured);

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-200px] top-20 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute bottom-[-200px] right-[-150px] h-[450px] w-[450px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge
            variant="outline"
            className="mb-4 gap-2 rounded-full px-3 py-1"
          >
            <Layers3 className="h-3.5 w-3.5 text-primary" />
            Engineering Portfolio
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Selected <span className="text-primary">Engineering Work</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            Production systems, enterprise applications, mobile platforms, and
            AI-powered solutions designed and built across my engineering
            career.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 flex justify-center"
        >
          <div className="flex max-w-4xl flex-wrap justify-center gap-2">
            {projectCategoryConfig.map((category) => {
              const Icon = category.icon;
              const active = activeFilter === category.value;

              return (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => setActiveFilter(category.value)}
                  className={`
                    inline-flex items-center gap-2 rounded-full
                    border px-4 py-2 text-sm font-medium
                    transition-all duration-200
                    ${
                      active
                        ? "border-primary bg-primary text-primary-foreground shadow-sm"
                        : "bg-background hover:border-primary/40 hover:bg-primary/5"
                    }
                  `}
                >
                  <Icon className="h-4 w-4" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Featured */}
        {featuredProjects.length > 0 && (
          <section className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <p className="text-sm font-medium uppercase tracking-wider text-primary">
                Featured Work
              </p>

              <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                Production Systems
              </h2>

              <p className="mt-2 max-w-2xl text-muted-foreground">
                Systems developed for real-world operational, security, and
                enterprise environments.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <section className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <p className="text-sm font-medium uppercase tracking-wider text-primary">
                More Work
              </p>

              <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                Other Projects
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Empty */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <p className="text-muted-foreground">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
