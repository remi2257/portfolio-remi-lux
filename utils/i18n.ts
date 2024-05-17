import { useMessages, useTranslations } from "next-intl";

export function useTranslationsWithList(namespace: string) {
  const t = useTranslations(namespace);
  const messages = useMessages();

  return [
    t,
    (relativeListKey: string) => {
      const listKey = `${namespace}.${relativeListKey}`;

      try {
        // Use the key to "dig" into the messages object
        const targetObj = listKey.split(".").reduce((acc, k) => {
          const subObject = acc[k];
          if (typeof subObject !== "object") {
            throw new Error(`[${listKey}] Expected object at key ${k}`);
          }

          return subObject;
        }, messages);

        const keys = Object.keys(targetObj);
        return keys.map(key => t(`${relativeListKey}.${key}`));
      } catch (error) {
        console.error(error);
        return [t(relativeListKey)];
      }
    },
  ] as const;
}
