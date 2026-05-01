import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Lightbulb, Users, Zap } from 'lucide-react';
import MainNavbar from '../components/MainNavbar';
import MainFooter from '../components/MainFooter';
import AmbientBackground from '../../goodsynk-erp/components/AmbientBackground';

const VALUES = [
  { icon: Target, title: 'Precision', desc: 'Every feature is intentional. No bloat, no filler — just exactly what your operation needs.' },
  { icon: Zap, title: 'Speed', desc: 'Fast by design. We build systems that respond instantly and scale without friction.' },
  { icon: Heart, title: 'Empathy', desc: "We build for real people — school admins, business owners, parents — not just power users." },
  { icon: Eye, title: 'Transparency', desc: "Open, honest software. No hidden limits, no surprise pricing, no confusing dashboards." },
  { icon: Lightbulb, title: 'Innovation', desc: 'Always iterating. We ship improvements regularly based on customer feedback and market insight.' },
  { icon: Users, title: 'Community', desc: "Our customers shape our roadmap. When you grow, we grow. It's a two-way partnership." },
];

const MILESTONES = [
  { year: '2024', title: 'Founded', desc: 'Goodsync was founded with a mission to make enterprise software accessible to every business.' },
  { year: '2024', title: 'GOODSYNK ERP Beta', desc: 'Launched the first version of GOODSYNK ERP for school management in select institutions.' },
  { year: '2025', title: '500+ Schools', desc: 'Crossed 500 active school partnerships with 2,000+ daily users on the platform.' },
  { year: '2026', title: 'Multi-Product Vision', desc: 'Expanded the Goodsync product line to 6 verticals spanning ERP, billing, workflows, and learning.' },
];

const AboutPage = () => (
  <div className="min-h-screen bg-white text-slate-900 font-inter selection:bg-indigo-600/20 selection:text-indigo-900">
    <MainNavbar />

    {/* Hero */}
    <section className="relative pt-24 md:pt-36 pb-12 md:pb-20 px-4 overflow-hidden">
      <AmbientBackground showIcons={false} />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block text-indigo-600 font-black text-sm uppercase tracking-[0.2em] mb-6"
        >
          About Goodsync
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black font-outfit tracking-tight mb-8 text-slate-900"
        >
          We Build Software{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
            That Matters
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 text-xl font-medium leading-relaxed max-w-3xl mx-auto"
        >
          Goodsync is a software company on a mission to digitize and streamline operations for schools, enterprises, and businesses across India and beyond. We believe great software should be fast, simple, and powerful — without compromise.
        </motion.p>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60 bg-slate-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            label: 'Our Mission',
            title: 'Make every operation effortless.',
            desc: 'We create intelligent software solutions that eliminate manual work, reduce errors, and give every organization — from a single school to a large enterprise — the power to operate at their best.',
            color: 'bg-white',
            border: 'border-indigo-100',
            labelColor: 'text-indigo-600'
          },
          {
            label: 'Our Vision',
            title: 'A world running on Goodsync.',
            desc: 'We envision a future where every school, business, and institution runs on purpose-built software that\'s as intelligent as the people using it — freeing teams to focus on what truly matters.',
            color: 'bg-white',
            border: 'border-violet-100',
            labelColor: 'text-violet-600'
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`group relative rounded-3xl ${item.color} border ${item.border} p-8 md:p-10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden`}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-transparent to-slate-100/50 transition-opacity duration-500" />
            <div className="relative z-10">
              <span className={`text-xs font-black ${item.labelColor} uppercase tracking-[0.2em] mb-4 block`}>{item.label}</span>
              <h2 className="text-3xl font-black font-outfit mb-4 text-slate-900 group-hover:text-indigo-600 transition-colors">{item.title}</h2>
              <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Values */}
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 font-black text-sm uppercase tracking-[0.2em]">What We Stand For</span>
          <h2 className="text-4xl md:text-5xl font-black font-outfit tracking-tight mt-4 text-slate-900">Our Core Values</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group relative bg-white border border-slate-200 shadow-sm rounded-3xl p-6 md:p-8 hover:border-indigo-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-indigo-50/30 to-violet-50/30 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{v.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 font-black text-sm uppercase tracking-[0.2em]">Our Journey</span>
          <h2 className="text-4xl md:text-5xl font-black font-outfit tracking-tight mt-4 text-slate-900">Built Step by Step</h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-200 to-transparent" />
          <div className="space-y-10">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 md:gap-8 pl-0 md:pl-4"
              >
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white relative z-10 shadow-sm">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 flex-1 hover:border-indigo-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <span className="text-indigo-600 font-black text-xs uppercase tracking-widest">{m.year}</span>
                    <h3 className="text-xl font-black text-slate-900 mt-1 mb-2 group-hover:text-indigo-600 transition-colors">{m.title}</h3>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-700 p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-indigo-200"
        >
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, white 1px, transparent 1px), radial-gradient(circle at 70% 80%, white 1.5px, transparent 1.5px)',
            backgroundSize: '30px 30px, 40px 40px'
          }} />
          <motion.div 
            animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }} 
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" 
          />
          <div className="relative z-10">
            <h2 className="text-3xl font-black font-outfit mb-4 text-white">Join the Goodsync Journey</h2>
            <p className="text-white/80 font-medium mb-8">We're building the future of business software. Be among the first.</p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full">
              <Link to="/products" className="group flex items-center justify-center gap-2 bg-white text-indigo-600 px-7 py-3.5 rounded-2xl font-black hover:scale-105 transition-all shadow-xl w-full sm:w-auto">
                Explore Products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/main-contact" className="flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-7 py-3.5 rounded-2xl font-bold hover:bg-white/20 transition-all w-full sm:w-auto">
                Get in Touch
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <MainFooter />
  </div>
);

export default AboutPage;
