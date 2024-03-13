"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-700 -mt-5 dark:text-white/80">
        Please contact me directly at{" "}
        <a href="mailto:ahmedfawzy100038@gmail.com" className="underline">
          ahmedfawzy100038@gmail.com
        </a>
        <br />
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email send Successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all"
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          required
          maxLength={50}
        />
        <textarea
          name="message"
          id="message"
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all resize-none"
          placeholder="Your Message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
