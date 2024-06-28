import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/CounterSlice/";
import cartReducer from "../features/CartSlice";


const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
        }
});

export default store;
