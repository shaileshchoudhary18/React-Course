import { useEffect, useState } from "react";


function UseCurrencyInfo(currency) {
    const [data, setData] = useState({}) //custom hook
    useEffect(()=>{ //automatically calls the fetch, (We dont need to first a call a function then call an API after using this )
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`) //Api Call
        .then((res)=>res.json()) 
        .then((res)=>setData(res[currency]))

        console.log(data);
    },[currency]) //used when a API is called  [] ---> dependency array
    console.log(data);
    return data

}
export default UseCurrencyInfo;

