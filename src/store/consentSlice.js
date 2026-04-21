import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "unknown", // Hamesha "unknown" se start karo
  analytics: false,
  marketing: false,
};

const consentSlice = createSlice({
  name: "consent",
  initialState,
  reducers: {
    setConsent: (state, action) => {
      const newState = { ...state, ...action.payload };
      // State update ke saath saath localStorage update karna safe hai
      if (typeof window !== "undefined") {
        localStorage.setItem("cookie_consent", JSON.stringify(newState));
      }
      return newState;
    },
  },
});

export const { setConsent } = consentSlice.actions;
export default consentSlice.reducer;