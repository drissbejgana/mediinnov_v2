'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


const Categories = () => {

     const [category,setCategory]=useState('Medical Imaging')
     const [products,setproducts]=useState([])

    // const products = [
    //   {
    //     id: 1,
    //     image: "/images/products/CT_Cytom_16-scaled.webp",
    //     title: "Help save Aniket's Life! He is suffering from Duodenal atresia.",
    //     progress: 70,
    //     contributors: 116,
    //     organizer: "STERNMED",
    //     category:""
    //   },
    //   {
    //     id: 2,
    //     image: "/images/products/avacs-50.webp",
    //     title: "Urgent Help Needed For riza's Cervical Fracture.",
    //     progress: 60,
    //     contributors: 225,
    //     organizer: "STERNMED",
    //     category:""

    //   },
    //   {
    //     id: 3,
    //     image: "/images/products/ecut-400S-Plus.webp",
    //     title: "Support Anand To Recover From Accidental Injuries",
    //     progress: 90,
    //     contributors: 99,
    //     organizer: "STERNMED",
    //     category:""

    //   },
    //   {
    //     id: 4,
    //     image: "/images/products/FLUOROSCOPY-RF1000.webp",
    //     title: "Your Support Can Help Baby To Undergo Preterm Baby Care!",
    //     raised: "₹12,00,000",
    //     progress: 54,
    //     contributors: 168,
    //     organizer: "STERNMED",
    //     category:""

    //   },
    // ];


    useEffect(() => {
      async function getProducts() {
          const response = await fetch('/api/products');
          const data = await response.json();
          const filteredProducts = data.filter((item: any) => item.name === category)[0]?.categories || [];
          setproducts(filteredProducts)
      }

      getProducts();
  }, [category]);

  
    return (
      <section className="max-w-screen-xl mx-auto 2xl:my-20 lg:my-14 mb-12">
        <div className="container">
          <p className="text-center text-[#343131] text-2xl font-bold text-gary-800 xl:mb-8 mb-4">
            Just choose
          </p>
            <div>
                <ul className="flex justify-center w-full my-5 cursor-pointer">
                  <li onClick={()=>setCategory('Medical Imaging')} className={`text-center ${category=='Medical Imaging'?'bg-red-700 text-white':''} px-4 py-3 border mx-1 bg-[#F2F2F2] rounded`}>Medical Imaging</li>
                  <li onClick={()=>setCategory('OR Solutions')} className={`text-center ${category=='OR Solutions'?'bg-red-700 text-white':''} px-4 py-3 border mx-1 bg-[#F2F2F2] rounded`}>OR Solutions</li>
                  <li onClick={()=>setCategory('Patient Care')} className={`text-center ${category=='Patient Care'?'bg-red-700 text-white':''} px-4 py-3 border mx-1 bg-[#F2F2F2] rounded`}>Patient Care</li>
                </ul>
            </div>

          <div className="grid xl:grid-cols-4 lg:grid-cols-3 min-[575px]:grid-cols-2 grid-cols-1 gap-6 mx-12 md:mx-auto">
           {
            products?.map((category:{id:string,name:string,image:string,count:number,link:string}) => (
              <div
                key={category.id}
                className="bg-white border rounded-md shadow-lg product-item"
              >
                <Link href={category.link}>
                <Image
                    alt={category.name}
                    title={category.name}
                    loading="lazy"
                    className="w-full h-[190px] object-contain hover:scale-1 hover:scale-150 ease-in duration-150"
                    src={category.image}
                    width={320}
                    height={190}
                  />
                </Link>
                 <div className="p-4">
                    <Link className="title font-bold text-[#343131]" href={category.link}>
                        {category.name}
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
                     <div className="bg-[#EEDF7A] h-1.5 rounded-full dark:bg-red-500" style={{width: `80%`}}></div>
                </div>


                  <div className="flex items-center w-full justify-between">
                    <span className="flex">
                    <svg className="w-6 h-6 me-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M3 6a3 3 0 1 1 4 2.83v6.34a3.001 3.001 0 1 1-2 0V8.83A3.001 3.001 0 0 1 3 6Zm11.207-2.707a1 1 0 0 1 0 1.414L13.914 5H15a4 4 0 0 1 4 4v6.17a3.001 3.001 0 1 1-2 0V9a2 2 0 0 0-2-2h-1.086l.293.293a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.414 0Z" clipRule="evenodd"/>
                    </svg>

                    {category.count} Equipments
                    </span>
                    <button className="share">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M14.516 6.743c-.41-.368-.443-1-.077-1.41a.99.99 0 0 1 1.405-.078l5.487 4.948.007.006A2.047 2.047 0 0 1 22 11.721a2.06 2.06 0 0 1-.662 1.51l-5.584 5.09a.99.99 0 0 1-1.404-.07 1.003 1.003 0 0 1 .068-1.412l5.578-5.082a.05.05 0 0 0 .015-.036.051.051 0 0 0-.015-.036l-5.48-4.942Zm-6.543 9.199v-.42a4.168 4.168 0 0 0-2.715 2.415c-.154.382-.44.695-.806.88a1.683 1.683 0 0 1-2.167-.571 1.705 1.705 0 0 1-.279-1.092V15.88c0-3.77 2.526-7.039 5.967-7.573V7.57a1.957 1.957 0 0 1 .993-1.838 1.931 1.931 0 0 1 2.153.184l5.08 4.248a.646.646 0 0 1 .012.011l.011.01a2.098 2.098 0 0 1 .703 1.57 2.108 2.108 0 0 1-.726 1.59l-5.08 4.25a1.933 1.933 0 0 1-2.929-.614 1.957 1.957 0 0 1-.217-1.04Z" clipRule="evenodd"/>
                    </svg>
                    </button>
                  </div>

     
                   <Link href={category.link} className="text-white text-sm mt-5 flex items-center justify-center w-full text-[17px] bg-red-700 hover:bg-red-800  font-medium rounded-lg  px-8 py-3 text-center  ">
                     Explore
                    <svg
                      width="11"
                      height="12"
                      className="mx-3"
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



          <div className="xl:mt-10 mt-5 text-center">

            <Link className="focus:outline-none text-[17px] text-[#bb1f22] hover:text-white bg-[#EEDF7A]  focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-8 py-3.5 me-2 mb-2  shadow-lg hover:!bg-gray-800" href="#products">
              Browse all Equipments
            </Link>
          </div>
        </div>
      </section>
    );
  };
  
  export default Categories;
  