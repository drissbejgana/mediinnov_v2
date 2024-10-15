import Categories from "@/components/Categories";
import ExtraHeader from "@/components/ExtraHeader";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import NewsLetter from "@/components/NewsLetter";
import Sectionroducts from "@/components/Sectionproducts";
import dynamic from "next/dynamic";
import ContactSection from "@/components/ContactSection";
import { useTranslations } from "next-intl";


const Slider = dynamic(
  () => import('@/components/Slider'),
  { ssr: false }
  )

export default function Home() {
  const t=useTranslations('Home')
  
  return (
    <div>
      <HeroSection/>
      <ExtraHeader/>
      <FeaturesSection/>
      <Categories/>
      
      <section className="max-w-screen-xl mx-auto">
          <h2 className="text-center text-[#343131] text-4xl font-bold text-gary-800 xl:mb-8 mb-4">{t('Accompagnementdecentres')} <br /> {t('imagerie')} </h2>
          <p className="text-center text-md text-[#343131] font-semibold ">{t('desc')} </p>
          <Slider/>

      </section>

      <section className="w-full my-5 flex flex-wrap justify-evenly bg-red-800">
          
            <div className="flex text-white p-8 flex-col-reverse items-center ">
                <div className="text-md md:text-xl my-2">{t('YofExperience')} </div> 
                <div className="text-2xl md:text-4xl font-bold">12+</div> 
            </div>
            <div className="flex text-white p-8 flex-col-reverse items-center ">
                <div className="text-md md:text-xl my-2">{t('VisitorsAnnually')} </div> 
                <div className="text-2xl md:text-4xl font-bold">6k+</div> 
            </div>
            <div className="flex text-white p-8 flex-col-reverse items-center ">
                <div className="text-md md:text-xl my-2">{t('CustomerSupport')} </div> 
                <div className="text-2xl md:text-4xl font-bold">24/7</div> 
            </div>
            <div className="flex text-white p-8 flex-col-reverse items-center ">
                <div className="text-md md:text-xl my-2">{t('Devices')} </div> 
                <div className="text-2xl md:text-4xl font-bold">35+</div> 
            </div>

      </section>
        <Sectionroducts/>
        <NewsLetter/>
        <ContactSection/>
    </div>
  );
}
