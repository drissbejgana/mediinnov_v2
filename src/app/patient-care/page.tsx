import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Products from '@/components/products' 

export default function Page() {
  return (
        <div className="bg-cover py-14 bg-fixed ">
             
            <div className='w-full md:w-8/12 bg-[#F2F5FA]  mx-auto py-16 px-4'>
                <div className='flex justify-between items-center flex-wrap  md:flex-nowrap'>
                      <div >
                            <h3 className="left-line">OUR PRODUCTS</h3>
                            <h2 className="mt-5 text-4xl titre w-full md:w-2/4 ">Patient Care</h2>
                            <p className="my-6 descritpion !text-sm md:w-3/4  !leading-7">
                            MEDI'INNOV propose various patient care devices such as Patient Monitor, Infusion Pump , Syringe Pump and Medical Ventilator to enable healthcare professionals to save their patient’s life and monitor the patient vital status.
                            </p>
                      </div>

                      <div className='w-full mt-5'>
                          <h3 className="text-base  ">  We'll ensure you always get the best solutions :<Link className=" text-white !text-[#f72a75] text-base font-bold  ml-1" href={'/contact'}> CONTACT US</Link></h3> 
                      </div>
                </div>



                  <Products category='' id={3} />
                  
 
          

            </div>

           
        </div>
  )
}
