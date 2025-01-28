import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice"
import cartReducer from "./slices/cartSlice"

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
    },
    /* understand it before apply it to the project */
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartMiddleware)
})