import Image from "next/image";
import Link from "next/link";

// components/UrgentNeedsSection.js
const UrgentNeedsSection1 = () => {
    const fundraisers = [
      {
        id: 1,
        image: "/new-era-medical-imaging2.png",
        title: "Medical Imaging",
        raised: "₹25,24,000",
        goal: "35,00,000",
        progress: 70,
        contributors: 116,
        organizer: "STERNMED",
      },
      {
        id: 2,
        image: "/or-solutions.webp",
        title: "Or Solutions",
        raised: "₹36,00,000",
        goal: "45,00,000",
        progress: 60,
        contributors: 225,
        organizer: "STERNMED",
      },
      {
        id: 3,
        image: "/MMR0822-druck_Marco-Mehl-P.C-Pink.webp",
        title: "Patient Care",
        raised: "₹24,00,000",
        goal: "35,00,000",
        progress: 90,
        contributors: 99,
        organizer: "STERNMED",
      },
    
    ];
  
    return (
      <section className="max-w-screen-xl mx-auto 2xl:my-20 lg:my-14 my-12">
        <div className="container">
        <h3 className="left-line right-line w-full text-center"> OUR SOLUTIONS</h3>
        <h3 className="text-5xl titre w-full text-center  my-4"> Just choose</h3>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 min-[575px]:grid-cols-2 grid-cols-1 gap-6 mx-12 md:mx-auto">
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
                    className="w-full h-[320px] "
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
  
  export default UrgentNeedsSection1;
  