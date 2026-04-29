import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Shield, GraduationCap, Heart, Check, Users, ChevronRight, Settings, 
  Smartphone, MonitorSmartphone
} from 'lucide-react';
import AmbientBackground from './AmbientBackground';
import Navbar from './Navbar';

const ALL_ROLES = [
  {
    id: 'admins',
    icon: Shield,
    category: 'System Owner',
    color: 'indigo',
    title: 'Admin User',
    tagline: 'Complete operational control across the school.',
    desc: 'Admins have the highest level of access in GoodSync ERP. They manage school setup, bulk operations, evaluate performance metrics, oversee daily attendance, and publish results.',
    device: 'Web Panel',
    deviceIcon: MonitorSmartphone,
    highlights: [
      'School setup & configuration (academic years, classes, exams)',
      'Bulk data upload (students & teachers via templates)',
      'Attendance management (override rules, monitor at-risk)',
      'Fee operations (structure setup, installments, challans)',
      'Marks entry locking & result publishing',
      'Advanced reporting & analytics dashboards',
      'Centralized messaging to all users or specific groups',
      'ID card and Hall ticket batch generation'
    ],
    stats: [{ label: 'Access Level', value: 'Highest' }, { label: 'Platform Focus', value: 'Web' }],
  },
  {
    id: 'teachers',
    icon: GraduationCap,
    category: 'Staff Member',
    color: 'violet',
    title: 'Teacher Access',
    tagline: 'Focused entirely on teaching and class management.',
    desc: 'Teacher access is strictly scoped to assigned subjects and classes. The module is built to accelerate daily workflows like attendance and marks entry, avoiding unnecessary data exposure.',
    device: 'Web + Mobile App',
    deviceIcon: Smartphone,
    highlights: [
      "Dashboard overview for today's assigned classes",
      'Rapid digital attendance tracking for class/section',
      'Create assignments, attach files, and track submissions',
      'Marks entry grid for assigned subjects/exams',
      'View admin announcements and policies',
      'Leave application request and tracking',
      'Access basic student detail lists for assigned classes'
    ],
    stats: [{ label: 'Access Level', value: 'Class-Scoped' }, { label: 'Platform Focus', value: 'Mobile' }],
  },
  {
    id: 'parents',
    icon: Heart,
    category: 'End User',
    color: 'emerald',
    title: 'Student & Parent',
    tagline: 'Self-service transparency without calling the school.',
    desc: 'Parent and student access is designed for clarity, transparency, and ease of use. It provides read-only visibility into academic progress, fee compliance, and attendance.',
    device: 'Mobile App Only',
    deviceIcon: Smartphone,
    highlights: [
      'View daily attendance status and monthly summaries',
      'Access exam/term results immediately after publishing',
      'View outstanding fee dues and paid history',
      'Download printable fee challans directly',
      'Receive official school announcements securely',
      'Single-tap SOS emergency alert for student safety'
    ],
    stats: [{ label: 'Access Level', value: 'Personal' }, { label: 'Platform Focus', value: 'Mobile' }],
  }
];

const iconBgColors = {
  indigo: 'bg-indigo-100 text-indigo-600',
  violet: 'bg-violet-100 text-violet-600',
  emerald: 'bg-emerald-100 text-emerald-600',
};

const badgeColors = {
  'System Owner': 'bg-indigo-50 text-indigo-700 border-indigo-100',
  'Staff Member': 'bg-violet-50 text-violet-700 border-violet-100',
  'End User': 'bg-emerald-50 text-emerald-700 border-emerald-100',
};

