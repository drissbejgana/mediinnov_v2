import { getLocale } from "next-intl/server";

const  LangSelected =  async() => {
      
    const  locale= await getLocale()

  return (
        <>
              <option  selected={locale=='en'} value="en">English</option>
             <option selected={locale=='fr'} value="fr">Francais</option>
  
        </>
                
  );
};

export default LangSelected;
