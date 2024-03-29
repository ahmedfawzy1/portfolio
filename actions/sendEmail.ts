"use server";

import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend("re_4AngqE7X_EFLfAQMUQsVgZZgaTCQ3EPfX");

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");

  if (!validateString(email, 500)) {
    return {
      error: "Invaild Email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invaild Message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "ahmedfawzy100038@gmail.com",
      subject: "Message From Contact Form",
      reply_to: email as string,
      react: React.createElement(ContactFormEmail, {
        email: email as string,
        message: message as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return { data };
};
