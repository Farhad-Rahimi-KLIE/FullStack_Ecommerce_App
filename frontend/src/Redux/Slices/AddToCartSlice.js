import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'
const initialState = {
cartItems : [],
quantity : 0
}

export const DeleteItem = createAsyncThunk("gallery/DeleteItem", async (payload)=>{
    const result = await axios.get(`http://localhost:3000/delete/${payload}`);
    return result.data.userDelete;
})

export const AddtoCartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addToCart : (state, action)=>{
            const find = state.cartItems.findIndex(item => item._id === action.payload._id)
            if (find >= 0) {
                state.cartItems[find].quantity +=1;
            } else {
                const tempvar = {...action.payload, quantity : 1}
                state.cartItems.push(tempvar)                           
            }
        }
    }
})
export const {addToCart} = AddtoCartSlice.actions;
export default AddtoCartSlice.reducer;