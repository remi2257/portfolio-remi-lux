import "server-only";

import { headers } from "next/headers";
import { userAgent } from "next/server";

export function getUserAgent() {
  return userAgent({
    headers: headers(),
  });
}

export function isMobile() {
  return getUserAgent().device.type === "mobile";
}
