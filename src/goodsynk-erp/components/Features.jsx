import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Link } from 'react-router-dom';
import AmbientBackground from './AmbientBackground';
import { 
  Calendar, FileText, CreditCard, MessageSquare, PieChart, 
  GraduationCap, ArrowRight, Shield, Bell, IdCard, 
  ClipboardList, Users, ChevronDown, ChevronUp
} from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, delay = 0, color = 'blue', id }) => {
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
      className="group relative h-full bg-indigo-900/85 backdrop-blur-2xl p-10 md:p-12 rounded-[2.5rem] border border-white/20 hover:bg-indigo-800/90 hover:border-indigo-400/50 transition-all duration-500 hover:shadow-[0_20px_50px_-12px_rgba(79,70,229,0.4)] overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(99, 102, 241, 0.2),
              transparent 80%
            )
          `,
        }}
      />
    
    <div className="relative z-10 space-y-10">
      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl ${
        color === 'blue' ? 'bg-indigo-500 text-white' : 'bg-violet-500 text-white'
      }`}>
        <Icon className="w-10 h-10 stroke-[2]" />
      </div>

      <div className="space-y-4">
        <h3 className="text-3xl font-black font-outfit text-white tracking-tight leading-tight group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        <p className="text-lg text-indigo-100/70 font-medium leading-relaxed tracking-tight group-hover:text-indigo-50/90 transition-colors">
          {desc}
        </p>
      </div>

      <div className="pt-6 flex items-center space-x-4">
        <Link
          to={`/features?feature=${id}`}
          className="text-white font-black text-xl hover:text-indigo-400 transition-all flex items-center space-x-3 group/btn"
        >
          <span>Learn More</span>
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover/btn:bg-indigo-500 group-hover/btn:text-white transition-all">
            <ArrowRight className="w-5 h-5 -rotate-45 group-hover/btn:rotate-0 transition-transform" />
          </div>
        </Link>
      </div>
    </div>
  </motion.div>
  );
};

const Features = () => {
  const [showAll, setShowAll] = useState(false);

  const primaryFeatures = [
    { 
      icon: Users, 
      id: 'student-management',
      title: "Student Data Management", 
      desc: "Structured, searchable student profiles — admission records, guardian details, document storage, enrollment history, and quick filters for status, fees, and attendance risk.",
      color: "blue"
    },
    { 
      icon: Calendar, 
      id: 'attendance',
      title: "Attendance Tracking & Analysis", 
      desc: "Class-wise daily attendance with at-risk detection (<75%), exportable monthly summaries, and real-time parent visibility — no more paper registers.",
      color: "violet"
    },
    { 
      icon: FileText, 
      id: 'results',
      title: "Marks & Result Management", 
      desc: "Exam configuration, bulk marks entry with range validation, admin approval workflows, and instant result publishing with subject-wise breakdowns.",
      color: "blue"
    },
    { 
      icon: GraduationCap, 
      id: 'assignments',
      title: "Assignment Management", 
      desc: "Teachers create and distribute assignments with attachments to targeted classes. PDF/image support, due dates, history archive, and optional submission tracking.",
      color: "violet"
    },
    { 
      icon: CreditCard, 
      id: 'fees',
      title: "Fee Management System", 
      desc: "Class-wise fee structures, installment planning, automated challan generation, and outstanding dues tracking — with parent self-service for challan downloads.",
      color: "blue"
    },
    { 
      icon: Bell, 
      id: 'sos',
      title: "SOS Emergency Alert", 
      desc: "Single-tap emergency escalation from the parent app. Notifies designated school contacts instantly with timestamp, student identity, and reason logging.",
      color: "violet"
    }
  ];

  const additionalFeatures = [
    { 
      icon: MessageSquare, 
      id: 'communication',
      title: "Communication System", 
      desc: "Centralized messaging across admin, teachers, and parents. Broadcast announcements, class-specific messages, read receipts, and predefined templates.",
      color: "blue"
    },
    { 
      icon: IdCard, 
      id: 'id-cards',
      title: "ID Card Generation", 
      desc: "Multiple branded templates with school logo and colors. Auto-populate student photo, name, class, and admission ID. Batch generate for full classes.",
      color: "violet"
    },
    { 
      icon: ClipboardList, 
      id: 'hall-tickets',
      title: "Hall Ticket Generation", 
      desc: "Exam-wise admit cards with student details and exam schedules. Policy-driven rules to block generation for pending dues. Admin approval before release.",
      color: "blue"
    },
    { 
      icon: PieChart, 
      id: 'analytics',
      title: "Reports & Analytics Dashboard", 
      desc: "Attendance trends, academic subject-wise performance distribution, fee collection analytics, and at-risk student lists — all exportable to CSV/Excel.",
      color: "violet"
    },
    { 
      icon: Shield, 
      id: 'parent-transparency',
      title: "Parent Transparency Features", 
      desc: "Self-service visibility into attendance, exam results, fee dues, challan downloads, and official school announcements — reducing calls and front-office load.",
      color: "blue"
    }
  ];

  return (
    <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      <AmbientBackground />
      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col space-y-16">
        
        <div className="text-center space-y-10 max-w-4xl mx-auto">
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="px-6 py-2.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-black tracking-widest uppercase inline-block"
          >
             Feature Hub
          </motion.div>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-5xl md:text-7xl font-black font-outfit text-slate-900 leading-tight tracking-tight"
          >
            Powering Every <br /> <span className="text-slate-400">Education Edge.</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-2xl text-slate-500 md:px-20 font-medium leading-relaxed tracking-tight"
          >
            GOODSYNK ERP covers every operationally critical workflow in a single platform — from student records to SOS alerts — eliminating tool sprawl and manual work.
          </motion.p>
        </div>

        {/* Feature Grid Container */}
        <div className="flex flex-col gap-8">
          {/* Primary 6 Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {primaryFeatures.map((feature, i) => (
              <FeatureCard key={i} {...feature} delay={i * 0.1} />
            ))}
          </div>

          {/* Expandable Additional Features */}
          <AnimatePresence>
            {showAll && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: -32 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 0 }}
                exit={{ opacity: 0, height: 0, marginTop: -32 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {additionalFeatures.map((feature, i) => (
                    <FeatureCard key={i} {...feature} delay={i * 0.08} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Toggle Button */}
        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center pt-4"
         >
           <button 
             onClick={() => setShowAll(!showAll)}
             className="group px-16 py-8 rounded-full border-4 border-indigo-600 text-slate-900 font-extrabold text-2xl hover:bg-indigo-600 hover:text-white transition-all uppercase tracking-widest shadow-2xl shadow-indigo-100 hover:rotate-1 flex items-center space-x-4 mx-auto"
           >
              {showAll ? (
                <>
                  <span>Show Less</span>
                  <ChevronUp className="inline-block group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  <span>See All 11 Features</span>
                  <ChevronDown className="inline-block group-hover:translate-y-1 transition-transform" />
                </>
              )}
           </button>
           <Link
             to="/features"
             className="inline-flex items-center gap-3 text-indigo-600 hover:text-indigo-700 font-black text-lg transition-colors border-b-2 border-indigo-200 hover:border-indigo-500 pb-1"
           >
             <span>Explore Full Feature Guide</span>
             <ArrowRight className="w-5 h-5" />
           </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
