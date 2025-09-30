"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Map, Phone } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { ContactForm } from "@/components/contact/contact-form";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { socialLinks } from "@/data/social";
import { contactLinks } from "@/data/contact";

export default function ContactPage() {
  // Get icon component for social links
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <Github className="h-5 w-5" />;
      case "linkedin":
        return <Linkedin className="h-5 w-5" />;
      case "mail":
        return <Mail className="h-5 w-5" />;
      case "phone":
        return <Phone className="h-5 w-5" />;
      case "location":
        return <Map className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <SectionHeader
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you! Let's discuss how we can work together to bring your ideas to life."
        />

        <div className="grid gap-8 md:grid-cols-2 max-w-8xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full border-none shadow-none">
              <CardHeader>
                <CardTitle>Connect with me</CardTitle>
                <CardDescription>
                  I&apos;m always interested in new opportunities, challenging
                  projects, and meaningful collaborations. Whether you&apos;re a
                  company looking to hire, a fellow developer wanting to
                  collaborate, or someone with an exciting project idea,
                  don&apos;t hesitate to reach out.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col w-full space-y-6 gap-2">
                {contactLinks.map((contact, index) => (
                  <motion.a
                    key={contact.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center mb-2"
                  >
                    {" "}
                    <div className="mr-4 rounded-full bg-primary/10 p-2">
                      {" "}
                      {getIconComponent(contact.icon)}{" "}
                    </div>{" "}
                    <div>
                      {" "}
                      <h3 className="font-medium">{contact.name}</h3>{" "}
                      <p className="text-sm text-muted-foreground">
                        {" "}
                        {contact.url.replace(
                          /(mailto:|tel:|https:\/\/)/g,
                          ""
                        )}{" "}
                      </p>{" "}
                    </div>{" "}
                  </motion.a>
                ))}

                <h4 className="text-xl font-bold mb-2">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-muted transition-colors"
                    >
                      {getIconComponent(social.icon)}
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>
                  Fill out the form below and I&apos;ll get back to you as soon
                  as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full">
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
