"use client";

import { useEffect, useState } from "react";
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
    return (
      <div className="prose prose-slate max-w-none dark:prose-invert">
        {lines.map((line, index) => {
          if (line.startsWith("# ")) {
            return (
              <h1
                key={index}
                className="text-3xl font-bold mb-6 mt-8 first:mt-0"
              >
                {line.substring(2)}
              </h1>
            );
          } else if (line.startsWith("## ")) {
            return (
              <h2 key={index} className="text-2xl font-semibold mb-4 mt-8">
                {line.substring(3)}
              </h2>
            );
          } else if (line.startsWith("### ")) {
            return (
              <h3 key={index} className="text-xl font-semibold mb-3 mt-6">
                {line.substring(4)}
              </h3>
            );
          } else if (
            line.startsWith("```javascript") ||
            line.startsWith("```typescript") ||
            line.startsWith("```json")
          ) {
            // Find the closing ```
            let codeContent = "";
            let i = index + 1;
            while (i < lines.length && !lines[i].startsWith("```")) {
              codeContent += lines[i] + "\n";
              i++;
            }
            return (
              <Card
                key={index}
                className="bg-muted p-6 font-mono text-sm my-6 overflow-x-auto"
              >
                <pre className="whitespace-pre-wrap">{codeContent}</pre>
              </Card>
            );
          } else if (line.startsWith("```")) {
            return null; // Skip standalone ```
          } else if (line.trim() === "") {
            return <div key={index} className="h-4" />;
          } else if (line.startsWith("- ")) {
            return (
              <li key={index} className="mb-2">
                {line.substring(2)}
              </li>
            );
          } else {
            return (
              <p key={index} className="mb-4 leading-relaxed text-foreground">
                {line}
              </p>
            );
          }
        })}
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
