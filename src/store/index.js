import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slices/user";
import homeReducer from "./slices/home";
import ordersReducer from "./slices/orders";
import cartReducer from "./slices/cartSlice";
import generalReducer from "./slices/general";
import productsReducer from "./slices/products";
import favoritesReducer from "./slices/favorites";
import categoriesReducer from "./slices/categories";
import spinnerReducer from "src/store/slices/spinner";
import inspirationsReducer from "./slices/inspirations";

import { combineReducers } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  cart: cartReducer,
  user: UserReducer,
  home: homeReducer,
  orders: ordersReducer,
  general: generalReducer,
  spinner: spinnerReducer,
  product: productsReducer,
  favorites: favoritesReducer,
  category: categoriesReducer,
  inspiration: inspirationsReducer,
});

const persistConfig = {
  key: "cart",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

let store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
  // Redux Toolkit includes thunk as default middleware
});

export default store;
