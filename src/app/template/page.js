// "use client";
// import { useState, useMemo } from 'react';
// import FilterDropdown from '@/app/components/template/FilterDropdown'
// import TemplateCard from '@/app/components/template/TemplateCard';
// import FilterSidebar from "@/app/components/template/FilterSidebar"

// const FILTER_OPTIONS = {
//   careerField: ["Administrative", "Business & Finance", "Customer Service", "Education", "Healthcare", "Leadership"],
//   level: ["Student", "Entry Level", "Experience"],
//   style: ["Modern", "Creative", "Professional", "Simple"],
//   layout: ["One Column", "Two Column", "Photo", "No Photo"],
//   color: ["#3B82F6", "#EF4444", "#10B981", "#F59E0B", "#A855F7", "#1E293B", "#64748B"]
// };

// const TEMPLATES_DATA = [
//   {
//     id: "res-001",
//     name: "Black and White Simple Professional",
//     careerField: "Technology",
//     level: "Experience",
//     style: "Professional",
//     layout: "One Column",
//     pages: "One Page",
//     hasPhoto: false,
//     color: "#000000",
//     tags: ["ATS-Friendly", "Popular"],
//     thumbnail: "/template/Black and White Simple Professional Resume.png"
//   },
//   {
//     id: "res-002",
//     name: "Professional Modern CV",
//     careerField: "Marketing",
//     level: "Experience",
//     style: "Modern",
//     layout: "Two Column",
//     pages: "One Page",
//     hasPhoto: true,
//     color: "#1E293B",
//     tags: ["Popular"],
//     thumbnail: "/template/Professional Modern CV Resume.png"
//   },
//   {
//     id: "res-003",
//     name: "White Brown Minimalist Modern",
//     careerField: "Business & Finance",
//     level: "Entry Level",
//     style: "Minimalist",
//     layout: "One Column",
//     pages: "One Page",
//     hasPhoto: true,
//     color: "#64748B",
//     tags: ["Free"],
//     thumbnail: "/template/White Brown Minimalist Modern Data Analyst Resume Document.png"
//   },
//   {
//     id: "res-004",
//     name: "Black White Professional Minimalist",
//     careerField: "Technology",
//     level: "Experience",
//     style: "Minimalist",
//     layout: "One Column",
//     pages: "One Page",
//     hasPhoto: false,
//     color: "#000000",
//     tags: ["Free", "ATS-Friendly"],
//     thumbnail: "/template/Black White Professional Minimalist Resume.png"
//   },
//   {
//     id: "res-005",
//     name: "Blue and Gray Simple Professional (V1)",
//     careerField: "Marketing",
//     level: "Experience",
//     style: "Professional",
//     layout: "Two Column",
//     pages: "One Page",
//     hasPhoto: false,
//     color: "#3B82F6",
//     tags: ["Popular"],
//     thumbnail: "/template/Blue and Gray Simple Professional CV Resume (1).png"
//   },
//   {
//     id: "res-006",
//     name: "Blue and Gray Simple Professional (V2)",
//     careerField: "Marketing",
//     level: "Experience",
//     style: "Professional",
//     layout: "Two Column",
//     pages: "One Page",
//     hasPhoto: false,
//     color: "#3B82F6",
//     tags: ["ATS-Friendly"],
//     thumbnail: "/template/Blue and Gray Simple Professional CV Resume.png"
//   },

// ];

// export default function TemplatesPage() {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const [activeFilters, setActiveFilters] = useState({
//     careerField: [],
//     level: [],
//     style: [],
//     layout: [],
//     pages: [],
//     photo: [],
//     tags: [],
//     color: [] // Fixed: Added color to initial state
//   });

//   // THE FILTER ENGINE
//   const filteredTemplates = useMemo(() => {
//     return TEMPLATES_DATA.filter((item) => {
//       return Object.keys(activeFilters).every((key) => {
//         const selectedValues = activeFilters[key];
//         if (selectedValues.length === 0) return true;

//         if (key === "photo") {
//           const itemValue = item.hasPhoto ? "Photo" : "No Photo";
//           return selectedValues.includes(itemValue);
//         }
        
//         if (key === "tags") {
//           return item.tags.some(tag => selectedValues.includes(tag));
//         }

