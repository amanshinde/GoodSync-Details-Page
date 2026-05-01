import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, GraduationCap, Building2, FileText,
  CreditCard, GitBranch, BookOpen, Sparkles, Zap, Shield, Globe
} from 'lucide-react';
import MainNavbar from '../components/MainNavbar';
import MainFooter from '../components/MainFooter';
import AmbientBackground from '../../goodsynk-erp/components/AmbientBackground';

const PRODUCTS = [
  {
    id: 'goodsynk-erp',
    icon: GraduationCap,
    name: 'GOODSYNK ERP',
    tagline: 'Complete School Management System',
    desc: 'An all-in-one ERP for schools — attendance, results, fees, ID cards, and more. Used by 500+ institutions.',
    status: 'live',
    color: 'indigo',
    to: '/goodsynk-erp',
  },
  {
    id: 'enterprise-erp',
    icon: Building2,
    name: 'Goodsync Enterprise ERP',
    tagline: 'Advanced enterprise-grade ERP system.',
    desc: 'A powerful enterprise resource planning solution built for large-scale operations and complex workflows.',
    status: 'coming',
    color: 'violet',
    cta: 'Contact us for early access.',
  },
  {
    id: 'invoice',
    icon: FileText,
    name: 'Goodsync Invoice',
    tagline: 'Smart invoicing solution.',
    desc: 'Streamlined billing operations with smart invoice generation, tracking, and client management.',
    status: 'coming',
    color: 'sky',
    cta: null,
  },
  {
    id: 'billing',
    icon: CreditCard,
    name: 'Goodsync Billing Software',
    tagline: 'End-to-end billing & transaction management.',
    desc: 'Complete billing and transaction management system for seamless financial operations.',
    status: 'coming',
    color: 'emerald',
    cta: 'Contact us for more details.',
  },
  {
    id: 'workflow',
    icon: GitBranch,
    name: 'Goodsync Workflow Management',
    tagline: 'Automates business processes.',
    desc: 'Intelligent automation that optimizes every business process and workflow in your organization.',
    status: 'coming',
    color: 'amber',
    cta: null,
  },
  {
    id: 'learn',
    icon: BookOpen,
    name: 'Learn with Goodsync',
    tagline: 'Learning platform for skill development.',
    desc: 'A comprehensive training and skill development platform for teams, students, and professionals.',
    status: 'coming',
    color: 'rose',
    cta: null,
  },
];

const colorMap = {
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-100', icon: 'text-indigo-600', glow: 'shadow-indigo-500/10' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-100', icon: 'text-violet-600', glow: 'shadow-violet-500/10' },
  sky: { bg: 'bg-sky-50', border: 'border-sky-100', icon: 'text-sky-600', glow: 'shadow-sky-500/10' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-100', icon: 'text-emerald-600', glow: 'shadow-emerald-500/10' },
  amber: { bg: 'bg-amber-50', border: 'border-amber-100', icon: 'text-amber-600', glow: 'shadow-amber-500/10' },
  rose: { bg: 'bg-rose-50', border: 'border-rose-100', icon: 'text-rose-600', glow: 'shadow-rose-500/10' },
};

