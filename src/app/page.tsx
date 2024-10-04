import Categories from "@/components/Categories";
import ExtraHeader from "@/components/ExtraHeader";
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
   <div>
     <HeroSection/>
     <ExtraHeader/>
     <Categories/>
     <div className="w-full my-5 flex justify-evenly bg-red-800">
        
          <div className="flex text-white p-8 flex-col-reverse items-center ">
              <div className="text-xl my-2">Years of success</div> 
              <div className="text-4xl font-bold">20+</div> 
          </div>
          <div className="flex text-white p-8 flex-col-reverse items-center ">
              <div className="text-xl my-2">Visitors Annually</div> 
              <div className="text-4xl font-bold">6m+</div> 
          </div>
           <div className="flex text-white p-8 flex-col-reverse items-center ">
              <div className="text-xl my-2">Charity rates</div> 
              <div className="text-4xl font-bold">200k+</div> 
          </div>
          <div className="flex text-white p-8 flex-col-reverse items-center ">
              <div className="text-xl my-2">Donate via our fund raising</div> 
              <div className="text-4xl font-bold">$250m+</div> 
          </div>

     </div>
   </div>
  );
}
