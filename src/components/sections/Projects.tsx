"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { ExternalLink, Github, Star } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  const ProjectCard = ({
    project,
    featured = false,
  }: {
    project: Project;
    featured?: boolean;
  }) => {
    return (
      <Card
        className={`group hover:shadow-lg transition-all duration-300 ${
          featured ? "border-primary/20" : ""
        }`}
      >
        <CardHeader className="p-0">
          <div className="relative overflow-hidden rounded-t-lg">
            <div className="aspect-video relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                unoptimized={true}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {featured && (
              <div className="absolute top-3 right-3 z-10">
                <Badge className="bg-primary/90 text-primary-foreground">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-2">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" className="flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm" className="flex-1">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
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
    <section id="projects" className="relative py-20 bg-muted/30">
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
            <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              experience.
            </p>
          </motion.div>

          {/* Projects */}
          {featuredProjects.length > 0 && (
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ProjectCard project={project} featured={true} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4 pt-8"
          >
            <h3 className="text-xl font-semibold">Want to see more?</h3>
            <p className="text-muted-foreground">
              Check out my GitHub for more projects and contributions.
            </p>
            <Link
              href="https://github.com/Muscabbb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                <Github className="w-5 h-5 mr-2" />
                View All Projects
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
