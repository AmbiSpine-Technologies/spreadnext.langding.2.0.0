"use client";
import { useState, useEffect } from "react";

// Formatting Utility Function
const formatValue = (num, suffix) => {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(0)}k${suffix}`;
  }
  return `${num}${suffix}`;
};

export const Counter = ({ target, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    // Calculate total frames (assuming 60fps)
    const totalFrames = Math.round(duration / 16);
    const increment = end / totalFrames;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span className="tabular-nums">
      {formatValue(count, suffix)}
    </span>
  );
};