const RolesPage = () => {
  const [selected, setSelected] = useState(ALL_ROLES[0]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const roleId = searchParams.get('role');
    if (roleId) {
      const match = ALL_ROLES.find(r => r.id === roleId);
      if (match) setSelected(match);
    }
  }, [searchParams]);

  const Icon = selected.icon;
  const DeviceIcon = selected.deviceIcon;
  const iconBg = iconBgColors[selected.color] || iconBgColors.indigo;

  return (
    <div className="min-h-screen bg-white font-inter text-slate-900 selection:bg-indigo-600/30 selection:text-indigo-600">
      <Navbar />

      {/* ── FLOATING SIDEBAR ── */}
      <aside className="fixed left-4 xl:left-8 top-24 bottom-6 w-64 xl:w-72 z-40 flex flex-col rounded-3xl bg-white/60 backdrop-blur-2xl border border-white/70 shadow-2xl shadow-slate-200/60 overflow-hidden hidden lg:flex">
        {/* Sidebar header */}
        <div className="px-5 pt-6 pb-4 border-b border-white/50">
          <p className="text-xs font-black text-indigo-600 uppercase tracking-[0.15em]">Access Control</p>
          <h3 className="text-lg font-black text-slate-800 mt-1">User Roles</h3>
        </div>

        {/* Role list */}
        <nav className="flex-1 overflow-y-auto py-3 px-3 space-y-2">
          {ALL_ROLES.map(role => {
            const RIcon = role.icon;
            const isActive = selected.id === role.id;
            return (
              <button
                key={role.id}
                onClick={() => setSelected(role)}
                className={`w-full text-left flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-200 group ${
                  isActive
                    ? 'bg-indigo-600 shadow-lg shadow-indigo-200'
                    : 'hover:bg-white/80 hover:shadow-sm'
                }`}
              >
                <div className={`w-10 h-10 rounded-[14px] flex items-center justify-center flex-shrink-0 transition-all ${
                  isActive ? 'bg-white/20' : iconBgColors[role.color]
                }`}>
                  <RIcon className={`w-5 h-5 ${isActive ? 'text-white' : ''}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-bold truncate leading-snug ${isActive ? 'text-white' : 'text-slate-800'}`}>
                    {role.title}
                  </p>
                  <p className={`text-[11px] truncate ${isActive ? 'text-indigo-200' : 'text-slate-400'}`}>
                    {role.category}
                  </p>
                </div>
                {isActive && <ChevronRight className="w-4 h-4 text-indigo-200 flex-shrink-0" />}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* ── MAIN CONTENT ── */}
      <main className="lg:pl-80 xl:pl-88 min-h-screen relative pb-32">
        <AmbientBackground showIcons={false} />

        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 pt-32 px-8 xl:px-16"
          >
            <div className="max-w-3xl">
              
              {/* Top Badges */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="flex items-center gap-3 flex-wrap mb-8"
              >
                <span className={`text-xs font-bold px-4 py-1.5 rounded-full border ${badgeColors[selected.category]}`}>
                  {selected.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full">
                  <DeviceIcon className="w-3.5 h-3.5" />
                  {selected.device}
                </span>
              </motion.div>

              {/* Title Block */}
              <div className="flex items-start gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className={`w-20 h-20 xl:w-24 xl:h-24 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-xl ${iconBg}`}
                >
                  <Icon className="w-10 h-10 xl:w-12 xl:h-12" />
                </motion.div>
                <div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl xl:text-6xl font-black font-outfit text-slate-900 leading-tight tracking-tight"
                  >
                    {selected.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="text-lg xl:text-xl text-indigo-600 font-semibold mt-2"
                  >
                    {selected.tagline}
                  </motion.p>
                </div>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl xl:text-2xl text-slate-500 font-medium leading-relaxed tracking-tight"
              >
                {selected.desc}
              </motion.p>

              {/* Stats/Metrics Block */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="flex gap-6 mt-12 mb-20"
              >
                {selected.stats.map((stat, i) => (
                  <div key={i} className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-2xl px-8 py-5 shadow-sm">
                    <p className="text-2xl font-black text-slate-900 font-outfit">{stat.value}</p>
                    <p className="text-xs text-slate-500 font-semibold mt-1">{stat.label}</p>
                  </div>
                ))}
              </motion.div>

              {/* Role Scope & Capabilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl font-black font-outfit text-slate-900 tracking-tight">
                  Role Capabilities & Scope
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 gap-4">
                {selected.highlights.map((hl, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group bg-white/70 backdrop-blur-xl border border-white/60 hover:bg-white rounded-2xl p-5 shadow-sm transition-all duration-300 flex items-center gap-4"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${iconBg}`}>
                      <Check className="w-4 h-4 text-current" />
                    </div>
                    <p className="text-slate-700 font-semibold md:text-lg">{hl}</p>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default RolesPage;
