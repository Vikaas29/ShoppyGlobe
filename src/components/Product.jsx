import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem,removeItem } from "../utils/CartSlice";

// this component holds the each product from the products page
function Product(prop){
    const navigate=useNavigate();
    // console.log("prop",prop)

    const dispatch=useDispatch();
    
    // funtion to add items to cart using cart slice reducer
    function addToCart(){
        dispatch(addItem(`${prop.data.id}`))
    }
    return (
        <div className="w-[350px] h-[350px] gap-1  rounded-xl m-[20px] flex flex-col justify-center items-center transition duration-[.5s] hover:bg-gray-700 hover:text-white hover:ring-8">
            <img className="w-[200px] h-[200px]" src={prop.data.images[0]} alt="" />
            <div className=" text-red-700 font-bold">{prop.data.title}</div>
            <div className=" text-green-700">$$ {prop.data.price}</div>
            <div className=" text-yellow-700">Rating: {prop.data.rating}*</div>
            <div className="">
                <button className="border m-[5px] border-black p-[2px] rounded-lg transition duration-[.5s] hover:bg-cyan-700 hover:text-white" onClick={addToCart}>Add to Cart</button>
                <button className="border m-[5px] border-black p-[2px] rounded-lg transition duration-[.5s] hover:bg-green-700 hover:text-white" onClick={()=>{navigate(`/products/${prop.data.id}`)}}>View Detail</button>
            </div>
        </div>)
}
export default Product;