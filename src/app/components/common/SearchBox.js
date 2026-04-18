"use client";
import React from "react";
import { Search as SearchIcon } from "lucide-react";

export default function SearchBox({ placeholder = "Search", onChange }) {
  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder={placeholder}
        // CHANGE: Pass e.target.value to the onChange prop
        onChange={(e) => onChange(e.target.value)} 
        className={`w-full py-3 px-5 pr-12 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 text-gray-600 placeholder:text-gray-400 text-lg transition-all shadow-sm`}
      />
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
        <SearchIcon size={20} strokeWidth={1.5} />
      </div>
    </div>
  );
}