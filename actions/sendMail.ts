"use server";

import { MAIL_ADDRESS_FROM, MAIL_ADDRESS_TO, resend } from "./resend-utils";

export async function sendMail({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const { error: emailSendError } = await resend.emails.send({
    from: `Portfolio Contact Form <${MAIL_ADDRESS_FROM}>`,
    to: MAIL_ADDRESS_TO,
    subject: "New message from portfolio contact form",
    text: [
      "New message received from portfolio contact form",
      "",
      "Name: " + name,
      "Subject: " + subject,
      "Email: " + email,
      "",
      message,
    ].join("\n"),
  });

  if (emailSendError) {
    console.error(emailSendError);

    throw new Error("Error sending email: " + emailSendError.message);
  }
}
