import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import CartProduct from "./CartProduct";
import { useNavigate } from "react-router-dom";

function Cart(){
    const navigate=useNavigate();

    const cart=useSelector((store)=>store.cart.items);
    // console.log(cart);
    const [data,setData]=useState(null);
    useEffect(()=>{
        async function retrieve(){
            const response=await fetch("https://dummyjson.com/products");
            const result= await response.json();   
            setData(result);
        }
        retrieve();
    },[])
    // console.log(data);
    
    if(data){
        const filter=data.products.filter((e)=>{if(cart[e.id]){return true;}return false});
        
        if(filter.length>0)
        {return (<>
        <div className="w-[100%] flex justify-end">
            <button className="tex-2xl border border-black p-[5px] rounded-md w-[200px] m-[10px] transition duration-[.5s] hover:bg-orange-700 hover:text-white" onClick={()=>{navigate("/checkout")}}>CHECKOUT</button>
            </div>
        <main className="flex flex-row justify-center items-center flex-wrap">
            {filter.map(e=><CartProduct key={e.id} data={e} count={cart} />)}
         </main></>)}
     return(<main className="flex flex-col justify-center items-center flex-wrap">
        <h2 className="text-4xl"> Cart is Empty</h2>
        <button className="tex-2xl border border-black p-[5px] rounded-md w-[200px] m-[10px] transition duration-[.5s] hover:bg-green-700 hover:text-white" onClick={()=>{navigate("/products")}} >Continue Shopping</button>
        </main>)
        
    }
   
}
export default Cart;