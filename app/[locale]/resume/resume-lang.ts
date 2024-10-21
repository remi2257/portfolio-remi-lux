export const languageList = ["fr", "en"] as const;
export type Language = (typeof languageList)[number];
