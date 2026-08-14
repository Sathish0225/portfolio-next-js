"use client";

import React, { JSX, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Calendar, Check, Clock, Share2, Tag } from "lucide-react";

import { blogs, Blog } from "@/data/blogs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function formatDate(dateString?: string) {
  if (!dateString) return "No date";

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatLine(line: string) {
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
          `<a href="${url}" target="_blank" rel="noopener noreferrer" class="font-medium text-primary hover:underline">${label.replace(
            /\n/g,
            " ",
          )}</a>`,
      )
  );
}

function renderBlogContent(content: string): JSX.Element {
  const lines = content.split("\n");
  const elements: JSX.Element[] = [];

  for (let index = 0; index < lines.length; index++) {
    const line = lines[index].trim();

    /* Empty line */
    if (!line) {
      elements.push(<div key={`space-${index}`} className="h-3" />);

      continue;
    }

    /* Horizontal rule */
    if (line === "---") {
      elements.push(<hr key={`hr-${index}`} className="my-8 border-border" />);

      continue;
    }

    /* Headings */
    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);

    if (headingMatch) {
      const level = headingMatch[1].length;
      const headingContent = headingMatch[2];

      const headingClass = {
        1: "mt-10 mb-4 text-3xl font-bold tracking-tight",
        2: "mt-10 mb-4 text-2xl font-bold tracking-tight",
        3: "mt-8 mb-3 text-xl font-semibold",
        4: "mt-6 mb-3 text-lg font-semibold",
        5: "mt-5 mb-2 text-base font-semibold",
        6: "mt-5 mb-2 text-sm font-semibold uppercase tracking-wide",
      }[level];

      elements.push(
        React.createElement(
          `h${level}`,
          {
            key: `heading-${index}`,
            className: headingClass,
          },
          headingContent,
        ),
      );

      continue;
    }

    /* Bullet list */
    if (line.startsWith("- ")) {
      elements.push(
        <li
          key={`list-${index}`}
          className="ml-6 list-disc pl-2 leading-7 text-foreground"
          dangerouslySetInnerHTML={{
            __html: formatLine(line.substring(2)),
          }}
        />,
      );

      continue;
    }

    /* Numbered list */
    const numberedListMatch = line.match(/^\d+\.\s+(.*)$/);

    if (numberedListMatch) {
      elements.push(
        <li
          key={`number-${index}`}
          className="ml-6 list-decimal pl-2 leading-7 text-foreground"
          dangerouslySetInnerHTML={{
            __html: formatLine(numberedListMatch[1]),
          }}
        />,
      );

      continue;
    }

    /* Code block */
    if (line.startsWith("```")) {
      const codeLines: string[] = [];

      index++;

      while (index < lines.length && !lines[index].trim().startsWith("```")) {
        codeLines.push(lines[index]);
        index++;
      }

      elements.push(
        <Card
          key={`code-${index}`}
          className="my-6 overflow-hidden border-border bg-muted/50"
        >
          <pre className="overflow-x-auto p-5 font-mono text-sm leading-6">
            <code>{codeLines.join("\n")}</code>
          </pre>
        </Card>,
      );

      continue;
    }

    /* Images */
    if (line.includes("![")) {
      const matches = [...line.matchAll(/!\[(.*?)\]\((.*?)\)/g)];

      if (matches.length > 0) {
        const columnClass =
          matches.length === 1
            ? "grid-cols-1"
            : matches.length === 2
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

        elements.push(
          <div
            key={`images-${index}`}
            className={`my-8 grid gap-5 ${columnClass}`}
          >
            {matches.map((match, imageIndex) => {
              const alt = match[1];
              const src = match[2];

              return (
                <figure
                  key={`${index}-${imageIndex}`}
                  className="overflow-hidden rounded-xl"
                >
                  <Image
                    src={src}
                    alt={alt || "Blog image"}
                    width={1200}
                    height={800}
                    className="h-auto w-full rounded-xl border object-cover shadow-sm"
                  />

                  {alt && (
                    <figcaption className="mt-2 text-center text-sm text-muted-foreground">
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

    /* Tables */
    if (line.includes("|")) {
      const rows: string[][] = [];
      let tableIndex = index;

      while (tableIndex < lines.length && lines[tableIndex].includes("|")) {
        const row = lines[tableIndex]
          .split("|")
          .map((cell) => cell.trim())
          .filter(Boolean);

        rows.push(row);
        tableIndex++;
      }

      if (rows.length > 0) {
        elements.push(
          <div
            key={`table-${index}`}
            className="my-8 overflow-x-auto rounded-lg border"
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
                    className="transition-colors hover:bg-muted/40"
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="border-b px-4 py-3 align-top"
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

        index = tableIndex - 1;
        continue;
      }
    }

    /* Paragraph */
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

  return <div className="space-y-1 text-[16px] sm:text-[17px]">{elements}</div>;
}

export default function BlogPage() {
  const router = useRouter();
  const params = useParams();

  const slug = params?.slug?.toString() ?? "";

  const blog = useMemo<Blog | null>(() => {
    return blogs.find((item) => item.id === slug) ?? null;
  }, [slug]);

  const [isCopied, setIsCopied] = useState(false);

  /* Redirect if blog doesn't exist */
  useEffect(() => {
    if (slug && !blog) {
      router.replace("/blog");
    }
  }, [blog, router, slug]);

  /* Share */
  const handleShare = async () => {
    if (!blog) return;

    const shareData = {
      title: blog.title,
      text: blog.excerpt,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      await navigator.clipboard.writeText(window.location.href);

      setIsCopied(true);

      window.setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Unable to share blog:", error);
    }
  };

  /* Loading / redirect state */
  if (!blog) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center px-4">
        <div className="text-center">
          <div className="mx-auto mb-4 h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />

          <p className="text-sm text-muted-foreground">Loading article...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => router.push("/blog")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Blog</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={handleShare}
            className="gap-2"
          >
            {isCopied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Share2 className="h-4 w-4" />
            )}

            {isCopied ? "Copied" : "Share"}
          </Button>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {/* Featured Image */}
        {blog.image && (
          <div className="relative mb-10 aspect-video overflow-hidden rounded-2xl border shadow-lg">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        )}

        {/* Article Header */}
        <header className="mb-10">
          {/* Meta */}
          <div className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(blog.date)}</span>
            </div>

            {blog.readTime && (
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{blog.readTime}</span>
              </div>
            )}

            <Badge variant={blog.published ? "default" : "secondary"}>
              {blog.published ? "Published" : "Draft"}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {blog.title}
          </h1>

          {/* Excerpt */}
          <p className="max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
            {blog.excerpt}
          </p>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="gap-1.5 rounded-md"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>

        <div className="border-t pt-8">{renderBlogContent(blog.content)}</div>

        <footer className="mt-12 border-t pt-8">
          <div className="flex flex-col gap-4 rounded-xl bg-muted/30 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold">Enjoyed this article?</p>
              <p className="text-sm text-muted-foreground">
                Share it with someone who might find it useful.
              </p>
            </div>

            <Button variant="outline" onClick={handleShare} className="gap-2">
              {isCopied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Share2 className="h-4 w-4" />
              )}

              {isCopied ? "Copied" : "Share Article"}
            </Button>
          </div>
        </footer>
      </article>
    </main>
  );
}
