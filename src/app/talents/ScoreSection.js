// "use client";
// import React from "react";

// export default function () {
//   return (
//     <section className="w-full bg-[#F3F4F6] py-20 px-6 lg:px-24">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

//         {/* LEFT SIDE */}
//         <div className="relative flex flex-col items-center">

//           {/* TOP BAR */}
//           <div className="w-full max-w-[320px] mb-6">
//             <div className="flex justify-between text-sm text-gray-600 mb-2">
//               <span>Skills Completeness</span>
//               <span>70%</span>
//             </div>
//             <div className="w-full h-2 bg-gray-300 rounded-full">
//               <div className="w-[70%] h-full bg-[#FF6A3D] rounded-full"></div>
//             </div>
//           </div>

//           {/* IMAGE */}
//           <img
//             src="/employer2.png" // replace with your image
//             alt="score illustration"
//             className="w-[260px] sm:w-[300px] md:w-[340px]"
//           />

//           {/* BOTTOM BARS */}
//           <div className="w-full max-w-[320px] mt-6 space-y-5">

//             {/* Job alignment */}
//             <div>
//               <div className="flex justify-between text-sm text-gray-600 mb-2">
//                 <span>Job market alignment</span>
//                 <span>66%</span>
//               </div>
//               <div className="w-full h-2 bg-gray-300 rounded-full">
//                 <div className="w-[66%] h-full bg-[#27C4C9] rounded-full"></div>
//               </div>
//             </div>

//             {/* Profile strength */}
//             <div>
//               <div className="flex justify-between text-sm text-gray-600 mb-2">
//                 <span>Profile Strength</span>
//                 <span>50%</span>
//               </div>
//               <div className="w-full h-2 bg-gray-300 rounded-full">
//                 <div className="w-[50%] h-full bg-[#F4A300] rounded-full"></div>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="max-w-xl">

//           <h2 className="text-3xl md:text-4xl font-bold text-[#1B1B24] leading-tight mb-6">
//             Know exactly where you stand — before employers do
//           </h2>

//           <p className="text-gray-500 text-lg leading-relaxed mb-8">
//             Most job seekers apply blind. They don't know why they're getting
//             rejected. The{" "}
//             <span className="text-[#0013E3] font-semibold">
//               Spreadnext Career Readiness Score
//             </span>{" "}
//             changes that. It analyses your profile across skills, projects,
//             experience, and goals — and tells you exactly what to fix before
//             your next application.
//           </p>

//           <button className="bg-[#C9D6E4] hover:bg-[#b8c7d8] text-[#1B1B24] px-8 py-3 rounded-full font-semibold">
//             See Your Score
//           </button>

//         </div>

//       </div>
//     </section>
//   );
// }

"use client";
import React from "react";

export default function ScoreSection() {
  return (
    <section className="w-full bg-[#EEF0F3] py-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20 px-6">

        {/* LEFT SIDE (ILLUSTRATION + BARS) */}
        <div className="relative w-full lg:w-[45%] flex justify-center">

          {/* TOP BAR */}
          <div className="absolute top-0 left-10 w-[260px]">
            <div className="flex justify-between text-[13px] text-gray-600 mb-1">
              <span>Skills Completeness</span>
              <span>70%</span>
            </div>
            <div className="h-[6px] bg-gray-300 rounded-full">
              <div className="h-full w-[70%] bg-[#FF6A3D] rounded-full"></div>
            </div>
          </div>

          {/* IMAGE */}
          <img
        src="/employer2.png" 
            alt="illustration"
            className="w-[260px] mt-10"
          />

          {/* BOTTOM LEFT BAR */}
          <div className="absolute bottom-6 left-0 w-[260px]">
            <div className="flex justify-between text-[13px] text-gray-600 mb-1">
              <span>Job market alignment</span>
              <span>66%</span>
            </div>
            <div className="h-[6px] bg-gray-300 rounded-full">
              <div className="h-full w-[66%] bg-[#27C4C9] rounded-full"></div>
            </div>
          </div>

          {/* BOTTOM RIGHT BAR */}
          <div className="absolute bottom-[-30px] left-24 w-[260px]">
            <div className="flex justify-between text-[13px] text-gray-600 mb-1">
              <span>Profile Strength</span>
              <span>50%</span>
            </div>
            <div className="h-[6px] bg-gray-300 rounded-full">
              <div className="h-full w-[50%] bg-[#F4A300] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="w-full lg:w-[55%] max-w-xl">

          <h2 className="text-[32px] md:text-[38px] font-bold text-[#1B1B24] leading-tight mb-5">
            Know exactly where you stand — before employers do
          </h2>

          <p className="text-gray-500 text-[16px] leading-relaxed mb-7">
            Most job seekers apply blind. They don't know why they're getting
            rejected. The{" "}
            <span className="text-[#0013E3] font-semibold">
              Spreadnext Career Readiness Score
            </span>{" "}
            changes that. It analyses your profile across skills, projects,
            experience, and goals — and tells you exactly what to fix before your
            next application.
          </p>

          <button className="bg-[#C9D6E4] text-[#1B1B24]  px-7 py-3 rounded-full font-medium hover:bg-[#b8c7d8] transition">
            See Your Score
          </button>

        </div>
      </div>
    </section>
  );
}