"use client";

import { JSX, useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Tag, Share2, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogs, Blog } from "@/data/blogs";
import { Card } from "@/components/ui/card";

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
    const lines = blog.content.split("\n");
    const elements: JSX.Element[] = [];

    for (let index = 0; index < lines.length; index++) {
      const line = lines[index];

      if (line.startsWith("# ")) {
        elements.push(
          <h1 key={index} className="text-3xl font-bold  first:mt-0">
            {line.substring(2)}
          </h1>
        );
      } else if (line.startsWith("## ")) {
        elements.push(
          <h2 key={index} className="text-2xl font-semibold">
            {line.substring(3)}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={index} className="text-xl font-semibold">
            {line.substring(4)}
          </h3>
        );
      } else if (
        line.startsWith("```javascript") ||
        line.startsWith("```typescript") ||
        line.startsWith("```json") ||
        line.startsWith("```")
      ) {
        // collect code block
        let codeContent = "";
        index++;
        while (index < lines.length && !lines[index].startsWith("```")) {
          codeContent += lines[index] + "\n";
          index++;
        }
        elements.push(
          <Card
            key={index}
            className="bg-muted p-6 font-mono text-sm overflow-x-auto"
          >
            <pre className="whitespace-pre-wrap">{codeContent}</pre>
          </Card>
        );
      } else if (line.startsWith("```")) {
        // skip raw ``` markers
        continue;
      } else if (line.trim() === "") {
        elements.push(<div key={index} className="h-4" />);
      } else if (line.startsWith("- ")) {
        elements.push(
          <li key={index} className="mb-2 ml-5">
            {line.substring(2)}
          </li>
        );
      } else if (line.trim() === "---") {
        elements.push(
          <hr key={index} className="border-t border-muted-foreground/30" />
        );
      } else {
        elements.push(
          <p key={index} className="mb-2 leading-relaxed text-foreground">
            {line}
          </p>
        );
      }
    }

    return (
      <div className="prose prose-slate max-w-none dark:prose-invert">
        {elements}
      </div>
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
            onClick={() => router.back()}
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
        <div className="mb-12 prose max-w-none">{renderContent()}</div>
      </article>
    </div>
  );
}
