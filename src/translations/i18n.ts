import { type I18n, setupI18n } from "@lingui/core";
import { cache } from "react";
import { messages as en } from "~/translations/messages/en.po";
import { messages as fr } from "~/translations/messages/fr.po";

export async function loadCatalogAsync(locale: string) {
  const catalog = await import(`../translations/messages/${locale}.po`);
  return catalog.messages;
}

export function loadCatalog(locale: string) {
  if (locale === "en") {
    return en;
  }
  return fr;
}

export function setI18n(locale: string) {
  const messages = loadCatalog(locale);
  getLinguiCache().current = setupI18n({
    locale,
    messages: { [locale]: messages }
  });
  return getLinguiCache().current;
}

export function getI18n() {
  const i18n = getLinguiCache().current;
  if (!i18n) {
    throw new Error(
      "No i18n instance has been setup. Make sure to call `setI18n` first in root of your RSC tree before using `getI18n`"
    );
  }
  return i18n;
}

const getLinguiCache = cache((): { current: I18n } => ({
  current: setupI18n({
    locale: "en",
    messages: { en }
  })
}));
