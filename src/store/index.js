import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import productsReducer from "./slices/products";
import categoriesReducer from "./slices/categories";
import inspirationsReducer from "./slices/inspirations";
import favoritesReducer from "./slices/favorites";
import UserReducer from "./slices/user";
import ordersReducer from "./slices/orders";
import generalReducer from "./slices/general";

import { combineReducers } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  cart: cartReducer,
  product: productsReducer,
  category: categoriesReducer,
  inspiration: inspirationsReducer,
  favorites: favoritesReducer,
  user: UserReducer,
  orders: ordersReducer,
  general: generalReducer,
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
