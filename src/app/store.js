/* eslint-disable prettier/prettier */
// Part-2:
// Create store
// export store

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})