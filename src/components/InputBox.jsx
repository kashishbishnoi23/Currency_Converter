import React, {useId} from 'react'
import {countryList} from '../codes'

// parameters of InputBox component:
export function InputBox(
    {
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        selectCurrency = "USD",
        currencyDisable = false,
        amountDisable = false, // user amount ko change kr skta ha ya nahi -> currently disable is false -> so user can change the amount
        className=""
    }
){

  const amountInputId = useId();


    return (
        <>
        {/* agr ham chahte hai ki user className pass kre to use this syntax: */}
        <div className={`bg-white w-full flex flex-col gap-2 p-2 rounded-md ${className}`}>
       <div className="flex justify-between w-full">
        <label htmlFor={amountInputId} className="text-gray-400" >{label}</label> 
        {/* label iske liye ha ki aap From pass kr rahe ho ya To pass kr rahe ho -> there are two types of InputBoxes that's why */}
        <div className="text-gray-400">Currency Type</div>
       </div>

       <div className="flex justify-between w-full">
        <input 
        className="outline-none"
        id={amountInputId}
        type="number" 
        placeholder='0'
      

        value={amount}
        onChange={(event)=>{onAmountChange(event.target.value)}} // agar user input se amount change krta hai to onAmountChange function call hoga
           // js event.target.value ko har baar string format me leti hai -> so we need to convert into Number
        disabled={amountDisable}

         >
        </input>


        <select 
        value={selectCurrency}
        onChange={(event) =>onCurrencyChange(event.target.value)}
        disabled={currencyDisable}
        >
          {Object.keys(countryList).map((currency, index)=>(
            <option value={currency} key={index}>
              {currency}
            </option>
          ))}


        </select>
       </div>
      </div>


        </>
    )
}

  // HTML me ham id attribute ka use krte hain -> for uniqueness , React me ham key ka use krte hain, difference between key and id -> id is an HTML attribute , key is React-specific -> 

            // about key:
            
            // Purpose:
            // In React, key is used when rendering lists of elements.It is a special attribute that helps React identify which items have changed,been added or removed. It improves the efficiency of React's reconciliation process by helping React optimize the rendering of lists.

            //Scope:
            // The key attribute in React is scoped to the list of elements it belongs to. It only needs to be unique among the sibling elements in a list. React uses it internally to track each element during the rendering and updating process

            // Usage:
            // used only in React to improve performance when rendering dynamic list of components.It helps React's reconciliation algorithm by minimizing unnecessary re-renders and efficiently tracking element changes.

           // Uniqueness:
        
            // Must be unique among sibling elements in a list, but can repeat in other lists. It is not used in the DOM or by CSS—React uses it internally to manage component re-rendering.
            

// useId hook:

// The useId hook is used to generate a unique id which can be used inside a component., so that each component instance gets its own unique id -> for example, yaha hamne InputBox component ke bhut sare instance bana diye -> to har instance ki apni ek unique id honi chahiye -> useId() vo id provide krta hai 

// specially used to deal with forms having accessibility features like <label> and <input>

//  jase ham html me labels create krte hain -> input element ko ek id dete hain -> fir <label for="" > for me us input ki id pass krte hain -> input aur label ko connect krne ke liye -> similarly useId hame ek id deta hai -> <label htmlFor=""> ki help se ham us id ko connect krenge -> input element ko bhi vo id deni padti hai 


// Benifit of useID:

/*
If you create multiple InputBox components on the same page, useId ensures that each input gets a unique ID. This prevents conflicts where two inputs might accidentally share the same id, which would cause issues with form labels, accessibility, or even JavaScript targeting.
React automatically generates these IDs in a way that guarantees uniqueness without you having to manually manage them.

so ab har input element sahi label se connected hoga -> cuz react will make sure that ids are never same for 2 input elements 
*/

// the label is attached to input element and not the input value right?

/*
Yes, that's correct! The label is attached to the input element itself, not to its value.

When you use the htmlFor attribute (in React) on a <label> element, it links the label to the input element that has the matching id. This makes it so that when you click on the label, the browser focuses the associated input field. It doesn't directly affect or change the input's value.

The label (<label htmlFor={amountInputId}>) is associated with the input field (<input id={amountInputId} />) by matching the htmlFor with the id.
Clicking on the label will focus the input field with the corresponding ID, but it doesn’t interact with or change the input's value.
The value of the input is controlled by the value={amount} and the onChange handler that listens for changes in user input, but the label doesn't interact with the value directly.

so useId hook mainly helps us to uniquely identify instances of each component , so like useful when we have many instances of the same component

Exactly! The useId hook is mainly useful when you have multiple instances of the same component, and you need to generate unique IDs for each instance. This ensures that components are uniquely identifiable, especially in cases where IDs are required (like linking labels and inputs in forms).

Here’s a recap of why useId is helpful:

Unique IDs for each instance:

When you render multiple instances of a component that requires IDs (like forms), useId guarantees that each instance gets its own unique ID.
This prevents issues like conflicting IDs, which can happen if you manually assign the same ID to multiple inputs in different instances of the same component.
Useful in repeated components:

For example, if you have multiple forms on the same page (or any repeated elements that need an ID), useId helps ensure that each form field has its own unique identifier, even if they belong to the same component.
Accessibility and usability:

IDs are critical for accessibility because they link elements like <label> to their corresponding <input>. With useId, you can ensure that each label and input are properly linked in a unique way, even when components are repeated.
Automatic and hassle-free:

React manages the uniqueness of the IDs generated by useId, so you don't have to worry about accidentally reusing the same ID across multiple components.


*/


