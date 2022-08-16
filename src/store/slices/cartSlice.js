import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  lineItems: [],
  tax: null,
  subTotal: 0,
  total: 0,
  rate: 0,
  shippingDetails: null,
};

const addLineItemReducer = (state, action) => {
  const index = state.lineItems.findIndex((lineItem) => lineItem.product_id === action.payload.product_id && lineItem.variation_id === action.payload.variation_id);
  // if index === -1, id is not in lineItems array
  if (index === -1) {
    // add line item to lineItems array
    state.lineItems = [...state.lineItems, action.payload];
    toast.success("Item has been added to cart");
  } else {
    // update the lineItems[index] quantity
    state.lineItems[index].quantity += 1;
    state.lineItems[index].total = state.lineItems[index].price * state.lineItems[index].quantity;
    toast.success("Item quantity has been updated in cart");
  }
};

const decrementQuantityReducer = (state, action) => {
  const index = state.lineItems.findIndex((lineItem) => lineItem.product_id === action.payload.product_id && lineItem.variation_id === action.payload.variation_id);
  // if index === -1, id is not in lineItems array
  if (index >= 0 && state.lineItems[index].quantity > 1) {
    // update the lineItems[index] quantity
    state.lineItems[index].quantity -= 1;
    state.lineItems[index].total = state.lineItems[index].price * state.lineItems[index].quantity;
    toast.success("Item quantity has been reduced from cart");
  }
};

const removeLineItemReducer = (state, action) => {
  const index = state.lineItems.findIndex((lineItem) => lineItem.product_id === action.payload.product_id && lineItem.variation_id === action.payload.variation_id);
  // if index === -1, id is not in lineItems array
  if (index >= 0) {
    state.lineItems.splice(index, 1);
    toast.success("Item has been removed from cart");
  }
};

const setCartTax = (state, action) => {
  state.tax = action.payload;
};

const setCartSubTotal = (state, { payload }) => {
  state.subTotal = payload.subTotal;
  state.total = payload.total;
  state.rate = payload.rate;
};

const setShippingDetails = (state, { payload }) => {
  state.shippingDetails = payload;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addLineItem: addLineItemReducer,
    decrementLineItemQuantity: decrementQuantityReducer,
    removeLineItem: removeLineItemReducer,
    setTax: setCartTax,
    cartSubTotal: setCartSubTotal,
    shippingDetails: setShippingDetails,
    resetCartState() {
      return initialState;
    },
  },
});

// reducers/actions go in here in order to import them into components
export const { addLineItem, decrementLineItemQuantity, removeLineItem, resetCartState, setTax, cartSubTotal, shippingDetails } = cartSlice.actions;

export default cartSlice.reducer;
