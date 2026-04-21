// components/AnalyticsLoader.jsx
"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function loadGA(id) {
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag("js", new Date());
  gtag("config", id);
}

export default function AnalyticsLoader() {
  const consent = useSelector((state) => state.consent);

  useEffect(() => {
    if (consent.analytics) {
      loadGA(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
    }
  }, [consent.analytics]);

  return null;
}