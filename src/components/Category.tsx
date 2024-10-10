'use client'
import Link from "next/link";
import { useEffect, useState } from "react";


type Props = {
    id: number;
    category: string;
};

export default function Category({ id, category }: Props) {
    const [isLoading, setIsLoading] = useState(true);
    const [cate, setCate] = useState<{id:string,name:string,description:string}>({ id:"",name:"",description:"" });

    useEffect(() => {
        async function getProducts() {
            const response = await fetch('/api/products');
            const data = await response.json();
            const filteredProducts = data.filter((item: any) => item.id === id)[0]?.categories || {};
            let filteredProductsbycat=filteredProducts

            filteredProductsbycat = filteredProducts.filter((item: any) => item.id==category) || {};
            setCate(filteredProductsbycat[0])

            setIsLoading(false);
        }

        getProducts();
    }, [id, category]);


    return (
            <div >
                <h3 className="left-line">OUR PRODUCTS</h3>
                <h2 className="mt-5 text-4xl titre w-full md:w-2/4 ">{cate?.name}</h2>
                <p className="my-6 descritpion !text-sm md:w-3/4  !leading-7">
                     {cate?.description}
                </p>
            </div>
        )

}