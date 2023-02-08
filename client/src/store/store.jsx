import {configureStore } from "@reduxjs/toolkit";
import {categories} from "./service/categoryService.jsx";

export const store = configureStore({
    reducer: {
        [categories.reducerPath]: categories.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categories.middleware),
});