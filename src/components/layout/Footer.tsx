"use client";
import Link from "next/link";
import { Github, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo, contactInfo } from "@/data/portfolio";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{personalInfo.name}</h3>
            <p className="text-muted-foreground">{personalInfo.title}</p>
            <p className="text-sm text-muted-foreground">
              Building digital experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <button
                onClick={() =>
                  document
                    .querySelector("#about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector("#skills")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Skills
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Projects
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                {contactInfo.email}
              </p>
              {contactInfo.location && (
                <p className="text-sm text-muted-foreground">
                  {contactInfo.location}
                </p>
              )}
            </div>
            <div className="flex items-center space-x-2">
              {contactInfo.github && (
                <Link
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon">
                    <Github className="h-4 w-4" />
                  </Button>
                </Link>
              )}
              {/* {contactInfo.linkedin && (
                <Link
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </Link>
              )} */}
              <Link href={`mailto:${contactInfo.email}`}>
                <Button variant="ghost" size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1 mt-2 md:mt-0">
            Made with <Heart className="h-4 w-4 text-red-500" /> using Next.js &
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
