import Header from "./Header"
import {useFetch} from "../utils/useFetch"
import { useEffect, useState } from "react";
import ProductSection from "./ProductSection";

function ProductsPage(){
    const [data,setData]=useState("");
    
    return(<>
    <main className="h-[100%] relative  flex flex-col justify-center items-center p-[10px] ">
        <input className="border border-black rounded-md w-[400px] h-[40px] text-xl p-[5px] hover:ring-4" type="text" onChange={(e)=>{setData(e.target.value)}} placeholder="Whats on your Mind" />
        <ProductSection filter={data}/>
    </main>
    </>)
}
export default ProductsPage;