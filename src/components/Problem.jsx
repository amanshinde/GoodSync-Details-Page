import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import AmbientBackground from './AmbientBackground';
import { AlertTriangle, Clock, EyeOff, Ban, CloudOff, Users, FileX } from 'lucide-react';

const ProblemCard = ({ icon: Icon, title, desc, delay = 0 }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      onMouseMove={handleMouseMove}
      className="group flex flex-col p-6 md:p-8 bg-white/60 backdrop-blur-3xl rounded-3xl border border-white/80 hover:bg-white hover:border-red-100 hover:shadow-2xl hover:shadow-red-50/50 transition-all duration-500 relative overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(239, 68, 68, 0.15),
              transparent 70%
            )
          `,
        }}
      />
    <div className="absolute top-0 left-0 w-2 h-full bg-red-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-500 group-hover:text-white transition-all duration-500">
      <Icon className="w-6 h-6 text-red-500 group-hover:text-white" />
    </div>
    <h3 className="text-xl md:text-2xl font-black font-outfit text-slate-900 mb-4 tracking-tight leading-tight group-hover:text-red-600 transition-colors">
      {title}
    </h3>
    <p className="text-base text-slate-500 font-medium leading-relaxed group-hover:text-slate-600 transition-colors">
      {desc}
    </p>
    </motion.div>
  );
};

const Problem = () => {
  const problems = [
    { 
      icon: Clock, 
      title: "Paper-Heavy Records", 
      desc: "Schools still rely on spreadsheets and paper registers for student data and attendance — slow, error-prone, and impossible to audit."
    },
    { 
      icon: FileX, 
      title: "Delayed Academic Reporting", 
      desc: "Manual consolidation of marks across subjects and classes leads to report delays, errors, and frustrated parents waiting for results."
    },
    { 
      icon: Ban, 
      title: "Fee Leakage & Complexity", 
      desc: "Managing fee structures, installments, challans, and pending dues manually causes revenue leakage — schools lose up to ₹8–15 Lakhs/year."
    },
    { 
      icon: EyeOff, 
      title: "Zero Parent Visibility", 
      desc: "Parents feel disconnected from their child's attendance, progress, and fee status — leading to repeated calls, visits, and trust gaps."
    },
    { 
      icon: Users, 
      title: "Staff Over-Dependency", 
      desc: "Reporting and compliance workflows are siloed in a few individuals. When they're unavailable, operations grind to a halt."
    },
    { 
      icon: CloudOff, 
      title: "Unstructured Communication", 
      desc: "Admins, teachers, and parents operate on informal messaging apps with no audit trail, no structure, and no accountability."
    },
  ];

  return (
    <section id="problem" className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      <AmbientBackground colorScheme="problem" />
      <div className="max-w-[1400px] mx-auto text-center space-y-16 relative z-10">
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="px-6 py-2.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-black tracking-widest uppercase inline-block"
          >
             Current Challenges
          </motion.div>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit text-slate-900 leading-tight tracking-tighter"
          >
            Schools are <br /> <span className="text-slate-400">Broken Without</span> <br /> Digital Control.
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-lg text-slate-500 md:px-20 font-medium leading-relaxed tracking-tight"
          >
            Fragmented processes, inconsistent records, and manual operations are costing schools time, money, and trust. GudERP fixes all of it.
          </motion.p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((prob, i) => (
            <ProblemCard key={i} {...prob} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
