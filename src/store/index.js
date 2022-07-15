import { configureStore } from "@reduxjs/toolkit"
import products from './slices/products'
import categories from './slices/categories'
import inspirations from './slices/inspirations'


const store = configureStore({
  reducer: {
    products,
    categories,
    inspirations,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
})
export default store

