"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { Monitor, Server, Globe } from "lucide-react";
import { skills } from "@/data/portfolio";
import { Skill } from "@/types";

const Skills = () => {
  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: Monitor,
      description: "Creating beautiful and responsive user interfaces",
      skills: skills.filter((skill) => skill.category === "frontend"),
    },
    backend: {
      title: "Backend Development",
      icon: Server,
      description: "Building robust server-side applications and APIs",
      skills: skills.filter((skill) => skill.category === "backend"),
    },
    fullstack: {
      title: "Full Stack & Tools",
      icon: Globe,
      description: "End-to-end development and essential tools",
      skills: skills.filter((skill) => skill.category === "fullstack"),
    },
  };

  const SkillBar = ({ skill }: { skill: Skill }) => {
    return (
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">{skill.name}</span>
          <span className="text-sm text-muted-foreground">{skill.level}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <motion.div
            className="bg-primary h-2 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>
      </div>
    );
  };

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
    <section id="skills" className="relative py-20">
      <SectionBackground variant="default" showGrid={false} showOrbs showAccent={false} />
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
            <h2 className="text-3xl md:text-4xl font-bold">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to
              life.
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.entries(skillCategories).map(([key, category]) => {
              const Icon = category.icon;
              return (
                <motion.div key={key} variants={itemVariants}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center pb-4">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <CardTitle className="text-xl">
                        {category.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {category.skills.map((skill, index) => (
                        <SkillBar key={index} skill={skill} />
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <h3 className="text-2xl font-semibold">Other Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "REST APIs",
                "GraphQL",
                "JWT",
                "OAuth",
                "Webpack",
                "Vite",
                "Jest",
                "Docker",
                "AWS",
                "Vercel",
                "Netlify",
                "Postman",
              ].map((tech) => (
                <Badge key={tech} variant="outline" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
