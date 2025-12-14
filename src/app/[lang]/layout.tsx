import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import type { Global } from "@/.storyblok/types/287474179047807/storyblok-components";
import { StoryblokProvider } from "@/components/storyblokProvider";
import { ThemeProvider } from "@/components/theme-provider";
import { i18n, type Locale } from "@/i18n/i18n-config";
import { getStory } from "@/lib/fetchers/storyblok-fetcher";
import "../globals.css";
const Header = dynamic(() => import("@/components/section/Header"));
const Footer = dynamic(() => import("@/components/section/Footer"));

export const revalidate = 300; // 5 minutes

export const metadata: Metadata = {
	title: "YOU PROJECT",
};

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function PageLayout({
	children,
	params,
}: Readonly<{
	children: ReactNode;
	params: Promise<{ lang: Locale }>;
}>) {
	const { lang } = await params;
	setRequestLocale(lang);

	const envPrefix = process.env.CURRENT_ENV as "dev" | "stage" | "prod";

	const global_story = await getStory(envPrefix, "global", lang);
	const globalStory = global_story?.content as Global;

	// const gtm_auth = process.env.GTM_AUTH;
	// const gtm_preview_env = process.env.GTM_PREVIEW_ENV;

	return (
		<html lang={lang}>
			<head>
				{/* Cookiebot CMP */}
				{/* <Script
          src="https://web.cmp.usercentrics.eu/modules/autoblocker.js"
          strategy={`lazyOnload`}
          defer
        /> */}
				{/* <Script
          id="usercentrics-cmp"
          src="https://web.cmp.usercentrics.eu/ui/loader.js"
          data-settings-id="i8SXDHQaMpCuaC"
          strategy={`lazyOnload`}
          defer
        /> */}
				{/* Google Consent Mode */}
				{/* <Script id="google-consent-mode" strategy="lazyOnload" defer>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("consent", "default", {
              ad_personalization: "denied",
              ad_storage: "denied",
              ad_user_data: "denied",
              analytics_storage: "denied",
              functionality_storage: "denied",
              personalization_storage: "denied",
              security_storage: "granted",
              wait_for_update: 500
            });
            gtag("set", "ads_data_redaction", true);
            gtag("set", "url_passthrough", true);
          `}
        </Script> */}

				{/* Google Tag Manager */}
				{/* <Script
          type="text/plain"
          id="gtm"
          strategy="lazyOnload"
          data-usercentrics="Google Tag Manager"
          defer
        >
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=${gtm_auth}&gtm_preview=env-${gtm_preview_env}&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N4FDHPWJ');
          `}
        </Script>

        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="lazyOnload"
          defer
        /> */}
			</head>

			<body>
				{/* ✅ Google Tag Manager (noscript) */}
				{/* <noscript>
          <iframe
            title="gtm"
            src={`https://www.googletagmanager.com/ns.html?id=GTM-N4FDHPWJ&gtm_auth=${gtm_auth}&gtm_preview=env-${gtm_preview_env}&gtm_cookies_win=x%22`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript> */}

				<NextIntlClientProvider>
					<StoryblokProvider>
						<ThemeProvider attribute="class" defaultTheme="light" enableSystem>
							<main className="">
								<Header burger_menu={globalStory?.burger_menu} />

								{children}
								{/* footer */}
								<Footer blok={globalStory?.footer} />
								{/* footer */}
							</main>
						</ThemeProvider>
					</StoryblokProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