//         return selectedValues.includes(item[key]);
//       });
//     });
//   }, [activeFilters]);

//   const toggleFilter = (key, value) => {
//     setActiveFilters(prev => ({
//       ...prev,
//       [key]: prev[key].includes(value) 
//         ? prev[key].filter(v => v !== value) 
//         : [...prev[key], value]
//     }));
//   };

//   const clearSection = (key) => setActiveFilters(prev => ({ ...prev, [key]: [] }));

//   return (
//     <div className=" bg-[#F9FAFB]">
//       {/* Header */}
//       <header className="bg-[#4A248E] py-24 mt-20 px-6 text-center text-white">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4 italic">Choose Free Template</h1>
//         <p className="opacity-90 max-w-2xl mx-auto text-lg">
//           Create a winning resume with our 100% free resume templates.
//         </p>
//       </header>

//       {/* Filter Bar */}
//       <div className="sticky top-0 bg-white border-b z-40 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap gap-3 items-center">
//           <button onClick={() => setSidebarOpen(true)} className="flex items-center gap-2 px-4 py-2 border rounded-md font-medium text-sm hover:bg-gray-50">
//             All Filters
//           </button>
          
//           {Object.keys(FILTER_OPTIONS).map((key) => (
//             <FilterDropdown 
//               key={key}
//               label={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
//               options={FILTER_OPTIONS[key]}
//               selected={activeFilters[key]}
//               onToggle={(val) => toggleFilter(key, val)}
//               onClear={() => clearSection(key)}
//             />
//           ))}
//         </div>

//       </div>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 py-8">
//         <div className="mb-8">
//           <p className="text-gray-600">
//             Choose from <span className="text-black font-bold">{filteredTemplates.length} ATS-friendly</span> templates
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
//           {filteredTemplates.map(template => (
//             <TemplateCard key={template.id} template={template} />
//           ))}
//         </div>

//         {filteredTemplates.length === 0 && (
//           <div className="text-center py-20">
//             <h3 className="text-xl font-semibold text-gray-400">No templates match your specific filters.</h3>
//             <button onClick={() => setActiveFilters({})} className="mt-4 text-blue-600 underline">Clear all filters</button>
//           </div>
//         )}
//       </main>
//       <FilterSidebar 
//         isOpen={isSidebarOpen} 
//         onClose={() => setSidebarOpen(false)}
//         activeFilters={activeFilters}
//         toggleFilter={toggleFilter}
//         clearAll={() => setActiveFilters({ level: [], careerField: [], style: [], layout: [], pages: [], color: [], tags: [] })}
//       />
//     </div>
//   );
// }


"use client";
import { useState, useMemo } from 'react';
import FilterDropdown from '@/app/components/template/FilterDropdown';
import TemplateCard from '@/app/components/template/TemplateCard';
import FilterSidebar from "@/app/components/template/FilterSidebar";

const FILTER_OPTIONS = {
  careerField: ["Administrative", "Business & Finance", "Customer Service", "Education", "Healthcare", "Leadership", "Technology", "Marketing"],
  level: ["Student", "Entry Level", "Experience"],
  style: ["Modern", "Creative", "Professional", "Simple", "Minimalist"],
  layout: ["One Column", "Two Column", "Photo", "No Photo"],
  color: ["#000000", "#3B82F6", "#EF4444", "#10B981", "#F59E0B", "#A855F7", "#1E293B", "#64748B"]
};

