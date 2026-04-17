import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { getInitials } from '@/utils/getInitialsName'
export default function TestimonialCard({ item, index, fadeIn }) {
  
  // 👉 Initials logic (first + last letter)

  return (
    <motion.div
      variants={fadeIn("up", index * 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-white rounded-3xl p-8 flex flex-col h-full shadow-lg"
    >
      {/* User Info Header */}
      <div className="flex items-center gap-4 mb-6">
        
        {/* Avatar / Initials */}
        {item.profile ? (
          <img
            src={item.profile}
            alt={item.name}
            className="w-14 h-14 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
            <span className="text-lg font-bold text-gray-700">
              {getInitials(item.name)}
            </span>
          </div>
        )}

        <div>
          <div className="flex items-center gap-1">
            <h3 className="text-lg font-bold text-[#1B1B24]">
              {item.name}
            </h3>

            {/* Verified */}
            {item.verified && (
              <div className="bg-blue-600 rounded-full p-0.5">
                <Check className="w-2.5 h-2.5 text-white" />
              </div>
            )}
          </div>

          <p className="text-gray-400 text-sm font-medium">
            {item.role},
          </p>

          <p className="text-blue-600 text-sm font-semibold">
            {item.location}
          </p>
        </div>
      </div>

      {/* Quote */}
      <p className="text-[#1B1B24] text-[15px] leading-relaxed font-medium">
        "{item.quote}"
      </p>
    </motion.div>
  );
}