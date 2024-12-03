import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// component for the checkout Page
function Checkout(prop){

    const navigate=useNavigate();

    const cart=useSelector((store)=>store.cart.items);
    const [data,setData]=useState(null);
    useEffect(()=>{
        async function retrieve(){
            const response=await fetch("https://dummyjson.com/products");
            const result= await response.json();   
            setData(result);
        }
        retrieve();
    },[])

    if(data)
    {  
        
        let total = 0;
        let n=data.products.length;

        for(let i=0;i<n;i++){
            if(cart[data.products[i].id]){
                total+=(data.products[i].price*cart[data.products[i].id])
            }
        }
        
        return(<>
        <div className=" w-[100%] flex flex-col justify-center items-center my-[30vh] ">
            <p className="text-2xl border border-black p-[5px] rounded-md  m-[10px]">Your total is : $${total}</p>
            <button className="tex-2xl border border-black p-[5px] rounded-md m-[10px] transition duration-[.1s] hover:bg-red-700 hover:text-white">PAYMENT GATEWAY</button>
            <button className="tex-2xl border border-black p-[5px] rounded-md m-[10px] transition duration-[.1s] hover:bg-green-700 hover:text-white" onClick={()=>{navigate("/products")}}>CONTINUE SHOPPING</button>
        </div>
        </>)
    }
}
export default Checkout;