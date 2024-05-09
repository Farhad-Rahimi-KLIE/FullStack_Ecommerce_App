import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios'
const initialState = {
product : [],
}

export const getFourProduct = createAsyncThunk("gallery/getFourProduct", async ()=>{
    const result = await axios.get("http://localhost:3000/getfour");
    return result.data.getAllImage;
})

export const getAllProduct = createAsyncThunk("gallery/getAllProduct", async ()=>{
    const result = await axios.get("http://localhost:3000/getallimage");
    return result.data.getAllImage;
})

export const sortByName = createAsyncThunk("gallery/sortByName", async ()=>{
    const result = await axios.get("http://localhost:3000/sortname");
    return result.data.getAllImage;
})

export const sortByPrice = createAsyncThunk("gallery/sortByPrice", async ()=>{
    const result = await axios.get("http://localhost:3000/sortprice");
    return result.data.getAllImage;
})

export const searchById = createAsyncThunk("gallery/searchById", async (payload)=>{
    const result = await axios.get(`http://localhost:3000/search/${payload}`);
    return result.data.getAllImage;
})

export const SingleCategory = createAsyncThunk("gallery/SingleCategory", async (payload)=>{
    const result = await axios.get(`http://localhost:3000/SingleCategoy?category=${payload}`);
    return result.data.getAllImage;
})

export const SingleProduct = createAsyncThunk("gallery/SingleProduct", async (payload)=>{
    const result = await axios.get(`http://localhost:3000/getsigleimage/${payload}`);
    return result.data.getAllImage;
})

export const UserRegister = createAsyncThunk("gallery/UserRegister", async (payload)=>{
    const result = await axios.post("http://localhost:3000/register", payload);
    return result.data.registr;
})

export const UserLogin = createAsyncThunk("gallery/UserLogin", async (payload)=>{
    const result = await axios.post("http://localhost:3000/login", payload);
    localStorage.setItem('token', result.data.token)
      localStorage.setItem('name', result.data.name)
    return result.data;
})

// export const DeleteItem = createAsyncThunk("gallery/DeleteItem", async (payload)=>{
//     const result = await axios.get(`http://localhost:3000/delete/${payload}`);
//     return result.data.userDelete;
// })

export const ProductSlice = createSlice({
    name : "product",
    initialState,
    extraReducers : (builder)=> {
        builder.addCase(getFourProduct.fulfilled, (state, action)=>{
            state.product = action.payload
        })
        builder.addCase(getAllProduct.fulfilled, (state, action)=>{
            state.product = action.payload
        })
        builder.addCase(sortByName.fulfilled, (state, action)=>{
            state.product = action.payload
        })
        builder.addCase(sortByPrice.fulfilled, (state, action)=>{
            state.product = action.payload
        })
        builder.addCase(searchById.fulfilled, (state, action)=>{
            state.product = action.payload
        })
        builder.addCase(SingleCategory.fulfilled, (state, action)=>{
            state.product = action.payload
        })
        builder.addCase(SingleProduct.fulfilled, (state, action)=>{
            state.product = action.payload
        })
        // builder.addCase(DeleteItem.fulfilled, (state, action)=>{
        //     state.product = action.payload
        // })
    }
})
export default ProductSlice.reducer;