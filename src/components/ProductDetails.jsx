import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailPage from "./DetailPage";
import ErrorPage from "./ErrorPage";


// this component is to manage the main display product detail page 
function ProductDetails(){
    const params=useParams();
    // console.log(params)
    const id=params.id;
    const [data,setData]=useState(null);
    useEffect(()=>{
        async function retrieve(){
            const response=await fetch("https://dummyjson.com/products");
            const result= await response.json();   
            setData(result);
        }
        retrieve();
    },[]);
    if(data)
    {
        if(id<=data.products.length)
        {return(<>
    <DetailPage data={data} id={id}/>
    </>)
    }
    else{
        return(<>
        <ErrorPage/>
        </>)
    }
    }
}
export default ProductDetails;