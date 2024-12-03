import { useEffect, useState } from "react";

//custom hook to fetch data on load of product page
export function useFetch(){
    const [data,setData]=useState(null);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);
   
       useEffect(()=>{const fetchData=async ()=>{
            try{
            const response=await fetch("https://dummyjson.com/products");
            const result= await response.json();   
            setData(result);
        }
        catch(err){
            setError(err);
        }
        finally{
            setLoading(false)
        }
        };
        fetchData();},[]);

    return {data,loading,error};
}