import { useTranslations } from 'next-intl';
import Image from 'next/image';

const FeaturesSection = () => {
  const t=useTranslations('SolutionsSection')
  return (
    <section className="bg-primary-400 mx-5 xl:py-12 py-8">
      <div className="container mx-auto">
      <h2 className="text-center  text-[#343131] text-4xl font-bold text-gary-800 xl:mb-8 mb-4">  {t('title')}</h2>
      
        <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-8">

          <div className="bg-white shadow-lg border border-gray-200 rounded-lg shadow-input xl:p-8 p-6">
            <span className="md:w-16 md:h-16 w-14 h-14 border border-red-900 group-hover:bg-[#303030]  rounded-full bg-primary-400 flex items-center justify-center">
                <svg className="my-5 fill-red-800  transition-all duration-500 group-hover:!fill-white" version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="32.000000pt" height="32.000000pt" viewBox="0 0 512.000000 512.000000"
                            preserveAspectRatio="xMidYMid meet">

                              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                              stroke="none">
                              <path d="M2375 5113 c-820 -71 -1535 -558 -1894 -1288 -367 -746 -310 -1622
                              151 -2311 72 -108 91 -123 144 -110 31 8 56 60 44 91 -5 11 -38 64 -74 118
                              -361 544 -452 1244 -245 1872 48 144 166 388 244 505 178 266 434 512 695 668
                              638 381 1421 414 2079 86 240 -119 415 -248 602 -441 172 -179 291 -350 398
                              -573 324 -679 268 -1494 -145 -2117 -36 -54 -69 -107 -74 -118 -12 -31 13 -83
                              44 -91 53 -13 72 2 150 119 558 839 504 1950 -131 2734 -299 369 -697 635
                              -1152 769 -254 75 -582 109 -836 87z"/>
                              <path d="M2260 4631 c-110 -35 -173 -120 -172 -232 0 -37 7 -70 22 -98 12 -24
                              20 -44 18 -45 -2 -1 -30 -10 -62 -21 -83 -27 -263 -115 -338 -166 -335 -226
                              -572 -571 -653 -952 -54 -258 -38 -539 46 -795 30 -91 89 -120 138 -68 27 29
                              26 40 -18 202 -198 728 247 1482 985 1670 654 166 1339 -178 1596 -802 124
                              -301 138 -648 38 -938 -26 -77 -25 -107 3 -134 51 -48 106 -20 136 70 124 377
                              100 769 -69 1125 -149 315 -387 556 -700 712 -52 27 -126 59 -165 72 -38 13
                              -71 25 -73 25 -2 1 6 21 18 45 57 110 10 251 -105 312 -38 21 -54 22 -330 24
                              -159 1 -301 -2 -315 -6z m595 -166 c38 -37 37 -88 -1 -122 -25 -23 -29 -23
                              -294 -23 -265 0 -269 0 -294 23 -38 34 -39 85 -1 122 l24 25 271 0 271 0 24
                              -25z"/>
                              <path d="M2177 3026 c-102 -28 -164 -111 -174 -233 l-6 -71 -88 -7 c-106 -8
                              -190 -44 -241 -105 -37 -43 -808 -1439 -840 -1521 -17 -44 -22 -82 -26 -213
                              -6 -212 3 -252 72 -321 69 -68 96 -75 310 -75 l176 0 0 -173 c0 -159 2 -176
                              22 -217 13 -24 36 -53 51 -64 28 -21 34 -21 1127 -21 1093 0 1099 0 1127 21
                              15 11 38 40 51 64 20 41 22 58 22 217 l0 173 178 0 c217 0 251 9 316 81 61 67
                              70 113 64 315 -4 131 -9 169 -26 213 -32 82 -803 1478 -840 1521 -51 61 -135
                              97 -241 105 l-88 7 -6 71 c-11 127 -79 213 -187 236 -75 16 -691 13 -753 -3z
                              m737 -150 c37 -16 56 -55 56 -117 l0 -39 -410 0 -410 0 0 39 c0 61 19 101 54
                              117 46 20 662 20 710 0z m387 -334 c21 -12 43 -32 51 -45 21 -32 746 -1351
                              754 -1371 6 -15 -90 -16 -1261 -16 -873 0 -1272 -3 -1286 -11 -48 -25 -44
                              -105 7 -128 18 -8 377 -11 1314 -11 l1290 0 0 -136 0 -136 -29 -29 -29 -29
                              -1552 0 -1552 0 -29 29 -29 29 0 136 0 136 175 0 c173 0 176 0 200 25 31 30
                              32 71 3 102 -21 22 -28 23 -171 23 -134 0 -149 2 -143 16 8 20 732 1339 753
                              1371 20 30 61 55 103 64 19 4 341 6 715 6 l680 -2 36 -23z m309 -2227 l0 -165
                              -1050 0 -1050 0 0 165 0 165 1050 0 1050 0 0 -165z"/>
                              <path d="M614 2870 c-26 -10 -54 -48 -54 -71 0 -9 9 -28 21 -43 20 -25 23 -26
                              135 -26 101 0 116 2 134 20 38 38 22 100 -31 119 -37 13 -174 14 -205 1z"/>
                              <path d="M4294 2866 c-48 -22 -60 -80 -24 -116 18 -18 33 -20 134 -20 112 0
                              115 1 135 26 27 35 26 57 -3 91 -23 27 -29 28 -118 31 -63 1 -103 -2 -124 -12z"/>
                              </g>
                </svg> 
            </span>
            <p className="my-4 2xl:text-xl text-lg font-semibold leading-tight text-gray-800">
             {t('MedicalImaging')}
            </p>
            <p className="text-md">
            {t('MedicalImagingdescription')}
            </p>
          </div>

          <div className="bg-white shadow-lg border border-gray-200 rounded-lg shadow-input xl:p-8 p-6">
            <span className="md:w-16 md:h-16 w-14 h-14 border border-red-900 rounded-full bg-primary-400 flex items-center justify-center">

            <svg className="w-10 h-10 my-5 transition-all fill-red-800 duration-500 group-hover:text-white"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M7.05 4.05A7 7 0 0 1 19 9c0 2.407-1.197 3.874-2.186 5.084l-.04.048C15.77 15.362 15 16.34 15 18a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1c0-1.612-.77-2.613-1.78-3.875l-.045-.056C6.193 12.842 5 11.352 5 9a7 7 0 0 1 2.05-4.95ZM9 21a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm1.586-13.414A2 2 0 0 1 12 7a1 1 0 1 0 0-2 4 4 0 0 0-4 4 1 1 0 0 0 2 0 2 2 0 0 1 .586-1.414Z" clipRule="evenodd"/>
            </svg>


            </span>
            <p className="my-4 2xl:text-xl text-lg font-semibold leading-tight text-gray-800">
            {t('OrSolutions')}
            </p>
            <p className="text-md">
            {t('OrSolutionsdescription')}
            </p>
          </div>

      
          <div className="bg-white shadow-lg border border-gray-200 rounded-lg shadow-input xl:p-8 p-6">
            <span className="md:w-16 md:h-16 w-14 h-14 border border-red-900 rounded-full bg-primary-400 flex items-center justify-center">
              <svg className="my-5 w-10 h-10 fill-red-800 transition-all duration-500 group-hover:!fill-white " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M224 24V80H168c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h56v56c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V176h56c13.3 0 24-10.7 24-24V104c0-13.3-10.7-24-24-24H320V24c0-13.3-10.7-24-24-24H248c-13.3 0-24 10.7-24 24zM559.7 392.2c17.8-13.1 21.6-38.1 8.5-55.9s-38.1-21.6-55.9-8.5L392.6 416H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h16 64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288 272 193.7c-29.1 0-57.3 9.9-80 28L68.8 384H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H192 352.5c29 0 57.3-9.3 80.7-26.5l126.6-93.3zm-367-8.2l.9 0 0 0c-.3 0-.6 0-.9 0z"/></svg>
            </span>
            <p className="my-4 2xl:text-xl text-lg font-semibold leading-tight text-gray-800">
            {t('PatientCare')}
            </p>

            <p className="text-md">
            {t('PatientCaredescription')}
            </p>
          </div>

   
          
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
