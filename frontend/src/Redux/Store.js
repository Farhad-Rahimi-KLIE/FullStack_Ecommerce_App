import {configureStore} from '@reduxjs/toolkit';
import ProductSlice from './Slices/ProductSlice';
import AddToCartSlice from './Slices/AddToCartSlice';
export const Store = configureStore({
    reducer : {
        product : ProductSlice,
        cart : AddToCartSlice,
    },
})
// export default Store;