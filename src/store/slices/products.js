import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import * as url from "../../config/url"
import axios from 'axios'


const getProducts = createAsyncThunk(
    "products/getProducts",
    async (_, { rejectWithValue }) => {
        const config = {
            method: "get",
            url: url.getProducts,
            headers: {
                "Content-Type": "application/json",
            },
        };
        try {
            const response = await axios(config);
            return response;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response.data);
        }
    }
);

const getProduct = createAsyncThunk(
    "products/getProduct",
    async (id, { rejectWithValue }) => {
        const config = {
            method: "get",
            url: url.getProduct(id),
            headers: {
                "Content-Type": "application/json",
            },
        };
        try {
            const response = await axios(config);
            return response;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response.data);
        }
    }
);


const slice = createSlice({
    name: "products",

    initialState: {
        data: {},
        status: false,
        loading: false,
        error: null,
        products: [],
    },

    reducers: {},

    extraReducers: {
        //get products
        [getProducts.pending]: (state) => {
            state.loading = true;
        },
        [getProducts.fulfilled]: (state, { payload }) => {
            state.products = payload.data.products;
            state.loading = false;
        },
        [getProducts.rejected]: (state, { payload }) => {
            state.error = true;
            state.loading = false;
        },

        //get products
        [getProduct.pending]: (state) => {
            state.loading = true;
        },
        [getProduct.fulfilled]: (state, { payload }) => {
            state.data = payload.data.product;
            state.loading = false;
        },
        [getProduct.rejected]: (state, { payload }) => {
            state.error = true;
            state.loading = false;
        },
    },
});

export { getProducts, getProduct};
export default slice.reducer;
