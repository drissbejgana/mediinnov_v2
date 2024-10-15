'use client'
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export type Product = {
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
    const t=useTranslations('Products')
    useEffect(() => {
        async function getProducts() {
            const response = await fetch('/api/products');
            const data = await response.json();
            const filteredProducts = data.find((item: any) => item.id === id)?.prodcuts || [];
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
             <Link href={`/service-details?id=${product.id}&category=${id}`}>
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
                    <Link className="title font-bold text-[#343131] flex items-center justify-between" href="/service-details">
                        <span>{product.title} </span>
                        <svg className="my-5 fill-red-800 w-9 h-9  transition-all duration-500 group-hover:!fill-white" version="1.0" xmlns="http://www.w3.org/2000/svg"
                              width="32.000000pt" height="32.000000pt" viewBox="0 0 512.000000 512.000000"
                              preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                stroke="none">
                                <path d="M2375 5113 c-820 -71 -1535 -558 -1894 -1288 -367 -746 -310 -1622
                                151 -2311 72 -108 91 -123 144 -110 31 8 56 60 44 91 -5 11 -38 64 -74 118
                                -361 544 -452 1244 -245 1872 48 144 166 388 244 505 178 266 434 512 695 668
                                638 381 1421 414 2079 86 240 -119 415 -248 602 -441 172 -179 291 -350 398
                                -573 324 -679 268 -1494 -145 -2117 -36 -54 -69 -107 -74 -118 -12 -31 13 -83
                                44 -91 53 -13 72 2 150 119 558 839 504 1950 -131 2734 -299 369 -697 635
                                -1152 769 -254 75 -582 109 -836 87z"/>
                                <path d="M2260 4631 c-110 -35 -173 -120 -172 -232 0 -37 7 -70 22 -98 12 -24
                                20 -44 18 -45 -2 -1 -30 -10 -62 -21 -83 -27 -263 -115 -338 -166 -335 -226
                                -572 -571 -653 -952 -54 -258 -38 -539 46 -795 30 -91 89 -120 138 -68 27 29
                                26 40 -18 202 -198 728 247 1482 985 1670 654 166 1339 -178 1596 -802 124
                                -301 138 -648 38 -938 -26 -77 -25 -107 3 -134 51 -48 106 -20 136 70 124 377
                                100 769 -69 1125 -149 315 -387 556 -700 712 -52 27 -126 59 -165 72 -38 13
                                -71 25 -73 25 -2 1 6 21 18 45 57 110 10 251 -105 312 -38 21 -54 22 -330 24
                                -159 1 -301 -2 -315 -6z m595 -166 c38 -37 37 -88 -1 -122 -25 -23 -29 -23
                                -294 -23 -265 0 -269 0 -294 23 -38 34 -39 85 -1 122 l24 25 271 0 271 0 24
                                -25z"/>
                                <path d="M2177 3026 c-102 -28 -164 -111 -174 -233 l-6 -71 -88 -7 c-106 -8
                                -190 -44 -241 -105 -37 -43 -808 -1439 -840 -1521 -17 -44 -22 -82 -26 -213
                                -6 -212 3 -252 72 -321 69 -68 96 -75 310 -75 l176 0 0 -173 c0 -159 2 -176
                                22 -217 13 -24 36 -53 51 -64 28 -21 34 -21 1127 -21 1093 0 1099 0 1127 21
                                15 11 38 40 51 64 20 41 22 58 22 217 l0 173 178 0 c217 0 251 9 316 81 61 67
                                70 113 64 315 -4 131 -9 169 -26 213 -32 82 -803 1478 -840 1521 -51 61 -135
                                97 -241 105 l-88 7 -6 71 c-11 127 -79 213 -187 236 -75 16 -691 13 -753 -3z
                                m737 -150 c37 -16 56 -55 56 -117 l0 -39 -410 0 -410 0 0 39 c0 61 19 101 54
                                117 46 20 662 20 710 0z m387 -334 c21 -12 43 -32 51 -45 21 -32 746 -1351
                                754 -1371 6 -15 -90 -16 -1261 -16 -873 0 -1272 -3 -1286 -11 -48 -25 -44
                                -105 7 -128 18 -8 377 -11 1314 -11 l1290 0 0 -136 0 -136 -29 -29 -29 -29
                                -1552 0 -1552 0 -29 29 -29 29 0 136 0 136 175 0 c173 0 176 0 200 25 31 30
                                32 71 3 102 -21 22 -28 23 -171 23 -134 0 -149 2 -143 16 8 20 732 1339 753
                                1371 20 30 61 55 103 64 19 4 341 6 715 6 l680 -2 36 -23z m309 -2227 l0 -165
                                -1050 0 -1050 0 0 165 0 165 1050 0 1050 0 0 -165z"/>
                                <path d="M614 2870 c-26 -10 -54 -48 -54 -71 0 -9 9 -28 21 -43 20 -25 23 -26
                                135 -26 101 0 116 2 134 20 38 38 22 100 -31 119 -37 13 -174 14 -205 1z"/>
                                <path d="M4294 2866 c-48 -22 -60 -80 -24 -116 18 -18 33 -20 134 -20 112 0
                                115 1 135 26 27 35 26 57 -3 91 -23 27 -29 28 -118 31 -63 1 -103 -2 -124 -12z"/>
                                </g>
                        </svg> 
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
             

           <div className="w-full bg-gray-200  rounded-full h-1.5 mb-4 dark:bg-gray-700">
                  <div className="bg-[#EEDF7A] h-1.5 rounded-full dark:bg-red-500" style={{width: "80%"}}></div>
                 
             </div>

         
                <Link href={'/'} className="text-white text-sm  mt-5 flex items-center justify-center w-full text-[17px] bg-red-700 hover:bg-red-800  font-medium rounded-lg  px-8 py-3 text-center  ">
                    {t('readmore')}
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