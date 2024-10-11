
import Category from '@/components/Category';
import Products from '@/components/products';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export async function generateStaticParams() {

    const ids = ['mri', 'ct', 'fluoroscopy','radiography','mammography','mobile-c-arm','ultrasound']; 
    return ids.map(id => ({
      id,
    }));
  }

export default function Page({ params }: { params: { id: string } }) {




  return (
        <div className=" bg-cover py-12 bg-fixed ">
             
            <div className='w-full md:w-8/12 bg-[#F2F5FA]  mx-auto py-16 px-4'>
                <div className='flex justify-between items-center flex-wrap  md:flex-nowrap'>
                    <Category category={params.id} id={1} />

                      <div className='w-full my-5'>
                          <h3 className="text-base  ">  We'll ensure you always get the best solutions :<Link className=" text-white !text-[#f72a75] text-base font-bold  ml-1" href={'/contact'}> CONTACT US</Link></h3> 
                      </div>
                </div>

             

                  <Products category={params.id} id={1} />
                  
        
          

            </div>

           
        </div>
  )
}
