import { configureStore } from "@reduxjs/toolkit";
import iconslice from "./icon-slice";

const store = configureStore({
  reducer: {
    icon: iconslice.reducer,
    devTools: process.env.NODE_ENV !== "production",
  },
});

export default store;
