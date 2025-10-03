"use client";

import { JSX, useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Tag, Share2, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogs, Blog } from "@/data/blogs";
import { Card } from "@/components/ui/card";
import React from "react";

export default function BlogPage() {
  const router = useRouter();
  const params = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const slug = params?.slug?.toString() || "";
    const foundBlog = blogs.find((b) => b.id === slug);
    if (foundBlog) {
      setBlog(foundBlog);
    } else {
      router.push("/blog");
    }
  }, [params, router]);

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <div className="animate-pulse text-center">
          <p>Loading blog...</p>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const renderContent = () => {
    const lines = blog!.content.split("\n");
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

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt,
          url: window.location.href,
        });
        console.log("Shared successfully");
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        alert("URL copied to clipboard!");
      } else {
        alert("Sharing is not supported on this browser.");
      }
    } catch (err) {
      console.error("Error sharing:", err);
      alert("Failed to share. Try manually copying the URL.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="mt-5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => router.push("/blog")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Button>
          <Button variant="outline" size="sm" onClick={handleShare}>
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </header>

      {/* Blog Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Image */}
        {blog.image && (
          <div className="mb-8 rounded-xl overflow-hidden relative shadow-lg h-64 sm:h-96">
            <Image
              src={blog.image}
              alt={blog.title}
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
              {formatDate(blog.date || new Date().toISOString())}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {blog.readTime || "N/A"}
            </div>
            <Badge variant={blog.published ? "default" : "secondary"}>
              {blog.published ? "Published" : "Draft"}
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            {blog.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            {blog.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {blog.tags!.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="flex items-center gap-1"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        {/* Project Content */}
        <div className="mb-6 prose max-w-none">{renderContent()}</div>
      </article>
    </div>
  );
}
