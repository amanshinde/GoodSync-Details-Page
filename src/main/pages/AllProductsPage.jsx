import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, GraduationCap, Building2, FileText,
  CreditCard, GitBranch, BookOpen, CheckCircle2, Mail
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
    desc: 'An all-in-one school ERP covering student data, attendance, marks, fees, communication, ID cards, hall tickets, and deep reporting. Used by 500+ schools with 2,000+ daily active users.',
    status: 'live',
    color: 'indigo',
    to: '/goodsynk-erp',
    features: ['Student & Staff Management', 'Attendance & Results', 'Fee Collection', 'ID Card Generation', 'Hall Tickets', 'Parent Transparency App', 'RBAC Security', 'Analytics Dashboard'],
    cta: 'View Product',
  },
  {
    id: 'enterprise-erp',
    icon: Building2,
    name: 'Goodsync Enterprise ERP',
    tagline: 'Advanced enterprise-grade ERP system.',
    desc: 'A powerful enterprise resource planning solution built for large-scale operations, multi-department workflows, and complex organizational hierarchies.',
    status: 'coming',
    color: 'violet',
    contact: 'Contact us for early access.',
    features: ['Multi-department Management', 'Enterprise Workflows', 'Advanced Reporting', 'API Integrations'],
  },
  {
    id: 'invoice',
    icon: FileText,
    name: 'Goodsync Invoice',
    tagline: 'Smart invoicing for streamlined billing.',
    desc: 'Intelligent invoice generation, tracking, and client management — automated and designed to eliminate billing friction.',
    status: 'coming',
    color: 'sky',
    features: ['Auto Invoice Generation', 'Client Management', 'Payment Tracking', 'GST Compliance'],
  },
  {
    id: 'billing',
    icon: CreditCard,
    name: 'Goodsync Billing Software',
    tagline: 'End-to-end billing & transaction management.',
    desc: 'Complete billing and transaction management for seamless financial operations, reconciliation, and compliance.',
    status: 'coming',
    color: 'emerald',
    contact: 'Contact us for more details.',
    features: ['Transaction Management', 'Reconciliation', 'Financial Reports', 'Compliance Ready'],
  },
  {
    id: 'workflow',
    icon: GitBranch,
    name: 'Goodsync Workflow Management',
    tagline: 'Automates and optimizes business processes.',
    desc: 'Drag-and-drop workflow automation that maps, optimizes, and automates every business process in your organization.',
    status: 'coming',
    color: 'amber',
    features: ['Visual Workflow Builder', 'Process Automation', 'Team Collaboration', 'Analytics'],
  },
  {
    id: 'learn',
    icon: BookOpen,
    name: 'Learn with Goodsync',
    tagline: 'Learning platform for training & skill development.',
    desc: 'A comprehensive learning management system for teams, students, and professionals to build skills at scale.',
    status: 'coming',
    color: 'rose',
    features: ['Course Builder', 'Progress Tracking', 'Certifications', 'Team Training'],
  },
];

const colorMap = {
  indigo: {
    bg: 'bg-indigo-50', border: 'border-indigo-100', icon: 'text-indigo-600',
    glow: 'hover:shadow-indigo-500/10', badge: 'bg-indigo-100 text-indigo-700', check: 'text-indigo-600',
    btn: 'from-indigo-600 to-violet-600 shadow-indigo-200',
  },
  violet: {
    bg: 'bg-violet-50', border: 'border-violet-100', icon: 'text-violet-600',
    glow: 'hover:shadow-violet-500/10', badge: 'bg-violet-100 text-violet-700', check: 'text-violet-600',
  },
  sky: {
    bg: 'bg-sky-50', border: 'border-sky-100', icon: 'text-sky-600',
    glow: 'hover:shadow-sky-500/10', badge: 'bg-sky-100 text-sky-700', check: 'text-sky-600',
  },
  emerald: {
    bg: 'bg-emerald-50', border: 'border-emerald-100', icon: 'text-emerald-600',
    glow: 'hover:shadow-emerald-500/10', badge: 'bg-emerald-100 text-emerald-700', check: 'text-emerald-600',
  },
  amber: {
    bg: 'bg-amber-50', border: 'border-amber-100', icon: 'text-amber-600',
    glow: 'hover:shadow-amber-500/10', badge: 'bg-amber-100 text-amber-700', check: 'text-amber-600',
  },
  rose: {
    bg: 'bg-rose-50', border: 'border-rose-100', icon: 'text-rose-600',
    glow: 'hover:shadow-rose-500/10', badge: 'bg-rose-100 text-rose-700', check: 'text-rose-600',
  },
};

const AllProductsPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-inter selection:bg-indigo-600/20 selection:text-indigo-900">
      <MainNavbar />

      {/* Header */}
      <section className="relative pt-36 pb-20 px-4 text-center overflow-hidden">
        <AmbientBackground showIcons={false} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-indigo-600 font-black text-sm uppercase tracking-[0.2em] mb-6"
          >
            Our Products
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black font-outfit tracking-tight mb-6 text-slate-900"
          >
            Everything{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
              Goodsync
            </span>{' '}
            Builds
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-xl font-medium max-w-2xl mx-auto"
          >
            One live product today. Five transformative solutions in the pipeline. All built to eliminate complexity and automate the ordinary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-6 mt-10"
          >
            <div className="flex items-center gap-2 text-sm font-bold">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-600">1 Product Live</span>
            </div>
            <div className="w-px h-4 bg-slate-200" />
            <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
              <span className="w-2.5 h-2.5 bg-slate-300 rounded-full" />
              5 Coming Soon
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/60 pt-16">
        <div className="max-w-7xl mx-auto space-y-8">
          {PRODUCTS.map((product, i) => {
            const c = colorMap[product.color];
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`group relative rounded-3xl border border-slate-200 bg-white hover:bg-slate-50/50 p-8 md:p-10 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2 ${c.glow} overflow-hidden`}
              >
                {/* Hover Background Gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-transparent to-${product.color}-50/50 transition-opacity duration-500`} />
                <div className="relative z-10 flex flex-col lg:flex-row gap-8">
                  {/* Left */}
                  <div className="flex-1">
                    <div className="flex items-start gap-5 mb-6">
                      <div className={`w-16 h-16 rounded-2xl ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-8 h-8 ${c.icon}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1 flex-wrap">
                          <h2 className="text-2xl font-black text-slate-900 font-outfit group-hover:text-indigo-600 transition-colors">{product.name}</h2>
                          {product.status === 'live' ? (
                            <span className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-600 text-xs font-black px-3 py-1 rounded-full">
                              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> Live
                            </span>
                          ) : (
                            <span className="bg-slate-100 border border-slate-200 text-slate-500 text-xs font-black px-3 py-1 rounded-full">
                              Coming Soon
                            </span>
                          )}
                        </div>
                        <p className={`text-sm font-bold ${c.icon}`}>{product.tagline}</p>
                      </div>
                    </div>
                    <p className="text-slate-500 font-medium leading-relaxed text-base mb-6 max-w-2xl">{product.desc}</p>

                    {/* Feature tags */}
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((f) => (
                        <span key={f} className={`flex items-center gap-1.5 text-xs font-bold ${c.bg} border ${c.border} ${c.icon} px-3 py-1.5 rounded-xl`}>
                          <CheckCircle2 className="w-3 h-3" /> {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right CTA */}
                  <div className="flex flex-col items-start lg:items-end justify-between gap-4 flex-shrink-0">
                    {product.status === 'live' ? (
                      <Link
                        to={product.to}
                        className={`group/btn flex items-center gap-2 bg-gradient-to-r ${c.btn} text-white px-7 py-3.5 rounded-2xl font-black text-base shadow-xl hover:scale-105 transition-all active:scale-95`}
                      >
                        {product.cta}
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    ) : (
                      <div className="text-right space-y-3">
                        <span className="block bg-slate-50 border border-slate-200 text-slate-500 px-7 py-3.5 rounded-2xl font-bold text-base text-center">
                          Coming Soon
                        </span>
                        {product.contact && (
                          <Link
                            to="/main-contact"
                            className={`flex items-center gap-1.5 text-sm font-bold ${c.icon} hover:opacity-80 transition-opacity`}
                          >
                            <Mail className="w-3.5 h-3.5" /> {product.contact}
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <MainFooter />
    </div>
  );
};

export default AllProductsPage;
