"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education } from "@/data/education";
import { skills, SkillCategory } from "@/data/skills";
import { BookOpen, Users, LucideAward, Brain } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get to know more about my background and skills
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I&apos;m Sathishkumar Ranganathan, a Full Stack Developer
                  passionate about building scalable web applications and
                  intelligent systems using React.js, Next.js, PHP, and Flutter.
                </p>
                <p>
                  I specialize in creating user-friendly and efficient
                  applications that solve real-world problems. My experience
                  spans full-stack development, UI/UX design, and mobile app
                  development, allowing me to deliver end-to-end solutions with
                  clean and maintainable code.
                </p>
                <p>
                  I&apos;m particularly interested in the intersection of web
                  and mobile technologies, where I design and develop projects
                  that leverage modern frameworks and best practices to create
                  robust, high-performance, and engaging applications.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">Education</h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <Card key={edu.id}>
                    <CardHeader className="px-4 py-2">
                      <CardTitle>
                        <div>
                          <h3 className="text-lg font-bold">{edu.degree}</h3>
                          <p className="text-sm text-muted-foreground">
                            {edu.institution}
                          </p>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 py-2 pt-0 w-full gap-0">
                      <div className="flex justify-between items-center w-full text-sm">
                        <span className="text-muted-foreground">
                          {edu.startDate} - {edu.endDate}
                        </span>
                        <span className="text-muted-foreground">
                          {edu.location}
                        </span>
                      </div>
                      {edu.gpa && (
                        <Badge variant="outline" className="mt-2">
                          CGPA: {edu.gpa}
                        </Badge>
                      )}
                      {edu.description && (
                        <p className="mt-2 text-sm">{edu.description}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4">Skills</h2>

              {Object.keys(skills).map((category) => (
                <div key={category} className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills[category as SkillCategory].map((skill) => (
                      <Badge key={skill.name} variant="secondary">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/50">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Drives Me
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              The principles that fuel my passion for technology and guide my
              work.
            </p>
          </motion.div>

          <div className="grid gap-4 mt-12 md:grid-cols-2 lg:grid-cols-2">
            {[
              {
                number: "01",
                title: "Innovation First",
                desc: "I believe in pushing the boundaries of what's possible with technology, always seeking creative solutions to complex problems.",
                icon: Brain,
                colorClass: "text-yellow-600 dark:text-yellow-400",
              },
              {
                number: "02",
                title: "Quality & Craftsmanship",
                desc: "Every line of code I write is crafted with care, following best practices and maintaining high standards.",
                icon: LucideAward,
                colorClass: "text-blue-600 dark:text-blue-400",
              },
              {
                number: "03",
                title: "Continuous Learning",
                desc: "Technology evolves rapidly, and I'm committed to staying at the forefront through continuous learning and experimentation.",
                icon: BookOpen,
                colorClass: "text-indigo-600 dark:text-indigo-400",
              },
              {
                number: "04",
                title: "Collaboration",
                desc: "Great research is the product of great collaboration. I value open communication, knowledge sharing, and collective problem-solving.",
                icon: Users,
                colorClass: "text-green-600 dark:text-green-400",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className="w-full"
              >
                <Card className="h-full border-2 hover:border-primary transition-all duration-300">
                  <CardContent className="p-4 flex flex-row items-center gap-3">
                    <div className={`${item.colorClass} shrink-0`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h3 className="mt-1 text-xl font-semibold">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
