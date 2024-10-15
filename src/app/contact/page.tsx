import ContactComponent from '@/components/contactComponent'
import { useTranslations } from 'next-intl'

export default function Page() {
    const t=useTranslations('Contact')
  return (
        <div className="bg-cover py-14 bg-fixed ">
              
              <div className="flex justify-center w-full flex-wrap mx-auto">

                    <div className="h-full">
                        <div className='items h-full'>
                            <h1 className='text-xl text-center font-bold '>{t('addressheading')}</h1>
                            <p className='text-base text-center px-5 py-2 '>
                            {t('line1')} <br /> {t('line2')} <br /> {t('line3')} <br />
                            {t('city')}
                            </p>
                        </div>

                        <div className='items'>
                            <h1 className='text-xl text-center font-bold '>{t('phoneNumberheading')}</h1>
                            <p className='text-base text-center px-5 py-2 '>
                            {t('number')}
                            </p>
                        </div>

                        <div className='items'>
                            <h1 className='text-xl text-center font-bold '> {t('openingHours')}</h1>
                            <p className='text-base text-center px-5 py-2 '>
                            {t('days')} <br />
                            {t('time')}
                            </p>
                        </div>

                    </div>
                  <ContactComponent/>

              </div>


        </div>
  )
}
