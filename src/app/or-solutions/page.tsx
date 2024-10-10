import Products from '@/components/products'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function Page() {
  return (
        <div className="bg-cover py-14 bg-fixed ">
             
            <div className='w-full md:w-8/12 bg-[#F2F5FA]  mx-auto py-16 px-4'>
                <div className='flex justify-between items-center flex-wrap  md:flex-nowrap'>
                      <div >
                            <h3 className="left-line">OUR PRODUCTS</h3>
                            <h2 className="mt-5 text-4xl titre w-full md:w-2/4 ">OR Solutions</h2>
                            <p className="my-6 descritpion !text-sm md:w-3/4  !leading-7">
                            MEDI'INNOV products in operation room category including Anesthesia Machine, OR Surgery Table and Surgical Light are designed to support healthcare facilities to provide safe and cost-effective health care to their patients.
                            </p>
                      </div>

                      <div className='w-full mt-5'>
                          <h3 className="text-base  ">  We'll ensure you always get the best solutions :<Link className=" text-white !text-[#f72a75] text-base font-bold  ml-1" href={'/contact'}> CONTACT US</Link></h3> 
                      </div>
                </div>



                  <Products category='' id={2} />
                  
     
          

            </div>

           
        </div>
  )
}
