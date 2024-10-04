export default function ExtraHeader() {

    return (
     <div className="max-w-screen-xl relative bg-white border  rounded-md shadow-lg px-5 py-5  mx-auto md:mt-[-60px] z-10" >
     <div className="my-5 mx-auto" >
            <div
              className="flex  items-center xl:gap-6 gap-3 xl:flex-nowrap flex-wrap lg:w-auto w-full"
              id="funding_form_one_time_funding">

                <h2 className="text-2xl w-9/12 font-semibold">
                At <span className="text-[#bb1f22] uppercase">Mediinnov</span>, we believe everyone deserves access to quality healthcare, and we’re here to make it happen.
                </h2>

              <button type="submit" className="focus:outline-none text-[17px] text-[#bb1f22] hover:text-white bg-[#EEDF7A]  focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-8 py-3.5 me-2 mb-2  shadow-lg hover:!bg-gray-800">
                Contact us now!
              </button>
            </div>


            <p className="text-sm text-gray-400 italic mt-4">
              *Together, we make it possible
            </p>
    </div>   
     </div>
    );
}