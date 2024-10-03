import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
  
      <div className="top-bar  bg-gray-100 py-1">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between">
        
            <div className="flex items-center">
              <Link
                className="md:text-sm text-[13px] text-[#bb1f22] font-bold group tracking-wider"
                href="/contribute"
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
                  Help medinnov!!
                </span>
              </Link>
              <span className="w-1 h-1 rounded-full bg-gray-700 mx-3 sm:inline-block hidden"></span>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-primary-900 tracking-wider sm:inline-block hidden"
                href="tel:+212 673-142929"
              >
                +212 673-142929
              </Link>
            </div>

        
            <div>
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
            </div>
          </div>
        </div>
      </div>


      <nav className="bg-white  w-full z-20 top-0 start-0 border-b border-gray-200 ">
        
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

     <Link href="/" className=''>
              <Image
                alt="mediinnov-logo"
                title="mediinnov-logo"
                src="/mediinnov_logo_R.png"
                width={130}
                height={60}
                loading="lazy"
                decoding="async"
                className="lg:w-32 w-28"
              />
    </Link>

  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <Link href={'/'} className="text-white text-[17px] bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg  px-8 py-3 text-center">Start A Free Fundraiser</Link>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
      <li>
        <Link href="#" className="block py-2 px-3 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 " aria-current="page">Home</Link>
      </li>
      <li>
        <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0">About</Link>
      </li>
      <li>
        <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 ">Services</Link>
      </li>
      <li>
        <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 ">Contact</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>


    
    </header>
  );
};

export default Header;
