'use client'

import { Button } from "@/components/ui/Button";
import H1 from "@/components/ui/H1";
import BoxBgImage from "../ui/BoxBgImage";
import TitleAndSubtitle from "../ui/Title&Subtitle";
import USPCard from "../ui/USPCard";
import Paragraph from "../ui/p";
import H3 from "../ui/H3";
import Navbar from "../ui/Navbar";
export default function WorkTogether() {
  return (
   <>
   <div className="container mx-auto px-40 flex flex-col gap-20">
    <Navbar white />
    <TitleAndSubtitle H1Text={"Lorem Ipsum"} ParagraphText={"Lorem Ipsum"} />
    <div className="grid md:grid-cols-4 gap-4">
      <USPCard H2Text={"test"} ParagraphText={"this is a test"}/>
      <USPCard H2Text={"test"} ParagraphText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque."}/>
      <USPCard H2Text={"test"} ParagraphText={"this is a test"}/>
      <USPCard H2Text={"test"} ParagraphText={"this is a test"}/>
    </div>
    <BoxBgImage source={""}>
      <div className="flex flex-col gap-5">
        <H3 color={"white"} text={"Logo"} />
        <Paragraph color={"white"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque."} />
        <div>
          <Button>Button</Button>
        </div>
       
      </div>
    </BoxBgImage>
   </div>
   
    
   </>
  );
}
