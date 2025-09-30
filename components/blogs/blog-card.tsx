"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Blog } from "@/data/blogs";

interface BlogCardProps {
  blog: Blog;
}

export function BlogCard({ blog }: BlogCardProps) {
  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <Card className="group h-full flex flex-col overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
      {/* Image */}
      {blog.image && (
        <div className="relative overflow-hidden aspect-video w-full">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={blog.featured}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <Badge variant={"secondary"} className="text-xs">
              {blog.published ? "Published" : "Draft"}
            </Badge>
          </div>
        </div>
      )}

      {/* Header */}
      <CardHeader className="items-start">
        <CardTitle className="text-left">{blog.title}</CardTitle>
      </CardHeader>

      {/* Content */}
      <CardContent className="flex-1 items-start">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="mr-1 h-3 w-3" />
            {formatDate(blog.date)}
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-3 w-3" />
            {blog.readTime}
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
          {blog.excerpt}
        </p>

        <div className="flex flex-wrap gap-1">
          {blog.tags?.map((tag, i) => (
            <Badge key={i} variant="outline" className="text-xs">
              <Tag className="mr-1 h-3 w-3" />
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex flex-row w-full justify-between gap-2">
        <Button asChild variant="default" size="sm">
          <Link href={`/blog/${blog.id}`}>
            Read More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
