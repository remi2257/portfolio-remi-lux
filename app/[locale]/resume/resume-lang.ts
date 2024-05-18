export const languageList = ["fr", "en", "es"] as const;
export type Language = (typeof languageList)[number];
