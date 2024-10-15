'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Products from "./products";
import { useTranslations } from "next-intl";

type Product = {
    id: number;
    category: string;
    image: string;
    title: string;
    description: string;
};



export default function Sectionroducts() {
    const [subcats, setSubcats] = useState<Product[]>([]);
    const [categoryByid,setCategorybyId]=useState(1)
    const [category,setCategory]=useState('mri')
    const t=useTranslations('Products')
    useEffect(()=>{
           
        async function getProducts() {
            const response = await fetch('/api/products');
            const data = await response.json();
            console.log(data)
            const filteredProducts = data.filter((item: any) => item.id === categoryByid)[0]?.categories || [];
            console.log('data',filteredProducts)
            setSubcats(filteredProducts)
        }
  
        getProducts();

    },[categoryByid])



    return (

        <section id="products"  className="max-w-screen-xl mx-auto 2xl:my-20 lg:my-14 my-12">
          <div className="container">
            <h2 className="text-center text-[#343131] text-4xl font-bold text-gary-800 xl:mb-8 mb-4">
                {t('OurMedicalDevices')}
            </h2>
              
              <div>
                  <ul className="flex justify-center w-full my-5 cursor-pointer">
                    <li onClick={()=>{setCategorybyId(1) 
                         setCategory('mri')}} className={`text-center ${categoryByid==1?'bg-red-700 text-white':''} px-4 py-3 border mx-1 bg-[#F2F2F2] rounded`}>{t('medicalImaging')}</li>
                    <li onClick={()=>{setCategorybyId(2)
                         setCategory('surgical-light')}} className={`text-center ${categoryByid==2?'bg-red-700 text-white':''} px-4 py-3 border mx-1 bg-[#F2F2F2] rounded`}>{t('orSolutions')}</li>
                    <li onClick={()=>{setCategorybyId(3) 
                        setCategory('patient-monitor')}} className={`text-center ${categoryByid==3?'bg-red-700 text-white':''} px-4 py-3 border mx-1 bg-[#F2F2F2] rounded`}> {t('patientCare')}</li>
                  </ul>
                  <ul className="flex flex-wrap justify-center w-full my-5 cursor-pointer">
                    {
                    subcats.map((item:any)=>
                        <li key={item.id} onClick={()=>setCategory(item.id)} className={`text-center ${category==item.id?'bg-red-700 text-white':''} px-4 py-3 my-3 border mx-1 bg-[#F2F2F2] rounded`}>{item.name}</li>
                
                    )
                  }
                </ul>
                
              </div>


          </div>    
         <Products id={categoryByid} category={category} />
      </section>
   

        )

}