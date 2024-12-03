import { createSlice } from "@reduxjs/toolkit";


//cart slice
const CartSlice=createSlice({
    name:"Cart",
    initialState:{
        items:{}
    },
    reducers:{
        // reducer funtion to add items in cart
        addItem:(state,action)=>{
            if(state.items[action.payload])
                {
                    state.items[action.payload]+=1;

                }
                else{
                    state.items[action.payload]=1;
                }
            },
            // reducer funtion to remove item/reduce count of a item in cart
        removeItem:(state,action)=>{
            if(state.items[action.payload])
                {
                    state.items[action.payload]-=1;

                }
                if(state.items[action.payload]==0){
                   delete state.items[action.payload]
                }
            },
            // reducer funtion to remove item in cart
        deleteItem:(state,action)=>{
                   delete state.items[action.payload];
            },
    }
});

export const {addItem,removeItem,deleteItem}=CartSlice.actions;
export default CartSlice.reducer;