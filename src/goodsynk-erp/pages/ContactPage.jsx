import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Building } from 'lucide-react';
import AmbientBackground from '../components/AmbientBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white font-inter text-slate-900 selection:bg-indigo-600/30 selection:text-indigo-600 flex flex-col">
      <Navbar />

      <main className="flex-1 relative pt-32 pb-20">
        <AmbientBackground showIcons={false} />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold text-sm"
            >
              <Building className="w-4 h-4" />
              <span>Enterprise & Institutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black font-outfit tracking-tight text-slate-900"
            >
              Get Custom <span className="text-indigo-600">Pricing</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto"
            >
              Every school is unique. Contact our team to orchestrate a deployment plan and pricing structure that fits your exact demographic and needs.
            </motion.p>
          </div>

          {/* Contact Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            
            {/* Left side info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-2 space-y-8"
            >
               <div className="bg-white/60 backdrop-blur-3xl border border-white/70 p-8 rounded-3xl shadow-xl shadow-slate-200/50 space-y-8">
                  <div>
                    <h3 className="text-2xl font-black font-outfit text-slate-900 mb-2">Direct Contact</h3>
                    <p className="text-slate-500 font-medium">Reach out directly to our sales and deployment specialists.</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5" />
                       </div>
                       <div>
                         <p className="text-sm font-bold text-slate-400 mb-0.5 uppercase tracking-wider">Email Us</p>
                         <p className="text-lg font-bold text-slate-800">sales@GOODSYNK ERP.com</p>
                       </div>
                    </div>

                    <div className="flex items-start gap-4">
                       <div className="w-12 h-12 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5" />
                       </div>
                       <div>
                         <p className="text-sm font-bold text-slate-400 mb-0.5 uppercase tracking-wider">Call Us</p>
                         <p className="text-lg font-bold text-slate-800">+1 (800) 123-4567</p>
                       </div>
                    </div>

                    <div className="flex items-start gap-4">
                       <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5" />
                       </div>
                       <div>
                         <p className="text-sm font-bold text-slate-400 mb-0.5 uppercase tracking-wider">Headquarters</p>
                         <p className="text-lg font-bold text-slate-800 leading-snug">
                           Tech Park Avenue,<br/>Silicon Valley, CA 94025
                         </p>
                       </div>
                    </div>
                  </div>
               </div>
            </motion.div>

            {/* Right side Form */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="lg:col-span-3"
            >
               <form className="bg-white/80 backdrop-blur-3xl border border-white border-t-white/80 border-l-white/80 p-8 sm:p-10 rounded-[2.5rem] shadow-2xl shadow-indigo-100/50 space-y-6">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">First Name</label>
                      <input type="text" placeholder="John" className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 rounded-2xl px-5 py-4 outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Last Name</label>
                      <input type="text" placeholder="Doe" className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 rounded-2xl px-5 py-4 outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400" />
                    </div>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Work Email</label>
                      <input type="email" placeholder="john@school.edu" className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 rounded-2xl px-5 py-4 outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Institution Name</label>
                      <input type="text" placeholder="Global High School" className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 rounded-2xl px-5 py-4 outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400" />
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Approximate Student Count</label>
                    <select className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 rounded-2xl px-5 py-4 outline-none transition-all font-medium text-slate-600 appearance-none">
                       <option value="">Select an option</option>
                       <option value="under500">Under 500</option>
                       <option value="500-1000">500 - 1,000</option>
                       <option value="1000-5000">1,000 - 5,000</option>
                       <option value="5000+">5,000+</option>
                    </select>
                 </div>

                 <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Message / Requirements</label>
                    <textarea rows={4} placeholder="Tell us about the modules you need and your current infrastructure..." className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 rounded-2xl px-5 py-4 outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400 resize-none"></textarea>
                 </div>

                 <button type="button" className="w-full group bg-slate-900 hover:bg-indigo-600 text-white rounded-2xl px-6 py-4 font-black text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-xl hover:shadow-indigo-500/30">
                    <span>Send Request</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </button>
               </form>
            </motion.div>

          </div>
        </div>
      </main>

      {/* Reusing existing Footer to cap off the page */}
      <Footer />
    </div>
  );
};

export default ContactPage;
