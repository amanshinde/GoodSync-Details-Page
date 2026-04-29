import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, ArrowRight, Building2, CheckCircle2 } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden text-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] -z-10 -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-[1400px] mx-auto space-y-24">
        
        <div className="text-center space-y-10 max-w-4xl mx-auto">
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-black tracking-widest uppercase inline-block backdrop-blur-sm"
          >
             Simple Pricing
          </motion.div>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-5xl md:text-7xl font-black font-outfit leading-tight tracking-tight"
          >
            Built for <span className="text-indigo-400">Scale.</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-2xl text-slate-400 md:px-20 font-medium leading-relaxed tracking-tight"
          >
            Whether you run a single kindergarten or a multi-campus franchise, GudERP adapts to your operational needs.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 backdrop-blur-xl relative overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
               <div className="w-16 h-16 bg-indigo-600 rounded-3xl flex items-center justify-center shadow-lg shadow-indigo-600/30">
                  <Building2 className="w-8 h-8 text-white" />
               </div>
               <h3 className="text-2xl md:text-3xl font-black font-outfit tracking-tight leading-tight">Enterprise & Institutional Pricing</h3>
               <p className="text-lg text-slate-400">
                  Contact our sales team for a custom quote based on your student volume and required modules.
               </p>
               <ul className="space-y-4 pt-4">
                 {['Unlimited Administrator Accounts', 'White-labeled Parent App', 'Dedicated Implementation Manager', '24/7 Priority Support'].map((feature, i) => (
                   <li key={i} className="flex items-center text-base font-bold text-slate-300">
                     <CheckCircle2 className="w-5 h-5 mr-3 text-indigo-400" />
                     {feature}
                   </li>
                 ))}
               </ul>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 text-slate-900 shadow-2xl space-y-6">
               <h4 className="text-2xl font-black font-outfit tracking-tight">Get a Custom Quote</h4>
               <p className="text-slate-500 font-medium text-base">Leave your details and our education consultants will call you within 24 hours.</p>
               
               <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="School Name" className="w-full bg-slate-50 border-2 border-slate-100 px-5 py-4 rounded-xl font-bold text-base focus:border-indigo-400 outline-none transition-all" />
                  <input type="email" placeholder="Official Email" className="w-full bg-slate-50 border-2 border-slate-100 px-5 py-4 rounded-xl font-bold text-base focus:border-indigo-400 outline-none transition-all" />
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-full bg-indigo-600 text-white px-6 py-4 rounded-xl font-black text-lg hover:bg-slate-900 transition-colors flex items-center justify-center space-x-3 group"
                  >
                     <span>Contact Sales</span>
                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
               </form>
            </div>
          </div>
        </motion.div>

        <div className="text-center pt-8 text-slate-400 font-medium text-xl flex flex-col sm:flex-row items-center justify-center gap-6">
           <span>Looking for something else?</span>
           <a href="mailto:hello@guderp.com" className="text-white hover:text-indigo-400 transition-colors flex items-center border-b border-dashed border-white/30 hover:border-indigo-400">
             <Mail className="w-5 h-5 mr-3" /> hello@guderp.com
           </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
