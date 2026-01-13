import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        removeItems: (state, action) => {
            state.items.pop();
        },
        clearItems: (state, action) => {
            state.items.length =0; // []
        },
    }
})

export const {addItem, removeItems, clearItems} = cartSlice.actions;

export default cartSlice.reducer;