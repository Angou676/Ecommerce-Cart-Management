import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "cart-store",
  initialState: {
    items: [],
    count: 0,
  },
  reducers: {
    setHeading(state, action) {
      state.heading = action.payload;
    },
    setItems(state, action) {
      const newItems = action.payload;
      newItems.forEach((newItem) => {
        const existingItem = state.items.find((item) => item.id === newItem.id);

        if (existingItem) {
          existingItem.count += 1;
          state.count += 1;
        } else {
          state.items.push({ ...newItem, count: 1 });
          state.count += 1;
        }
      });
    },
    incrementItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.count += 1;
        state.count += 1;
      }
    },
    decrementItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem && existingItem.count > 1) {
        existingItem.count -= 1;
        state.count -= 1;
      }
    },
    removeItem(state, action) {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        state.count -= state.items[existingItemIndex].count;
        state.items.splice(existingItemIndex, 1);
      }
    },
    emptyCart(state) {
      state.items = [];
      state.count = 0;
    },
  },
});

export const {
  setHeading,
  setItems,
  incrementItem,
  decrementItem,
  removeItem,
  emptyCart,
} = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
