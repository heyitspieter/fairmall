import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "spinner",
  initialState: {
    message: null,
    visibility: false,
  },
  reducers: {
    showSpinner: (state, action) => {
      return {
        ...state,
        message: action.payload?.message || "",
        visibility: true,
      };
    },
    hideSpinner: (state, action) => {
      return {
        ...state,
        message: null,
        visibility: false,
      };
    },
  },
});

const { showSpinner, hideSpinner } = slice.actions;

export const spinner = { show: showSpinner, hide: hideSpinner };

export default slice.reducer;
