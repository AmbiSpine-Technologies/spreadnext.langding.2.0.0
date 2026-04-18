// "use client";

// import React, { useEffect, useState } from "react";
// import { getTrendingJobs } from "../../utils/jobApi";
// import Link from "next/link"; // Assuming Next.js based on your stack

// const TrendingJobs = () => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchTrending = async () => {
//       const res = await getTrendingJobs();
//       if (res.success) {
//         setJobs(res.data);
//       }
//       setLoading(false);
//     };
//     fetchTrending();
//   }, []);

//   if (loading) {
//     return (
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
//         {[...Array(6)].map((_, i) => (
//           <div key={i} className="h-40 bg-gray-200 rounded-xl"></div>
//         ))}
//       </div>
//     );
//   }

//   if (jobs.length === 0) return null;
//   console.log(jobs)
//   return (
//     <section className="py-12">
//       <div className="flex items-center justify-between mb-8">
//         <div>
//           <h2 className="text-3xl font-bold text-gray-900">Trending Opportunities</h2>
//           <p className="text-gray-500 mt-2">Most viewed and applied positions right now</p>
//         </div>
//         <Link 
//           href="/jobs" 
//           className="text-[#0013E3] font-semibold hover:underline"
//         >
//           View all jobs →
//         </Link>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {jobs.slice(0,3).map((job) => (
//           <div 
//             key={job._id} 
//             className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
//           >
//             {/* Trending Badge */}
//             <div className="absolute top-4 right-4 flex items-center gap-1 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
//               <span>🔥 Trending</span>
//             </div>

//             <div className="flex items-start gap-4 mb-4">
//               <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl font-bold ${job.companyColor || 'bg-blue-600'}`}>
//                 {job.companyLogo ? (
//                   <img src={job.companyLogo} alt={job.company} className="w-full h-full object-contain rounded-lg" />
//                 ) : (
//                   job.company.charAt(0)
//                 )}
//               </div>
//               <div>
//                 <h3 className="font-bold text-lg group-hover:text-[#0013E3] transition-colors line-clamp-1">
//                   {job.title}
//                 </h3>
//                 <p className="text-gray-500 text-sm">{job.company} • {job.location}</p>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-2 mb-6">
//               <span className=" text-blue-700 px-3 py-1 rounded-md text-xs font-medium">
//                 {job.workMode}
//               </span>
//               <span className="bg-green-50 text-green-700 px-3 py-1 rounded-md text-xs font-medium">
//                 {job.salary}
//               </span>
//             </div>

//             <div className="flex items-center justify-between mt-auto">
//               <div className="text-xs text-gray-400">
//                 {job.views} views • {job.applicationsCount} applicants
//               </div>
//               <Link
//                 href={`/jobs/${job._id}`}
//                 className="rounded-full h-11 px-8 font-semibold bg-[#0013E3] text-white hover:bg-blue-800 flex items-center justify-center transition-colors"
//               >
//                 Apply Now
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TrendingJobs;

"use client";

import React, { useEffect, useState } from "react";
import { getTrendingJobs } from "../../utils/jobApi";
import Link from "next/link";

const TrendingJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("treainding jobs", jobs)
  useEffect(() => {
    const fetchTrending = async () => {
      const res = await getTrendingJobs();
      if (res.success) setJobs(res.data);
      setLoading(false);
    };
    fetchTrending();
  }, []);

  if (loading) return <div className="p-10 text-center animate-pulse text-gray-400">Loading Trending Jobs...</div>;
  if (jobs.length === 0) return null;

  return (
    <section className="py-16 px-4 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div className="text-center w-full">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Trending Opportunities</h2>
            <p className="text-gray-500 mt-2 text-lg">Top picked positions based on high engagement</p>
          </div>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.slice(0, 3).map((job) => (
            <div 
              key={job._id} 
              className="group bg-white border border-gray-100 rounded-[24px] p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              {/* Top Row: Logo & Badge */}
              <div className="flex justify-between items-start mb-6">
<div className="w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden bg-white border border-gray-100 shadow-sm relative mb-4">
  {job.companyLogo ? (
    <img 
      src={job.companyLogo} 
      alt={job.company} 
      // Important for S3 images:
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
      className="w-full h-full object-contain p-2 block"
      onError={(e) => {
        console.log("Logo load failed for:", job.company);
        e.target.style.display = 'none';
        e.target.parentElement.classList.add('bg-[#0013E3]');
        e.target.parentElement.innerHTML = `<span class="text-white font-bold text-2xl">${job.company.charAt(0)}</span>`;
      }}
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center bg-[#0013E3] text-white font-bold text-2xl uppercase">
      {job.company.charAt(0)}
    </div>
  )}
</div>
                <span className="flex items-center gap-1.5 bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider border border-orange-100">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-ping"></span>
                  Trending
                </span>
              </div>

              {/* Job Info */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0013E3] transition-colors line-clamp-1">
                  {job.title}
                </h3>
                <p className="text-gray-500 font-medium mt-1 truncate">{job.company}</p>
                <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  {job.location}
                </div>
              </div>

              {/* Tags Section */}
              <div className="flex flex-wrap gap-2 mt-6">
                <div className="px-3 py-1.5  text-[#0013E3] text-xs font-bold rounded-lg border border-blue-100">
                  {job.workMode}
                </div>
                <div className="px-3 py-1.5  text-emerald-700 text-xs font-bold rounded-lg border border-emerald-100">
                   {job.salary}
                </div>
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-gray-50"></div>

              {/* Bottom Row: Stats & Action */}
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 font-medium tracking-tight">
                    <b className="text-gray-900">{job.views}</b> views
                  </span>
                  <span className="text-xs text-gray-400 font-medium tracking-tight">
                    <b className="text-gray-900">{job.applicationsCount}</b> applied
                  </span>
                </div>
                
                <Link
                  href={`http://spreadnext.com/jobs/${job._id}`}
                  className="rounded-full h-8 px-7 font-bold bg-[#0013E3] text-white hover:bg-blue-800 transition-all shadow-md shadow-blue-100 active:scale-95 flex items-center justify-center"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      <div className="text-center mt-10">
  <Link href="http://spreadnext.com/jobs" className="hidden md:block text-[#0013E3] font-bold hover:underline underline-offset-4">
            View all jobs →
          </Link>
      </div>
     
    </section>
  );
};

export default TrendingJobs;