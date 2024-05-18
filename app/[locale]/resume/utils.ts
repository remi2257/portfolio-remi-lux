import { Language } from "./resume-lang";

export function generateDocumentTitle(language: Language, anonymous: boolean) {
  let title: string;

  if (!anonymous) {
    title = "LUX_REMI";
  } else {
    switch (language) {
      case "fr":
        title = "INGENIEUR_FULL_STACK";
        break;
      case "en":
        title = "FULL_STACK_ENGINEER";
        break;
      case "es":
        title = "INGENIERO_FULL_STACK";
        break;
    }
  }

  let suffix: string;

  switch (language) {
    case "fr":
      suffix = "CV_FR";
      break;
    case "en":
      suffix = "RESUME_EN";
      break;
    case "es":
      suffix = "RESUMEN_ES";
      break;
  }

  return `${title}_${suffix}`;
}
