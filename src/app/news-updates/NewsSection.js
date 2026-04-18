"use client";
import React, { useState, useMemo, useRef, useEffect } from "react";
import SearchBox from "../components/common/SearchBox";
import { motion, AnimatePresence } from "framer-motion";

const newsItems = [
  {
    id: 1,
    date: "Apr 13",
    title: "A career platform built for India's next generation",
    desc: "Most TPOs manage 500+ students across drives, offers, and follow-ups on Excel. Nothing is connected. Everything is manual.",
  },
  {
    id: 2,
    date: "Apr 13",
    title: "AI is transforming hiring process",
    desc: "Companies are now using AI tools to screen resumes and shortlist candidates faster.",
  },
  {
    id: 3,
    date: "Apr 13",
    title: "Campus placements are evolving",
    desc: "Colleges are shifting towards skill-based hiring instead of traditional marks-based selection.",
  },
];

export default function NewsSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionRef = useRef(null);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        suggestionRef.current &&
        !suggestionRef.current.contains(e.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (title) => {
    setSearchQuery(title);
    setShowSuggestions(false);
  };

  const filteredNews = useMemo(() => {
    if (!searchQuery.trim()) return newsItems;

    const lowerQuery = searchQuery.toLowerCase();
    return newsItems.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.desc.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery]);

  return (
    <section className="py-20 px-6 lg:px-24 bg-white">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 my-10">
        <h2 className="text-3xl lg:text-4xl font-medium text-[#1B1B24]">
          News & Updates
        </h2>

        {/* SEARCH WITH SUGGESTIONS */}
        <div className="relative w-full md:w-[400px]" ref={suggestionRef}>
          <SearchBox
            placeholder="Search news..."
            value={searchQuery}
            onChange={(val) => {
              setSearchQuery(val);
              setShowSuggestions(true);
            }}
          />

          <AnimatePresence>
            {showSuggestions && searchQuery && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden"
              >
                {filteredNews.length > 0 ? (
                  filteredNews.slice(0, 5).map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleSelect(item.title)}
                      className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm transition"
                    >
                      {item.title}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-3 text-gray-400 text-sm">
                    No results found
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-16 justify-between items-start">
        {/* LEFT IMAGE */}
        <div className="group cursor-pointer w-full lg:w-[550px] flex-shrink-0">
          <div className="relative w-full h-[579px] rounded-[20px] overflow-hidden mb-5">
            <img
              src="/India-next-generation.png"
              alt="Main News"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <h3 className="text-2xl font-medium text-black mb-2 leading-snug">
            A career platform built for India's next generation
          </h3>

          <p className="text-base text-gray-500 leading-relaxed">
            Most TPOs manage 500+ students across drives, offers, and follow-ups
            on Excel. Nothing is connected. Everything is manual.
          </p>
        </div>

        {/* RIGHT LIST */}
        <div className="w-full lg:w-[45%]">
          <div className="space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredNews.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="border-b border-gray-200 pb-4"
                >
                  <h3 className="font-medium text-xl text-black leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm line-clamp-2 mt-1">
                    {item.desc}
                  </p>

                  <span className="text-xs text-gray-400 block mt-2 text-right">
                    {item.date}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredNews.length === 0 && (
              <p className="text-gray-400 text-center py-10">
                No news found
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}