import chalk from "chalk";

import { readdirSync, readFileSync } from "fs";

const TRANSLATIONS_DIR_PATH = "./i18n/translations";
const REFERENCE_LANG = "fr";

function readTranslationFiles() {
  const files = readdirSync(TRANSLATIONS_DIR_PATH);
  const translations = {};

  for (const file of files) {
    const lang = file.replace(".json", "");
    translations[lang] = JSON.parse(
      readFileSync(`${TRANSLATIONS_DIR_PATH}/${file}`, "utf8")
    );
  }

  return translations;
}

// Function to deeply compare two objects keys
function deepCompare(obj1, obj2, path = "", success = true) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check for keys in obj1 that are missing in obj2
  for (const key of keys1) {
    if (!keys2.includes(key)) {
      success = false;
      console.info("Missing key:", chalk.red(`${path}${key}`));
    } else if (
      typeof obj1[key] === "object" &&
      obj1[key] !== null &&
      !Array.isArray(obj1[key])
    ) {
      success =
        success && deepCompare(obj1[key], obj2[key], `${path}${key}.`, success);
    }
  }

  // Check for keys in obj2 that are not in obj1
  for (const key of keys2) {
    if (!keys1.includes(key)) {
      success = false;
      console.info("Extra key:", chalk.red(`${path}${key}`));
    }
  }

  return success;
}

// -- Let's work

const translations = readTranslationFiles();

// Extract the reference language
const reference = translations[REFERENCE_LANG];
delete translations[REFERENCE_LANG];

console.info(`Using ${chalk.blue(REFERENCE_LANG)} as reference language\n`);

const translationErrors = [];

// Compare all translations with the reference
for (const lang of Object.keys(translations)) {
  const translation = translations[lang];

  const success = deepCompare(reference, translation);
  if (success) {
    console.info(
      `[${chalk.blue(lang)}]`,
      chalk.green("Translation is healthy")
    );
  } else {
    translationErrors.push(lang);
    console.info(`[${chalk.blue(lang)}]`, chalk.red("Translation has errors!"));
  }
}

if (translationErrors.length === 0) {
  console.info(chalk.green("\nAll translations are healthy!"));
} else {
  console.info(
    chalk.red(
      `\nSome translations have errors: ${translationErrors.join(", ")}`
    )
  );
  process.exit(1);
}
