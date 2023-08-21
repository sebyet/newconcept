'use client'

import { Button } from "@/components/ui/Button";
import H1 from "@/components/ui/H1";

import Background from "../ui/Background";
import Paragraph from "../ui/p";


const Service = ({ H1Text, paragraphText, buttonText, white }) => {
  return (
    <Background white={white}>
      <div className="flex flex-col justify-center items-center w-full h-96 gap-5">
        <H1 color="black" text={H1Text} />
        <Paragraph color="black" text={paragraphText} />
        <Button>{buttonText}</Button>
      </div>
    </Background>
  );
};

export default Service;