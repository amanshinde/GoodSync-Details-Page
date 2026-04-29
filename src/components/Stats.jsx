import React from 'react';
import { motion, useInView } from 'framer-motion';
import { School, Users, Shield, Zap, ArrowUpRight } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label, subtext, color = "blue", delay = 0 }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="group relative bg-[#F9FAFB]/50 hover:bg-white p-10 md:p-14 rounded-[3.5rem] border border-slate-100 hover:border-indigo-100 hover:shadow-[0_20px_50px_rgba(79,70,229,0.06)] transition-all duration-500 overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <ArrowUpRight className="w-6 h-6 text-indigo-500" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left space-y-6">
        <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-2xl shadow-xl shadow-slate-100 transition-transform duration-500 group-hover:rotate-[10deg] ${
          color === 'blue' ? 'bg-indigo-50 text-indigo-600' : 'bg-violet-50 text-violet-600'
        }`}>
          <Icon className="w-8 h-8 stroke-[2]" />
        </div>
        <div className="space-y-2">
          <h3 className="text-5xl md:text-6xl font-black font-outfit text-slate-900 tracking-tighter">
            {value}
          </h3>
          <p className="text-lg font-bold text-slate-400 group-hover:text-indigo-500 transition-colors tracking-tight">
            {label}
          </p>
        </div>
        <div className="pt-4 border-t border-slate-100 w-full group-hover:border-indigo-100 transition-colors">
          <p className="text-slate-400 text-sm font-semibold flex items-center justify-center sm:justify-start">
             <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
             {subtext}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Stats = () => {
  const stats = [
    { 
      icon: School, 
      value: "—", 
      label: "Schools Partnered", 
      subtext: "Across multiple cities & towns",
      color: "blue"
    },
    { 
      icon: Users, 
      value: "—", 
      label: "Active Users", 
      subtext: "Parents, teachers & staff daily",
      color: "purple"
    },
    { 
      icon: Shield, 
      value: "100%", 
      label: "Data Security", 
      subtext: "Enterprise-grade encryption systems",
      color: "blue"
    },
    { 
      icon: Zap, 
      value: "—", 
      label: "Efficiency Boost", 
      subtext: "Average reduction in manual tasks",
      color: "purple"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-24 space-y-4"
        >
          <span className="text-indigo-600 font-black text-sm uppercase tracking-[0.2em]">Our Impact</span>
          <h2 className="text-5xl md:text-6xl font-black font-outfit text-slate-900 tracking-tight">
            Empowering the Next <br className="hidden md:block" /> Generation of Schools
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
