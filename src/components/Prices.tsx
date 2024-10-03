'use client'
import {useState } from "react";

export default function Prices() {

    const [selectedAmount, setSelectedAmount] = useState('0');
    const [customAmount, setCustomAmount] = useState('0');
    const [currency, setCurrency] = useState('INR');
  
    const handleSubmit = (e:any) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log({ selectedAmount, customAmount, currency });
    };


    return (
     <div className="max-w-screen-xl relative bg-white border  rounded-md shadow-lg px-5 pt-14  mx-auto md:mt-[-60px] z-10" >
         <div className="flex flex-wrap">
                   <button className="text-white text-[17px] bg-red-700 hover:bg-red-800  font-medium rounded-l-lg  px-8 py-3 text-center dark:bg-red-600 ">
                          One Time Funding
                   </button>
                   <button  className="text-gray-800 text-[17px] bg-[#F0F4F3] hover:text-white hover:bg-red-800  font-medium rounded-r-lg  px-8 py-3 text-center dark:bg-red-600 ">
                          Monthly Funding
                   </button>
         </div>
         <div className="my-5" >
      <form
        className="flex items-center xl:gap-6 gap-3 xl:flex-nowrap flex-wrap lg:w-auto w-full"
        id="funding_form_one_time_funding"
        onSubmit={handleSubmit}
      >
        <div className="amount-select grid sm:grid-cols-6 grid-cols-3 border border-gray-200 rounded-md py-1.5 px-2.5 gap-2 lg:w-auto w-full">
          {['499', '999', '1299', '2499', '7999', '9999'].map((amount, index) => (
            <div key={index} className={`${selectedAmount === amount?'bg-red-700 text-white':'bg-[#F0F4F3]'} cursor-pointer font-medium px-4 py-2 text-center rounded`}>
              <input
                type="radio"
                id={`one_time_funding_amount${index}`}
                name="predefined_amount_one_time_funding"
                value={amount}
                checked={selectedAmount === amount}
                onChange={() => {setSelectedAmount(amount)
                                 setCustomAmount(amount)}}
              />
              <label htmlFor={`one_time_funding_amount${index}`} className="cursor-pointer">
                 {amount}
              </label>
            </div>
          ))}

        </div>

        <div>
          <div className="amount-select flex border border-gray-200 rounded-md py-1.5 px-2.5 gap-2 lg:w-auto w-full">
            <span className="relative">
              <select
                name="currency"
                id="currency_one_time_funding"
                className="bg-transparent min-w-[120px] tracking-wider cursor-pointer focus-visible:outline-none border border-gray-200 rounded-md py-1.5 text-md font-medium text-gray-400 px-3 custom-input"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option value="INR">(Dh) MAD</option>
                <option value="USD">$ USD</option>
                <option value="EURO">EURO</option>
              </select>
            </span>
            <input
              type="number"
              id="amount_one_time_funding"
              name="custom_amount_one_time_funding"
              placeholder="Amount"
              className="bg-primary-400 rounded-md py-1.5 text-md font-medium text-gray-400 px-3.5 lg:max-w-40 max-w-full md:w-auto w-full grow"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="focus:outline-none text-[17px] text-[#bb1f22] hover:text-white bg-[#EEDF7A]  focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-8 py-3.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 shadow-lg hover:!bg-gray-800">
          Share Some Love !!
        </button>
      </form>


      <p className="text-sm text-gray-400 italic mt-4">
        *Your tip allows us to continue helping more people & communities at a reduced fee!
      </p>
    </div>   
     </div>
    );
}