"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Plus,
  X,
  Home,
  User,
  Briefcase,
  Code,
  BookOpen,
  Mail,
  Github,
  Linkedin,
  Phone,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { socialLinks } from "@/data/social";

interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "About",
    href: "/about",
    icon: User,
  },
  {
    title: "Experience",
    href: "/experience",
    icon: Briefcase,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: Code,
  },
  {
    title: "Blog",
    href: "/blog",
    icon: BookOpen,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: Mail,
  },
];

const socialIconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
};

function getSocialIcon(iconName: string) {
  return socialIconMap[iconName] ?? Mail;
}

export function FloatingActionButton() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  const handleSocialLink = (url: string) => {
    setIsOpen(false);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 1,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
    >
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            type="button"
            size="icon"
            aria-label={isOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="
              size-14
              rounded-full
              bg-primary
              text-primary-foreground
              shadow-lg
              transition-all
              duration-300
              hover:bg-primary/90
              hover:shadow-xl
            "
          >
            <motion.div
              animate={{
                rotate: isOpen ? 45 : 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              {isOpen ? <X className="size-6" /> : <Plus className="size-6" />}
            </motion.div>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" sideOffset={12} className="w-56">
          {/* Navigation */}
          <DropdownMenuLabel>Navigate</DropdownMenuLabel>

          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <DropdownMenuItem
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className="cursor-pointer gap-2"
              >
                <Icon className="size-4 text-muted-foreground" />
                <span>{item.title}</span>
              </DropdownMenuItem>
            );
          })}

          {/* Social Links */}
          {socialLinks.length > 0 && (
            <>
              <DropdownMenuSeparator />

              <DropdownMenuLabel>Connect</DropdownMenuLabel>

              {socialLinks.map((link) => {
                const Icon = getSocialIcon(link.icon);

                return (
                  <DropdownMenuItem
                    key={link.id}
                    onClick={() => handleSocialLink(link.url)}
                    className="cursor-pointer gap-2"
                  >
                    <Icon className="size-4 text-muted-foreground" />
                    <span>{link.name}</span>
                  </DropdownMenuItem>
                );
              })}
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  );
}
