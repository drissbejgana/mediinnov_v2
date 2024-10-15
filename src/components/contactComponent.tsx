'use client'
import { displayToast } from '@/functions'
import { useTranslations } from 'next-intl'
import React, { ChangeEvent, useEffect, useState } from 'react'


export default function ContactComponent() {
    const t=useTranslations('Contact')
    const [nom,setNom]=useState('')
    const [email,setEmail]=useState('')
    const [num,setNum]=useState('')
    const [web,setWeb]=useState('')
    const [message,setMessage]=useState('')
    const [loading,setLoading]=useState(false)
    const [toast, setToast] = useState({
       status:"",
       message:""
     });

     useEffect(()=>{
       let timeoutId: NodeJS.Timeout;
       const clearToast = async () => {
         await new Promise<void>(resolve => {
           timeoutId = setTimeout(() => {
             setToast({
               status: "",
               message: ""
             });
             resolve();
           }, 2000);
         });
       };
       clearToast();
       return () => clearTimeout(timeoutId);
     },[toast])


  const handleContact = async () => {
       if (!nom || !email || !num) {
           
         setToast({
           status:"warning",
           message:"Veuillez remplir tous les champs."
         })
         return;
       }
    
       try {
        setLoading(true);
         const form = `Un nouveau message
                       Le Nom complet : ${nom} 
                       Adresse e-mail :${email}   
                       Number :${num}   
                       Webiste : ${web}
                       Message : ${message}`;
   
         const response = await fetch(`https://centreradiologievh-api.vercel.app/api/v1/rendezs`, {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({
             form,
             "subject": "mediinnov",
           }),
         });
   
         if (!response.ok) {
           
           return
         }
   
         // Reset form fields and show success message
         setNom('');
         setEmail('');
         setNum('');
         setMessage('');
         setToast({
           status:"success",
           message:"Merci de nous avoir contactés. Nous vous recontacterons bientôt."
         })
       } catch (error) {
         console.log(error);
         setToast({
           status:"error",
           message:"Erreur lors de l'envoi du message, veuillez réessayer."
         })
       }finally{
         setLoading(false);
       }



     };





  return (
    <div className='mx-14'>
            <h1 className='text-3xl font-bold ml-5 mb-5'>{t('form_heading')}</h1>
        <form className='contactform ' action="">

            <div className='mb-7 flex grid grid-cols-1 gap-4 md:grid-cols-2'> 
            <input type="text" id="small-input" onChange={(e:ChangeEvent<HTMLInputElement>)=>setNom(e.currentTarget.value)} className="block w-full p-2 text-gray-900 border border-gray-300" placeholder={t('form_name_placeholder')}/>
            <input type="text" id="small-input-1" onChange={(e:ChangeEvent<HTMLInputElement>)=>setEmail(e.currentTarget.value)} className="block w-full p-2 text-gray-900 border border-gray-300" placeholder={t('form_email_placeholder')}/>
            </div>


            <div className='mb-7 flex grid grid-cols-1 gap-4 md:grid-cols-2'> 
            <input type="number" id="small-input-2" onChange={(e:ChangeEvent<HTMLInputElement>)=>setNum(e.currentTarget.value)} className="block w-full p-2 text-gray-900 border border-gray-300" placeholder={t('form_phone_placeholder')}/>
            <input type="text" id="small-input-3" onChange={(e:ChangeEvent<HTMLInputElement>)=>setWeb(e.currentTarget.value)} className="block w-full p-2 text-gray-900 border border-gray-300" placeholder={t('form_website_placeholder')}/>
            </div>
            
            <div className='mb-7 '> 
            <textarea rows={5} onChange={(e:ChangeEvent<HTMLTextAreaElement>)=>setMessage(e.currentTarget.value)}  className="block w-full p-2 text-gray-900 border border-gray-300 p-4" placeholder={t('form_message_placeholder')} name="" id=""></textarea>
            </div>
             <div className='flex flex-wrap '>
                <button onClick={handleContact} className="search-btn mb-3" type="button">
                {t('form_button_label')}
                </button>
                {displayToast(toast.status,toast.message)}
             </div>
        </form>
        <div className='my-5 w-full '>
            <iframe className='w-full h-[350px] grayscale hover:grayscale-0'  loading="lazy" src="https://maps.google.com/maps?q=33.591324300177924%2C%20-7.635147247362964&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="33.591324300177924, -7.635147247362964" aria-label="33.591324300177924, -7.635147247362964"></iframe>
        </div> 
</div>

  )
}
