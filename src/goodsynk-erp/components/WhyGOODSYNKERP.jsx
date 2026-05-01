import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Network, Settings, LayoutDashboard, Layers, ArrowRight } from 'lucide-react';

const USPItem = ({ icon: Icon, title, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    className="flex items-start space-x-6 group"
  >
    <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 transition-colors duration-500 shadow-lg shadow-indigo-100">
      <Icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
    </div>
    <div className="space-y-2 pt-1 border-b border-slate-100 pb-8 group-hover:border-indigo-100 transition-colors w-full">
      <h4 className="text-xl font-black font-outfit text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
        {title}
      </h4>
      <p className="text-base text-slate-500 font-medium leading-relaxed max-w-2xl">
        {desc}
      </p>
    </div>
  </motion.div>
);

const WhyGOODSYNKERP = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const usps = [
    {
      icon: LayoutDashboard,
      title: "End-to-End School Digitization",
      desc: "GOODSYNK ERP covers the most operationally critical workflows in a single platform, eliminating tool sprawl and manual consolidation."
    },
    {
      icon: ShieldCheck,
      title: "High Transparency for Parents",
      desc: "Parent-facing visibility into attendance, marks, results, and fee status improves trust and significantly reduces front-office load."
    },
    {
      icon: Network,
      title: "Multi-Role Integrated System",
      desc: "Admin, teacher, and parent experiences are connected through shared data models and strictly controlled RBAC workflows."
    },
    {
      icon: Layers,
      title: "Bulk Data Management",
      desc: "Bulk upload and batch operations allow for fast onboarding and extremely efficient administration at scale."
    },
    {
      icon: Settings,
      title: "Simple & Scalable Architecture",
      desc: "Designed to work perfectly for single schools and expand effortlessly to multiple campuses and future integrations."
    }
  ];

  return (
    <section id="why-goodsynk-erp" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">

        {/* Left: Text & USPs */}
        <div className="space-y-10 md:space-y-16">
          <div className="space-y-10 group">
            <span className="text-indigo-600 font-black text-sm uppercase tracking-[0.2em] px-4 py-1 border-l-4 border-indigo-600">Unique Selling Points</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[950] font-outfit text-slate-900 leading-tight tracking-[-0.02em]">
              Why Choose <br /> <span className="text-indigo-600">GOODSYNK ERP?</span>
            </h2>
          </div>

          <div className="space-y-2">
            {usps.map((usp, i) => (
              <USPItem key={i} index={i} {...usp} />
            ))}
          </div>


        </div>

        {/* Right: Sticky/Parallax Visual */}
        <div className="relative h-full hidden lg:block">
          <motion.div
            style={{ y }}
            className="sticky top-32 bg-white p-6 rounded-[4rem] shadow-4xl shadow-slate-200/50 border border-slate-100 backdrop-blur-md"
          >
            <div className="bg-slate-900 rounded-[3rem] p-12 text-center relative overflow-hidden h-[600px] flex flex-col items-center justify-center space-y-8">
              {/* Decorative orbs in the dark box */}
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-indigo-600 rounded-full blur-[80px] opacity-20"></div>
              <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-violet-600 rounded-full blur-[80px] opacity-20"></div>

              <div className="w-24 h-24 bg-indigo-600/20 rounded-full flex items-center justify-center border-4 border-indigo-600/30">
                <ShieldCheck className="w-12 h-12 text-indigo-400" />
              </div>
              <h3 className="text-4xl font-black font-outfit text-white tracking-tight">The Trusted OS <br /> for Schools</h3>
              <p className="text-xl text-slate-400 font-medium max-w-sm mx-auto">
                Built for speed, transparency, and rock-solid reliability at any scale.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default WhyGOODSYNKERP;
