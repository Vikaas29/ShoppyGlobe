import { useDispatch } from "react-redux";
import { addItem,removeItem,deleteItem } from "../utils/CartSlice";

function CartProduct(prop){
    const dispatch=useDispatch();

    // console.log(prop);
    function increase(){
        dispatch(addItem(`${prop.data.id}`))
    }
    function decrease(){
        dispatch(removeItem(`${prop.data.id}`))
    }
    function remove(){
        dispatch(deleteItem(`${prop.data.id}`))
    }

    return (<>
    <div className="w-[350px] h-[350px] gap-1 border border-black rounded-xl m-[20px] flex flex-col justify-center items-center transition duration-[.5s] hover:bg-gray-700 hover:text-white hover:ring-8">
            <img className="w-[200px] h-[200px]" src={prop.data.images[0]} alt="" />
            <div className=" text-red-700 font-bold">{prop.data.title}</div>
            <div className=" text-green-700 font-bold">$$ {prop.data.price}</div>
            <div className=" text-orange-700 font-bold">Rating: {prop.data.rating}*</div>
            <div className="flex flex-row justify-center items-center">
            <button className="border m-[5px] border-black p-[2px] rounded-lg transition duration-[.1s] hover:bg-red-700 hover:text-white" onClick={remove} >REMOVE</button>
                <button className="border m-[5px] border-black p-[2px] rounded-lg transition duration-[.1s] hover:bg-red-700 hover:text-white" onClick={decrease} >-</button>
                <div>{prop.count[`${prop.data.id}`]}</div>
                <button className="border m-[5px] border-black p-[2px] rounded-lg transition duration-[.1s] hover:bg-green-700 hover:text-white" onClick={increase} >+</button>
            </div>
        </div>
    </>)
}
export default CartProduct;