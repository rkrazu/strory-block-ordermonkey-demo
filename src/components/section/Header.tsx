import { StoryblokServerComponent } from "@storyblok/react/rsc";
import type { Menu } from "@/.storyblok/types/287474179047807/storyblok-components";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "../ui/language-switcher";

const Header = ({ burger_menu }: { burger_menu?: Menu[] }) => {
  //adjust this component based on your need.
  return (
    <div className="bg-[#e3051b] fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between max-w-[1200px] mx-auto px-4 py-4 gap-20">
        <div className="flex items-center justify-start gap-4">
		<Link href="/"><Image src="/logo.png" alt="logo" width={150} height={150} /></Link>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-10 font-extrabold">
            <Link className="text-white" href="/">Home</Link>
            <Link className="text-white" href="/about">About</Link>	
			<Link className="text-white" href="/contact">Contact</Link>
          </ul>
        </div>
		<div><LanguageSwitcher /></div>
      </div>
      <div className="hidden">
        {burger_menu && <StoryblokServerComponent blok={burger_menu[0]} />}
        
      </div>
    </div>
  );
};

export default Header;
 