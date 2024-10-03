import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Prices from "@/components/Prices";
import Image from "next/image";

export default function Home() {
  return (
   <div>
     <HeroSection/>
      <Prices/>
   </div>
  );
}
