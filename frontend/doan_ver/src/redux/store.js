import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import { userSlice } from "./slices/userSlice";
import { productSlice } from "./slices/productSlice";
import globalSlice  from "./slices/globalSlice";
import { categorySlice }  from "./slices/categorySlice";
import { companySlice }  from "./slices/companySlice";
import orderSlice  from "./slices/orderSlice";



const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        cart: cartSlice,
        product: productSlice.reducer,
        globalSlice,
        category: categorySlice.reducer,
        company: companySlice.reducer,
        orderSlice
    }
})

export default store;