"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Medal,
  Award,
  Code,
  Cpu,
  Zap,
  BookOpen,
  Globe,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Achievement {
  icon: React.ReactNode;
  title: string;
  colorClass: string;
}

const achievements: Achievement[] = [
  {
    icon: <Trophy className="h-6 w-6" />,
    title:
      "Built and deployed iSecure360 – Security Workforce Management System (Web & Mobile)",
    colorClass: "text-yellow-600 dark:text-yellow-400",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title:
      "Developed Visitor Management System (VMS) with QR-based check-in/out & real-time notifications",
    colorClass: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: <Medal className="h-6 w-6" />,
    title:
      "Optimized guard tour feature for offline-first mode with seamless sync",
    colorClass: "text-green-600 dark:text-green-400",
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title:
      "Deployed and managed scalable infrastructure on AWS for high availability",
    colorClass: "text-red-600 dark:text-red-400",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Mentored junior developers and led cross-functional project teams",
    colorClass: "text-indigo-600 dark:text-indigo-400",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title:
      "Integrated authentication & role-based access control with Spatie Permissions",
    colorClass: "text-teal-600 dark:text-teal-400",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title:
      "Streamlined IT infrastructure by migrating Windows servers & configuring firewalls",
    colorClass: "text-cyan-600 dark:text-cyan-400",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title:
      "Delivered enterprise solutions for security, visitor, and inventory management across industries",
    colorClass: "text-amber-600 dark:text-amber-400",
  },
];

export function Achievements() {
  return (
    <section className="py-12 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Achievements
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Recognition and milestones from my technical journey
          </p>
        </motion.div>

        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          {achievements.map((achievement, index) => (
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
              className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)]"
            >
              <Card className="h-full border-2 hover:border-primary transition-all duration-300">
                <CardContent className="p-4 flex flex-row items-center gap-3">
                  <div className={`${achievement.colorClass} shrink-0`}>
                    {achievement.icon}
                  </div>
                  <div className="text-left">
                    <p className="font-medium">{achievement.title}</p>
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
