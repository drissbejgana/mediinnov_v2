import ContactComponent from '@/components/contactComponent'

export default function Page() {
  return (
        <div className="bg-cover py-14 bg-fixed ">
              
              <div className="flex justify-center w-full flex-wrap mx-auto">

                    <div className="h-full">
                        <div className='items h-full'>
                            <h1 className='text-xl text-center font-bold '>Address line</h1>
                            <p className='text-base text-center px-5 py-2 '>
                                131 BOULEVARD ANFA <br /> RESIDENCE AZUR <br /> BUREAU N 11 B <br />
                                20000,Casablanca,Maroc
                            </p>
                        </div>

                        <div className='items'>
                            <h1 className='text-xl text-center font-bold '>Phone Number</h1>
                            <p className='text-base text-center px-5 py-2 '>
                             (+212) 673 142 929
                            </p>
                        </div>

                        <div className='items'>
                            <h1 className='text-xl text-center font-bold '> Opening Hours </h1>
                            <p className='text-base text-center px-5 py-2 '>
                            Moday - Friday <br />
                            09:00 AM - 05:00 PM
                            </p>
                        </div>

                    </div>
                  <ContactComponent/>

              </div>


        </div>
  )
}
