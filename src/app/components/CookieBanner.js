// components/CookieBanner.jsx
"use client";
import { useDispatch } from "react-redux";
import { setConsent } from "@/store/consentSlice";

export default function CookieBanner() {
  const dispatch = useDispatch();
const API_BASE_URL = "http://localhost:5000/api" || process.env.NEXT_PUBLIC_API_BASE_URL;

  const saveConsent = async (data) => {
    // localStorage
    localStorage.setItem("cookie_consent", JSON.stringify(data));

    // cookie
    document.cookie = `cookie_consent=${JSON.stringify(data)}; path=/; max-age=31536000`;

    // backend (optional if logged in)
let res = await fetch(`${API_BASE_URL}/cookie/consent`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});

    dispatch(setConsent(data));
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-xl p-6 w-[90%] max-w-md">
      <h2 className="font-semibold text-lg">Cookie Settings</h2>

      <p className="text-sm text-gray-600 mt-2">
        We use cookies to improve experience and analytics.
      </p>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() =>
            saveConsent({ status: "rejected", analytics: false, marketing: false })
          }
          className="flex-1 border p-2 rounded"
        >
          Reject
        </button>

        <button
          onClick={() =>
            saveConsent({ status: "accepted", analytics: true, marketing: true })
          }
          className="flex-1 bg-black text-white p-2 rounded"
        >
          Accept
        </button>
      </div>
    </div>
  );
}