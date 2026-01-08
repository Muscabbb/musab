"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { Download, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

const Hero = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <SectionBackground variant="default" showGrid showOrbs showAccent={false} />


      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >

            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold leading-tight"
              >
                Hi, {"I'm"}{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl font-semibold text-muted-foreground"
              >
                {personalInfo.title}
              </motion.h2>
            </div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="group"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </motion.div>

            {/* Download CV */}
            {personalInfo.resume && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <Link href="/CV.pdf" download="Musab_CV.pdf">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download CV
                  </Button>
                </Link>
              </motion.div>
            )}
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-6 -left-6 w-72 h-72 bg-primary/5 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Image Container */}
              <Dialog>
                <DialogTrigger asChild>
                  <motion.div
                    className="relative cursor-pointer group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {!isImageLoaded && (
                      <Skeleton className="w-80 h-80 rounded-2xl" />
                    )}
                    <div className="relative w-80 h-80 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                      <Image
                        src="https://sutta7ix17.ufs.sh/f/m8ZBLSTuDwTHdAZEhdmg0hruiY87B3aslWCSOIPJ4XMbpGno"
                        unoptimized
                        alt={personalInfo.name}
                        fill
                        className={`object-cover transition-all duration-300 group-hover:scale-105 ${
                          isImageLoaded ? "opacity-100" : "opacity-0"
                        }`}
                        onLoad={() => setIsImageLoaded(true)}
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                    </div>
                    
                    {/* Floating Badge */}
                    <motion.div
                      className="absolute -bottom-4 -right-4 bg-background border-2 border-primary/20 rounded-xl px-6 py-3 shadow-lg"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1, type: "spring" }}
                    >
                      <p className="text-sm font-semibold">Available for work</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs text-muted-foreground">Open to opportunities</span>
                      </div>
                    </motion.div>
                  </motion.div>
                </DialogTrigger>
                
                <DialogContent className="max-w-4xl w-full p-0 border-none bg-transparent shadow-none flex flex-col justify-center items-center">
                  <DialogTitle className="sr-only">Profile Picture</DialogTitle>
                  <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]">
                    <Image
                      src="https://sutta7ix17.ufs.sh/f/m8ZBLSTuDwTHdAZEhdmg0hruiY87B3aslWCSOIPJ4XMbpGno"
                      alt={personalInfo.name}
                      fill
                      className="object-contain rounded-lg"
                      unoptimized
                    />
                  </div>
                </DialogContent>
              </Dialog>

              {/* Geometric Accent */}
              <motion.div
                className="absolute -bottom-8 -right-8 w-32 h-32 border-4 border-primary/30 rounded-2xl -z-10"
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 bg-current rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
