"use client";

import React, { JSX } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ExternalLink,
  Github,
  Tag,
} from "lucide-react";

import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ProjectPage() {
  const router = useRouter();
  const params = useParams();

  const slug = Array.isArray(params?.slug)
    ? params.slug[0]
    : (params?.slug?.toString() ?? "");

  const project = projects.find((item) => item.id === slug);

  /*
   * Project not found
   */
  if (!project) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Project Not Found</h1>

          <p className="mt-2 text-muted-foreground">
            The project you are looking for does not exist.
          </p>

          <Button onClick={() => router.push("/projects")} className="mt-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Date unavailable";

    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) {
      return dateString;
    }

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  /*
   * Inline Markdown formatting
   */
  const formatLine = (line: string) => {
    if (!line) return "";

    return (
      line
        // Inline code
        .replace(
          /`([^`]+)`/g,
          '<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">$1</code>',
        )

        // Bold + italic
        .replace(/\*\*\*(.*?)\*\*\*/g, "<strong><em>$1</em></strong>")

        // Bold
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

        // Italic
        .replace(/\*(.*?)\*/g, "<em>$1</em>")

        // Links
        .replace(
          /\[([\s\S]*?)\]\(([^)]+)\)/g,
          (_match, label, url) =>
            `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">${label.replace(
              /\n/g,
              " ",
            )}</a>`,
        )
    );
  };

  /*
   * Render project content
   */
  const renderContent = () => {
    if (!project.content) return null;

    const lines = project.content.split("\n");
    const elements: JSX.Element[] = [];

    for (let index = 0; index < lines.length; index++) {
      const line = lines[index].trim();

      /*
       * Empty line
       */
      if (!line) {
        elements.push(
          <div key={`space-${index}`} className="h-2" aria-hidden="true" />,
        );

        continue;
      }

      /*
       * Horizontal rule
       */
      if (line === "---") {
        elements.push(
          <Separator key={`separator-${index}`} className="my-6" />,
        );

        continue;
      }

      /*
       * Headings
       */
      const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);

      if (headingMatch) {
        const level = headingMatch[1].length;
        const content = headingMatch[2];

        const headingClass =
          level === 1
            ? "text-3xl"
            : level === 2
              ? "text-2xl"
              : level === 3
                ? "text-xl"
                : "text-lg";

        elements.push(
          React.createElement(
            `h${level}`,
            {
              key: `heading-${index}`,
              className: `mt-8 mb-4 font-bold tracking-tight ${headingClass}`,
            },
            content,
          ),
        );

        continue;
      }

      /*
       * Code blocks
       */
      if (line.startsWith("```")) {
        const language = line.substring(3).trim();

        let codeContent = "";

        index++;

        while (index < lines.length && !lines[index].trim().startsWith("```")) {
          codeContent += `${lines[index]}\n`;
          index++;
        }

        elements.push(
          <Card
            key={`code-${index}`}
            className="my-6 overflow-hidden bg-muted/60"
          >
            {language && (
              <div className="border-b bg-muted px-4 py-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {language}
              </div>
            )}

            <pre className="overflow-x-auto p-5 font-mono text-sm leading-6">
              <code>{codeContent}</code>
            </pre>
          </Card>,
        );

        continue;
      }

      /*
       * Images
       */
      if (line.includes("![")) {
        const matches = [...line.matchAll(/!\[(.*?)\]\((.*?)\)/g)];

        if (matches.length > 0) {
          const imageGridClass =
            matches.length === 1
              ? "grid-cols-1"
              : matches.length === 2
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

          elements.push(
            <div
              key={`images-${index}`}
              className={`my-6 grid gap-4 ${imageGridClass}`}
            >
              {matches.map((match, imageIndex) => {
                const alt = match[1];
                const src = match[2];

                return (
                  <figure
                    key={`${index}-${imageIndex}`}
                    className="overflow-hidden rounded-xl border bg-card"
                  >
                    <Image
                      src={src}
                      alt={alt || project.title}
                      width={1200}
                      height={800}
                      className="h-auto w-full object-cover"
                    />

                    {alt && (
                      <figcaption className="px-4 py-3 text-center text-sm text-muted-foreground">
                        {alt}
                      </figcaption>
                    )}
                  </figure>
                );
              })}
            </div>,
          );

          continue;
        }
      }

      /*
       * Tables
       */
      if (line.includes("|")) {
        const rows: string[][] = [];
        let tableIndex = index;

        while (tableIndex < lines.length && lines[tableIndex].includes("|")) {
          const row = lines[tableIndex]
            .split("|")
            .map((cell) => cell.trim())
            .filter(Boolean);

          if (row.length > 0) {
            rows.push(row);
          }

          tableIndex++;
        }

        if (rows.length > 0) {
          elements.push(
            <div
              key={`table-${index}`}
              className="my-6 overflow-x-auto rounded-xl border"
            >
              <table className="w-full min-w-[600px] border-collapse text-sm">
                <thead className="bg-muted">
                  <tr>
                    {rows[0].map((cell, cellIndex) => (
                      <th
                        key={cellIndex}
                        className="border-b px-4 py-3 text-left font-semibold"
                        dangerouslySetInnerHTML={{
                          __html: formatLine(cell),
                        }}
                      />
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {rows.slice(1).map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="transition-colors hover:bg-muted/30"
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="border-b px-4 py-3 align-top last:border-b-0"
                          dangerouslySetInnerHTML={{
                            __html: formatLine(cell),
                          }}
                        />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>,
          );
        }

        index = tableIndex - 1;
        continue;
      }

      /*
       * Bullet list
       */
      if (line.startsWith("- ")) {
        elements.push(
          <li
            key={`list-${index}`}
            className="ml-6 list-disc leading-7"
            dangerouslySetInnerHTML={{
              __html: formatLine(line.substring(2)),
            }}
          />,
        );

        continue;
      }

      /*
       * Regular paragraph
       */
      elements.push(
        <p
          key={`paragraph-${index}`}
          className="leading-7 text-foreground"
          dangerouslySetInnerHTML={{
            __html: formatLine(line),
          }}
        />,
      );
    }

    return <div className="space-y-3">{elements}</div>;
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => router.push("/projects")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back to Projects</span>
            <span className="sm:hidden">Back</span>
          </Button>

          <div className="flex items-center gap-2">
            {project.github && (
              <Button asChild variant="outline" size="sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                >
                  <Github className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              </Button>
            )}

            {project.liveUrl && (
              <Button asChild variant="outline" size="sm">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live demo`}
                >
                  <ExternalLink className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">Live Demo</span>
                </a>
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
        {/* Featured Image */}
        {project.image && (
          <div className="relative mb-10 aspect-video overflow-hidden rounded-2xl border shadow-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
            />
          </div>
        )}

        {/* Project Header */}
        <header className="mb-10">
          {/* Metadata */}
          <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {formatDate(project.date)}
            </div>

            <span aria-hidden="true">•</span>

            <Badge variant="secondary">{project.category}</Badge>
          </div>

          {/* Title */}
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {project.title}
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <Badge
                key={technology}
                variant="outline"
                className="gap-1.5 rounded-md"
              >
                <Tag className="h-3 w-3" />
                {technology}
              </Badge>
            ))}
          </div>
        </header>

        <Separator className="mb-10" />

        {/* Overview */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold tracking-tight">Overview</h2>

          <p className="max-w-4xl text-base leading-8 text-muted-foreground md:text-lg">
            {project.longDescription || project.description}
          </p>
        </section>

        {/* Achievements */}
        {project.achievements.length > 0 && (
          <section className="mb-10">
            <h2 className="mb-5 text-2xl font-bold tracking-tight">
              Key Achievements
            </h2>

            <ul className="space-y-3">
              {project.achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary" />

                  <span className="leading-7">{achievement}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Detailed Content */}
        {project.content && (
          <section className="mb-10">
            <Separator className="mb-10" />

            <div className="max-w-none">{renderContent()}</div>
          </section>
        )}

        {/* Links */}
        {(project.github || project.liveUrl) && (
          <section className="mt-12">
            <Separator className="mb-8" />

            <h2 className="mb-4 text-2xl font-bold tracking-tight">
              Project Links
            </h2>

            <div className="flex flex-wrap gap-3">
              {project.github && (
                <Button asChild variant="outline">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Source
                  </a>
                </Button>
              )}

              {project.liveUrl && (
                <Button asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Open Live Project
                  </a>
                </Button>
              )}
            </div>
          </section>
        )}

        {/* Back Button */}
        <div className="mt-12 border-t pt-8">
          <Button
            variant="ghost"
            onClick={() => router.push("/projects")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all projects
          </Button>
        </div>
      </article>
    </main>
  );
}
