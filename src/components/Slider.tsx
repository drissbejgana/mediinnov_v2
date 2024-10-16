


'use client'
import { initFlowbite } from "flowbite";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect} from "react";

export default function Slider() {
    const t=useTranslations('Slider')

   useEffect(()=>{
    initFlowbite()
   })

    return (
        <div id="default-carousel" className="relative my-5 bg-gray-100" data-carousel="slide">

        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        

        <div className="hidden flex duration-700  ease-in-out" data-carousel-item>
        
            <Image
            alt="Salle de radiologie"
            src="/images/Salle-radiologie.jpg"
            width={500}
            height={100}
            className="w-1/2"

            />
            <div className=" w-1/2  md:md:py-8 px-5 text-gray-800 ">
                <h3 className="text-[#bb1f22]  text-xl sm:text-2xl font-bold">{t('Sallederadiologie')}</h3>
                <p className="  font-semibold md:mt-5 text-sm md:text-md">{t('Sallederadiologiedescription')}</p>
            </div>
        </div>

        <div className="hidden flex duration-700 ease-in-out" data-carousel-item>
           <Image
            
            alt="Salle de radiologie"
            src="/images/Imagerie-femme.jpg"
            width={500}
            height={100}
            className="w-1/2"
            />
            <div className=" w-1/2  md:py-8 px-5 text-gray-800 ">
                <h3 className="text-[#bb1f22]  text-xl sm:text-2xl font-bold">{t('Imageriefemme')}</h3>
                <p className="  font-semibold md:mt-5 text-sm md:text-md">{t('Imageriefemmedescription')}</p>
            </div>
        </div>


        <div className="hidden flex duration-700 ease-in-out" data-carousel-item>
        <Image
            
            alt="Salle de radiologie"
            src="/images/Imagerie-dentaire.jpg"
            width={500}
            height={100}
            className="w-1/2"
            />
            <div className=" w-1/2  md:py-8 px-5 text-gray-800 ">
                <h3 className="text-[#bb1f22]  text-xl sm:text-2xl font-bold">{t('Imageriedentaire')}</h3>
                <p className="  font-semibold md:mt-5 text-sm md:text-md">{t('Imageriedentairedescription')}</p>
            </div>
        </div>

    
        <div className="hidden flex duration-700 ease-in-out" data-carousel-item>
        <Image
            
            alt="Salle de radiologie"
            src="/images/echographie.jpg"
            width={500}
            height={100}
            className="w-1/2"
            />
            <div className=" w-1/2  md:py-8 px-5 text-gray-800 ">
              <h3 className="text-[#bb1f22]  text-xl sm:text-2xl font-bold">{t('echographie')}</h3>
                <p className="  font-semibold md:mt-5 text-sm md:text-md">{t('echographiedescription')}</p>
            </div>
        </div>


        <div className="hidden flex duration-700 ease-in-out" data-carousel-item>
        <Image
            
            alt="Salle de radiologie"
            src="/images/gestion-cabinet-médical.jpg"
            width={500}
            height={100}
            className="w-1/2"
            />
            <div className=" w-1/2  md:py-8 px-5 text-gray-800 ">
            <h3 className="text-[#bb1f22]  text-xl sm:text-2xl font-bold">{t('Gestionducabinet')}</h3>
            <p className="  font-semibold md:mt-5 text-sm md:text-md">{t('Gestionducabinetdescription')}</p>
            </div>
        </div>

        <div className="hidden flex duration-700 ease-in-out" data-carousel-item>
          <Image
            
            alt="Salle de radiologie"
            src="/images/suivi-medical.jpg"
            width={500}
            height={100}
            className="w-1/2"
            />
            <div className=" w-1/2  md:py-8 px-5 text-gray-800 ">
            <h3 className="text-[#bb1f22]  text-xl sm:text-2xl font-bold">{t('Suivienterprétation')}</h3>
            <p className="  font-semibold md:mt-5 text-sm md:text-md">{t('Suivienterprétationdescription')}</p>
            </div>
        </div>



        </div>
    
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        </div>
    
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#EEDF7A] dark:bg-gray-800/30  dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-[#bb1f22] dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#bb1f22] dark:bg-gray-800/30  dark:group-hover:bg-gray-800/60  dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-[#EEDF7A] dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="sr-only">Next</span>
            </span>
        </button>
    </div> 
    );
}


