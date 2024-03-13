import React from "react";
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  email: string;
  message: string;
};

export default function ContactFormEmail({ email, message }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Message from Your Portfolio Site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">You Received the following message from the contact form</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The Sender's Email Is: {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
