import {useEffect, useState} from "react"

// most of the hooks are pure javascript -> isliye hamne js file banaayi hai
// making a custom hook 
function useCurrencyInfo(currency){
    const [data, setData] = useState({});

    useEffect(()=>{


        const apiKey = 'c3fc914971112da36f1b75b7'; // Your API key

        const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`

        fetch(url)
        .then((res)=> res.json())
        .then((data)=> setData(data.conversion_rates))

    }, [currency]) // currency change hogi to hame dubara api call krni padegi so we'll pass currency as the dependency
    return data;
    
    
   
}

export default useCurrencyInfo