const TEMPLATES_DATA = [
  {
    id: "res-001",
    name: "Black and White Simple Professional",
    careerField: "Technology",
    level: "Experience",
    style: "Professional",
    layout: "One Column",
    hasPhoto: false,
    color: "#000000",
    thumbnail: "/template/Black and White Simple Professional Resume.png"
  },
  {
    id: "res-002",
    name: "Professional Modern CV",
    careerField: "Marketing",
    level: "Experience",
    style: "Modern",
    layout: "Two Column",
    hasPhoto: true,
    color: "#1E293B",
    thumbnail: "/template/Professional Modern CV Resume.png"
  },
  {
    id: "res-003",
    name: "White Brown Minimalist Modern",
    careerField: "Business & Finance",
    level: "Entry Level",
    style: "Minimalist",
    layout: "One Column",
    hasPhoto: true,
    color: "#64748B",
    thumbnail: "/template/White Brown Minimalist Modern Data Analyst Resume Document.png"
  },
  {
    id: "res-004",
    name: "Black White Professional Minimalist",
    careerField: "Technology",
    level: "Experience",
    style: "Minimalist",
    layout: "One Column",
    hasPhoto: false,
    color: "#000000",
    thumbnail: "/template/Black White Professional Minimalist Resume.png"
  },
  {
    id: "res-005",
    name: "Blue and Gray Simple Professional (V1)",
    careerField: "Marketing",
    level: "Experience",
    style: "Professional",
    layout: "Two Column",
    hasPhoto: false,
    color: "#3B82F6",
    thumbnail: "/template/Blue and Gray Simple Professional CV Resume (1).png"
  },
  {
    id: "res-006",
    name: "Blue and Gray Simple Professional (V2)",
    careerField: "Marketing",
    level: "Experience",
    style: "Professional",
    layout: "Two Column",
    hasPhoto: false,
    color: "#3B82F6",
    thumbnail: "/template/Blue and Gray Simple Professional CV Resume.png"
  },
];

export default function TemplatesPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  // FIXED: Initial State matches all possible filters to avoid 'undefined' error
  const [activeFilters, setActiveFilters] = useState({
    careerField: [],
    level: [],
    style: [],
    layout: [],
    color: []
  });

  const filteredTemplates = useMemo(() => {
    return TEMPLATES_DATA.filter((item) => {
      return Object.keys(activeFilters).every((key) => {
        const selectedValues = activeFilters[key];
        if (!selectedValues || selectedValues.length === 0) return true;

        if (key === "layout") {
          return selectedValues.some(val => {
            if (val === "Photo") return item.hasPhoto === true;
            if (val === "No Photo") return item.hasPhoto === false;
            return item.layout === val;
          });
        }

        return selectedValues.includes(item[key]);
      });
    });
  }, [activeFilters]);

  const toggleFilter = (key, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [key]: (prev[key] || []).includes(value) 
        ? prev[key].filter(v => v !== value) 
        : [...(prev[key] || []), value]
    }));
  };

  const clearSection = (key) => setActiveFilters(prev => ({ ...prev, [key]: [] }));

  const clearAll = () => setActiveFilters({
    careerField: [],
    level: [],
    style: [],
    layout: [],
    color: []
  });

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <header className="bg-[#4A248E] py-30 mt-12 px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-semibol mb-4">One Platform. Endless Career Opportunities</h1>
        <p className="opacity-90 max-w-2xl mx-auto text-lg">
          Design your resume, apply to jobs, and grow your career — all with SpreadNext.
        </p>
      </header>

      <div className="sticky top-0 left-0 bg-white border-b z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap gap-3 items-center">
          <button 
            onClick={() => setSidebarOpen(true)} 
            className="flex items-center gap-2 px-4 py-2 border hover:cursor-pointer border-gray-500 rounded-md font-medium text-sm hover:bg-gray-50"
          >
            All Filters
          </button>
          
          {Object.keys(FILTER_OPTIONS).map((key) => (
            <FilterDropdown 
              key={key}
              label={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              options={FILTER_OPTIONS[key]}
              selected={activeFilters[key] || []}
              onToggle={(val) => toggleFilter(key, val)}
              onClear={() => clearSection(key)}
              isColor={key === 'color'} 
            />
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 flex justify-between items-center">
          <p className="text-gray-600">
            Showing <span className="text-black font-bold">{filteredTemplates.length}</span> templates
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {filteredTemplates.map(template => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-gray-400">No templates found.</h3>
            <button onClick={clearAll} className="mt-4 text-blue-600 underline">Clear all filters</button>
          </div>
        )}
      </main>

      {/* FIXED SIDEBAR: Ensure clearAll and activeFilters are passed correctly */}
      <FilterSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        activeFilters={activeFilters}
        toggleFilter={toggleFilter}
        clearAll={clearAll}
        filterOptions={FILTER_OPTIONS}
      />
    </div>
  );
}