"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, UserRound } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Testimonial {
  id: string;
  name: string;
  position: string;
  image?: string;
  relation: string;
  date: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: "arun",
    name: "Arun Kumar",
    position: "Senior Software Engineer at Pedro",
    relation: "Colleague",
    date: "August 15, 2025",
    quote:
      "Sathishkumar is an exceptional full-stack developer with deep expertise in Laravel, Flutter, and AWS. His ability to design scalable architectures and deliver reliable solutions like iSecure360 has been a huge asset to our team.",
  },
  {
    id: "meera",
    name: "Meera Iyer",
    position: "Project Manager at Pedro",
    relation: "Manager",
    date: "July 10, 2025",
    quote:
      "Leading projects with Sathishkumar is always smooth. He consistently meets deadlines while maintaining high-quality standards. His leadership in building systems like iSecureVMS shows his strong ownership and problem-solving skills.",
  },
  {
    id: "ravi",
    name: "Ravi Shankar",
    position: "UI/UX Designer at Pedro",
    relation: "Collaborator",
    date: "June 20, 2025",
    quote:
      "Sathishkumar has a rare ability to bridge backend complexity with user-friendly interfaces. His collaborative work on security applications ensured our designs translated into seamless user experiences on both web and mobile.",
  },
  {
    id: "anita",
    name: "Anita Joseph",
    position: "IT Infrastructure Lead at Digital Alarm Technologies",
    relation: "Former Manager",
    date: "March 5, 2020",
    quote:
      "During his time as an IT Engineer, Sathishkumar played a key role in configuring secure email servers, managing firewalls, and ensuring high system availability. His strong foundation in IT infrastructure complements his software development expertise.",
  },
  {
    id: "karthik",
    name: "Karthik Subramanian",
    position: "Support Engineer at Hinduja Global Solutions",
    relation: "Former Colleague",
    date: "January 12, 2018",
    quote:
      "I worked with Sathishkumar in the early days of his career. His dedication to solving IT issues and eagerness to learn stood out. It’s no surprise he has grown into a skilled full-stack developer today.",
  },
];

export function Testimonials() {
  return (
    <section
      id="recommendations"
      className="relative overflow-hidden border-y bg-muted/20 py-16 md:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-48 top-20 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute -bottom-48 -right-48 h-[450px] w-[450px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge
            variant="outline"
            className="mb-4 gap-2 rounded-full px-3 py-1"
          >
            <UserRound className="h-3.5 w-3.5 text-primary" />
            Professional Recommendations
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What People <span className="text-primary">Say About My Work</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            Feedback from managers, engineers, designers, and colleagues I have
            worked with throughout my career.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-50px",
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.07,
              }}
              className="h-full"
            >
              <Card className="group relative h-full overflow-hidden border bg-card/70 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                <CardContent className="flex h-full flex-col p-6">
                  {/* Quote icon */}
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Quote className="h-5 w-5" />
                    </div>

                    <span className="text-xs text-muted-foreground">
                      {testimonial.date}
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote className="flex-1 text-sm leading-7 text-muted-foreground">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>

                  {/* Person */}
                  <div className="mt-6 flex items-center gap-3 border-t pt-5">
                    <Avatar className="h-11 w-11 border-2 border-primary/10">
                      {testimonial.image ? (
                        <Image
                          src={testimonial.image}
                          alt={`${testimonial.name} profile`}
                          width={44}
                          height={44}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <AvatarFallback className="bg-primary/10 text-sm font-semibold text-primary">
                          {testimonial.name
                            .split(" ")
                            .map((name) => name[0])
                            .join("")
                            .slice(0, 2)}
                        </AvatarFallback>
                      )}
                    </Avatar>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold">
                        {testimonial.name}
                      </p>

                      <p className="truncate text-xs text-muted-foreground">
                        {testimonial.position}
                      </p>

                      <p className="mt-0.5 text-xs text-primary">
                        {testimonial.relation}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mx-auto mt-10 max-w-2xl text-center"
        >
          <p className="text-sm leading-6 text-muted-foreground">
            Strong engineering is not only about writing code. It is about
            taking ownership, solving difficult problems, communicating clearly,
            and delivering software that people can depend on.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
