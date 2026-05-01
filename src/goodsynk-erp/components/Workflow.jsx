import React from 'react';
import { motion } from 'framer-motion';
import { Database, PlayCircle, ClipboardCheck, GraduationCap, Heart, ArrowRight } from 'lucide-react';

const StepCard = ({ number, icon: Icon, title, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay, duration: 0.8 }}
    className="relative group lg:w-1/5"
  >
    <div className="hidden lg:block absolute top-[4.5rem] left-[60%] w-full h-[2px] bg-slate-100 group-last:hidden">
       <div className="w-0 h-full bg-indigo-500 group-hover:w-full transition-all duration-1000 ease-out"></div>
    </div>

    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-500 h-full relative z-10 flex flex-col items-center text-center group-hover:-translate-y-3">
       <div className="absolute -top-4 -left-4 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-black text-base font-outfit shadow-xl group-hover:bg-indigo-600 transition-colors border-4 border-white">
          {number}
       </div>
       <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-50 transition-colors">
          <Icon className="w-8 h-8 text-slate-400 group-hover:text-indigo-600 transition-colors stroke-[1.5]" />
       </div>
       <h4 className="text-xl font-black font-outfit text-slate-900 tracking-tight leading-tight mb-3 group-hover:text-indigo-600 transition-colors">
          {title}
       </h4>
       <p className="text-gray-500 font-medium leading-relaxed text-sm">
          {desc}
       </p>
    </div>
  </motion.div>
);

const Workflow = () => {
  const steps = [
    {
      icon: PlayCircle,
      title: "School Onboarding",
      desc: "Admin account creation, basic profile setup, and selective module enablement (fees, assignments, hall tickets, etc.)."
    },
    {
      icon: Database,
      title: "Data Setup & Bulk Upload",
      desc: "Create academic years, classes, and subjects. Bulk upload students and teachers via templates, and set attendance rules."
    },
    {
      icon: ClipboardCheck,
      title: "Daily Operations",
      desc: "Teachers mark daily attendance. Admins monitor completion. Teachers publish assignments and admins share announcements."
    },
    {
      icon: GraduationCap,
      title: "Evaluation Cycle",
      desc: "Admins create exam settings. Teachers enter marks. Admins review, approve, and publish results instantly."
    },
    {
      icon: Heart,
      title: "Parent Engagement",
      desc: "Parents track attendance, academic progress, and fee dues via the app, while utilizing SOS features when needed."
    }
  ];

  return (
    <section id="workflow" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto space-y-12 md:space-y-24">
        
        <div className="text-center space-y-10 max-w-4xl mx-auto">
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="px-6 py-2.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-black tracking-widest uppercase inline-block"
          >
             End-to-End Workflow
          </motion.div>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-5xl md:text-7xl font-black font-outfit text-slate-900 leading-tight tracking-tight"
          >
            How <span className="text-indigo-600">GOODSYNK ERP</span> Works.
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-lg text-slate-500 md:px-20 font-medium leading-relaxed tracking-tight"
          >
            From your first login to parents viewing exam results, here is exactly how GOODSYNK ERP digitizes your entire school.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 relative pt-10">
          {steps.map((step, i) => (
            <StepCard key={i} number={i + 1} {...step} delay={i * 0.1} />
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center pt-10"
        >
           <button className="w-full sm:w-auto inline-flex items-center justify-center space-x-4 bg-indigo-600 text-white px-6 py-4 md:px-10 md:py-4 rounded-full font-black text-lg hover:bg-slate-900 transition-all group shadow-2xl shadow-indigo-200/50">
              <span>Schedule a Managed Setup</span>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
           </button>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Workflow;
