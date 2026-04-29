import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageSquare, ArrowRight, Sparkles, Headphones, GraduationCap } from 'lucide-react';

const ContactCard = ({ icon: Icon, title, desc, action, link, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="group relative bg-white/70 backdrop-blur-3xl border border-white/60 p-8 rounded-[2.5rem] hover:bg-white hover:border-indigo-100 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-600/5"
  >
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 ${color}`}>
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-xl font-black font-outfit text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 font-medium mb-8 leading-relaxed">{desc}</p>
    <Link 
      to={link}
      className="inline-flex items-center gap-2 text-indigo-600 font-black text-sm uppercase tracking-widest group/link"
    >
      <span>{action}</span>
      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
    </Link>
  </motion.div>
);

const ContactOptions = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-100/40 rounded-full blur-[120px] pointer-events-none -z-0" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold text-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Start Your Journey</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black font-outfit text-slate-900 tracking-tight"
          >
            Connected, Simple, <span className="text-indigo-600">Gud.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 font-medium leading-relaxed"
          >
            Whether you're looking for a demo, need technical support, or want to discuss enterprise deployment — we're just a click away.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ContactCard 
            icon={GraduationCap}
            title="Book a Live Demo"
            desc="See GudERP in action. We'll walk you through all 11 modules and show you the exact impact on your school."
            action="Schedule Now"
            link="/contact"
            color="bg-indigo-50 text-indigo-600"
            delay={0}
          />
          <ContactCard 
            icon={Mail}
            title="Sales Inquiries"
            desc="Discuss custom pricing, multi-campus deployments, and migration plans with our specialized sales team."
            action="Email Sales"
            link="/contact"
            color="bg-violet-50 text-violet-600"
            delay={0.1}
          />
          <ContactCard 
            icon={Headphones}
            title="Support Desk"
            desc="Existing user? Our 24/7 technical team is ready to assist with configurations, training, and troubleshooting."
            action="Get Help"
            link="/contact"
            color="bg-emerald-50 text-emerald-600"
            delay={0.2}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 pt-10 border-t border-slate-200/60 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold">G</div>
               <span className="font-bold text-slate-900">GudERP Global</span>
             </div>
             <div className="h-4 w-px bg-slate-200 hidden md:block" />
             <p className="text-sm font-medium text-slate-500">Trusted by 500+ Institutions Worldwide</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="mailto:hello@guderp.com" className="text-slate-900 font-bold hover:text-indigo-600 transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4 text-slate-400" />
              hello@guderp.com
            </a>
            <a href="tel:+18001234567" className="text-slate-900 font-bold hover:text-indigo-600 transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4 text-slate-400" />
              +1 800 123 4567
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactOptions;
