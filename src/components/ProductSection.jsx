import { useState } from "react";
import { useFetch } from "../utils/useFetch";
import Product from "./Product";
function ProductSection(prop){
const {data,loading,error}=useFetch();
if(loading){
return( <div className="roundRotate relative flex flex-col justify-center items-center h-[100%] top-[100px]">
<div className="w-[50px] h-[5px] bg-black m-[5px] absolute rotate-45 rounded-lg" ></div>
<div className="w-[50px] h-[5px] bg-black m-[5px] absolute rotate-[-45deg] rounded-lg"></div>
</div>) }
if(error){
return (<div>An error occured while fetching data</div>)
}

return (<div className="flex flex-row justify-center items-center flex-wrap">
{data.products.filter(e=>e.title.toLowerCase().includes(prop.filter.toLowerCase())).map((e)=><Product key={e.id} data={e}/>)}
</div>)
}
export default ProductSection;