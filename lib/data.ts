import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import levoire from "@/public/levoire.png";
import bloxboom from "@/public/bloxboom.png";
import portfolio from "@/public/portfolio.png";
import freshcart from "@/public/freshcart.png";
import dashmaster from "@/public/dashmaster.png";
import GameReviews from "@/public/GameReviews.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer",
    location: "BloxBoom, Remote",
    description:
      "As a frontend web developer, I specialize in using React, Next.js, Tailwind CSS, and Framer Motion to create dynamic and engaging user interfaces.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
  {
    title: "Front-End Developer",
    location: "Freelancer",
    description:
      "I'm a Front-End developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Front-End Developer Intern",
    location: "Route",
    description: "Embarked on a dynamic learning journey where I acquired proficiency in key web development technologies.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
  {
    title: "Portsaid University",
    location: "Portsaid, EG",
    description: "I graduated from Specific Education – Department Computer Science",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Levoire",
    description:
      "Developed an innovative e-commerce platform with seamless shopping, real-time cart updates, secure authentication, and a comprehensive admin dashboard.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma"],
    imageUrl: levoire,
    projectUrl: "https://levoire.shop",
  },

  {
    title: "BloxBoom",
    description: "Development and launch of a top-tier e-commerce platform designed for selling video game items.",
    tags: ["TypeScript", "React", "Next.js", "Tailwind", "Framer Motion"],
    imageUrl: bloxboom,
    projectUrl: "https://bloxboom.com",
  },
  {
    title: "Fresh Cart",
    description: "Developed and launched Fresh Cart a feature-rich e-commerce platform catering to diverse market needs.",
    tags: ["HTML", "CSS", "JavaScript", "BootStrap", "JSON", "React"],
    imageUrl: freshcart,
    projectUrl: "https://freshcartapp.netlify.app",
  },
  {
    title: "Portfolio",
    description: "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["TypeScript", "React", "Next.js", "Tailwind", "Framer Motion"],
    imageUrl: portfolio,
    projectUrl: "https://ahmedfawzy.vercel.app",
  },
  {
    title: "Dashmaster",
    description: "A comprehensive and intuitive admin dashboard for managing all your business operations efficiently.",
    tags: ["React", "Material-UI", "Tailwind", "Chart.js"],
    imageUrl: dashmaster,
    projectUrl: "https://dashmaster-2e21c.web.app",
  },
  {
    title: "Game Reviews",
    description:
      "Independently conceived and developed Game Reviews, a dedicated platform for showcasing detailed and insightful reviews of various games.",
    tags: ["HTML", "CSS", "JavaScript", "JSON", "BootStrap"],

    imageUrl: GameReviews,
    projectUrl: "https://gamereviewss.netlify.app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Jquery",
  "React",
  "Next.js",
  "Git",
  "SASS",
  "Bootstrap",
  "Tailwind",
  "Redux",
  "Framer Motion",
] as const;
