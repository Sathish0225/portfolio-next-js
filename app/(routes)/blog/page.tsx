"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

import { BlogCard } from "@/components/blogs/blog-card";
import { blogs } from "@/data/blogs";

export default function BlogPage() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="flex items-center gap-2 text-primary">
            <BookOpen className="h-5 w-5" />
            <span className="text-sm font-medium uppercase tracking-wider">
              Blog
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Latest Articles
          </h1>

          <p className="text-muted-foreground md:text-lg md:leading-relaxed">
            Thoughts on technology, development practices, and industry
            insights. Sharing knowledge and experiences from the world of
            software development.
          </p>
        </motion.header>

        {/* Blog Grid */}
        {blogs.length > 0 ? (
          <div
            className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            role="list"
          >
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                role="listitem"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="h-full"
              >
                <BlogCard blog={blog} />
              </motion.div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 flex min-h-[240px] flex-col items-center justify-center rounded-xl border border-dashed bg-muted/20 px-6 text-center"
          >
            <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
              <BookOpen className="h-6 w-6" />
            </div>

            <h2 className="text-lg font-semibold">No articles available</h2>

            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              There are no articles published yet. Check back soon for new
              technical articles and development insights.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
