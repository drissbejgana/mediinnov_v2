import Categories from "@/components/Categories";
import ExtraHeader from "@/components/ExtraHeader";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import NewsLetter from "@/components/NewsLetter";
import Products from "@/components/products";
import Sectionroducts from "@/components/Sectionproducts";
import dynamic from "next/dynamic";


const Slider = dynamic(
  () => import('@/components/Slider'),
  { ssr: false }
  )

export default function Home() {
  return (
   <div>
     <HeroSection/>
     <ExtraHeader/>
     <FeaturesSection/>
     <Categories/>
     
     <section className="max-w-screen-xl mx-auto">
        <h2 className="text-center text-[#343131] text-4xl font-bold text-gary-800 xl:mb-8 mb-4">Accompagnement de centres <br /> d'imagerie.</h2>
        <p className="text-center text-md text-[#343131] ">MEDIINOV est spécialisée dans la commercialisation des dispositifs médicaux et équipements, pour les secteurs public et privé. A la fois éditeur, distributeur et intégrateur, MEDIINNOV est le seul groupe au Maroc à proposer une solution globale totalement intégrée couvrant l’intégralité des besoins d'un centre ou service d’imagerie:</p>
        <Slider/>

     </section>

     <section className="w-full my-5 flex flex-wrap justify-evenly bg-red-800">
        
          <div className="flex text-white p-8 flex-col-reverse items-center ">
              <div className="text-md md:text-xl my-2">Years of Experience</div> 
              <div className="text-2xl md:text-4xl font-bold">12+</div> 
          </div>
          <div className="flex text-white p-8 flex-col-reverse items-center ">
              <div className="text-md md:text-xl my-2">Visitors Annually</div> 
              <div className="text-2xl md:text-4xl font-bold">6k+</div> 
          </div>
           <div className="flex text-white p-8 flex-col-reverse items-center ">
              <div className="text-md md:text-xl my-2">Customer Support</div> 
              <div className="text-2xl md:text-4xl font-bold">24/7</div> 
          </div>
          <div className="flex text-white p-8 flex-col-reverse items-center ">
              <div className="text-md md:text-xl my-2">Devices</div> 
              <div className="text-2xl md:text-4xl font-bold">$10m+</div> 
          </div>

     </section>
    <Sectionroducts/>
    <NewsLetter/>
   </div>
  );
}
