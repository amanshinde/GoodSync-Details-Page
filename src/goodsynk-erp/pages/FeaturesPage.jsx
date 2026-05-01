import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Users, Calendar, FileText, GraduationCap, CreditCard, Bell,
  MessageSquare, IdCard, ClipboardList, PieChart, Shield,
  ChevronRight, Search, Check, Zap, ArrowRight, X, LayoutTemplate
} from 'lucide-react';
import AmbientBackground from '../components/AmbientBackground';
import Navbar from '../components/Navbar';
import FeatureMockUI from '../components/FeatureMockUI';

const ALL_FEATURES = [
  {
    id: 'student-management',
    icon: Users,
    category: 'Core',
    color: 'indigo',
    title: 'Student Data Management',
    tagline: 'One source of truth for every student.',
    desc: 'GOODSYNK ERP maintains a structured, searchable student profile for each enrolled learner — covering admission records, guardian details, enrollment lifecycle, document storage, and quick filters across the school.',
    highlights: [
      'Admission/roll number, class/section, academic year',
      'Guardian contact details, address, emergency contact',
      'Optional fields: blood group, photo, transport, category, notes',
      'Active/inactive status and section transfer history',
      'Document storage: birth certificate, transfer certificate, etc.',
      'Search by name, admission ID, class/section; quick-filter by status, pending fees, attendance risk',
    ],
    usedBy: ['Admin', 'Teachers'],
    stats: [{ label: 'Fields per student profile', value: '40+' }, { label: 'Document storage', value: 'Configurable' }],
  },
  {
    id: 'attendance',
    icon: Calendar,
    category: 'Academic',
    color: 'violet',
    title: 'Attendance Tracking & Analysis',
    tagline: 'Daily operations workflow — not just a register.',
    desc: 'Attendance is designed as a daily teacher-driven workflow with at-risk detection, exportable summaries, and real-time parent visibility. Admin can view, override, and monitor across all classes.',
    highlights: [
      'Teacher marks class/section attendance daily (Present/Absent/Late/Half-day)',
      'Admin override based on school policy',
      'Optional notes and short reason tags (e.g., sick leave)',
      'Daily and monthly attendance summaries per student',
      'At-risk detection for students below 75% attendance threshold',
      'Exportable summaries for compliance; real-time parent visibility',
    ],
    usedBy: ['Teachers', 'Admin', 'Parents'],
    stats: [{ label: 'At-risk threshold', value: '<75%' }, { label: 'Export formats', value: 'CSV & Excel' }],
  },
  {
    id: 'results',
    icon: FileText,
    category: 'Academic',
    color: 'blue',
    title: 'Marks & Result Management',
    tagline: 'From marks entry to published results — structured and controlled.',
    desc: 'GOODSYNK ERP supports structured evaluation workflows from exam configuration and bulk marks entry to admin approval and instant result publishing with subject-wise breakdowns.',
    highlights: [
      'Define exam types: Unit Test, Midterm, Final, etc.',
      'Set subjects, max marks, and passing criteria per exam',
      'Bulk marks entry grids for speed; range validation (0–max marks)',
      'Optional admin moderation/approval workflow before publishing',
      'Publish per exam or per term; lock results after publishing',
      'Student view: subject-wise marks, totals, percentage, grade (if configured)',
    ],
    usedBy: ['Teachers', 'Admin', 'Parents', 'Students'],
    stats: [{ label: 'Supported exam types', value: '10+' }, { label: 'Entry mode', value: 'Bulk grid' }],
  },
  {
    id: 'assignments',
    icon: GraduationCap,
    category: 'Academic',
    color: 'violet',
    title: 'Assignment Management',
    tagline: 'Homework distributed, tracked and archived — in the app.',
    desc: 'Teachers create and distribute assignments to targeted classes with attachments. Students and parents are notified instantly, with due dates and a full history archive.',
    highlights: [
      'Title, description, subject, class/section, due date',
      'Attach supporting files: PDF or image',
      'Basic mode: assignment posted with due date',
      'Advanced mode (optional): submission tracking and status',
      'Copy previous assignments and reuse; archive by subject',
      'Students and parents notified instantly on publish',
    ],
    usedBy: ['Teachers', 'Students', 'Parents'],
    stats: [{ label: 'File formats', value: 'PDF & Images' }, { label: 'Notification', value: 'Instant' }],
  },
  {
    id: 'fees',
    icon: CreditCard,
    category: 'Finance',
    color: 'emerald',
    title: 'Fee Management System',
    tagline: 'Structured fee collection with zero manual effort.',
    desc: 'GOODSYNK ERP supports fee structure setup, installment planning, automated challan generation, and dues tracking — with full parent self-service visibility and export for accounts.',
    highlights: [
      'Class-wise fee components: tuition, lab, transport, etc.',
      'One-time, monthly, quarterly, and annual fee components',
      'Define installment schedules with automatic amount calculation',
      'Generate printable challans/fee slips (student-wise and class-wise)',
      'Optional late fee rules; paid/pending/overdue status tracking',
      'Parent self-service: view dues, paid history, download challan anytime',
    ],
    usedBy: ['Admin', 'Parents'],
    stats: [{ label: 'Challan output', value: 'Print-ready' }, { label: 'Fee components', value: 'Flexible' }],
  },
  {
    id: 'sos',
    icon: Bell,
    category: 'Safety',
    color: 'rose',
    title: 'SOS Emergency Alert',
    tagline: 'One tap. Immediate school response.',
    desc: 'The SOS feature provides an emergency escalation mechanism for student safety. A single tap from the parent or student app notifies designated school contacts instantly with full context.',
    highlights: [
      'Single-tap SOS trigger from parent or student mobile app',
      'Optional reason selection: medical, safety, or other',
      'Notifies designated school contacts: admin, safety officer, class teacher',
      'Captures timestamp and student identity automatically',
      'Audit log: trigger history maintained for review',
      'Optional enhancements: location capture (with consent), call shortcut',
    ],
    usedBy: ['Parents', 'Students', 'Admin'],
    stats: [{ label: 'Alert recipients', value: 'Configurable' }, { label: 'Response mechanism', value: 'Instant' }],
  },
  {
    id: 'communication',
    icon: MessageSquare,
    category: 'Communication',
    color: 'sky',
    title: 'Communication System',
    tagline: 'Centralized messaging. No more informal channels.',
    desc: 'GOODSYNK ERP includes a structured messaging system to reduce dependence on informal channels like WhatsApp. Broadcasts, class-specific messages, and templates — all in one audit-friendly system.',
    highlights: [
      'Admin can broadcast to all users, teachers, or specific class/section',
      'Teacher messaging to assigned class/section (policy-based)',
      'In-app notifications for all delivered messages',
      'Read receipts (optional, configurable per school)',
      'Predefined message templates for common school announcements',
      'Searchable message history and centralized audit trail',
    ],
    usedBy: ['Admin', 'Teachers', 'Parents'],
    stats: [{ label: 'Audience targeting', value: 'Granular' }, { label: 'Message history', value: 'Searchable' }],
  },
  {
    id: 'id-cards',
    icon: IdCard,
    category: 'Admin',
    color: 'amber',
    title: 'ID Card Generation',
    tagline: 'Standardized, branded ID cards — generated in bulk.',
    desc: 'GOODSYNK ERP generates standardized ID cards for students (and optionally staff) using school-branded templates. Auto-populate student details and batch generate for entire classes.',
    highlights: [
      'Multiple templates: different by grade, campus, or purpose',
      'School branding: logo, colors, and layout customization',
      'Auto-populate: student photo, name, class/section, admission ID',
      'Batch generation for selected class/section or entire school',
      'Output: printable layouts suitable for card printing vendors',
      'Eliminates manual design per student — fully standardized',
    ],
    usedBy: ['Admin'],
    stats: [{ label: 'Generation scope', value: 'Entire class' }, { label: 'Output', value: 'Print-ready' }],
  },
  {
    id: 'hall-tickets',
    icon: ClipboardList,
    category: 'Academic',
    color: 'orange',
    title: 'Hall Ticket Generation',
    tagline: 'Exam admit cards with smart eligibility rules.',
    desc: 'GOODSYNK ERP generates hall tickets (admit cards) for exams with consistent formatting, student details, and integrated exam schedules. Policy-driven rules block generation for ineligible students.',
    highlights: [
      'Exam-wise hall ticket templates with consistent formatting',
      'Auto-populate student details and exam schedule (if enabled)',
      'Batch generation by class/section',
      'Optional rule: block generation for students with pending dues',
      'Admin approval required before student can access/download',
      'Eliminates manual preparation of admit cards per student',
    ],
    usedBy: ['Admin', 'Students', 'Parents'],
    stats: [{ label: 'Eligibility rules', value: 'Policy-driven' }, { label: 'Output', value: 'Printable PDF' }],
  },
  {
    id: 'analytics',
    icon: PieChart,
    category: 'Insights',
    color: 'fuchsia',
    title: 'Reports & Analytics Dashboard',
    tagline: 'Admin decisions backed by real data.',
    desc: 'GOODSYNK ERP includes dashboards to help admin make informed decisions — covering attendance trends, academic performance, and fee collection analytics, all exportable for compliance.',
    highlights: [
      'Attendance: daily trend, monthly by class, at-risk student lists',
      'Academic: subject-wise performance distribution, class-wise averages',
      'Academic: identify top/bottom trends (policy-based)',
      'Fee: outstanding dues summary, collection trends by installment',
      'CSV/Excel exports for compliance, reporting, and auditing',
      'Demonstrates measurable outcomes: attendance improvement, faster reporting cycles',
    ],
    usedBy: ['Admin', 'Principal'],
    stats: [{ label: 'Dashboard types', value: '3 domains' }, { label: 'Exports', value: 'CSV & Excel' }],
  },
  {
    id: 'parent-transparency',
    icon: Shield,
    category: 'Parents',
    color: 'teal',
    title: 'Parent Transparency Features',
    tagline: 'Everything a parent needs — without calling the school.',
    desc: 'GOODSYNK ERP is designed to reduce parent-school friction by giving parents self-service visibility into attendance, results, fee status, and communication through the mobile app.',
    highlights: [
      'Attendance: daily status, monthly summary, absence history',
      'Results: exam/term results after admin publishing, subject-wise breakup',
      'Fee: current dues, paid history, installment dates, challan download',
      'Announcements and messages from school in a centralized feed',
      'Student profile details and school information',
      'SOS emergency alert accessible directly from the parent app',
    ],
    usedBy: ['Parents'],
    stats: [{ label: 'Self-service actions', value: '6+' }, { label: 'Front-office load', value: 'Reduced' }],
  },
];

