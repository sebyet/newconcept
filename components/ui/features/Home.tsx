'use client'

import Header from "@/components/features/Header";
import Service from "@/components/features/Service";
import Footer from "@/components/features/Footer";
import BackgroundImage from "@/components/ui/BackgroundImage"
import { Button } from "@/components/ui/Button";
import H1 from "@/components/ui/H1"


export default function Home() {
  return (
   <>
   <Header />
   <Service 
    H1Text={"Service 1"}
    paragraphText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque."}
    buttonText={"Button"}
    white={false}
   />
   <Service
    H1Text={"Service 2"}
    paragraphText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque."}
    buttonText={"Button"}
    white
    />
    <Service
    H1Text={"Service 2"}
    paragraphText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque."}
    buttonText={"Button"}
    white={false}
    />
   </>
  );
}
