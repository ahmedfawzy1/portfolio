"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section.context";
import profile from "../public/person.webp";

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex justify-center items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profile}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              width="192"
              height="192"
              quality="95"
              priority={true}
              alt="ahmed"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      >
        Hello there, <span className="font-bold">I'm Ahmed Fawzy.</span> a passionate and innovative
        <span className="font-bold"> Frontend Developer</span> My Focus is <span className="underline">React (Next.js)</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-lg font-medium"
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-105 hover:bg-gray-950 focus:scale-105 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/Ahmed Fawzy - Frontend Web Developer.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-105 focus:scale-105 active:scale-105 transition borderBlack dark:bg-white/10"
        >
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <div className="contact flex gap-2">
          <a
            href="https://www.linkedin.com/in/ahmedfawzy1/"
            target="_blank"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full hover:scale-110 hover:text-gray-950 focus:scale-110 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
          >
            <BsLinkedin />
          </a>

          <a
            href="https://github.com/ahmedfawzy1"
            target="_blank"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full hover:scale-110 hover:text-gray-950 focus:scale-110 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
