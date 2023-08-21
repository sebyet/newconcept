/* eslint-disable react/no-unescaped-entities */
import BackgroundImage from "@/components/ui/BackgroundImage"
import H1 from "../Base/H1";
import H3 from "../Base/H3";
import Link from "../Base/Link";
import { createDirectus, readItem, readItems, rest } from "@directus/sdk";

const directus = createDirectus('http://localhost:8055').with(rest());

interface MyComponentProps {
    id: string
}
  
const BlockHero: React.FC<MyComponentProps> = async ({ id }) => {
  const BlockHeroContent = await directus.request(readItem("block_hero", id));
  const {headline, image, link} = BlockHeroContent;
  return (
    <BackgroundImage>
        <div className="flex flex-col justify-between w-full h-screen z-auto p-16">
            <div className="flex flex-col gap-5">
                <H1>{headline}</H1>
                <div className="flex gap-5">
                    {link.map((link: { label: string, href: string }) => (
                        <div key={link.label} className="flex flex-col gap-1">
                            <H3>{link.label}</H3>
                            <Link href={link.href} >Learn More</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </BackgroundImage>
  );
}

export default BlockHero;