import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lineItems: [],
};

const addLineItemReducer = (state, action) => {
  const index = state.lineItems.findIndex((lineItem) => lineItem.product_id === action.payload.product_id);
  // if index === -1, id is not in lineItems array
  if (index === -1) {
    // add line item to lineItems array
    state.lineItems = [...state.lineItems, action.payload];
  } else {
    // update the lineItems[index] quantity
    state.lineItems[index].quantity += 1;
    state.lineItems[index].total = state.lineItems[index].price * state.lineItems[index].quantity;
  }
};

const decrementQuantityReducer = (state, action) => {
  const index = state.lineItems.findIndex((lineItem) => lineItem.product_id === action.payload.product_id);
  // if index === -1, id is not in lineItems array
  if (index >= 0 && state.lineItems[index].quantity > 1) {
    // update the lineItems[index] quantity
    state.lineItems[index].quantity -= 1;
    state.lineItems[index].total = state.lineItems[index].price * state.lineItems[index].quantity;
  }
};

const removeLineItemReducer = (state, action) => {
  const index = state.lineItems.findIndex((lineItem) => lineItem.product_id === action.payload.product_id);
  // if index === -1, id is not in lineItems array
  if (index >= 0) {
    state.lineItems.splice(index, 1);
  }
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addLineItem: addLineItemReducer,
    decrementLineItemQuantity: decrementQuantityReducer,
    removeLineItem: removeLineItemReducer,
    resetCartState() {
      return initialState;
    },
  },
});

// reducers/actions go in here in order to import them into components
export const { addLineItem, decrementLineItemQuantity, removeLineItem, resetCartState } = cartSlice.actions;

export default cartSlice.reducer;
