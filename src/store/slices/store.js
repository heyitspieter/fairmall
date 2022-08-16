import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productsReducer from "./products";
import categoriesReducer from "./categories";
import inspirationsReducer from "./inspirations";
import favoritesReducer from "./favorites";
import UserReducer from "./user";
import ordersReducer from "./orders";

import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  cart: cartReducer,
  product: productsReducer,
  category: categoriesReducer,
  inspiration: inspirationsReducer,
  favorites: favoritesReducer,
  user: UserReducer,
  orders: ordersReducer,
});

const persistConfig = {
  key: "cart",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
  // Redux Toolkit includes thunk as default middleware
});

export default store;
