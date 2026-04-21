// components/ConsentLoader.jsx
"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setConsent } from "@/store/consentSlice";

export default function ConsentLoader() {
  const dispatch = useDispatch();

  useEffect(() => {
    const saved = localStorage.getItem("cookie_consent");
    if (saved) {
      dispatch(setConsent(JSON.parse(saved)));
    }
  }, []);

  return null;
}