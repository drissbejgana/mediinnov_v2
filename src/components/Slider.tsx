


'use client'
import { initFlowbite } from "flowbite";
import Image from "next/image";
import { useEffect} from "react";

export default function Slider() {


   useEffect(()=>{
    initFlowbite()
   })

    return (
        <div id="default-carousel" className="relative my-5 bg-gray-100" data-carousel="slide">

        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        

        <div className="hidden flex duration-700 ease-in-out" data-carousel-item>
            
            <Image
            
            alt="Salle de radiologie"
            src="/images/salle-radio.jpg"
            width={500}
            height={100}
            />
            <div className="absolute w-1/2 bg-gray-50/60 sm:bg-[#EEDF7A]/60 py-8 px-5 text-gray-800 md:top-12 right-12">
                <h3 className="text-[#bb1f22] text-2xl">Salle de radiologie</h3>
                <p className="text-sm">Découvrez nos équipements modernes de radiologie, offrant des résultats précis et un confort optimal pour tous les patients.</p>
            </div>
        </div>

        <div className="hidden flex duration-700 ease-in-out" data-carousel-item>
           <Image
            
            alt="Salle de radiologie"
            src="/images/Imagerie-femme.jpg"
            width={500}
            height={100}
            />
            <div className="absolute w-1/2 bg-gray-50/60 sm:bg-[#EEDF7A]/60 py-8 px-5 text-gray-800 md:top-12 right-12">
                <h3 className="text-[#bb1f22] text-2xl">Imagerie de la femme</h3>
                <p className="text-sm">Spécialisée dans les soins pour la femme, notre clinique propose des examens d’imagerie personnalisés pour le suivi gynécologique et obstétrical.</p>
            </div>
        </div>


        <div className="hidden flex duration-700 ease-in-out" data-carousel-item>
        <Image
            
            alt="Salle de radiologie"
            src="/images/radiologie_dentaire.jpg"
            width={500}
            height={100}
            />
            <div className="absolute w-1/2 bg-gray-50/60 sm:bg-[#EEDF7A]/60 py-8 px-5 text-gray-800 md:top-12 right-12">
                <h3 className="text-[#bb1f22] text-2xl">Imagerie dentaire</h3>
                <p className="text-sm">Nos radiographies dentaires permettent un diagnostic précis, essentiel pour des soins bucco-dentaires de qualité.</p>
            </div>
        </div>

    
        <div className="hidden flex duration-700 ease-in-out" data-carousel-item>
        <Image
            
            alt="Salle de radiologie"
            src="/images/Medecine_Echographie.jpg"
            width={500}
            height={100}
            />
            <div className="absolute w-1/2 bg-gray-50/60 sm:bg-[#EEDF7A]/60 py-8 px-5 text-gray-800 md:top-12 right-12">
                <h3 className="text-[#bb1f22] text-2xl">Échographie</h3>
                <p className="text-sm">Notre service d’échographie utilise la dernière technologie pour des examens sûrs, rapides et fiables.</p>
            </div>
        </div>


        <div className="hidden flex duration-700 ease-in-out" data-carousel-item>
        <Image
            
            alt="Salle de radiologie"
            src="/images/gestion-cabinet-médical.jpg"
            width={500}
            height={100}
            />
            <div className="absolute w-1/2 bg-gray-50/60 sm:bg-[#EEDF7A]/60 py-8 px-5 text-gray-800 md:top-12 right-12">
                <h3 className="text-[#bb1f22] text-2xl">Gestion du cabinet</h3>
                <p className="text-sm">Notre système de gestion du cabinet assure une organisation efficace pour un suivi médical sans faille.</p>
            </div>
        </div>

        <div className="hidden flex duration-700 ease-in-out" data-carousel-item>
          <Image
            
            alt="Salle de radiologie"
            src="/images/suivi-medical.png"
            width={500}
            height={100}
            />
            <div className="absolute w-1/2 bg-gray-50/60 sm:bg-[#EEDF7A]/60 py-8 px-5 text-gray-800 md:top-12 right-12">
                <h3 className="text-[#bb1f22] text-2xl">Suivi médical et interprétation</h3>
                <p className="text-sm">Notre équipe médicale vous accompagne pour une interprétation claire des résultats et un suivi personnalisé.</p>
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
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="sr-only">Next</span>
            </span>
        </button>
    </div> 
    );
}


