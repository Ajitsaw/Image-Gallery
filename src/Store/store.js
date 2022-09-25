import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "../Features/Images/imageSlice";

export const store = configureStore({
    reducer: {
        allImages: imageSlice,
    },
});