const WHY = [
  { icon: Zap, title: 'Built for Speed', desc: 'Performant, real-time systems engineered for demanding operations.' },
  { icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade encryption and role-based access control across every product.' },
  { icon: Globe, title: 'India-First Design', desc: 'Built from the ground up for Indian businesses, schools, and institutions.' },
  { icon: Sparkles, title: 'Constantly Evolving', desc: 'Continuous updates, new features, and products driven by real customer needs.' },
];

const MainHome = () => (
  <div className="min-h-screen bg-white text-slate-900 font-inter selection:bg-indigo-600/20 selection:text-indigo-900">
    <MainNavbar />

    {/* ── HERO ── */}
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <AmbientBackground showIcons={false} />

      <div className="relative z-10 text-center max-w-5xl mx-auto pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-3.5 h-3.5" /> One Brand. Every Business Solution.
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <img
            src="/goodsynk.png"
            alt="Goodsync"
            className="h-20 md:h-18 w-auto object-contain mx-auto mb-10 drop-shadow-sm"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black font-outfit tracking-tight leading-tight mb-6 text-slate-900"
        >
          Software That Works{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
            As Hard As You Do
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto mb-12"
        >
          From school management to enterprise ERP — Goodsync delivers intelligent, reliable software for every operational need.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/products"
            className="group flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl shadow-indigo-200 hover:scale-105 transition-all active:scale-95"
          >
            Explore All Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/goodsynk-erp"
            className="flex items-center gap-2 bg-white border border-slate-200 text-slate-800 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all shadow-sm"
          >
            View GOODSYNK ERP
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-slate-300" />
        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Scroll</p>
      </motion.div>
    </section>

    {/* ── PRODUCTS PREVIEW ── */}
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-indigo-600 font-black text-sm uppercase tracking-[0.2em]">Our Products</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit tracking-tight mt-4 mb-6 text-slate-900">
            Six Products.{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Infinite Potential.
            </span>
          </h2>
          <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto">
            Each Goodsync product is built to eliminate friction, automate complexity, and help your business run flawlessly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => {
            const c = colorMap[product.color];
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className={`group relative rounded-3xl border border-slate-200 bg-white hover:bg-slate-50/50 p-8 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2 ${c.glow} overflow-hidden`}
              >
                {/* Hover gradient background effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-transparent to-${product.color}-50/50 transition-opacity duration-500`} />
                <div className="relative z-10">
                  {/* Live badge */}
                  {product.status === 'live' && (
                    <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-600 text-xs font-black px-3 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                      Live
                    </div>
                  )}
                  {product.status === 'coming' && (
                    <div className="absolute top-6 right-6 bg-slate-100 border border-slate-200 text-slate-500 text-xs font-black px-3 py-1 rounded-full">
                      Coming Soon
                    </div>
                  )}

                  <div className={`w-14 h-14 rounded-2xl ${c.bg} border ${c.border} flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 ${c.icon}`} />
                  </div>

                  <h3 className="text-xl font-black text-slate-900 font-outfit mb-2 group-hover:text-indigo-600 transition-colors">{product.name}</h3>
                  <p className={`text-sm font-bold ${c.icon} mb-3`}>{product.tagline}</p>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">{product.desc}</p>

                  {product.status === 'live' ? (
                    <Link
                      to={product.to}
                      className={`inline-flex items-center gap-2 ${c.bg} border ${c.border} ${c.icon} px-5 py-2.5 rounded-xl text-sm font-black hover:scale-105 transition-all`}
                    >
                      View Product <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <div>
                      <span className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 text-slate-500 px-5 py-2.5 rounded-xl text-sm font-bold">
                        Coming Soon
                      </span>
                      {product.cta && (
                        <Link to="/main-contact" className="block mt-2 text-xs text-slate-500 hover:text-indigo-600 transition-colors font-medium">
                          {product.cta} →
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-700 transition-colors"
          >
            See detailed product overview
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* ── WHY GOODSYNC ── */}
    <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-indigo-600 font-black text-sm uppercase tracking-[0.2em]">Why Goodsync</span>
          <h2 className="text-4xl md:text-5xl font-black font-outfit tracking-tight mt-4 text-slate-900">
            Built Different.{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">By Design.</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-white border border-slate-200 shadow-sm rounded-3xl p-8 hover:border-indigo-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ── CTA BANNER ── */}
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-700 p-12 md:p-16 text-center overflow-hidden shadow-2xl shadow-indigo-200"
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
            <h2 className="text-3xl md:text-5xl font-black font-outfit mb-6 text-white">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-white/80 text-xl font-medium mb-10 max-w-2xl mx-auto">
              Start with GOODSYNK ERP today or get in touch to learn what's coming next.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/goodsynk-erp"
                className="group flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl"
              >
                Explore GOODSYNK ERP
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/main-contact"
                className="flex items-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <MainFooter />
  </div>
);

export default MainHome;
