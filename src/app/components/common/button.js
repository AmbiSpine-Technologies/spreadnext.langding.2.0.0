// src/components/common/Button.js
import React from 'react';

export default function Button({ children, className = "", onClick, ...props }) {
  return (
    <button
      onClick={onClick}
     
      className={`rounded-full h-10 hover:cursor-pointer px-8 font-semibold bg-[#0013E3] text-white hover:bg-[#0411aa] transition-all active:scale-95 flex items-center justify-center whitespace-nowrap ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}