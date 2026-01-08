"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { experience, education } from "@/data/portfolio";
import { Experience as ExperienceType, Education } from "@/types";

const Experience = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const ExperienceCard = ({ exp }: { exp: ExperienceType }) => {
    return (
      <Card className="hover:shadow-md transition-shadow">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <CardTitle className="text-xl">{exp.position}</CardTitle>
              <p className="text-lg font-semibold text-primary">
                {exp.company}
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                {exp.duration}
              </div>
            </div>
            <div className="p-2 bg-primary/10 rounded-lg">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="space-y-2">
            {exp.description.map((item, index) => (
              <li
                key={index}
                className="text-muted-foreground text-sm flex items-start"
              >
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="space-y-2">
            <p className="text-sm font-medium">Technologies Used:</p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  const EducationCard = ({ edu }: { edu: Education }) => {
    return (
      <Card className="hover:shadow-md transition-shadow">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <CardTitle className="text-xl">{edu.degree}</CardTitle>
              <p className="text-lg font-semibold text-primary">
                {edu.institution}
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                {edu.duration}
              </div>
            </div>
            <div className="p-2 bg-primary/10 rounded-lg">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
          </div>
        </CardHeader>
        {edu.description && (
          <CardContent>
            <p className="text-muted-foreground text-sm">{edu.description}</p>
          </CardContent>
        )}
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
    <section id="experience" className="relative py-20">
      <SectionBackground variant="transparent" showGrid showOrbs showAccent={false} />
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
              Experience & Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and educational background.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            {/* <motion.div variants={itemVariants} className="space-y-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Work Experience</h3>
              </div>
              
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className="relative"
                  >
                    <ExperienceCard exp={exp} />
                    {index < experience.length - 1 && (
                      <div className="flex justify-center py-4">
                        <Separator orientation="vertical" className="h-8" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div> */}

            {/* Education */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    variants={itemVariants}
                    className="relative"
                  >
                    <EducationCard edu={edu} />
                    {index < education.length - 1 && (
                      <div className="flex justify-center py-4">
                        <Separator orientation="vertical" className="h-8" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Additional Certifications */}
              {/* <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="text-lg font-semibold">
                  Certifications & Learning
                </h4>
                <Card className="p-4">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "AWS Cloud Practitioner",
                        "MongoDB Developer",
                        "React Developer",
                        "Node.js Certification",
                      ].map((cert) => (
                        <Badge key={cert} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Continuously learning and staying updated with the latest
                      technologies and best practices.
                    </p>
                  </div>
                </Card>
              </motion.div> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
