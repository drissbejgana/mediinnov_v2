import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Why from '@/components/Why'
import { useTranslations } from 'next-intl'

export default function Page() {
  const t=useTranslations('About')
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 lg:gap-8 my-12 place-items-center md:grid-cols-2 lg:mx-20 xl:mx-52">
        <div className="relative grid grid-cols-1 gap-4 pt-14 w-full max-w-xs sm:max-w-md lg:grid-cols-2 lg:max-w-full bg-cover sm:w-[650px] bg-cover sm:h-[650px]">

          <Image
            className="rounded-md"
            width={350}
            height={430}
            src={'/images/about-bg-04.jpg'}
            alt="about image"
          />
          <div className="hidden lg:grid gap-4">
            <Image
              className="rounded-md"
              width={350}
              height={430}
              src={'/images/about-bg-05.jpg'}
              alt="about image"
            />
            <Image
              className="rounded-md mt-3"
              width={350}
              height={430}
              src={'/images/about-bg-06.jpg'}
              alt="about image"
            />
          </div>
        </div>
        <div data-aos="fade-left" className="p-6 md:p-0">
          <h2 className="mt-10 text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left">{t('title')}</h2>
          <p className="mt-9 text-sm md:text-base  text-center md:text-left">
            {t('description')}
          </p>
          <ul className="mt-12 list-none space-y-3 text-sm md:text-base text-center md:text-left">
            <li className="flex items-center justify-center md:justify-start">
              <svg className="w-6 h-6 text-[#e71d36] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5" />
              </svg>
              {t('Radiologyroom')}
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <svg className="w-6 h-6 text-[#e71d36] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5" />
              </svg>
              {t('Womanimagery')}
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <svg className="w-6 h-6 text-[#e71d36] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5" />
              </svg>
              {t('Dentalimaging')}
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <svg className="w-6 h-6 text-[#e71d36] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5" />
              </svg>
                {t('Ultrasound')}
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <svg className="w-6 h-6 text-[#e71d36] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5" />
              </svg>
                {t('Officemanagement')}
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <svg className="w-6 h-6 text-[#e71d36] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5" />
              </svg>
              {t('Medicalfollow-upandinterpretation')}
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <svg className="w-6 h-6 text-[#e71d36] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5" />
              </svg>
              {t('Diffusion')}
            </li>
          </ul>
          <div className="mx-5 my-10 flex justify-center md:justify-start">
            <Link href={'/contact'} className="search-btn mx-4" >
              {t('contact')}
            </Link>
          </div>
        </div>
      </div>
      <Why/>


    </div>
  )
}
