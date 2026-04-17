"use client";
import { getInitials } from '@/utils/getInitialsName';
import Button from '../components/common/button';
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/animation"; // Make sure path is correct

export default function TestimonialCTA() {
  const tpoData = Array(4).fill({
    name: "Vikas Dubey",
    role: "TPO",
    location: "IIT Delhi",
    quote: "We used to manage 600 students on Excel. SpreadNext cut our placement admin time by 60%."
  });

  return (
          <>
  <section className="bg-[#f5e2aef0] py-24 px-24">
      {/* Testimonials Grid */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-6 mb-3">
        {tpoData.map((item, i) => (
          <motion.div 
              key={i} 
              // Stagger delay: har card 0.1s ke gap par aayega
              variants={fadeIn("up", 0.1 * i)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
                className="bg-white p-8 rounded-2xl">
            <div className="flex items-start gap-4 mb-4">
          <div className='bg-gray-300 p-5 rounded-full'>
               {getInitials(item.name)}

          </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-700">{item.name}</h4>
                <p className="text-xs text-gray-400 font-bold uppercase">{item.role}</p>
                <p className="text-xs text-blue-600 font-bold">{item.location}</p>
               <p className="text-base font-medium leading-relaxed mt-2 text-[#1B1B24]">"{item.quote}"</p>
              
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    
    </section>
      <section className="bg-[#fff] py-32 px-16 lg:px-24">
   
      {/* Main CTA */}
      <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
           className="text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
          Ready to transform your placement cell?
        </h2>
        <p className="text-gray-500 text-lg mb-10">
          Join 50+ colleges already running smarter placements on Spreadnext.
        </p>
       <div className=' w-full flex justify-center'>
           <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
         <Button 
        className="!bg-[#0A66C2] hover:!bg-[#0554a3] !font-medium h-14"
        
        >
          Request a campus demo
        </Button>
            </motion.div>

       </div>
        
      </motion.div>
    </section>
          </>
  
  );
}



