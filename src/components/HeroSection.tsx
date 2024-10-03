import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section>
      <div className="flex items-stretch lg:flex-nowrap flex-wrap bg-[#bb1f22]">
        {/* Image Section */}
        <div className="lg:w-2/5 w-full bg-white">
          <Image
            alt="marcom-1-5T-MRI"
            title="marcom-1-5T-MRI"
            src="/images/marcom-1-5T-MRI.webp"
            width={825}
            height={640}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover " 
            style={{ color: "transparent" }}
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-3/5 w-full 2xl:p-20  lg:p-14 sm:p-8 px-6 py-8 self-center max-w-[850px]">
          <h1 className="text-white font-semibold text-xl md:text-2xl lg:text-5xl lg:mb-6 mb-4">
            <span className="block text-[#D2EDF6] py-3">Hope in Health:</span>
            <span className='py-3 font-light'>Join Us in Raising Funds for Medical Breakthroughs</span>
          </h1>
          <p className="text-white font-light  2xl:text-xl lg:text-lg text-md lg:mb-8 mb-4">
            Lorem donec massa sapien faucibus et. Eget est lorem ipsum dolor sit. Sed cras ornare arcu dui vivamus arcu. Pretium lectus quam id leo in vitae turpis mass.
          </p>
          <Link className="focus:outline-none  text-[17px] text-[#bb1f22] bg-[#D2EDF6]  focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-8 py-3.5 me-2 mb-2  shadow-lg hover:!bg-[#EEDF7A]" href="/">
            Start A Free Fundraiser
          </Link>
          <div className="lg:mt-12 mt-8"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
