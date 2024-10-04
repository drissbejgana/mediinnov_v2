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
                 alt="product item"
                 title="product item"
                 loading="lazy"
                 className="w-full h-[190px] object-contain"
                 src={product.image}
                 width={320}
                 height={190}
               />
             </Link>
              <div className="p-4">
                 <Link className="title text-[#343131]" href="/contribute">
                     {product.title}
                 </Link>
               <div className="flex items-center my-2">
                  <Image
                     alt="heart-life"
                     title="heart-life"
                     loading="lazy"
                     src="/favicon.webp"
                     width={32}
                     height={32}
                  
                   />
                 <span className="font-bold mx-3">
                    Sternmed
                 </span>
               </div>
             

           <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                  <div className="bg-[#EEDF7A] h-1.5 rounded-full dark:bg-red-500" style={{width: "80%"}}></div>
             </div>


               <div className="flex items-center w-full justify-between">
                 <span className="flex">
                     <svg className="w-6 h-6 text-red-600 dark:text-white me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                         <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"/>
                     </svg>

                   20 Products
                 </span>
                 <button className="share">
                 <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                 <path fill-rule="evenodd" d="M14.516 6.743c-.41-.368-.443-1-.077-1.41a.99.99 0 0 1 1.405-.078l5.487 4.948.007.006A2.047 2.047 0 0 1 22 11.721a2.06 2.06 0 0 1-.662 1.51l-5.584 5.09a.99.99 0 0 1-1.404-.07 1.003 1.003 0 0 1 .068-1.412l5.578-5.082a.05.05 0 0 0 .015-.036.051.051 0 0 0-.015-.036l-5.48-4.942Zm-6.543 9.199v-.42a4.168 4.168 0 0 0-2.715 2.415c-.154.382-.44.695-.806.88a1.683 1.683 0 0 1-2.167-.571 1.705 1.705 0 0 1-.279-1.092V15.88c0-3.77 2.526-7.039 5.967-7.573V7.57a1.957 1.957 0 0 1 .993-1.838 1.931 1.931 0 0 1 2.153.184l5.08 4.248a.646.646 0 0 1 .012.011l.011.01a2.098 2.098 0 0 1 .703 1.57 2.108 2.108 0 0 1-.726 1.59l-5.08 4.25a1.933 1.933 0 0 1-2.929-.614 1.957 1.957 0 0 1-.217-1.04Z" clip-rule="evenodd"/>
                 </svg>
                 </button>
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