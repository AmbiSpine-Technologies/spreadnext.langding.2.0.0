import { Search } from 'lucide-react';

export default function TemplateCard({ template }) {
  // Safety check: Agar tags nahi hain toh empty array use karein
  const hasTags = template?.tags || [];

  return (
    <div className="group cursor-pointer">
      <div className="relative">
        {/* Layered Effect */}
        <div className="absolute inset-0 bg-white border border-gray-200 rounded-xl translate-x-2 translate-y-2 -z-10 shadow-sm transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
        
        <div className="relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
          <div className="aspect-[3/4.2] overflow-hidden bg-gray-100 relative">
            <img 
              src={template.thumbnail} 
              alt={template.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            
            {/* Magnifying Glass Overlay */}
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <div className="bg-white/90 p-4 rounded-full shadow-lg">
                 <Search className="text-[#4A248E]" />
               </div>
            </div>

            {/* Tags - Safety check added with ?. */}
            <div className="absolute bottom-3 left-3 flex gap-1">
              {/* Agar tags remove kar diye hain, toh aap direct "Free" badge dikha sakte hain */}
              <span className="bg-green-600 text-white text-[9px] font-black px-2 py-0.5 rounded uppercase">
                Free
              </span>
              
              {/* Optional: Check agar tags exist karte hain tabhi includes chalayein */}
              {/* {hasTags.includes("Popular") && (
                <span className="bg-amber-400 text-black text-[9px] font-black px-2 py-0.5 rounded uppercase italic">
                  Popular
                </span>
              )} */}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="font-bold text-[15px] leading-tight text-gray-900 group-hover:text-[#4A248E] transition-colors">
          {template.name}
        </h3>
        <p className="text-xs text-gray-500 mt-1 capitalize font-medium">
          {template.level} • {template.layout}
        </p>
        
        {/* Color Preview in Card */}
        <div 
          className="w-3 h-3 rounded-full mt-2 border border-gray-200" 
          style={{ backgroundColor: template.color }}
          title="Template Color"
        />
      </div>
    </div>
  );
}