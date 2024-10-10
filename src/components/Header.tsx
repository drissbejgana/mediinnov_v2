import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
  
      <div className="top-bar  bg-gray-100 py-1">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between">
        
            <div className="flex items-center">
              <Link
                className="md:text-sm text-[13px] text-[#bb1f22] font-bold group tracking-wider"
                href="/contact"
              >
                <span className="w-6 h-6 rounded-full bg-primary-900 group-hover:bg-primary-800 transition-all align-middle inline-flex items-center justify-center">
                  <Image
                    alt="urgent-bell"
                    title="urgent-bell"
                    src="/mediinnov_logo_R.png"
                    width={14}
                    height={14}
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span className="underline group-hover:no-underline align-middle">
                 Contact Us
                </span>
              </Link>
              <span className="w-1 h-1 rounded-full bg-gray-700 mx-3 sm:inline-block hidden"></span>
               <Link
                className="text-sm font-medium underline text-gray-700 hover:text-primary-900 tracking-wider sm:inline-block "
                href="tel:+212 673-142929"
              >
                +212 673-142929
              </Link>
            </div>

            <form className="hidden sm:flex items-center ">   
            <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                    </svg>
                </div>
                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Search..." required />
            </div>
            <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-red-700 rounded-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </form>
            {/* <div>
              <ul className="flex items-center">
            
                <li className="text-gray-700 hover:text-primary-900 text-sm font-medium tracking-wider relative after:content-['|'] sm:after:inline-block after:hidden after:ml-1.5 after:mr-2.5 last:after:hidden">
                  <select
                    name="currency"
                    id="currency"
                    className="appearance-none bg-transparent min-w-[70px] tracking-wider cursor-pointer focus-visible:outline-none"
                  >
                    <option value="MAD">(DH) MAD</option>
                    <option value="USD">$ USD</option>
                    <option value="EURO">EURO</option>
                  </select>
                </li>

                <li className="sm:inline-block hidden text-gray-700 hover:text-primary-900 text-sm font-medium tracking-wider relative after:content-['|'] lg:after:inline-block after:hidden after:ml-1.5 after:mr-2.5 last:after:hidden">
                  <select
                    name="language"
                    id="language"
                    className="appearance-none bg-transparent min-w-[70px] tracking-wider cursor-pointer focus-visible:outline-none"
                  >
                    <option value="en">English</option>
                    <option value="Fr">Francais</option>

                  </select>
                </li>
              </ul>
               
            </div> */}
          </div>
        </div>
      </div>


      <Navbar/>

    
    </header>
  );
};

export default Header;
