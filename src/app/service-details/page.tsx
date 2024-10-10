'use client'
import ContactComponent from "@/components/contactComponent";
import Image from "next/image";
import { useState } from "react";


// type Props={
//   name:"",
//   image:""
// }


export default function page() {


    const [show,setShow]=useState(false)
  return (
<>
        <div className="costum-bg w-full bg-[url('/images/products/mri_marcom-0.35T.webp')] bg-fixed bg-top hidden md:block relative h-full md:h-dvh">

        
             <div className="w-full relative z-1 mx-auto grid grid-cols-1 place-content-center   h-full ">
                  <div className="md:pl-20 ml-24">
                  <h1 className=' fnt text-white text-lg sm:text-xl md:text-3xl lg:text-5xl '>Marcom 0.35T</h1>
                  <p className='fnt !text-white text-lg sm:text-xl'>permanent magnet MRI scanner</p>
                  </div>
             </div>
        </div>
        <div className="block mt-32 md:hidden ">
        <Image
                    className="relative w-full "
                    src={'/images/products/mri_marcom-0.35T.webp'}
                    alt="Cmri_marcom-0.35T"
                    width={500}
                    height={400}
                    priority
                    />
      </div>
    <div className="grid py-5 md:w-8/12 mx-auto  grid-cols-1 md:grid-cols-3 gap-4 ">
            <div className="px-8 col-span-2">
                  <h2 className="text-4xl fnt capitalize py-5  text-gray-800 font-light">
                    Marcom 0.35T MRI scanner
                  </h2>
                  <p className="text-base  text-[#7A7A7A]  mb2">
                   Marcom 0.35T is an open 0.35T permanent magnet MRI scanner which supplies fast imaging and high-quality images and provides rich preset scan protocols as well as advanced applications.
                  </p>
                <h2 className="fnt pt-8 text-3xl text-[#9F1C23]">
                    Features
                </h2>
                <h3 className="fnt mt-2 text-xl">
                 Eddy zero technology
                </h3>
                  <p className="text-base  text-[#7A7A7A]  my-2">
                  The shimming algorithm technology (ensures field strength with high uniformity and stability), ensure the MRI system operating stably with high quality and high performance.
                  </p>
                  <ul className="mt-6 space-y-4 ">
                    <li className="flex text-sm items-center">
                    <svg className="w-6 h-6 text-[#9F1C23] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                    Magnet design uses breakthrough anti-eddy current technology
                    </li>
                    <li className="flex  text-sm items-center">
                    <svg className="w-6 h-6 text-[#9F1C23] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>        
                    The gradient coil using self-shielded active anti – eddy current technology
                    </li>
                    <li className="flex  text-sm items-center">
                    <svg className="w-6 h-6 text-[#9F1C23] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                    Implementation of precision eddy current compensation algorithm, completely eliminate the impact of eddy current.
                    </li>
                </ul>
                  <p className="text-base  text-[#7A7A7A]  my-5">
                   The eddy current because of the high gradient and high slew rate come from ultra-fast sequence was resolved completely, which guarantee to get the best clinic image.
                  </p>
                 <h3 className="fnt mt-2 text-xl">
                    Open wide design
                </h3>
                <p className="text-base  text-[#7A7A7A]  my-2">
                 More patient comfort and more space for surgery. Affinity C-shape magnets, creating a maximum of openness, offer a maximum vision for patients, especially leave much space comfort for obese patients, minimizing claustrophobia of patients and providing more space for MR intervention surgery.
                </p>


                <h3 className="fnt mt-2 text-xl">
                 Advance gradient system
                </h3>
                <p className="text-base  text-[#7A7A7A]  my-2">
                 The gradient system helps to provide higher resolution pictures. The Marcom 0.35T (X、Y、Z) gradient intensity is 25mT/m, providing higher gradient intensity, faster imaging speed, shorter scanning time, thinner imaging slice and higher image resolution.
                </p>



                <h3 className="fnt mt-2 text-xl">
                The new technology of 4D shimming
                </h3>
                <p className="text-base  text-[#7A7A7A]  my-2">
                  Use of advanced active shimming algorithm for real-time automatic shimming on each examination to ensure the magnetic field always maintain the highest uniformity. Magnetic field homogeneity and stability of the MRI images always are the most important guarantee of the high-resolution, high SNR and high contrast. They are the important indicators of the level of magnet design, the better the smaller the value. It directly determines the SNR of the image, like a car chassis, where stability is essential. The magnetic field uniformity is maintained at 2.5ppm in 40cm the DSV Vrms, allowing the system to complete a wide range of scanning (40cm).
                </p>

                <h3 className="fnt mt-2 text-xl">
                Advanced RF system
                </h3>
                <p className="text-base  text-[#7A7A7A]  my-2">
                The Marcom 0.35T is equipped with fast 4 channels RF system and all phased array coils providing best SNR pictures.
                </p>

                <div className="p-4 w-full border rounded-lg md:p-6 dark:bg-gray-800">
            <h2 onClick={()=>setShow(!show)} className="my-4 text-base  text-[#9F1C23] font-bold flex cursor-pointer  font-medium dark:text-white"><svg className="w-6 mr-2 h-6 text-[#9F1C23] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clip-rule="evenodd"/>
                    </svg>
               Specifications
            </h2>
               {
                show &&  <ul className="">
                <li className="text-sm mb-2">Permanent magnet with automatic constant temperature system</li>
                <li className="text-sm mb-2">Field strength 0.35T</li>
                <li className="text-sm mb-2">C-shape magnet</li>
                <li className="text-sm mb-2">Homogeneity ≤2.5ppm</li>
                <li className="text-sm mb-2">Shimming method: Active/Passive/Dynamic</li>
                <li className="text-sm mb-2">Optimal algorithm of active shimming</li>
                <li className="text-sm mb-2">Magnet vertical gap 40cm</li>
                <li className="text-sm mb-2">Accessibility (Horizontal opening angle) 270°</li>
                <li className="text-sm mb-2">Gradient field strength (Single Axis) 25mT/m</li>
                <li className="text-sm mb-2">Gradient slew rate (Single Axis) 75mT/m/ms</li>
                <li className="text-sm mb-2">FOV 20 to 400mm</li>
                <li className="text-sm mb-2">2D Thickness 1mm</li>
                <li className="text-sm mb-2">3D thickness 0.1mm</li>
                <li className="text-sm mb-2">Air cooling gradient system</li>
                <li className="text-sm mb-2">Fully digital Spectrometer</li>
                <li className="text-sm mb-2">Digital Transmit and Receive RF system</li>
                <li className="text-sm mb-2">4 channels RF system</li>
                <li className="text-sm mb-2">Phase array coil</li>
                <li className="text-sm mb-2">Dual-voice patient communication system</li>
                <li className="text-sm mb-2">Patient weight max. 200Kg</li>
                <li className="text-sm mb-2">Patient bed laser location system</li>
                <li className="text-sm mb-2">DICOM 3.0</li>
                <li className="text-sm mb-2">Fully open Magnet</li>
                <li className="text-sm mb-2">Nd-Fe-B magnet</li>
                <li className="text-sm mb-2">4D shimming</li>
                <li className="text-sm mb-2">Eddy Zero Technology</li>
                <li className="text-sm mb-2">Self-regulating constant temperature</li>
                <li className="text-sm mb-2">Fully Digital 4 Channel Receiving Spectrometer</li>
                <li className="text-sm mb-2">Automatic coil tuning</li>
                <li className="text-sm mb-2">Accurate position assist</li>
                <li className="text-sm mb-2">Comprehensive scanning sequences</li>
                <li className="text-sm mb-2">Advanced imaging techniques</li>
                <li className="text-sm mb-2 font-bold">Pulse sequences</li>
                <ul className="mt-4">
                    <li className="text-sm mb-2">Spin-echo sequence</li>
                    <li className="text-sm mb-2">GRE sequence</li>
                    <li className="text-sm mb-2">IR sequence</li>
                </ul>
                <li className="text-sm mb-2 font-bold">Advanced imaging technology</li>
                <ul className="mt-4" >
                    <li className="text-sm mb-2">Body Imaging</li>
                    <li className="text-sm mb-2">MR Angiography</li>
                    <li className="text-sm mb-2">Diffusion weighted imaging (DWI)</li>
                    <li className="text-sm mb-2">Flow compensation</li>
                    <li className="text-sm mb-2">Gating technology</li>
                    <li className="text-sm mb-2">Pre-saturation technology (PS)</li>
                    <li className="text-sm mb-2">Pre-saturation adjustment technology</li>
                    <li className="text-sm mb-2">Part metal implant scan technology</li>
                    <li className="text-sm mb-2">Multi-layer and multi-angle scanning technology</li>
                    <li className="text-sm mb-2">Optimize bandwidth acquisition technology</li>
                    <li className="text-sm mb-2">Parallel acquisition technology</li>
                    <li className="text-sm mb-2">Section acquisition technology</li>
                    <li className="text-sm mb-2">Oversampling technology</li>
                    <li className="text-sm mb-2">Image fusion technology</li>
                    <li className="text-sm mb-2">Artifact suppression technology</li>
                    <li className="text-sm mb-2">Thin imaging technology</li>
                    <li className="text-sm mb-2">Online image filtration</li>
                    <li className="text-sm mb-2">Scan sequence queuing</li>
                    <li className="text-sm mb-2">Movie playback technology</li>
                    <li className="text-sm mb-2">Post processing package</li>
                </ul>
                </ul>
               }

                </div>
        
            </div>

            <div className="px-5">
               <h2 className="fnt pt-8 text-3xl text-[#9F1C23]">
                  Coils
                </h2>
                <p className="text-sm  text-[#7A7A7A]  my-2">
                  Marcom 0.35T has a variety of different phased array coils and all of them provide the best SNR pictures.
                </p>
                <h3 className="fnt mt-2 text-xl">
                Standard
                </h3>
                <ul className="mt-6 space-y-4 ">
                    <li className="flex text-sm items-center">
                    <svg className="w-6 h-6 text-[#9F1C23] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                    Head coil
                    </li>
                    <li className="flex  text-sm items-center">
                    <svg className="w-6 h-6 text-[#9F1C23] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>        
                    Neck coil
                    </li>
                    <li className="flex text-sm items-center">
                    <svg className="w-6 h-6 text-[#9F1C23] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                    Small body coil.
                    </li>
                  <li className="flex  text-sm items-center">
                    <svg className="w-6 h-6 text-[#9F1C23] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                    Large body coil
                    </li>
                    <li className="flex  text-sm items-center">
                    <svg className="w-6 h-6 text-[#9F1C23] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                    Knee coil
                    </li>
                </ul>
                <h3 className="fnt mt-2 text-xl">
                Optional
                </h3>
                <ul className="mt-6 space-y-4 ">
                    <li className="flex text-sm items-center">
                    <svg className="w-6 h-6 text-[#9F1C23] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                    Shoulder coil
                    </li>
                    <li className="flex  text-sm items-center">
                    <svg className="w-6 h-6 text-[#9F1C23] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>        
                    Sport joint coil
                    </li>
                    <li className="flex text-sm items-center">
                    <svg className="w-6 h-6 text-[#9F1C23] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                    Wrist Coil
                    </li>
                  <li className="flex  text-sm items-center">
                    <svg className="w-6 h-6 text-[#9F1C23] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                    Breast Coil
                    </li>
                    <li className="flex  text-sm items-center">
                    <svg className="w-6 h-6 text-[#9F1C23] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                    Flexible coil
                    </li>
                    <li className="flex  text-sm items-center">
                    <svg className="w-6 h-6 text-[#9F1C23] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                    Flexible body coil
                    </li>
                    <li className="flex  text-sm items-center">
                    <svg className="w-6 h-6 text-[#9F1C23] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                    Flat spine coil
                    </li>
                </ul>

                <h2 className="fnt pt-8 text-3xl text-[#9F1C23]">
                Outstanding
                </h2>
                <ul className="mt-6 space-y-4 ">
                    <li className="flex text-sm items-center">
                    <svg className="w-6 h-6 text-[#9F1C23] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                    Fully open Magnet
                    </li>
                    <li className="flex  text-sm items-center">
                    <svg className="w-6 h-6 text-[#9F1C23] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>        
                    Nd-Fe-B magnet
                    </li>
                    <li className="flex text-sm items-center">
                    <svg className="w-6 h-6 text-[#9F1C23] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                    4D shimming
                    </li>
                  <li className="flex  text-sm items-center">
                    <svg className="w-6 h-6 text-[#9F1C23] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                    Eddy Zero Technology
                    </li>
                    <li className="flex  text-sm items-center">
                    <svg className="w-6 h-6 text-[#9F1C23] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                    self-regulating constant temperature
                    </li>
                    <li className="flex  text-sm items-center">
                    <svg className="w-6 h-6 text-[#9F1C23] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                    Fully Digital 4 Channel Receiving Spectrometer
                    </li>
                    <li className="flex  text-sm items-center">
                    <svg className="w-6 h-6 text-[#9F1C23] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                    Automatic coil tuning
                    </li>
                    <li className="flex  text-sm items-center">
                    <svg className="w-6 h-6 text-[#9F1C23] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                    Accurate position assist
                    </li>
                    <li className="flex  text-sm items-center">
                    <svg className="w-6 h-6 text-[#9F1C23] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                    Higher SNR
                    </li>
                    <li className="flex  text-sm items-center">
                    <svg className="w-6 h-6 text-[#9F1C23] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                    Higher resolution
                    </li>
                    <li className="flex  text-sm items-center">
                    <svg className="w-6 h-6 text-[#9F1C23] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                    Less Scanning Time
                    </li>
                    <li className="flex  text-sm items-center">
                    <svg className="w-6 h-6 text-[#9F1C23] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                    Comprehensive scanning sequences
                    </li>
                    <li className="flex  text-sm items-center">
                    <svg className="w-6 h-6 text-[#9F1C23] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                    Advanced imaging techniques
                    </li>
                </ul>

            </div>
            
    </div>

    <section data-aos="fade-in" className="mt-20 md:px-16">
                <h3 className="left-line right-line w-full text-center">GET IN TOUCH </h3>
                <h3 className="text-5xl titre w-full text-center  my-4"> Need Any Help</h3>
                <ContactComponent/>

                
    </section>






</>
  );
}
