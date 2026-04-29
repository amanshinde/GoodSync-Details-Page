import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import AmbientBackground from './AmbientBackground';
import { HandDrawnCircle } from './SchoolScribbles';
import { Link } from 'react-router-dom';
import { Shield, GraduationCap, Heart, ArrowRight, Users, Star } from 'lucide-react';

const RoleCard = ({ icon: Icon, role, desc, features, color = 'blue', delay = 0 }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      onMouseMove={handleMouseMove}
      className="group relative bg-white/60 backdrop-blur-3xl p-8 md:p-12 rounded-[3rem] border border-white/80 hover:bg-white hover:border-indigo-100 hover:shadow-2xl transition-all duration-700 h-full flex flex-col overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[3rem] opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(79, 70, 229, 0.15),
              transparent 70%
            )
          `,
        }}
      />
    <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:rotate-[15deg] transition-all duration-500 shadow-xl shadow-slate-100 ${
      color === 'blue' ? 'bg-indigo-50 text-indigo-600' : 'bg-violet-50 text-violet-600'
    }`}>
      <Icon className="w-10 h-10 stroke-[1.5]" />
    </div>

    <h3 className="text-2xl lg:text-3xl font-black font-outfit text-slate-900 mb-3 tracking-tight leading-loose group-hover:text-indigo-600 transition-colors flex items-center space-x-3">
      <span>{role}</span>
      <Star className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-violet-400" />
    </h3>
    <p className="text-lg text-slate-500 font-medium leading-relaxed tracking-tight group-hover:text-slate-600 transition-colors flex-1 pb-8">
      {desc}
    </p>

    <div className="pt-8 mt-auto border-t border-slate-100 group-hover:border-indigo-100 transition-colors">
      <Link to={`/roles?role=${role.toLowerCase()}`} className="flex items-center space-x-3 text-indigo-600 font-black text-lg hover:translate-x-2 transition-transform">
        <span>View Role Details</span>
        <ArrowRight className="w-6 h-6" />
      </Link>
    </div>
    </motion.div>
  );
};

const UserRoles = () => {
  const roles = [
    { 
      icon: Shield, 
      role: "Admins", 
      desc: "Complete operational control — from school setup and bulk data management to fee operations and result publishing.",
      features: [
        "School setup & academic year config",
        "Bulk upload students & teachers via CSV",
        "Marks entry control & result publishing",
        "Fee structure, installments & challans",
        "Reports export & audit trails",
      ],
      color: "blue"
    },
    { 
      icon: GraduationCap, 
      role: "Teachers", 
      desc: "Focus on teaching, not paperwork. Manage your classes, assignments, and marks from web and mobile.",
      features: [
        "Class-wise attendance marking daily",
        "Assignment creation with attachments",
        "Marks entry for assigned subjects",
        "View admin announcements & policies",
        "Leave application & approval tracking",
      ],
      color: "violet"
    },
    { 
      icon: Heart, 
      role: "Parents", 
      desc: "Always-on visibility into your child's school life — attendance, results, fees, and emergency alerts.",
      features: [
        "Real-time daily attendance visibility",
        "Exam results after admin publishing",
        "Fee dues, paid history & challan download",
        "Official school announcements",
        "SOS emergency alert (one tap)",
      ],
      color: "blue"
    }
  ];

  return (
    <section id="roles" className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      <AmbientBackground colorScheme="roles" />
      <div className="max-w-[1400px] mx-auto space-y-24 relative z-10">
        <div className="text-center space-y-10 max-w-4xl mx-auto">
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="px-6 py-2.5 rounded-full bg-violet-50 border border-violet-100 text-slate-800 text-sm font-black tracking-widest uppercase inline-flex items-center mx-auto w-fit"
          >
             <Users className="w-5 h-5 mr-3 text-violet-600" /> Tailored Experience
          </motion.div>
          <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-5xl md:text-7xl font-black font-outfit text-slate-900 leading-tight tracking-tight"
          >
            Everyone is <br /> 
            <span className="text-indigo-600 relative inline-block">
              Important.
              <HandDrawnCircle className="text-violet-400 opacity-60 animate-[pulse_3s_ease-in-out_Infinity]" />
            </span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-2xl text-slate-500 md:px-20 font-medium leading-relaxed tracking-tight"
          >
            GudERP uses strict Role-Based Access Control (RBAC) to give every user exactly the tools they need — and nothing they don't.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {roles.map((role, i) => (
            <RoleCard key={i} {...role} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserRoles;
