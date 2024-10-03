import Image from "next/image";
import Link from "next/link";

// components/UrgentNeedsSection.js
const UrgentNeedsSection = () => {
    const fundraisers = [
      {
        id: 1,
        image: "/images/products/CT_Cytom_16-scaled.webp",
        title: "Help save Aniket's Life! He is suffering from Duodenal atresia.",
        raised: "₹25,24,000",
        goal: "35,00,000",
        progress: 70,
        contributors: 116,
        organizer: "STERNMED",
      },
      {
        id: 2,
        image: "/images/products/avacs-50.webp",
        title: "Urgent Help Needed For riza's Cervical Fracture.",
        raised: "₹36,00,000",
        goal: "45,00,000",
        progress: 60,
        contributors: 225,
        organizer: "STERNMED",
      },
      {
        id: 3,
        image: "/images/products/ecut-400S-Plus.webp",
        title: "Support Anand To Recover From Accidental Injuries",
        raised: "₹24,00,000",
        goal: "35,00,000",
        progress: 90,
        contributors: 99,
        organizer: "STERNMED",
      },
      {
        id: 4,
        image: "/images/products/FLUOROSCOPY-RF1000.webp",
        title: "Your Support Can Help Baby To Undergo Preterm Baby Care!",
        raised: "₹12,00,000",
        goal: "20,00,000",
        progress: 54,
        contributors: 168,
        organizer: "STERNMED",
      },
    ];
  
    return (
      <section className="max-w-screen-xl mx-auto 2xl:my-20 lg:my-14 my-12">
        <div className="container">
          <h2 className="text-center text-3xl font-bold text-gary-800 xl:mb-8 mb-4">
            Urgent needs: Touch Lives, Save Lives!
          </h2>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 min-[575px]:grid-cols-2 grid-cols-1 gap-6 mx-12 md:mx-auto">
            {
            fundraisers.map((fundraiser) => (
              <div
                key={fundraiser.id}
                className="bg-white border rounded-md shadow-lg fundraiser-item"
              >
                <Link href="/contribute">
                <Image
                    alt="Fundraiser item"
                    title="Fundraiser item"
                    loading="lazy"
                    className="w-full h-[190px] object-contain"
                    src={fundraiser.image}
                    width={320}
                    height={190}
                  />
                </Link>
                 <div className="p-4">
                    <Link className="title text-red-900" href="/contribute">
                        {fundraiser.title}
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
                     {fundraiser.organizer}
                    </span>
                  </div>
                  <p className="my-1 ">
                    <span className="font-semibold ">{fundraiser.raised}</span> 
                    <span className="text-sm mx-1">
                    raised out of{" "}
                    {fundraiser.goal}
                    </span>
                  </p>

              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                     <div className="bg-[#EEDF7A] h-1.5 rounded-full dark:bg-red-500" style={{width: `${fundraiser.progress}%`}}></div>
                </div>


                  <div className="flex items-center w-full justify-between">
                    <span className="flex">
                        <svg className="w-6 h-6 text-red-600 dark:text-white me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"/>
                        </svg>

                      {fundraiser.contributors} Contributors
                    </span>
                    <button className="share">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M14.516 6.743c-.41-.368-.443-1-.077-1.41a.99.99 0 0 1 1.405-.078l5.487 4.948.007.006A2.047 2.047 0 0 1 22 11.721a2.06 2.06 0 0 1-.662 1.51l-5.584 5.09a.99.99 0 0 1-1.404-.07 1.003 1.003 0 0 1 .068-1.412l5.578-5.082a.05.05 0 0 0 .015-.036.051.051 0 0 0-.015-.036l-5.48-4.942Zm-6.543 9.199v-.42a4.168 4.168 0 0 0-2.715 2.415c-.154.382-.44.695-.806.88a1.683 1.683 0 0 1-2.167-.571 1.705 1.705 0 0 1-.279-1.092V15.88c0-3.77 2.526-7.039 5.967-7.573V7.57a1.957 1.957 0 0 1 .993-1.838 1.931 1.931 0 0 1 2.153.184l5.08 4.248a.646.646 0 0 1 .012.011l.011.01a2.098 2.098 0 0 1 .703 1.57 2.108 2.108 0 0 1-.726 1.59l-5.08 4.25a1.933 1.933 0 0 1-2.929-.614 1.957 1.957 0 0 1-.217-1.04Z" clip-rule="evenodd"/>
                    </svg>
                    </button>
                  </div>

     
                   <Link href={'/'} className="text-white  mt-5 flex items-center justify-center w-full text-[17px] bg-red-700 hover:bg-red-800  font-medium rounded-lg  px-8 py-3 text-center  ">
                    Contribute
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
          <div className="xl:mt-10 mt-5 text-center">
            <Link className="btn btn-secondary" href="/browse-fundraisers">
              Browse all fundraisers
            </Link>
          </div>
        </div>
      </section>
    );
  };
  
  export default UrgentNeedsSection;
  