import { ChevronDown, Check } from 'lucide-react';

export default function FilterDropdown({ label, options, selected = [], onToggle, onClear, isColor }) {
  // Safety check: Agar selected undefined aata hai toh empty array use karein
  const activeSelected = selected || [];

  return (
    <div className="relative group">
      <button className={`flex items-center hover:cursor-pointer gap-2 px-3 py-2 border rounded-md transition-all text-sm
        ${activeSelected.length > 0 ? 'border-[#4A248E] bg-[#f3f0ff] text-[#4A248E]' : 'border-gray-300 bg-white'}`}>
        <span className="font-semibold">{label}</span>
        {activeSelected.length > 0 && (
          <span className="bg-[#4A248E] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            {activeSelected.length}
          </span>
        )}
        <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
      </button>

      {/* Dropdown Menu */}
      <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-100 shadow-2xl rounded-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        <div className="p-4 max-h-72 overflow-y-auto scrollbar-thin">
          {options.map((opt) => (
            <label key={opt} className="flex items-center gap-3 py-2 cursor-pointer group/item">
              {/* Checkbox Box */}
              <div className={`w-5 h-5 border rounded flex items-center justify-center transition-colors 
                ${activeSelected.includes(opt) ? 'bg-[#4A248E] border-[#4A248E]' : 'border-gray-300'}`}>
                {activeSelected.includes(opt) && <Check size={12} className="text-white" />}
              </div>
              
              <input 
                type="checkbox" 
                className="hidden" 
                checked={activeSelected.includes(opt)}
                onChange={() => onToggle(opt)} 
              />

              {/* Logic for Color Circles or Text */}
              {isColor ? (
                <div className="flex items-center gap-2">
                  <div 
                    className="w-5 h-5 rounded-full border border-gray-200" 
                    style={{ backgroundColor: opt }}
                  />
                  <span className="text-xs text-gray-400 uppercase">{opt}</span>
                </div>
              ) : (
                <span className="text-sm text-gray-700 group-hover/item:text-black">{opt}</span>
              )}
            </label>
          ))}
        </div>
        
        {activeSelected.length > 0 && (
          <button 
            onClick={onClear} 
            className="w-full border-t py-3 text-xs font-bold text-gray-400 hover:text-red-500 uppercase transition-colors"
          >
            Clear Section
          </button>
        )}
      </div>
    </div>
  );
}