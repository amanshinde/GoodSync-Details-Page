import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const CTA = () => {
  return (
    <section id="cta" className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[4.5rem] overflow-hidden shadow-3xl shadow-indigo-200/30"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700" />

          {/* Animated orbs */}
          <motion.div 
            animate={{ backgroundColor: ["rgba(255,255,255,0.03)", "rgba(255,255,255,0.08)", "rgba(255,255,255,0.03)"] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-1/4 -right-1/4 w-full h-full rounded-full blur-[120px] -z-0"
          ></motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
            className="absolute -bottom-1/3 -left-1/4 w-[600px] h-[600px] bg-white rounded-full blur-[100px]"
          />
          
          <div className="relative z-10 text-center space-y-16 p-16 md:p-32">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black font-outfit text-white leading-tight tracking-tighter shadow-sm">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-violet-200">Elevate</span> <br /> All Education?
              </h2>
              <p className="text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed shadow-sm opacity-90">
                Join 500+ schools that have transformed their operations with GoodSync ERP. Get started today.
              </p>
            </motion.div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 group">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white text-indigo-600 px-12 py-5 rounded-[2rem] font-black text-xl shadow-4xl shadow-indigo-900/20 flex items-center space-x-4 hover:bg-indigo-50 border-[4px] border-white/20 group"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
              </motion.button>
              
              <div className="flex items-center space-x-8">
                 <div className="flex -space-x-4">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-16 h-16 rounded-full border-4 border-white overflow-hidden ring-4 ring-indigo-400/30">
                        <img src={`https://i.pravatar.cc/100?u=u${i}`} alt="user" className="w-full h-full object-cover" />
                     </div>
                   ))}
                 </div>
                 <div className="text-left">
                    <p className="text-white font-black text-2xl">500k+ Active Users</p>
                    <p className="text-white/70 font-bold text-lg">Trust GoodSync ERP every day</p>
                 </div>
              </div>
            </div>


          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
