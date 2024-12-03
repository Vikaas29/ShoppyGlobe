import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";
import { useNavigate } from "react-router-dom";


// component for detail page for a individual item
function DetailPage(prop){
    const id=prop.id;
    const dispatch=useDispatch();
    const navigate=useNavigate()

    function addToCart(){
        dispatch(addItem(`${id}`))
    }

    // console.log(prop.data)
    if(prop.data){
        return(<>
        <main className="flex flex-col justify-center items-center w-[100%] text-center">
        <div className="  flex flex-col justify-center items-center w-[500px] ">
            <div className="text-2xl font-bold m-[20px]">{prop.data.products[id-1].title}</div>
            <img className="h-[400px]" src={prop.data.products[id-1].images[0]} alt="" />
            
            <div className=" text-cyan-700 text-center">Description: {prop.data.products[id-1].description}</div>
            <div className=" text-yellow-700">Return Policy: {prop.data.products[id-1].returnPolicy}</div>
            <div className=" text-green-700">Price: $${prop.data.products[id-1].price}</div>
            <div className=" text-orange-700">Rating: {prop.data.products[id-1].rating}*</div>
            
            <div>
            <button className="border border-black rounded-md p-[2px] hover:bg-green-600 hover:text-white m-[10px]" onClick={addToCart}>Add to Cart</button>
            <button className="border border-black rounded-md p-[2px] hover:bg-cyan-600 hover:text-white m-[10px]" onClick={()=>{navigate("/products")}}>Back to Shop</button>
            </div>
        </div>
    </main>
        </>)
    }
}
export default DetailPage;