'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Product = {
    id: number;
    category: string;
    image: string;
    title: string;
    description: string;
};

type Props = {
    id: number;
    category: string;
};

export default function Products({ id, category }: Props) {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function getProducts() {
            const response = await fetch('/api/products');
            const data = await response.json();
            const filteredProducts = data.filter((item: any) => item.id === id)[0]?.prodcuts || [];
            let filteredProductsbycat=filteredProducts

            if(category!=''){
                 filteredProductsbycat = filteredProducts.filter((item: Product) => item.category==category) || [];
            }

            setProducts(filteredProductsbycat)
            setIsLoading(false);
        }

        getProducts();
    }, [id, category]);


    return (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 min-[575px]:grid-cols-2 grid-cols-1 gap-6 mx-12 md:mx-auto">
        {
         products.map((product) => (
           <div
             key={product.id}
             className="bg-white border rounded-md shadow-lg product-item"
           >
             <Link href="/contribute">
             <Image
                 alt={product.title}
                 title={product.title}
                 className="w-full h-[190px] object-contain hover:scale-150 ease-in duration-150"
                 src={product.image}
                 width={320}
                 height={190}
               />
             </Link>
             <div className="p-4">
                    <Link className="title font-bold text-[#343131]" href="/contribute">
                        {product.title}
                    </Link>
                  <div className="flex items-center my-2">
                     <Image
                        alt="heart-life"
                        title="heart-life"
                        loading="lazy"
                        src="/favicon.webp"
                        width={24}
                        height={24}
                     
                      />
                    <span className="uppercase text-sm mx-2">
                       Sternmed
                    </span>
            </div>
             

           <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                  <div className="bg-[#EEDF7A] h-1.5 rounded-full dark:bg-red-500" style={{width: "80%"}}></div>
             </div>

  
                <Link href={'/'} className="text-white text-sm  mt-5 flex items-center justify-center w-full text-[17px] bg-red-700 hover:bg-red-800  font-medium rounded-lg  px-8 py-3 text-center  ">
                    Read More
                 <svg
                   width="11"
                   height="12"
                   className="mt-1 mx-4"
                   viewBox="0 0 11 9"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <g>
                     <path
                       d="M7.7459 0.259613H4.8584L8.06673 4.5L4.8584 8.74038H7.7459L10.9542 4.5L7.7459 0.259613Z"
                       fill="currentcolor"
                     />
                     <path
                       d="M3.2542 0.259613H0.366699L3.57503 4.5L0.366699 8.74038H3.2542L6.46253 4.5L3.2542 0.259613Z"
                       fill="currentcolor"
                     />
                   </g>
                 </svg>
               </Link>
             </div>
           </div>
         ))
         }
       </div>

        )

}