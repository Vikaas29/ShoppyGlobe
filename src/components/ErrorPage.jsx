import Header from "./Header";
import { useNavigate } from "react-router-dom";
function ErrorPage(){
    const navigate=useNavigate()
    return (<>
    <main className="flex flex-col justify-center items-center gap-[50px] m-[50px]" >
        <p className="text-4xl">404......Page Not Found</p>
        <div>
        <button className="m-[10px] border border-black p-[5px] rounded-md w-[80px] transition duration-[.5s] hover:bg-green-700 hover:text-white" onClick={()=>{navigate("/")}} >HOME</button>
        <button className="m-[10px] border border-black p-[5px] rounded-md w-[80px] transition duration-[.5s] hover:bg-green-700 hover:text-white" onClick={()=>{navigate("/products")}} >PRODUCTS</button>
        <button className="m-[10px] border border-black p-[5px] rounded-md w-[80px] transition duration-[.5s] hover:bg-green-700 hover:text-white" onClick={()=>{navigate("/cart")}} >CART</button>
        </div>

    </main>
    </>)
}
export default ErrorPage;