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
  email: "muscabinho367@gmail.com",
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
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, featuring user authentication, payment integration, and admin dashboard.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "React", "MongoDB", "Stripe", "Tailwind CSS"],
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/musab/ecommerce-platform",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, built using React and Node.js.",
    image: "/projects/taskmanager.jpg",
    technologies: ["React", "Node.js", "Express", "MySQL", "Socket.io"],
    liveUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/musab/task-manager",
    featured: true,
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard that displays current weather and forecasts for multiple cities.",
    image: "/projects/weather.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Weather API"],
    liveUrl: "https://weather-dashboard-demo.com",
    githubUrl: "https://github.com/musab/weather-dashboard",
    featured: false,
  },
  {
    id: "4",
    title: "Blog Platform",
    description:
      "A modern blog platform with markdown support, SEO optimization, and content management system.",
    image: "/projects/blog.jpg",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://blog-platform-demo.com",
    githubUrl: "https://github.com/musab/blog-platform",
    featured: true,
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
    institution: "University of Technology",
    degree: "Bachelor of Science in Computer Science",
    duration: "2016 - 2020",
    description: "Focused on software engineering and web development",
  },
];
