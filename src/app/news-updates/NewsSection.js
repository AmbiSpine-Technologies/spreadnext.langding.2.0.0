// "use client";
// import React, { useState, useMemo } from "react";
// import SearchBox from "../components/common/SearchBox";
// import { motion, AnimatePresence } from "framer-motion";

// const newsItems = [
//   { id: 1, date: "Apr 13", title: "A career platform built for India's next generation", desc: "Most TPOs manage 500+ students across drives, offers, and follow-ups on Excel. Nothing is connected. Everything is manual." },
//   { id: 2, date: "Apr 13", title: "A career platform built for India's next generation", desc: "Most TPOs manage 500+ students across drives, offers, and follow-ups on Excel. Nothing is connected. Everything is manual." },
//   { id: 3, date: "Apr 13", title: "A career platform built for India's next generation", desc: "Most TPOs manage 500+ students across drives, offers, and follow-ups on Excel. Nothing is connected. Everything is manual." },
// ];

// export default function NewsSection() {
//           const [searchQuery, setSearchQuery] = useState("");

//   // Filtering Logic
// const filteredNews = useMemo(() => {
//     // Agar query empty hai toh filtering skip karke performance bachayein
//     if (!searchQuery.trim()) return newsItems;

//     const lowerQuery = searchQuery.toLowerCase();

//     return newsItems.filter((item) => {
//       return (
//         item.title.toLowerCase().includes(lowerQuery) ||
//         item.desc.toLowerCase().includes(lowerQuery)
//       );
//     });
//   }, [searchQuery, newsItems]);

//   return (
//     <section className="py-20 lg:px-24 bg-white">
//       <div>
//         {/* Header with Search */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-16   my-13">
//           <h2 className="text-3xl font-bold text-[#1B1B24]">News & Updates</h2>
//           <SearchBox placeholder="Search news by title or content..." 
//             value={searchQuery}
//             onChange={setSearchQuery} />
//         </div>

//         <div className="flex flex-col lg:flex-row gap-20">
//           {/* Main Featured Post (Left) */}
//           <div className=" group cursor-pointer w-full lg:w-[40%]">
//             <div className="relative  h-[500px] rounded-[2rem] overflow-hidden mb-6 ">
//               <img 
//                 src="/India-next-generation.png" // image_64ca04.jpg placement
//                 alt="Main News" 
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//               />
//             </div>
//             <h3 className="text-xl font-bold text-[#1B1B24] mb-3 leading-tight">
//               A career platform built for India's next generation
//             </h3>
//             <p className="text-gray-500 text-sm leading-relaxed">
//               Most TPOs manage 500+ students across drives, offers, and follow-ups on Excel. Nothing is connected. Everything is manual.
//             </p>
//           </div>

//           {/* News Sidebar List (Right) */}
//           <div className="w-full lg:w-[50%]">
//             <div className="space-y-4">
//                     <AnimatePresence mode='popLayout'>
//           {filteredNews.map((item) => (
//             <motion.div
//               layout // Smooth transition when list changes
//               key={item.id}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               transition={{ duration: 0.2 }}
//             >
//               {/* News Item Card Design base on */}
//               <div className="border-b border-gray-100 pb-4">
//                 <h3 className="font-bold text-2xl text-black">{item.title}</h3>
//                 <p className="text-gray-500 text-lg line-clamp-2">{item.desc}</p>
//                 <span className="text-sm text-right text-gray-400 block mt-2">{item.date}</span>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>

//         {/* Empty State */}
//         {filteredNews.length === 0 && (
//           <motion.p 
//             initial={{ opacity: 0 }} 
//             animate={{ opacity: 1 }} 
//             className="text-center text-gray-400 py-10"
//           >
//             No results found for "{searchQuery}"
//           </motion.p>
//         )}

            
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useState, useMemo } from "react";
import SearchBox from "../components/common/SearchBox";
import { motion, AnimatePresence } from "framer-motion";

const newsItems = [
  { id: 1, date: "Apr 13", title: "A career platform built for India's next generation", desc: "Most TPOs manage 500+ students across drives, offers, and follow-ups on Excel. Nothing is connected. Everything is manual." },
  { id: 2, date: "Apr 13", title: "A career platform built for India's next generation", desc: "Most TPOs manage 500+ students across drives, offers, and follow-ups on Excel. Nothing is connected. Everything is manual." },
  { id: 3, date: "Apr 13", title: "A career platform built for India's next generation", desc: "Most TPOs manage 500+ students across drives, offers, and follow-ups on Excel. Nothing is connected. Everything is manual." },
];

export default function NewsSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = useMemo(() => {
    // Agar searchQuery string nahi hai ya empty hai
    if (typeof searchQuery !== 'string' || !searchQuery.trim()) {
        return newsItems;
    }

    const lowerQuery = searchQuery.toLowerCase();
    return newsItems.filter((item) => 
        item.title.toLowerCase().includes(lowerQuery) || 
        item.desc.toLowerCase().includes(lowerQuery)
    );
}, [searchQuery, newsItems]);
  return (
    <section className="py-20 px-6 lg:px-24 bg-white">
    
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 my-10">
          <h2 className=" text-3xl lg:text-4xl font-bold text-[#1B1B24]">
            News & Updates
          </h2>

          <SearchBox
            placeholder="Search news by title or content..."
            value={searchQuery}
            onChange={setSearchQuery}
          />
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

            <h3 className="text-2xl lg:text-3xl font-semibold text-[#000000] mb-2 leading-snug">
              A career platform built for India's next generation
            </h3>

            <p className="text-base text-gray-500 lg:text-lg leading-relaxed">
              Most TPOs manage 500+ students across drives, offers, and follow-ups on Excel. Nothing is connected. Everything is manual.
            </p>
          </div>

          {/* RIGHT LIST */}
          <div className="w-full lg:w-[45%]">
            <div className="space-y-1 lg:space-y-6">

              <AnimatePresence mode="popLayout">
                {filteredNews.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="border-b border-gray-200"
                  >
                    <h3 className="font-semibold text-2xl  lg:text-3xl text-black leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-sm lg:text-lg line-clamp-2 mt-1">
                      {item.desc}
                    </p>

                    <span className="text-xs text-gray-400 block mt-2 text-right">
                      {item.date}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* EMPTY */}
              {filteredNews.length === 0 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-gray-400 py-10"
                >
                  No results found for "{searchQuery}"
                </motion.p>
              )}
            </div>
          </div>

        </div>

    </section>
  );
}