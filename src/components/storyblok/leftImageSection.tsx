import Image from "next/image";
import {
	renderRichText,
	type SbBlokData,
	storyblokEditable,
} from "@storyblok/react/rsc";
import parse from "html-react-parser";
import type { leftImageSection as leftImageSectionType } from "@/.storyblok/types/287474179047807/storyblok-components";

const leftImageSection = ({ blok }: { blok: leftImageSectionType }) => {
  return (
    <section
      {...storyblokEditable(blok as SbBlokData)}
      className="w-full p-20 mx-auto flex flex-col md:flex-row justify-start items-start gap-10 md:gap-[60px] bg-transparent">
      {blok.image?.filename && (
        <div>
          <figure>
            <Image
              src={blok.image.filename}
              alt={blok.image.alt || "Card image"}
              width={525}
              height={456}
              className="w-full h-auto object-cover"
            />
          </figure>
        </div>
      )}
      <div className="max-w-[700px] w-full flex flex-col justify-start items-start gap-4">
        {blok.title && (
          <h3 className="primary-card-title text-5xl font-extrabold">
            {blok.title}
          </h3>
        )}
        {blok.description && (
          <div className="spacious-desc">
            {parse(renderRichText(blok.description) ?? "")}
          </div>
        )}
        {blok.link?.url && blok.link_text && (
          <a href={blok.link.url} target={blok.link.target === "_blank" ? "_blank" : undefined} className="card-button mt-2 border-2 text-[#e3051b] border-[#e3051b] px-6 py-3 font-extrabold">
            {blok.link_text}
          </a>
        )}
      </div>
    </section>
  );
};

export default leftImageSection;