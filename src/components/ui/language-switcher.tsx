"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { i18n, type Locale } from "@/i18n/i18n-config";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
	className?: string;
}

const languages = i18n.locales.map((locale) => locale.toUpperCase());

const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
	const params = useParams();
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	const currentLanguage = useLocale().toUpperCase();
	const paramsObject = Object.fromEntries(searchParams.entries());

	/* ---------- locale change ---------- */
	const handleLocaleChange = (newLocale: Locale) => {
		if (newLocale === params.lang) {
			return;
		}

		startTransition(() => {
			router.replace({ pathname, query: paramsObject }, { locale: newLocale });
		});
	};

	return (
		<div className={cn("relative inline-flex gap-2", className)}>
			{languages.map((lang) => {
				const isActive = lang === currentLanguage;
				return (
					<button
						key={lang}
						onClick={() => handleLocaleChange(lang.toLowerCase() as Locale)}
						className={cn(
							"text-white font-extrabold cursor-pointer"
						)}
						aria-label={`Switch to ${lang}`}
					>
						{lang}
					</button>
				);
			})}
		</div>
	);
};

export default LanguageSwitcher;
