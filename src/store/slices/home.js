import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as url from "../../config/url";
import axios from "../../config/axios";

const homeData = createAsyncThunk("home/homeData", async (_, { rejectWithValue }) => {
  const config = {
    method: "GET",
    url: url.getHome,
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (err) {
    if (!err.response) {
      throw err;
    }
    return rejectWithValue(err.response.data);
  }
});

const slice = createSlice({
  name: "home",

  initialState: {
    home: {},
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: {
    [homeData.pending]: (state) => {
      state.loading = true;
    },
    [homeData.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.home = payload;
    },
    [homeData.rejected]: (state, {payload}) => {
      state.loading = false;
      state.error = payload.message
    },
  },
});

export { homeData };
export default slice.reducer;