const categoryColors = {
  Core: 'bg-indigo-50 text-indigo-700 border-indigo-100',
  Academic: 'bg-violet-50 text-violet-700 border-violet-100',
  Finance: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  Safety: 'bg-rose-50 text-rose-700 border-rose-100',
  Communication: 'bg-sky-50 text-sky-700 border-sky-100',
  Admin: 'bg-amber-50 text-amber-700 border-amber-100',
  Insights: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-100',
  Parents: 'bg-teal-50 text-teal-700 border-teal-100',
};

const iconBgColors = {
  indigo: 'bg-indigo-100 text-indigo-600',
  violet: 'bg-violet-100 text-violet-600',
  blue: 'bg-blue-100 text-blue-600',
  emerald: 'bg-emerald-100 text-emerald-600',
  rose: 'bg-rose-100 text-rose-600',
  sky: 'bg-sky-100 text-sky-600',
  amber: 'bg-amber-100 text-amber-600',
  orange: 'bg-orange-100 text-orange-600',
  fuchsia: 'bg-fuchsia-100 text-fuchsia-600',
  teal: 'bg-teal-100 text-teal-600',
};

const ID_CARD_TEMPLATES = {
  horizontal: [
    { src: '/horizontal/1.png', label: 'Horizontal Template 1' },
    { src: '/horizontal/2.png', label: 'Horizontal Template 2' },
  ],
  landscape: [
    { src: '/landscape/1.png', label: 'Landscape Template 1' },
    { src: '/landscape/2.png', label: 'Landscape Template 2' },
  ],
};

