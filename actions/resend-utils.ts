import "server-only";

import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
if (!RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is not defined");
}

export const resend = new Resend(RESEND_API_KEY);

export const MAIL_ADDRESS_FROM = process.env.MAIL_ADDRESS_FROM!;
if (!MAIL_ADDRESS_FROM) {
  throw new Error("MAIL_ADDRESS_FROM is not defined");
}

export const MAIL_ADDRESS_TO = process.env.MAIL_ADDRESS_TO!;
if (!MAIL_ADDRESS_TO) {
  throw new Error("MAIL_ADDRESS_TO is not defined");
}
