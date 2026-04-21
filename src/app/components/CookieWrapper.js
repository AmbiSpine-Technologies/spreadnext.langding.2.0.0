// // components/CookieWrapper.jsx
// "use client";
// import { useSelector } from "react-redux";
// import CookieBanner from "./CookieBanner";

// export default function CookieWrapper({ children }) {
//   const consent = useSelector((state) => state.consent);

//   return (
//     <>
//       {children}
//       {consent.status === "unknown" && <CookieBanner />}
//     </>
//   );
// }

"use client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setConsent } from "@/store/consentSlice";
import CookieBanner from "./CookieBanner";

export default function CookieWrapper({ children }) {
  const dispatch = useDispatch();
  const consent = useSelector((state) => state.consent);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. LocalStorage se data uthao
    const saved = localStorage.getItem("cookie_consent");
    if (saved) {
      dispatch(setConsent(JSON.parse(saved)));
    }
    // 2. Client-side mount confirm karo
    setMounted(true);
  }, [dispatch]);

  return (
    <>
      {/* Children ko hamesha render hone do, taaki layout shift na ho */}
      {children}

      {/* Banner sirf tab dikhao jab page client par mount ho jaye aur status unknown ho */}
      {mounted && consent.status === "unknown" && (
        <CookieBanner />
      )}
    </>
  );
}