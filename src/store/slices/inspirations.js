import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as url from "../../config/url";
// import axios from 'axios'
import axios from "../../config/axios";

const getInspirations = createAsyncThunk(
  "inspirations/getInspirations",
  async (_, { rejectWithValue }) => {
    const config = {
      method: "get",
      url: url.getInspirations,
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
  name: "inspirations",

  initialState: {
    data: {},
    status: false,
    loading: false,
    error: null,
    inspirations: [],
  },

  reducers: {},

  extraReducers: {
    [getInspirations.pending]: (state) => {
      state.loading = true;
    },
    [getInspirations.fulfilled]: (state, { payload }) => {
      state.inspirations = payload.data.inspirations;
      state.loading = false;
    },
    [getInspirations.rejected]: (state, { payload }) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export { getInspirations };
export default slice.reducer;
