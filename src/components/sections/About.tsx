"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { Code, Database, Globe, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Creating responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.",
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Building robust server-side applications with Node.js, Express, and database management.",
    },
    {
      icon: Globe,
      title: "Full Stack Solutions",
      description:
        "End-to-end web application development from concept to deployment.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Working effectively in agile teams and mentoring junior developers.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="relative py-20 bg-muted/30">
      <SectionBackground variant="muted" showGrid showOrbs showAccent={false} />
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {"I'm"} a passionate full stack developer who loves creating
              digital solutions that make a difference.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  With a strong foundation in both frontend and backend
                  technologies, I specialize in creating seamless web
                  experiences. My expertise spans across modern JavaScript
                  frameworks, server-side development, and database management.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {"I'm"} constantly learning and adapting to new technologies,
                  ensuring that I can deliver cutting-edge solutions that meet
                  {"today's"} digital demands. My goal is to write clean,
                  efficient code that not only works but is also maintainable
                  and scalable.
                </p>
              </div>

              {/* Key Technologies */}
              <div className="space-y-3">
                <h4 className="font-semibold">Core Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "Node.js",
                    "MongoDB",
                    "MySQL",
                    "Tailwind CSS",
                    "TypeScript",
                    "Git",
                  ].map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <Card
                    key={index}
                    className="p-4 hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-0 space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <h4 className="font-semibold text-sm">
                          {highlight.title}
                        </h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
