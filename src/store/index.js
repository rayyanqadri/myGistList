import { configureStore } from "@reduxjs/toolkit";
import gistSlice from "./slices/gistSlice";

const store = configureStore({
    reducer: {
        gists: gistSlice
    }
})

export default store;