// lib/i18n-config.ts
export const i18n = {
	locales: ["de", "en"] as const,
	defaultLocale: "de",
};

export type Locale = (typeof i18n)["locales"][number];
