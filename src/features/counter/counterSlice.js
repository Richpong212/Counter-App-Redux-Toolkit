/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
// Part-1:
// Create counterSlice
// Create increment, incrementByValue, decrement, reset action creators inside reducer
// export reducer and actions

import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        incrementByValue: (state, action) => {
            state.count += action.payload;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        }
    }
});

export const { increment, incrementByValue, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;