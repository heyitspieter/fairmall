import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as url from "../../config/url";
// import axios from 'axios'
import axios from "../../config/axios";

const registerUser = createAsyncThunk("user/registerUser", async (data, { rejectWithValue }) => {
  const config = {
    method: "post",
    url: url.registerUser,
    headers: {
      "Content-Type": "application/json",
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

const loginuser = createAsyncThunk("user/loginuser", async (data, { rejectWithValue }) => {
  const config = {
    method: "post",
    url: url.loginuser,
    headers: {
      "Content-Type": "application/json",
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

const getProfile = createAsyncThunk("user/getProfile", async (_, { rejectWithValue }) => {
  const token = localStorage.getItem("token");
  const config = {
    method: "get",
    url: url.getProfile,
    headers: {
      "Content-Type": "application/json",
      "x-access-token": `${token}`,
    },
  };
  try {
    const response = await axios(config);
    console.log("res", response);
    return response;
  } catch (err) {
    if (!err.response) {
      throw err;
    }
    return rejectWithValue(err.response.data);
  }
});

const updateProfile = createAsyncThunk("user/updateProfile", async (data, { rejectWithValue }) => {
  const token = localStorage.getItem("token");
  const config = {
    method: "put",
    url: url.updateProfile,
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

const slice = createSlice({
  name: "user",

  initialState: {
    data: {},
    status: false,
    loading: false,
    error: null,
    userData: {},
  },

  reducers: {},

  extraReducers: {
    //registerUser
    [registerUser.pending]: (state) => {
      state.loading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.userData = payload.data.user;
      state.loading = false;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.error = true;
      state.loading = false;
    },

    //get favorites
    [loginuser.pending]: (state) => {
      state.loading = true;
    },
    [loginuser.fulfilled]: (state, { payload }) => {
      state.userData = payload.data.user;
      state.loading = false;
    },
    [loginuser.rejected]: (state, { payload }) => {
      state.error = true;
      state.loading = false;
    },

    [getProfile.pending]: (state) => {
      state.loading = true;
    },
    [getProfile.fulfilled]: (state, { payload }) => {
      const { user, address } = payload.data;
      const getUser = {
        user: {
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          phone: user.phone,
          address1: address?.address1 || "",
          address2: address?.address2 || "",
          country: address?.country || "",
          state: address?.state || "",
          city: address?.city || "",
          postcode: address?.postcode || "",
        },
      };
      state.userData = getUser;
      state.loading = false;
    },
    [getProfile.rejected]: (state, { payload }) => {
      state.error = true;
      state.loading = false;
    },

    [updateProfile.pending]: (state) => {
      state.loading = true;
    },
    [updateProfile.fulfilled]: (state, { payload }) => {
      const { user, address } = payload.data;
      const updatedUser = {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phone: user.phone,
        address1: address.address1,
        address2: address.address2,
        country: address.country,
        state: address.state,
        city: address.city,
        postcode: address.postcode,
      };
      state.userData = updatedUser;
      state.data = payload.data;
      state.loading = false;
    },
    [updateProfile.rejected]: (state, { payload }) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export { loginuser, registerUser, getProfile, updateProfile };
export default slice.reducer;
