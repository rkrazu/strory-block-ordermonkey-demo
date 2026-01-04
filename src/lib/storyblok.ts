import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import dynamic from "next/dynamic";
import Blog from "@/components/storyblok/blog";
import Global from "@/components/storyblok/global";

const Footer = dynamic(() => import("@/components/section/Footer"), {
	ssr: true,
});

const FooterItem = dynamic(
	() => import("@/components/storyblok/footer/footerItem"),
	{
		ssr: true,
	},
);
const leftImageSection = dynamic(() => import("@/components/storyblok/leftImageSection"), {
	ssr: true,
});

const heroVideoSection = dynamic(() => import("@/components/storyblok/heroVideoSection"), {
	ssr: true,
});

const rightImageSection = dynamic(() => import("@/components/storyblok/rightImageSection"), {
	ssr: true,
});

const smartOrderingSection = dynamic(() => import("@/components/storyblok/smartOrderingSection"), {
	ssr: true,
});

const orderMonkeyVideoSection = dynamic(() => import("@/components/storyblok/orderMonkeyVideoSection"), {
	ssr: true,
});

const heroSection = dynamic(() => import("@/components/storyblok/heroSection"), {
	ssr: true,
});

const ordermonkeyEcosystemSection = dynamic(() => import("@/components/storyblok/ordermonkeyEcosystemSection"), {
	ssr: true,
});

const Links = dynamic(() => import("@/components/storyblok/links"), {
	ssr: true,
});

const SBMenu = dynamic(() => import("@/components/storyblok/menu"), {
	ssr: true,
});
const SBMenuItem = dynamic(() => import("@/components/storyblok/menu_item"), {
	ssr: true,
});
const pageContent = dynamic(
	() => import("@/components/storyblok/pageContent"),
	{
		ssr: true,
	},
);

const components = {
	hero_section: heroSection,
	hero_video_section: heroVideoSection,
	footer: Footer,
	footer_item: FooterItem,
	links: Links,
	menu: SBMenu,
	menu_item: SBMenuItem,
	page: pageContent,
	left_image_section: leftImageSection,
	right_image_section: rightImageSection,
	smart_ordering_section: smartOrderingSection,
	ordermonkey_video_section: orderMonkeyVideoSection,
	ordermonkey_ecosystem_section: ordermonkeyEcosystemSection,
	blog: Blog,
	global: Global,
};

export const getStoryblokApi = storyblokInit({
	accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
	use: [apiPlugin],
	components,
	enableFallbackComponent: true,
});
