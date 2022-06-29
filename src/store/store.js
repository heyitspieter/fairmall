import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
  // Redux Toolkit includes thunk as default middleware
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export const RootState = store.getState;

// Inferred type: {cart: CartState}
export const AppDispatch = store.dispatch;
