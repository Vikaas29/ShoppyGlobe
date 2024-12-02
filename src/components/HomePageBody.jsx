import { useNavigate } from "react-router-dom";

function HomePageBody(){
    const navigate=useNavigate();
    return (<main className="p-[30px] flex flex-col justify-center items-center w-[100%] gap-10 text-center">
    <h1 className="text-4xl ">Welcome to the one stop for all your needs </h1>
    <div className="flex flex-col md:flex-row justify-center items-center w-[100%]" >
    <img className="w-[500px] rounded-3xl" src="https://i.pinimg.com/736x/5d/b3/9b/5db39b2807d1ad2d2be8215959e08591.jpg" alt="Online Shopping" />
    <div>
    <button className="m-[10px] border border-black p-[5px] rounded-md transition duration-[.1s] hover:bg-green-700 hover:text-white" onClick={()=>{navigate("/products")}} >Go Shopping</button>
    <button className="m-[10px] border border-black p-[5px] rounded-md transition duration-[.1s] hover:bg-green-700 hover:text-white" onClick={()=>{navigate("/cart")}} >Check Cart</button>
    </div>
    </div>
    </main>)
}
export default HomePageBody;