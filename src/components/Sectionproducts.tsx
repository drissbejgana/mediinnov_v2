'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Products from "./products";

type Product = {
    id: number;
    category: string;
    image: string;
    title: string;
    description: string;
};



export default function Sectionroducts() {
    const [isLoading, setIsLoading] = useState(true);
    const [subcats, setSubcats] = useState<Product[]>([]);
    const [categoryByid,setCategorybyId]=useState(1)
    const [category,setCategory]=useState('mri')

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
                Our Medical Devices
            </h2>
              
              <div>
                  <ul className="flex justify-center w-full my-5 cursor-pointer">
                    <li onClick={()=>{setCategorybyId(1) 
                         setCategory('mri')}} className={`text-center ${categoryByid==1?'bg-red-700 text-white':''} px-4 py-3 border mx-1 bg-[#F2F2F2] rounded`}>Medical Imaging</li>
                    <li onClick={()=>{setCategorybyId(2)
                         setCategory('surgical-light')}} className={`text-center ${categoryByid==2?'bg-red-700 text-white':''} px-4 py-3 border mx-1 bg-[#F2F2F2] rounded`}>OR Solutions</li>
                    <li onClick={()=>{setCategorybyId(3) 
                        setCategory('patient-monitor')}} className={`text-center ${categoryByid==3?'bg-red-700 text-white':''} px-4 py-3 border mx-1 bg-[#F2F2F2] rounded`}>Patient Care</li>
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