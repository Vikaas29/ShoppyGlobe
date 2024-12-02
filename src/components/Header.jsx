import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header(){
    const cart=useSelector((store)=>store.cart.items);
    // console.log("cart",Object.keys(cart).length);
    const navigate=useNavigate();

    const[drop,setDrop]=useState("hidden")

    function setDropDown(){
        if(drop=="hidden")setDrop("block");
        else setDrop("hidden")
    }
    function setDropDownToo(){
        setDrop("hidden");
    }
    return(<nav className="flex flex-row px-[2%] border-[1px] border-black">
        <div className="navBox1 w-[50%] flex flex-row justify-start items-center" >
            <img src="https://i.pinimg.com/736x/d6/2f/ef/d62fefddddacc8c457dbbbe6c95226b5.jpg" alt="LOGO" className="w-[80px] h-[80px]" />
            <h1 className="font-bold text-2xl">ShoppyGlobe</h1>
        </div>
        <div className="navBox2 w-[50%] flex flex-row justify-end items-center">
            <div className="wideNavBar hidden md:flex flex-row justify-end items-center gap-[10%]">
                <button className="transition duration-[.2s] hover:text-orange-500" onClick={()=>{navigate("/")}}>Home</button> 
                <button className="transition duration-[.2s] hover:text-orange-500" onClick={()=>{navigate("/products")}}>Products</button>
                <button className="transition duration-[.2s] hover:text-orange-500" onClick={()=>{navigate("/cart")}} >Cart({Object.keys(cart).length})</button>
                <button className="transition duration-[.2s] hover:text-orange-500" >Login</button>
            </div>
            <div className="mobileNavbar  md:hidden  relative p-[10px] "  onMouseLeave={setDropDownToo} >
                <div className="" onClick={setDropDown}>
                    <div className="w-[40px] h-[2px] bg-black m-[5px]"></div>
                    <div className="w-[40px] h-[2px] bg-black m-[5px]"></div>
                    <div className="w-[40px] h-[2px] bg-black m-[5px]"></div>
                </div>
                <div className={`z-10 dropDown border-black border absolute right-0 ${drop} rounded-[5px] p-[10px] bg-slate-600`}>
                    <button className="w-[100%] m-[5%] hover:bg-slate-400 rounded-md" onClick={()=>{navigate("/")}}>Home</button> 
                    <button className="w-[100%] m-[5%] hover:bg-slate-400 rounded-md" onClick={()=>{navigate("/products")}}>Products</button>
                    <button className="w-[100%] m-[5%] hover:bg-slate-400 rounded-md" onClick={()=>{navigate("/cart")}}>Cart({Object.keys(cart).length})</button>
                    <button className="w-[100%] m-[5%] hover:bg-slate-400 rounded-md">Login</button>
                </div>
            </div>
        </div>
    </nav>)
}
export default Header;