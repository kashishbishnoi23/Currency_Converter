import { useState } from 'react'

import { InputBox } from './components/InputBox'

import useCurrencyInfo from '../hooks/useCurrencyInfo' // yaha hamne useCurrencyInfo ko default export kiya tha isliye hame curly braces use krne ki need nhi ha -> otherwise curly braces ki need padti hai

// difference between default and normal export -> default export module me sirf ek hi ho sakta hai -> named export bhut sare ho sakte hain -> agar main useCurrencyInfo ki jagah kuch aur bhi likhu to by default useCurrencyInfo hi export hoke ayega -> cuz it is a default export -> but when we use normal (named) exports we need to use curly braces -> import {A, B} from 'C' -> and we have to import them using their actual names

import '../custom.css'

function App() {

  const [amount, setAmount]  = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");

  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  // useCurrencyInfo me hame currency pass krni hai -> jis currency se conversion hoga -> so from wali pass hogi


  // swap functionality:
  const swap = ()=>{
    setAmount(convertedAmount);
    setConvertedAmount(amount);
    setFrom(to);
    setTo(from);
  }
  
  //  setting the converted amount:

  const convert = ()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }; // currencyInfo[to] se we get the conversion rate



  return (
    <>
  
     <form
     onSubmit={
      (event)=>{
        event.preventDefault();
        convert();

      }
     }

     >
     
     <div className="flex relative flex-col h-fit w-[35vw] border p-8 gap-3 bg-transparent bg- mt-28 rounded-md mx-auto main">
     
    

      <InputBox
      label="From" // passing arguements to the component InputBox
      amount = {amount}
      onAmountChange={(amount)=> setAmount(amount)}
      onCurrencyChange={(currency) => setFrom(currency)
      }
      selectCurrency={from}


      />



      <button
        type="button"
        className="text-white absolute top-24 left-[45%] border-2 border-white bg-blue-500 p-1 px-2 rounded-md"
        onClick={swap}
      >swap
      </button>

      <InputBox
      label="To" // passing arguements to the component InputBox
      amount = {convertedAmount}
      onCurrencyChange={(currency) => 
        setTo(currency)
      }
      selectCurrency={to}

      amountDisable // same as amountDisable=true


      />



      <button
       type='submit'
       className="text-white mt-3 bg-blue-500 p-2 rounded-md">Convert {from} to {to}
       </button>

     </div>

    </form>

     

    </>
  )
}

export default App
