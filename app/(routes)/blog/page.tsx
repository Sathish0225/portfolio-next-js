"use client";

import { BlogCard } from "@/components/blogs/blog-card";
import { motion } from "framer-motion";
import { blogs } from "@/data/blogs";

export default function BlogPage() {
  const filteredBlogs = blogs;

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Latest Articles
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Thoughts on technology, development practices, and industry
            insights. Sharing knowledge and experiences from the world of
            software development.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {filteredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <BlogCard blog={blog} />
            </motion.div>
          ))}
        </div>

        {/* No Blogs Found */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No blogs found with the selected filter. Please try another.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
