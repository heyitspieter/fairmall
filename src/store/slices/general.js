import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as url from "../../config/url";
// import axios from 'axios'
import axios from "../../config/axios";

const getGeneral = createAsyncThunk("general/getGeneral", async (_, { rejectWithValue }) => {
  const config = {
    method: "get",
    url: url.getGeneral,
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
  name: "inspirations",

  initialState: {
    general: {},
    status: false,
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: {
    [getGeneral.pending]: (state) => {
      state.loading = true;
    },
    [getGeneral.fulfilled]: (state, { payload }) => {
      state.general = payload.setting;
      state.loading = false;
    },
    [getGeneral.rejected]: (state, { payload }) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export { getGeneral };
export default slice.reducer;
