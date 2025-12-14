import {
	type SbBlokData,
	StoryblokServerComponent,
	storyblokEditable,
} from "@storyblok/react/rsc";
import type { Page } from "@/.storyblok/types/287474179047807/storyblok-components";

const pageContent = ({ blok }: { blok: Page }) => {
	return (
		<div {...storyblokEditable(blok as SbBlokData)}>
			{blok?.body?.map((blok) => (
				<StoryblokServerComponent blok={blok} key={blok?._uid} />
			))}
		</div>
	);
};

export default pageContent;
