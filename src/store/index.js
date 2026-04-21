// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import consentReducer from "./consentSlice";

export const store = configureStore({
  reducer: {
    consent: consentReducer,
  },
});