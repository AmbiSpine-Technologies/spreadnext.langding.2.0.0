import { X, Check } from 'lucide-react';

export default function FilterSidebar({ isOpen, onClose, activeFilters, toggleFilter, clearAll, filterOptions }) {
  if (!isOpen) return null;

  // Safety Check: Taki crash na ho agar activeFilters missing ho
  const safeFilters = activeFilters || {};

  return (
    <div className="fixed inset-0 z-[100] flex justify-start">
      <div className="absolute left-0 inset-0 bg-[#0000001d] backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl overflow-y-auto">
        <div className="p-6 border-b border-gray-500 flex justify-between items-center sticky top-0 bg-white z-10">
          <h2 className="text-xl font-bold text-[#0b090e]">Filters</h2>
          <button onClick={onClose} className="p-2 hover:cursor-pointer hover:bg-gray-100 rounded-full"><X size={24} /></button>
        </div>

        <div className="p-6 space-y-8">
          {/* Color Palette Section */}
          {filterOptions?.color && (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Color Palette</h3>
              <div className="grid grid-cols-5 gap-3">
                {filterOptions.color.map((hex) => (
                  <button
                    key={hex}
                    onClick={() => toggleFilter('color', hex)}
                    className={`w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center ${safeFilters.color?.includes(hex) ? 'border-black scale-110 shadow-md' : 'border-transparent'}`}
                    style={{ backgroundColor: hex }}
                  >
                    {safeFilters.color?.includes(hex) && <Check size={20} className="text-white drop-shadow-md" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Reusable Groups - Wahi use karein jo FILTER_OPTIONS mein hain */}
          <FilterGroup 
            title="Career Field" 
            type="careerField" 
            options={filterOptions?.careerField || []} 
            active={safeFilters.careerField || []} 
            toggle={toggleFilter} 
          />

          <FilterGroup 
            title="Career Level" 
            type="level" 
            options={filterOptions?.level || []} 
            active={safeFilters.level || []} 
            toggle={toggleFilter} 
          />

          <FilterGroup 
            title="Layout & Photo" 
            type="layout" 
            options={filterOptions?.layout || []} 
            active={safeFilters.layout || []} 
            toggle={toggleFilter} 
          />
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-500 p-2 flex gap-4">
          <button onClick={clearAll} className="flex-1 py-3 text-sm font-bold text-gray-700 hover:cursor-pointer hover:text-red-500 transition-colors uppercase">Clear All</button>
          <button onClick={onClose} className="flex-1 py-1 bg-[#0013E3] text-white rounded-lg hover:cursor-pointer font-bold shadow-md">Show Results</button>
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ title, type, options, active = [], toggle }) {
  if (options.length === 0) return null;

  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">{title}</h3>
      <div className="space-y-3">
        {options.map(opt => (
          <label key={opt} className="flex items-center gap-3 cursor-pointer group">
            <div className={`w-5 h-5 border rounded flex items-center justify-center transition-colors ${active.includes(opt) ? 'bg-[#4A248E] border-[#4A248E]' : 'border-gray-300'}`}>
              {active.includes(opt) && <Check size={12} className="text-white" />}
            </div>
            <input type="checkbox" className="hidden" checked={active.includes(opt)} onChange={() => toggle(type, opt)} />
            <span className="text-gray-700 group-hover:text-black">{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
}