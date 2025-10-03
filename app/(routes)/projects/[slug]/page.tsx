"use client";

import { JSX, useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Github, ExternalLink, Tag, Calendar } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects, Project } from "@/data/projects";
import { Card } from "@/components/ui/card";
import React from "react";

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const renderContent = () => {
    const lines = project!.content.split("\n");
    const elements: JSX.Element[] = [];

    for (let index = 0; index < lines.length; index++) {
      const line = lines[index].trim();

      // Skip empty lines, render spacing
      if (!line) {
        elements.push(<div key={index} className="h-2" />);
        continue;
      }

      // --- Horizontal Rule
      if (line === "---") {
        elements.push(
          <hr
            key={index}
            className="border-t border-muted-foreground/30 my-2"
          />
        );
        continue;
      }

      // --- Headings
      const headingMatch = line.match(/^(#{1,6})\s+(.*)/);
      if (headingMatch) {
        const level = headingMatch[1].length;
        const content = headingMatch[2];
        elements.push(
          React.createElement(
            `h${level}`,
            {
              key: index,
              className: `font-bold my-2 ${
                level === 1 ? "text-3xl" : level === 2 ? "text-2xl" : "text-xl"
              }`,
            },
            content
          )
        );
        continue;
      }

      // --- Lists
      if (line.startsWith("- ")) {
        elements.push(
          <li
            key={index}
            className="mb-2 ml-5"
            dangerouslySetInnerHTML={{ __html: formatLine(line.substring(2)) }}
          />
        );
        continue;
      }

      // --- Code Blocks
      if (line.startsWith("```")) {
        let codeContent = "";
        index++;
        while (index < lines.length && !lines[index].startsWith("```")) {
          codeContent += lines[index] + "\n";
          index++;
        }
        elements.push(
          <Card
            key={index}
            className="bg-muted p-6 font-mono text-sm overflow-x-auto my-2"
          >
            <pre className="whitespace-pre-wrap">{codeContent}</pre>
          </Card>
        );
        continue;
      }

      // --- Images (support multiple images in one line)
      if (line.includes("![")) {
        const matches = [...line.matchAll(/!\[(.*?)\]\((.*?)\)/g)];
        if (matches.length > 0) {
          elements.push(
            <div
              key={index}
              className={`my-4 grid gap-4 ${
                matches.length > 1
                  ? `grid-cols-${Math.min(matches.length, 3)}`
                  : "grid-cols-1"
              }`}
            >
              {matches.map((match, i) => {
                const alt = match[1];
                const src = match[2];
                return (
                  <div
                    key={`${index}-${i}`}
                    className="flex flex-col items-center"
                  >
                    <Image
                      src={src}
                      alt={alt}
                      width={400}
                      height={400}
                      className="rounded-xl shadow-md w-full h-auto"
                    />
                    {alt && (
                      <p className="mt-2 text-center text-sm text-muted-foreground">
                        {alt}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          );
          continue;
        }
      }

      // --- Tables
      if (line.includes("|")) {
        const rows: string[][] = [];
        let tableIndex = index;

        // collect consecutive lines that have |
        while (tableIndex < lines.length && lines[tableIndex].includes("|")) {
          const row = lines[tableIndex]
            .split("|")
            .map((cell) => cell.trim())
            .filter((cell) => cell !== "");
          rows.push(row);
          tableIndex++;
        }

        // push table element
        elements.push(
          <table
            key={index}
            className="w-full table-auto border border-muted-foreground mb-4"
          >
            <thead className="bg-muted text-left">
              <tr>
                {rows[0].map((cell, i) => (
                  <th
                    key={i}
                    className="border border-muted-foreground px-4 py-2 font-semibold"
                    dangerouslySetInnerHTML={{ __html: formatLine(cell) }}
                  />
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.slice(1).map((row, rIndex) => (
                <tr key={rIndex} className="hover:bg-muted/30">
                  {row.map((cell, cIndex) => (
                    <td
                      key={cIndex}
                      className="border border-muted-foreground px-4 py-2"
                      dangerouslySetInnerHTML={{ __html: formatLine(cell) }}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        );

        // skip table lines in main loop
        index = tableIndex - 1;
        continue;
      }

      // --- Inline formatting: bold, italic, bold+italic
      elements.push(
        <p
          key={index}
          className="mb-2 leading-relaxed text-foreground"
          dangerouslySetInnerHTML={{ __html: formatLine(line) }}
        />
      );
    }

    return (
      <div className="prose prose-slate max-w-none dark:prose-invert">
        {elements}
      </div>
    );
  };

  const formatLine = (line: string) => {
    if (!line) return "";

    return (
      line
        // inline code first
        .replace(
          /`([^`]+)`/g,
          (_match, p1) =>
            `<code class="bg-muted px-1 py-0.5 rounded text-sm font-mono">${p1}</code>`
        )
        // bold + italic
        .replace(/\*\*\*(.*?)\*\*\*/g, "<strong><em>$1</em></strong>")
        // bold
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        // italic
        .replace(/\*(.*?)\*/g, "<em>$1</em>")
        // links
        .replace(
          /\[([\s\S]*?)\]\(([^)]+)\)/g,
          (_match, label, url) =>
            `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">${label.replace(
              /\n/g,
              " "
            )}</a>`
        )
    );
  };

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
      <header className="mt-5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => router.push("/projects")}
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
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {formatDate(project.date || new Date().toISOString())}
            </div>
            <Badge variant={"secondary"}>{project.category}</Badge>
          </div>

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
        <div className="mb-6 prose max-w-none">
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

          {project.content && <div className="mb-6">{renderContent()}</div>}

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
