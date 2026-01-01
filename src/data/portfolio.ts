import {
  Skill,
  Project,
  Experience,
  Education,
  ContactInfo,
  PersonalInfo,
} from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Musab",
  title: "Full Stack Developer",
  bio: "Passionate full stack developer with expertise in modern web technologies. I love creating efficient, scalable applications that solve real-world problems.",
  avatar: "/avatar.jpg",
  resume: "/resume.pdf",
};

export const contactInfo: ContactInfo = {
  email: "musabmahaad@gmail.com",
  phone: "+252 61 9122271",
  location: "Mogadishu.Somalia",
  linkedin: "https://linkedin.com/in/musab",
  github: "https://github.com/Muscabbb",
  twitter: "https://twitter.com/musab",
};

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 90, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "JavaScript", level: 95, category: "frontend" },

  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express.js", level: 80, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "MySQL", level: 70, category: "backend" },
  { name: "Prisma", level: 75, category: "backend" },

  // Fullstack/Tools
  { name: "Git", level: 85, category: "fullstack" },
  { name: "REST APIs", level: 90, category: "fullstack" },
  { name: "Docker", level: 65, category: "fullstack" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "University Event Management System",
    description:
      "A comprehensive event management system for universities, featuring event creation, registration, scheduling, and administrative tools for managing campus events.",
    image:
      "https://sutta7ix17.ufs.sh/f/m8ZBLSTuDwTHmJUVuqTuDwTH53zIjk9gXMEGNeJbatKBc0Qm",
    technologies: [
      "React",
      "Vite.js",
      "MongoDB",
      "Prisma",
      "Tailwind CSS",
      "Node.js",
      "Express",
    ],
    liveUrl: "https://jutsa.reliatrusty.com/",
    githubUrl: "https://github.com/Muscabbb/Jutsa-Management-System",
    featured: false,
  },
  {
    id: "2",
    title: "Hekto - Clothes & Accessories E-commerce",
    description:
      "A modern e-commerce platform for clothes and accessories featuring advanced product search engine, user authentication, and seamless shopping experience.",
    image:
      "https://sutta7ix17.ufs.sh/f/m8ZBLSTuDwTHvB5V88qubB2ekYtGI71OHgMlDCEa9JjfXwFZ",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "MongoDB",
      "Python",
      "FastAPI",
      "Tailwind CSS",
    ],
    liveUrl: "https://hekto-ruddy.vercel.app/",
    githubUrl: "https://github.com/Muscabbb/hekto",
    featured: false,
  },
];

export const experience: Experience[] = [
  {
    id: "1",
    company: "Tech Solutions Inc.",
    position: "Senior Full Stack Developer",
    duration: "2022 - Present",
    description: [
      "Led development of multiple web applications using React and Node.js",
      "Implemented CI/CD pipelines and improved deployment efficiency by 40%",
      "Mentored junior developers and conducted code reviews",
    ],
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    id: "2",
    company: "Digital Agency Co.",
    position: "Full Stack Developer",
    duration: "2020 - 2022",
    description: [
      "Developed and maintained client websites and web applications",
      "Collaborated with design team to implement pixel-perfect UIs",
      "Optimized application performance and improved loading times by 30%",
    ],
    technologies: ["React", "Express", "MySQL", "Tailwind CSS"],
  },
];

export const education: Education[] = [
  {
    id: "1",
    institution: "Jamhuriya University of Technology",
    degree: "Bachelor of Science in Computer Science",
    duration: "2021 - 2025",
    description: "Focused on software engineering and web development",
  },
];