const IDCardPreviewModal = ({ onClose }) => {
  const [tab, setTab] = useState('horizontal');
  const [activeImg, setActiveImg] = useState(0);

  const templates = ID_CARD_TEMPLATES[tab];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-slate-100">
          <div>
            <p className="text-xs font-black text-amber-600 uppercase tracking-[0.15em] mb-1">ID Card Templates</p>
            <h3 className="text-xl font-black font-outfit text-slate-900">Preview Card Layouts</h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-slate-600" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 px-8 pt-5">
          {['horizontal', 'landscape'].map(t => (
            <button
              key={t}
              onClick={() => { setTab(t); setActiveImg(0); }}
              className={`px-5 py-2 rounded-xl text-sm font-bold capitalize transition-all ${
                tab === t
                  ? 'bg-amber-500 text-white shadow-lg shadow-amber-200'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Image viewer */}
        <div className="px-8 py-6">
          <AnimatePresence mode="wait">
            <motion.img
              key={`${tab}-${activeImg}`}
              src={templates[activeImg].src}
              alt={templates[activeImg].label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="w-full rounded-2xl object-contain border border-slate-100 shadow-sm max-h-[420px]"
            />
          </AnimatePresence>

          {/* Thumbnail strip */}
          <div className="flex gap-3 mt-4 justify-center">
            {templates.map((t, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`w-20 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                  activeImg === i ? 'border-amber-500 shadow-md' : 'border-slate-200 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={t.src} alt={t.label} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const HallTicketPreviewModal = ({ onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md"
    onClick={onClose}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: 20 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden"
      onClick={e => e.stopPropagation()}
    >
      {/* Modal Header */}
      <div className="flex items-center justify-between px-8 py-5 border-b border-slate-100">
        <div>
          <p className="text-xs font-black text-orange-600 uppercase tracking-[0.15em] mb-1">Hall Ticket Template</p>
          <h3 className="text-xl font-black font-outfit text-slate-900">Preview Admit Card Layout</h3>
        </div>
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4 text-slate-600" />
        </button>
      </div>

      {/* Image viewer */}
      <div className="px-8 py-6">
        <img
          src="/hallticket.pdf.png"
          alt="Hall Ticket Template"
          className="w-full rounded-2xl object-contain border border-slate-100 shadow-sm max-h-[480px]"
        />
        <p className="text-center text-xs text-slate-400 font-semibold mt-4">Auto-populated with student details & exam schedule</p>
      </div>
    </motion.div>
  </motion.div>
);

const FeaturesPage = () => {
  const [selected, setSelected] = useState(ALL_FEATURES[0]);
  const [search, setSearch] = useState('');
  const [showIDCardModal, setShowIDCardModal] = useState(false);
  const [showHallTicketModal, setShowHallTicketModal] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const featureId = searchParams.get('feature');
    if (featureId) {
      const match = ALL_FEATURES.find(f => f.id === featureId);
      if (match) setSelected(match);
    }
  }, [searchParams]);

  const filtered = ALL_FEATURES.filter(f =>
    f.title.toLowerCase().includes(search.toLowerCase()) ||
    f.category.toLowerCase().includes(search.toLowerCase())
  );

  const Icon = selected.icon;
  const iconBg = iconBgColors[selected.color] || iconBgColors.indigo;
  const idx = ALL_FEATURES.findIndex(f => f.id === selected.id);
  const prev = ALL_FEATURES[idx - 1];
  const next = ALL_FEATURES[idx + 1];

  return (
    <div className="min-h-screen bg-white font-inter text-slate-900 selection:bg-indigo-600/30 selection:text-indigo-600">
      {/* Shared Navbar — floats exactly like homepage */}
      <Navbar />

      {/* ── FLOATING SIDEBAR ── fixed, left side */}
      <aside className="fixed left-4 xl:left-8 top-24 bottom-6 w-64 xl:w-72 z-40 flex flex-col rounded-3xl bg-white/60 backdrop-blur-2xl border border-white/70 shadow-2xl shadow-slate-200/60 overflow-hidden hidden lg:flex">
        {/* Sidebar header */}
        <div className="px-5 pt-5 pb-4 border-b border-white/50">
          <p className="text-xs font-black text-indigo-600 uppercase tracking-[0.15em] mb-3">Feature Guide</p>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search features…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-2 bg-white/70 border border-slate-200/80 rounded-xl text-xs font-medium text-slate-700 placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 transition-all"
            />
          </div>
        </div>

        {/* Feature list */}
        <nav className="flex-1 overflow-y-auto py-3 px-3 space-y-1">
          {filtered.length === 0 && (
            <p className="text-xs text-slate-400 text-center py-8">No features found</p>
          )}
          {filtered.map(feature => {
            const FIcon = feature.icon;
            const isActive = selected.id === feature.id;
            return (
              <button
                key={feature.id}
                onClick={() => setSelected(feature)}
                className={`w-full text-left flex items-center gap-2.5 px-3 py-2.5 rounded-2xl transition-all duration-200 group ${
                  isActive
                    ? 'bg-indigo-600 shadow-lg shadow-indigo-200'
                    : 'hover:bg-white/80 hover:shadow-sm'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                  isActive ? 'bg-white/20' : iconBgColors[feature.color]
                }`}>
                  <FIcon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : ''}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-xs font-bold truncate leading-snug ${isActive ? 'text-white' : 'text-slate-800'}`}>
                    {feature.title}
                  </p>
                  <p className={`text-[10px] truncate ${isActive ? 'text-indigo-200' : 'text-slate-400'}`}>
                    {feature.category}
                  </p>
                </div>
                {isActive && <ChevronRight className="w-3 h-3 text-indigo-200 flex-shrink-0" />}
              </button>
            );
          })}
        </nav>

        {/* Sidebar footer */}
        <div className="px-4 py-4 border-t border-white/50">
          <p className="text-[10px] text-slate-400 text-center font-medium">{ALL_FEATURES.length} features in GOODSYNK ERP</p>
        </div>
      </aside>

      {/* ── MAIN CONTENT ── offset right to make room for sidebar */}
      <main className="lg:pl-80 xl:pl-88 min-h-screen relative">
        <AmbientBackground showIcons={false} />

        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            {/* ── Hero Section of Feature ── */}
            <section className="min-h-[70vh] flex items-center px-4 md:px-8 xl:px-16 pt-24 md:pt-32 pb-16 md:pb-20">
              <div className="max-w-3xl">
                {/* Category + Roles */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                  className="flex items-center gap-3 flex-wrap mb-8"
                >
                  <span className={`text-xs font-bold px-4 py-1.5 rounded-full border ${categoryColors[selected.category] || 'bg-slate-50 text-slate-600 border-slate-100'}`}>
                    {selected.category}
                  </span>
                  {selected.usedBy.map(role => (
                    <span key={role} className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full">
                      {role}
                    </span>
                  ))}
                </motion.div>

                {/* Icon + Title */}
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
                  className="text-xl xl:text-2xl text-slate-500 font-medium leading-relaxed tracking-tight max-w-2xl"
                >
                  {selected.desc}
                </motion.p>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="flex gap-6 mt-12"
                >
                  {selected.stats.map((stat, i) => (
                    <div key={i} className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-2xl px-8 py-5 shadow-sm">
                      <p className="text-3xl font-black text-slate-900 font-outfit">{stat.value}</p>
                      <p className="text-xs text-slate-500 font-semibold mt-1">{stat.label}</p>
                    </div>
                  ))}
                </motion.div>

                {/* Preview Buttons — ID Cards & Hall Tickets */}
                {(selected.id === 'id-cards' || selected.id === 'hall-tickets') && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.32 }}
                    className="mt-8"
                  >
                    {selected.id === 'id-cards' && (
                      <button
                        onClick={() => setShowIDCardModal(true)}
                        className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-7 py-3.5 rounded-2xl font-black text-base shadow-xl shadow-amber-200 hover:scale-105 active:scale-95 transition-all duration-200"
                      >
                        <LayoutTemplate className="w-5 h-5" />
                        Preview ID Card Templates
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}
                    {selected.id === 'hall-tickets' && (
                      <button
                        onClick={() => setShowHallTicketModal(true)}
                        className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white px-7 py-3.5 rounded-2xl font-black text-base shadow-xl shadow-orange-200 hover:scale-105 active:scale-95 transition-all duration-200"
                      >
                        <LayoutTemplate className="w-5 h-5" />
                        Preview Hall Ticket Template
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}
                  </motion.div>
                )}
              </div>
            </section>

            {/* ── Live Mock UI Section ── */}
            <section className="px-4 md:px-8 xl:px-16 pb-16 md:pb-24 relative">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-10"
                >
                  <span className="text-indigo-600 font-black text-sm uppercase tracking-[0.15em]">Live Preview</span>
                  <h2 className="text-4xl xl:text-5xl font-black font-outfit text-slate-900 tracking-tight leading-tight mt-3">
                    See It In <span className="text-indigo-600">Action</span>
                  </h2>
                  <p className="text-slate-500 mt-3 text-base font-medium">A coded interface — exactly how it looks inside the app.</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <FeatureMockUI featureId={selected.id} />
                </motion.div>
              </div>
            </section>

            {/* ── Highlights Section ── */}
            <section className="px-4 md:px-8 xl:px-16 py-16 md:py-24 relative">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <span className="text-indigo-600 font-black text-sm uppercase tracking-[0.15em]">What it does</span>
                  <h2 className="text-4xl xl:text-5xl font-black font-outfit text-slate-900 tracking-tight leading-tight mt-3">
                    Feature <span className="text-indigo-600">Highlights</span>
                  </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {selected.highlights.map((hl, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="group flex items-start gap-4 bg-white/70 backdrop-blur-xl border border-white/60 hover:border-indigo-100 hover:bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg hover:shadow-indigo-50 transition-all duration-300"
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${iconBg} group-hover:scale-110 transition-transform`}>
                        <Check className="w-4 h-4" />
                      </div>
                      <p className="text-slate-700 font-medium leading-relaxed">{hl}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── Who Uses It ── */}
            <section className="px-4 md:px-8 xl:px-16 py-16 md:py-24 bg-slate-50/50 relative">
              <AmbientBackground colorScheme="roles" showIcons={false} />
              <div className="max-w-3xl relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <span className="text-indigo-600 font-black text-sm uppercase tracking-[0.15em]">Access Control</span>
                  <h2 className="text-4xl xl:text-5xl font-black font-outfit text-slate-900 tracking-tight leading-tight mt-3">
                    Who Uses <span className="text-indigo-600">This</span>
                  </h2>
                </motion.div>

                <div className="flex flex-wrap gap-4">
                  {selected.usedBy.map((role, i) => (
                    <motion.div
                      key={role}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className={`flex items-center gap-4 px-6 py-4 rounded-2xl border bg-white/80 backdrop-blur-md shadow-sm ${categoryColors[selected.category] || 'border-slate-100'}`}
                    >
                      <div className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center shadow-sm">
                        <Users className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-base">{role}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── Previous / Next Navigation ── */}
            <section className="px-4 md:px-8 xl:px-16 py-12 md:py-20">
              <div className="max-w-3xl grid grid-cols-2 gap-6">
                <button
                  disabled={!prev}
                  onClick={() => prev && setSelected(prev)}
                  className="group flex flex-col gap-2 p-6 rounded-3xl border border-slate-100 hover:border-indigo-100 hover:bg-white hover:shadow-lg hover:shadow-indigo-50 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed text-left"
                >
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">← Previous</p>
                  {prev && (
                    <p className="text-base font-black text-slate-800 group-hover:text-indigo-600 transition-colors leading-snug">{prev.title}</p>
                  )}
                </button>
                <button
                  disabled={!next}
                  onClick={() => next && setSelected(next)}
                  className="group flex flex-col gap-2 p-6 rounded-3xl border border-slate-100 hover:border-indigo-100 hover:bg-white hover:shadow-lg hover:shadow-indigo-50 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed text-right"
                >
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Next →</p>
                  {next && (
                    <p className="text-base font-black text-slate-800 group-hover:text-indigo-600 transition-colors leading-snug">{next.title}</p>
                  )}
                </button>
              </div>
            </section>
          </motion.div>
        </AnimatePresence>

        {/* ID Card Preview Modal */}
        <AnimatePresence>
          {showIDCardModal && <IDCardPreviewModal onClose={() => setShowIDCardModal(false)} />}
        </AnimatePresence>

        {/* Hall Ticket Preview Modal */}
        <AnimatePresence>
          {showHallTicketModal && <HallTicketPreviewModal onClose={() => setShowHallTicketModal(false)} />}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default FeaturesPage;
