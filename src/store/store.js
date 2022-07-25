import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import productsReducer from "./slices/products";
import categoriesReducer from "./slices/categories";
import inspirationsReducer from "./slices/inspirations";
import favoritesReducer from "./slices/favorites";
import UserReducer from "./slices/user";

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
