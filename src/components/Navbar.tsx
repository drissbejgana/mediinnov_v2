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
        <div className={`items-center justify-between ${menuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
        <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
                <Link href="/" className={`block ${pathname === '/' ? '!text-[#E00729]' : ''} py-4 px-3 text-xs text-[#303030]  rounded md:bg-transparent md:p-0 `}>HOME</Link>
            </li>
            <li className="group relative">
                <Link href="#" className={`block ${pathname === '/departments' ? '!text-[#E00729]' : ''} py-4 flex px-3 text-xs text-[#303030] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E00729] md:p-0 `}>PRODUCTS

                    <svg className="w-3 h-3 text-gray-800  ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                    </svg>

                </Link>

                <ul className="hidden group-hover:block absolute left-0 top-full w-56 bg-white text-xs text-gray-700 ">
                    <li id="medical-li" className="relative">
                        <Link href={'/medical-imaging'}  className="block px-4 py-4 hover:bg-[#E00729]/50 ">Medical Imaging</Link>
                        <ul id="medical-list" className="hidden  absolute left-full top-2 w-56 bg-white text-xs text-gray-700 ">
                            <li>
                                <Link href={'/medical-imaging/mri'} className="block px-4 py-4 hover:bg-[#E00729]/50 ">MRI</Link>
                            </li>
                            <li>
                                <Link href={'/medical-imaging/ct'} className="block px-4 py-4 hover:bg-[#E00729]/50 ">CT</Link>
                            </li>
                            <li>
                                <Link href={'/medical-imaging/fluoroscopy'} className="block px-4 py-4 hover:bg-[#E00729]/50 ">Fluoroscopy</Link>
                            </li>
                            <li>
                                <Link href={'/medical-imaging/radiography'} className="block px-4 py-4 hover:bg-[#E00729]/50 ">Radiography</Link>
                            </li>
                            <li>
                                <Link href={'/medical-imaging/mammography'} className="block px-4 py-4 hover:bg-[#E00729]/50 ">Mammography</Link>
                            </li>
                            <li>
                                <Link href={'/medical-imaging/mobile-c-arm'} className="block px-4 py-4 hover:bg-[#E00729]/50 ">Mobile C-arm</Link>
                            </li>
                            <li>
                                <Link href={'/medical-imaging/ultrasound'} className="block px-4 py-4 hover:bg-[#E00729]/50 ">Ultrasound</Link>
                            </li>
                        </ul>
                    </li>
                    <li id="solutions-li">
                        <Link href={'/or-solutions'} className="block px-4 py-4 hover:bg-[#E00729]/50 ">OR Solutions</Link>
                        <ul id="solutions-list" className="hidden  absolute left-full top-11 w-56 bg-white text-xs text-gray-700 ">
                            <li>
                                <Link href={'/or-solutions/surgical-light'} className="block px-4 py-4 hover:bg-[#E00729]/50 ">Surgical Light</Link>
                            </li>
                            <li>
                                <Link href={'/or-solutions/surgical-table'} className="block px-4 py-4 hover:bg-[#E00729]/50 ">Surgical Table</Link>
                            </li>
                            <li>
                                <Link href={'/or-solutions/anesthesia-unit'} className="block px-4 py-4 hover:bg-[#E00729]/50 ">Anesthesia Unit</Link>
                            </li>
                            <li>
                                <Link href={'/or-solutions/esu'} className="block px-4 py-4 hover:bg-[#E00729]/50">ESU</Link>
                            </li>
                        </ul>
                  
                  
                    </li>
                    <li id="patient-li">
                        <Link href={'/patient-care'} className="block px-4 py-4 hover:bg-[#E00729]/50 ">Patient Care</Link>
                       
                        <ul id="patient-list" className="hidden  absolute left-full top-20 w-56 bg-white text-xs text-gray-700 ">
                            <li>
                                <Link href={'/patient-care/patient-monitor'} className="block px-4 py-4 hover:bg-[#E00729]/50 ">Patient Monitor</Link>
                            </li>
                            <li>
                                <Link href={'/patient-care/medical-pump'} className="block px-4 py-4 hover:bg-[#E00729]/50 ">Medical Pump</Link>
                            </li>
                            <li>
                                <Link href={'/patient-care/ventilator'} className="block px-4 py-4 hover:bg-[#E00729]/50 ">Ventilator</Link>
                            </li>
                        </ul>
                   
                   
                    </li>
                </ul>
            </li>
            <li>
                <Link href="/about" className={`block ${pathname === '/about' ? '!text-[#E00729]' : ''} py-4 px-3 text-xs text-[#303030] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E00729] md:p-0 `}>ABOUT US</Link>
            </li>
            <li>
                <Link href="/contact" className={`block ${pathname === '/articles' ? '!text-[#E00729]' : ''} py-4 px-3 text-xs text-[#303030] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E00729] md:p-0 `}>CONTACT</Link>
            </li>
        </ul>
    </div>
    );
}