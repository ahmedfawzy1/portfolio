import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import freshcart from "@/public/freshcart.png";
import portfolio from "@/public/portfolio.png";
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
    location: "Freelancer",
    description:
      "I'm now a Front-End developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
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
    title: "Fresh Cart",
    description: "Developed and launched Fresh Cart a feature-rich e-commerce platform catering to diverse market needs.",
    tags: ["HTML", "CSS", "JavaScript", "BootStrap", "React", "Next.js"],
    imageUrl: freshcart,
    projectUrl: "https://freshcartapp.netlify.app",
  },
  {
    title: "Portfolio",
    description: "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["TypeScript", "React", "Next.js", "Tailwind", "Framer Motion"],
    imageUrl: portfolio,
    projectUrl: "https://ahmed-fawzy.netlify.app",
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
