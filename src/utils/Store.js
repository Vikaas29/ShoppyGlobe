import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"


//store to hold cart items
const appStore=configureStore({
    reducer: {
        cart:cartReducer,
    }
});


export default appStore;