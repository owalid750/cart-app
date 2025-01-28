import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    return data;
})

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.loading = false;
        }).addCase(fetchProducts.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        })

    }
});

export default productsSlice.reducer;