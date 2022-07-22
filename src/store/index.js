import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import productsReducer from "./slices/products";
import categoriesReducer from "./slices/categories";
import inspirationsReducer from "./slices/inspirations";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  cart: cartReducer,
  product: productsReducer,
  category: categoriesReducer,
  inspiration: inspirationsReducer,
});

const persistConfig = {
  key: "cart",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
  // Redux Toolkit includes thunk as default middleware
});

export default store;
