import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/CartSlice";
import CounterReducer from "../features/CounterSlice";
import { shopApi } from "../../services/shopServices";
import { setupListeners } from "@reduxjs/toolkit/query";




const store = configureStore({
    reducer: {
        counter: CounterReducer,
        cart: cartReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware)

});

setupListeners(store.dispatch)

export default store;
