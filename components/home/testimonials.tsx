"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

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
    <section className="py-12 md:py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Recommendations
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            What mentors and colleagues say about my work
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3 mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 ">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />

                  <p className="italic text-muted-foreground mb-6">
                    &quot;{testimonial.quote}&quot;
                  </p>

                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.relation} • {testimonial.date}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
