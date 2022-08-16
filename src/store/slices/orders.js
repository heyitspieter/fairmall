import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import * as url from "../../config/url";
// import axios from 'axios'
import axios from "../../config/axios";

const getOrdersData = createAsyncThunk("orders/getOrdersData", async (_, { rejectWithValue }) => {
  const token = localStorage.getItem("token");

  const config = {
    method: "get",
    url: url.getOrdersData,
    headers: {
      "Content-Type": "application/json",
      "x-access-token": `${token}`,
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
});

const getOrders = createAsyncThunk("orders/getOrders", async (_, { rejectWithValue }) => {
  const token = localStorage.getItem("token");

  const config = {
    method: "get",
    url: url.getOrders,
    headers: {
      "Content-Type": "application/json",
      "x-access-token": `${token}`,
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
});

const createOrder = createAsyncThunk("orders/createOrder", async (data, { rejectWithValue }) => {
  const token = localStorage.getItem("token");

  const config = {
    method: "post",
    url: url.createOrder,
    headers: {
      "Content-Type": "application/json",
      "x-access-token": `${token}`,
    },
    data,
  };
  try {
    return await axios(config);
  } catch (err) {
    if (!err.response) {
      throw err;
    }
    return rejectWithValue(err.response.data);
  }
});

const getOrder = createAsyncThunk("orders/getOrder", 
  async (id, { rejectWithValue }) => {
  const token = localStorage.getItem("token");

  const config = {
    method: "get",
    url: url.getOrder(id),
    headers: {
      "Content-Type": "application/json",
      "x-access-token": `${token}`,
    },
  };
  try {
    return await axios(config);
  } catch (err) {
    if (!err.response) {
      throw err;
    }
    return rejectWithValue(err.response.data);
  }
});




const slice = createSlice({
  name: "orders",

  initialState: {
    data: null,
    status: false,
    loading: false,
    error: null,
    checkoutData: null,
    orders: [],
  },

  reducers: {},

  extraReducers: {
    //get order data
    [getOrdersData.pending]: (state) => {
      state.loading = true;
    },
    [getOrdersData.fulfilled]: (state, { payload }) => {
      state.checkoutData = payload.data;
      state.loading = false;
    },
    [getOrdersData.rejected]: (state, { payload }) => {
      state.error = true;
      state.loading = false;
    },

    /** get orders */
    [getOrders.pending]: (state) => {
      state.loading = true;
    },
    [getOrders.fulfilled]: (state, { payload }) => {
      state.orders = payload.data.orders;
      state.loading = false;
    },
    [getOrders.rejected]: (state, { payload }) => {
      state.error = true;
      state.loading = false;
    },

    //create order
    [createOrder.pending]: (state) => {
      state.loading = true;
    },
    [createOrder.fulfilled]: (state, { payload }) => {
      state.data = payload.data;
      state.loading = false;
    },
    [createOrder.rejected]: (state, { payload }) => {
      state.error = true;
      state.loading = false;
    },

    [getOrder.pending]: (state) => {
      state.loading = true;
    },
    [getOrder.fulfilled]: (state, { payload }) => {
      state.data = payload.data.order;
      state.loading = false;
    },
    [getOrder.rejected]: (state, { payload }) => {
      state.error = true;
      state.loading = false;
    },
    
  },
});

export { getOrdersData, createOrder, getOrders, getOrder };
export default slice.reducer;
