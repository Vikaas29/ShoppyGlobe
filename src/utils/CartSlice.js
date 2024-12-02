import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:"Cart",
    initialState:{
        items:{}
    },
    reducers:{
        addItem:(state,action)=>{
            if(state.items[action.payload])
                {
                    state.items[action.payload]+=1;

                }
                else{
                    state.items[action.payload]=1;
                }
            },
        removeItem:(state,action)=>{
            if(state.items[action.payload])
                {
                    state.items[action.payload]-=1;

                }
                if(state.items[action.payload]==0){
                   delete state.items[action.payload]
                }
            },
        deleteItem:(state,action)=>{
                   delete state.items[action.payload];
            },
    }
});

export const {addItem,removeItem,deleteItem}=CartSlice.actions;
export default CartSlice.reducer;