import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import * as url from "../../config/url"
import axios from 'axios'


const getCategories = createAsyncThunk(
    "categories/getCategories",
    async (_, { rejectWithValue }) => {
        const config = {
            method: "get",
            url: url.getCategories,
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

const getCategory = createAsyncThunk(
    "categories/getCategory",
    async (id, { rejectWithValue }) => {
        const config = {
            method: "get",
            url: url.getCategory(id),
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
    name: "categories",

    initialState: {
        data: {},
        status: false,
        loading: false,
        error: null,
        categories: [],
    },

    reducers: {},

    extraReducers: {
        //get categories
        [getCategories.pending]: (state) => {
            state.loading = true;
        },
        [getCategories.fulfilled]: (state, { payload }) => {
            state.categories = payload.data.categories;
            state.loading = false;
        },
        [getCategories.rejected]: (state, { payload }) => {
            state.error = true;
            state.loading = false;
        },

        //get category
        [getCategory.pending]: (state) => {
            state.loading = true;
        },
        [getCategory.fulfilled]: (state, { payload }) => {
            state.data = payload.data;
            state.loading = false;
        },
        [getCategory.rejected]: (state, { payload }) => {
            state.error = true;
            state.loading = false;
        },
    },
});

export { getCategories, getCategory};
export default slice.reducer;
