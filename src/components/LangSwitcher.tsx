'use client'
import { startTransition } from 'react';
import { setUserLocale } from '@/services/locale';
import { Locale } from '@/i18n/config';

const LangSwitcher =  ({
    children,
  }: {
    children: React.ReactNode
  }) => {
 
 const handlechange=(event:any)=>{
  const locale = event.target.value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });

 }

  return (
        <select
                    onChange={handlechange}

                    name="localswitcher"
                    id="localswitcher"
                    className="appearance-none  bg-transparent min-w-[70px] tracking-wider cursor-pointer focus-visible:outline-none"
                    >
                    {children}
        </select>
  );
};

export default LangSwitcher;
