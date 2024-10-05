import Categories from "@/components/Categories";
import ExtraHeader from "@/components/ExtraHeader";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import Slider from "@/components/Slider";


export default function Home() {
  return (
   <div>
     <HeroSection/>
     <ExtraHeader/>
     <Categories/>

     <FeaturesSection/>

     <section className="w-full my-5 flex flex-wrap justify-evenly bg-red-800">
        
          <div className="flex text-white p-8 flex-col-reverse items-center ">
              <div className="text-md md:text-xl my-2">Years of Experience</div> 
              <div className="text-2xl md:text-4xl font-bold">12+</div> 
          </div>
          <div className="flex text-white p-8 flex-col-reverse items-center ">
              <div className="text-md md:text-xl my-2">Visitors Annually</div> 
              <div className="text-2xl md:text-4xl font-bold">6m+</div> 
          </div>
           <div className="flex text-white p-8 flex-col-reverse items-center ">
              <div className="text-md md:text-xl my-2">Customer Support</div> 
              <div className="text-2xl md:text-4xl font-bold">24/7</div> 
          </div>
          <div className="flex text-white p-8 flex-col-reverse items-center ">
              <div className="text-md md:text-xl my-2">Donate via our fund raising</div> 
              <div className="text-2xl md:text-4xl font-bold">$250m+</div> 
          </div>

     </section>

     <Slider/>

   </div>
  );
}
