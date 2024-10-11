'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [header, setHeader] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const scrollHeader = () => {
            if (window.scrollY >= 20) {
                setHeader(true);
            } else {
                setHeader(false);
            }
        };

        window.addEventListener('scroll', scrollHeader);

        return () => {
            window.removeEventListener('scroll', scrollHeader);
        };
    }, []);

    return (
        <nav className={`${!header ? '' : 'op'} bg-white  w-full z-50 sticky top-0 start-0 border-b border-gray-200`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image
                        className="relative "
                        src="/images/mediinnov_logo_R.png"
                        alt="centrevictorhugoradiologie Logo"
                        width={125}
                        height={98}
                        priority
                    />
                </a>

                <div className={`items-center justify-between ${menuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="/" className={`block ${pathname === '/' ? '!text-[#E00729]' : ''} py-4 px-3 text-sm font-semibold text-[#303030]  rounded md:bg-transparent md:p-0 md:dark:text-blue-500`}>HOME</Link>
                        </li>
                        <li className="group relative">
                            <Link href="#" className={`block ${pathname === '/departments' ? '!text-[#E00729]' : ''} py-4 flex px-3 text-sm font-semibold text-[#303030] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E00729] md:p-0 md:dark:hover:text-blue-500 dark:text-[#303030] dark:hover:bg-gray-700 dark:hover:text-[#303030] md:dark:hover:bg-transparent dark:border-gray-700`}>PRODUCTS

                                <svg className="w-3 h-3 text-gray-800 dark:text-white ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                                </svg>

                            </Link>

                            <ul className="hidden group-hover:block absolute left-0 top-full w-56 bg-white text-sm font-semibold text-gray-700 dark:text-gray-400 dark:bg-gray-800">
                                <li id="medical-li" className="relative">
                                    <Link href={'/medical-imaging'}  className="block px-4 py-4 hover:bg-[#E00729]/50 dark:hover:bg-gray-600 dark:hover:text-[#303030]">Medical Imaging</Link>
                                    <ul id="medical-list" className="hidden  absolute left-full top-2 w-56 bg-white text-sm font-semibold text-gray-700 dark:text-gray-400 dark:bg-gray-800">
                                        <li>
                                            <Link href={'/medical-imaging/mri'} className="block px-4 py-4 hover:bg-[#E00729]/50 dark:hover:bg-gray-600 dark:hover:text-[#303030]">MRI</Link>
                                        </li>
                                        <li>
                                            <Link href={'/medical-imaging/ct'} className="block px-4 py-4 hover:bg-[#E00729]/50 dark:hover:bg-gray-600 dark:hover:text-[#303030]">CT</Link>
                                        </li>
                                        <li>
                                            <Link href={'/medical-imaging/fluoroscopy'} className="block px-4 py-4 hover:bg-[#E00729]/50 dark:hover:bg-gray-600 dark:hover:text-[#303030]">Fluoroscopy</Link>
                                        </li>
                                        <li>
                                            <Link href={'/medical-imaging/radiography'} className="block px-4 py-4 hover:bg-[#E00729]/50 dark:hover:bg-gray-600 dark:hover:text-[#303030]">Radiography</Link>
                                        </li>
                                        <li>
                                            <Link href={'/medical-imaging/mammography'} className="block px-4 py-4 hover:bg-[#E00729]/50 dark:hover:bg-gray-600 dark:hover:text-[#303030]">Mammography</Link>
                                        </li>
                                        <li>
                                            <Link href={'/medical-imaging/mobile-c-arm'} className="block px-4 py-4 hover:bg-[#E00729]/50 dark:hover:bg-gray-600 dark:hover:text-[#303030]">Mobile C-arm</Link>
                                        </li>
                                        <li>
                                            <Link href={'/medical-imaging/ultrasound'} className="block px-4 py-4 hover:bg-[#E00729]/50 dark:hover:bg-gray-600 dark:hover:text-[#303030]">Ultrasound</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li id="solutions-li">
                                    <Link href={'/or-solutions'} className="block px-4 py-4 hover:bg-[#E00729]/50 dark:hover:bg-gray-600 dark:hover:text-[#303030]">OR Solutions</Link>
                                    <ul id="solutions-list" className="hidden  absolute left-full top-11 w-56 bg-white text-sm font-semibold text-gray-700 dark:text-gray-400 dark:bg-gray-800">
                                        <li>
                                            <Link href={'/or-solutions/surgical-light'} className="block px-4 py-4 hover:bg-[#E00729]/50 dark:hover:bg-gray-600 dark:hover:text-[#303030]">Surgical Light</Link>
                                        </li>
                                        <li>
                                            <Link href={'/or-solutions/surgical-table'} className="block px-4 py-4 hover:bg-[#E00729]/50 dark:hover:bg-gray-600 dark:hover:text-[#303030]">Surgical Table</Link>
                                        </li>
                                        <li>
                                            <Link href={'/or-solutions/anesthesia-unit'} className="block px-4 py-4 hover:bg-[#E00729]/50 dark:hover:bg-gray-600 dark:hover:text-[#303030]">Anesthesia Unit</Link>
                                        </li>
                                        <li>
                                            <Link href={'/or-solutions/esu'} className="block px-4 py-4 hover:bg-[#E00729]/50 dark:hover:bg-gray-600 dark:hover:text-[#303030]">ESU</Link>
                                        </li>
                                    </ul>
                              
                              
                                </li>
                                <li id="patient-li">
                                    <Link href={'/patient-care'} className="block px-4 py-4 hover:bg-[#E00729]/50 dark:hover:bg-gray-600 dark:hover:text-[#303030]">Patient Care</Link>
                                   
                                    <ul id="patient-list" className="hidden  absolute left-full top-20 w-56 bg-white text-sm font-semibold text-gray-700 dark:text-gray-400 dark:bg-gray-800">
                                        <li>
                                            <Link href={'/patient-care/patient-monitor'} className="block px-4 py-4 hover:bg-[#E00729]/50 dark:hover:bg-gray-600 dark:hover:text-[#303030]">Patient Monitor</Link>
                                        </li>
                                        <li>
                                            <Link href={'/patient-care/medical-pump'} className="block px-4 py-4 hover:bg-[#E00729]/50 dark:hover:bg-gray-600 dark:hover:text-[#303030]">Medical Pump</Link>
                                        </li>
                                        <li>
                                            <Link href={'/patient-care/ventilator'} className="block px-4 py-4 hover:bg-[#E00729]/50 dark:hover:bg-gray-600 dark:hover:text-[#303030]">Ventilator</Link>
                                        </li>
                                    </ul>
                               
                               
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/about" className={`block ${pathname === '/about' ? '!text-[#E00729]' : ''} py-4 px-3 text-sm font-semibold text-[#303030] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E00729] md:p-0 md:dark:hover:text-blue-500 dark:text-[#303030] dark:hover:bg-gray-700 dark:hover:text-[#303030] md:dark:hover:bg-transparent dark:border-gray-700`}>ABOUT US</Link>
                        </li>
                        <li>
                            <Link href="/contact" className={`block ${pathname === '/contact' ? '!text-[#E00729]' : ''} py-4 px-3 text-sm font-semibold text-[#303030] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E00729] md:p-0 md:dark:hover:text-blue-500 dark:text-[#303030] dark:hover:bg-gray-700 dark:hover:text-[#303030] md:dark:hover:bg-transparent dark:border-gray-700`}>CONTACT</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex md:order-2 mx-auto lg:mx-10 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <Link href={'/#start'} className="text-white hidden sm:block text-[17px] bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg  px-8 py-3 text-center">Get started</Link>
                </div>
                <button onClick={() => setMenuOpen(!menuOpen)} type="button" className="absolute top-5 right-5 inline-flex items-center p-2 w-10 h-10 justify-center text-sm font-semibold text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}