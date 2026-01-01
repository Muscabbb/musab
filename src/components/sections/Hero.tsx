"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import { Download, ArrowDown } from "lucide-react";
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

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative cursor-pointer group">
                  {!isImageLoaded && (
                    <Skeleton className="w-32 h-32 rounded-full absolute inset-0 border-4 border-primary/20" />
                  )}
                  <Image
                    src="https://sutta7ix17.ufs.sh/f/m8ZBLSTuDwTHdAZEhdmg0hruiY87B3aslWCSOIPJ4XMbpGno"
                    unoptimized
                    alt={personalInfo.name}
                    className={`w-32 h-32 rounded-full border-4 border-primary/20 object-cover transition-opacity duration-300 group-hover:opacity-80 ${
                      isImageLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => setIsImageLoaded(true)}
                    width={128}
                    height={128}
                  />
                </div>
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
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, {"I'm"}{" "}
              <span className="text-primary">{personalInfo.name}</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              {personalInfo.title}
            </h2>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="min-w-[150px]"
            >
              Get In Touch
            </Button>
            {personalInfo.resume && (
              <Link href="/CV.pdf" download="Musab_CV.pdf">
                <Button variant="outline" size="lg" className="min-w-[150px]">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </Link>
            )}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="pt-8"
          >
            <button
              onClick={scrollToAbout}
              className="animate-bounce text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowDown className="h-6 w-6 mx-auto" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
