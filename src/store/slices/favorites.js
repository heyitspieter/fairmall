import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as url from "../../config/url";
// import axios from 'axios'
import axios from "../../config/axios";

const addToFavorites = createAsyncThunk("favorites/addToFavorites", async (data, { rejectWithValue }) => {
  const token = localStorage.getItem("token");
  const config = {
    method: "post",
    url: url.addToFavorites,
    headers: {
      "Content-Type": "application/json",
      "x-access-token": `${token}`,
    },
    data,
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

const getFavorites = createAsyncThunk("favorites/getFavorites", async (_, { rejectWithValue }) => {
  const token = localStorage.getItem("token");

  const config = {
    method: "get",
    url: url.getFavorites,
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

const removeFromFavorite = createAsyncThunk("favorites/removeFromFavorite",
 async (data, { rejectWithValue }) => {
  const token = localStorage.getItem("token");

  const config = {
    method: "post",
    url: url.removeFromFavorite,
    headers: {
      "Content-Type": "application/json",
      "x-access-token": `${token}`,
    },
    data,
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

const emptyFavorites = createAsyncThunk("favorites/emptyFavorites", async (_, { rejectWithValue }) => {
  const token = localStorage.getItem("token");
  const config = {
    method: "post",
    url: url.emptyFavorites,
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

const slice = createSlice({
  name: "favorites",

  initialState: {
    data: {},
    status: false,
    loading: false,
    error: null,
    favoritesData: [],
    favoriteProducts: []
  },

  reducers: {},

  extraReducers: {
    //add to favorites
    [addToFavorites.pending]: (state) => {
      state.loading = true;
    },
    [addToFavorites.fulfilled]: (state, { payload }) => {
      state.data = payload.data.favourite;
      state.loading = false;
    },
    [addToFavorites.rejected]: (state, { payload }) => {
      state.error = true;
      state.loading = false;
    },

    //get favorites
    [getFavorites.pending]: (state) => {
      state.loading = true;
    },
    [getFavorites.fulfilled]: (state, { payload }) => {
      state.favoritesData = payload.data.favourite;
      state.favoriteProducts = payload.data.favourite.products;
      state.loading = false;
    },
    [getFavorites.rejected]: (state, { payload }) => {
      state.error = true;
      state.loading = false;
    },

    // remove
    [removeFromFavorite.pending]: (state) => {
      state.loading = true;
    },
    [removeFromFavorite.fulfilled]: (state, { payload }) => {
      state.data = payload.data;
      state.favoriteProducts = payload.data.favourite.products;
      state.loading = false;
    },
    [removeFromFavorite.rejected]: (state, { payload }) => {
      state.error = true;
      state.loading = false;
    },

    //empty
    [emptyFavorites.pending]: (state) => {
      state.loading = true;
    },
    [emptyFavorites.fulfilled]: (state, { payload }) => {
      state.data = payload.data;
      state.favoriteProducts = payload.data.favourite.products;
      state.loading = false;
    },
    [emptyFavorites.rejected]: (state, { payload }) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export { getFavorites, emptyFavorites, addToFavorites, removeFromFavorite };
export default slice.reducer;
