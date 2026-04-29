import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, Calendar, FileText, GraduationCap, CreditCard, Bell,
  MessageSquare, IdCard, ClipboardList, PieChart, Shield,
  Search, Check, CheckCircle2, XCircle, Clock, AlertTriangle,
  Download, Send, Phone, MapPin, Mail, BookOpen, BarChart2,
  TrendingUp, TrendingDown, ChevronDown, Star, Award, Zap, ArrowRight, Settings
} from 'lucide-react';

/* ─── Shared shell: glass dashboard card ─── */
const MockShell = ({ children, title, icon: Icon, iconBg = 'bg-indigo-100 text-indigo-600' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    className="w-full bg-white/80 backdrop-blur-2xl border border-white/70 shadow-2xl shadow-slate-200/60 rounded-3xl overflow-hidden"
  >
    {/* Shell Header */}
    <div className="h-12 bg-white/90 border-b border-slate-100 px-5 flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${iconBg}`}>
          <Icon className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs font-bold text-slate-700">{title}</span>
      </div>
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-200 hover:bg-red-400 transition-colors cursor-pointer" />
        <div className="w-2.5 h-2.5 rounded-full bg-slate-200 hover:bg-amber-400 transition-colors cursor-pointer" />
        <div className="w-2.5 h-2.5 rounded-full bg-slate-200 hover:bg-green-400 transition-colors cursor-pointer" />
      </div>
    </div>
    <div className="p-5">{children}</div>
  </motion.div>
);

/* ─── 1. STUDENT MANAGEMENT ─── */
const StudentMock = () => {
  const sidebarItems = [
    { icon: PieChart, label: 'Dashboard' },
    { icon: Users, label: 'Manage Users', active: true },
    { icon: Settings, label: 'School Settings' },
    { icon: GraduationCap, label: 'Academic Details' },
    { icon: Calendar, label: 'Attendance' },
    { icon: BookOpen, label: 'Assignments' },
    { icon: FileText, label: 'Results' },
    { icon: Clock, label: 'Leave Management' },
    { icon: MessageSquare, label: 'Messages' },
    { icon: CreditCard, label: 'Fees' },
  ];

  const students = [
    { name: 'Ananya Verma', id: 'ABC-S-0002', email: 'ananya.verma.101@example.com', phone: '6010972077', class: '1', section: 'A', status: 'Active', avatar: 'U' },
    { name: 'Vihaan Nair', id: 'ABC-S-0003', email: 'vihaan.nair.102@example.com', phone: '6378562557', class: '1', section: 'A', status: 'Active', avatar: 'U' },
    { name: 'Vihaan Joshi', id: 'ABC-S-0004', email: 'vihaan.joshi.103@example.com', phone: '8876999843', class: '1', section: 'A', status: 'Active', avatar: 'U' },
  ];

  return (
    <MockShell title="Manage Users" icon={Users} iconBg="bg-blue-100 text-blue-600">
      <div className="flex h-[450px] -m-5">
        {/* Real Sidebar Look */}
        <div className="w-14 md:w-48 bg-white border-r border-slate-100 flex flex-col py-4">
          {sidebarItems.map((item, i) => (
            <div key={i} className={`px-4 py-3 flex items-center gap-3 transition-colors cursor-pointer ${item.active ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}>
              <item.icon className="w-4 h-4 flex-shrink-0" />
              <span className="text-[10px] font-bold hidden md:block">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Main Workspace */}
        <div className="flex-1 bg-slate-50/30 flex flex-col min-w-0">
          {/* Internal Header */}
          <div className="p-6 bg-white border-b border-slate-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-800 tracking-tight">Manage Users</h2>
                <p className="text-xs text-slate-400 font-medium">Add, edit, and manage system users</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-8 border-b border-slate-100">
              {['Students (100)', 'Teachers (1)', 'Admins (1)'].map((tab, i) => (
                <button key={tab} className={`pb-3 text-xs font-bold transition-all px-1 ${i === 0 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Toolbar */}
          <div className="px-6 py-4 flex flex-wrap gap-3 items-center bg-white shadow-sm shadow-slate-100/50 z-10">
            <div className="flex-1 min-w-[150px] relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              <input type="text" placeholder="Search" className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-[10px] outline-none" />
            </div>
            
            <div className="flex items-center gap-2">
              <button className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50"><Zap className="w-3.5 h-3.5" /></button>
              <select className="bg-white border border-slate-200 rounded-lg px-2 py-1.5 text-[10px] font-bold text-slate-600 outline-none">
                <option>2024-25 (Current)</option>
              </select>
              <select className="bg-white border border-slate-200 rounded-lg px-2 py-1.5 text-[10px] font-bold text-slate-600 outline-none">
                <option>All Classes</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex bg-slate-100 rounded-lg p-0.5">
                <button className="px-3 py-1 bg-white shadow-sm rounded-md text-[9px] font-bold text-blue-600">Table View</button>
                <button className="px-3 py-1 text-[9px] font-bold text-slate-500">Class View</button>
              </div>
              <button className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 rounded-lg text-slate-600 text-[10px] font-bold hover:bg-slate-50"><Download className="w-3 h-3" /> Export</button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 rounded-lg text-slate-600 text-[10px] font-bold hover:bg-slate-50"><ArrowRight className="w-3 h-3 rotate-[-90deg]" /> Import</button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 rounded-lg text-slate-600 text-[10px] font-bold hover:bg-slate-50"><FileText className="w-3 h-3" /> Template</button>
              <button className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-600 text-white rounded-lg text-[10px] font-bold hover:bg-blue-700">+ Add Student</button>
            </div>
          </div>

          {/* Table Area */}
          <div className="flex-1 overflow-auto p-4">
            <div className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                    <th className="px-4 py-3">Photo</th>
                    <th className="px-4 py-3">User</th>
                    <th className="px-4 py-3">Contact</th>
                    <th className="px-4 py-3">Class</th>
                    <th className="px-4 py-3">Section</th>
                    <th className="px-4 py-3">Student ID</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Created</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {students.map((s, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-4 py-3 text-center">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-black">{s.avatar}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <p className="text-xs font-black text-slate-800 leading-tight">{s.name}</p>
                        <p className="text-[9px] text-slate-400 font-medium">{s.id}</p>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <p className="text-[10px] text-slate-500">{s.email}</p>
                        <p className="text-[9px] text-slate-400">{s.phone}</p>
                      </td>
                      <td className="px-4 py-3 text-xs font-bold text-slate-600">{s.class}</td>
                      <td className="px-4 py-3 text-xs font-bold text-slate-600">{s.section}</td>
                      <td className="px-4 py-3 text-xs text-slate-600 font-mono tracking-tighter">{s.id}</td>
                      <td className="px-4 py-3">
                        <span className="flex items-center gap-1.5 text-emerald-600 text-[10px] font-bold">
                          <CheckCircle2 className="w-3 h-3" />
                          {s.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-[10px] text-slate-400 font-medium">20/2/2026</td>
                      <td className="px-4 py-3">
                        <div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center text-blue-500 cursor-pointer">
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </MockShell>
  );
};

/* ─── 2. ATTENDANCE ─── */
const AttendanceMock = () => {
  const sidebarItems = [
    { icon: PieChart, label: 'Dashboard' },
    { icon: Users, label: 'Manage Users' },
    { icon: Settings, label: 'School Settings' },
    { icon: GraduationCap, label: 'Academic Details' },
    { icon: Calendar, label: 'Attendance', active: true },
    { icon: BookOpen, label: 'Assignments' },
    { icon: FileText, label: 'Results' },
    { icon: Clock, label: 'Leave Management' },
    { icon: MessageSquare, label: 'Messages' },
    { icon: CreditCard, label: 'Fees' },
    { icon: BarChart2, label: 'Reports' },
  ];

  return (
    <MockShell title="Attendance Management" icon={Calendar} iconBg="bg-blue-100 text-blue-600">
      <div className="flex h-[450px] -m-5">
        {/* Sidebar */}
        <div className="w-14 md:w-48 bg-white border-r border-slate-100 flex flex-col py-4">
          {sidebarItems.map((item, i) => (
            <div key={i} className={`px-4 py-3 flex items-center gap-3 transition-colors cursor-pointer ${item.active ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}>
              <item.icon className="w-4 h-4 flex-shrink-0" />
              <span className="text-[10px] font-bold hidden md:block">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Main Workspace */}
        <div className="flex-1 bg-slate-50/30 flex flex-col min-w-0">
          {/* Header */}
          <div className="p-6 bg-white border-b border-slate-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-800 tracking-tight">Attendance Management</h2>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-8 border-b border-slate-100">
              {['Mark Attendance', 'View Attendance'].map((tab, i) => (
                <button key={tab} className={`pb-3 text-xs font-bold transition-all px-1 ${i === 0 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>
                  {tab === 'Mark Attendance' && <Users className="w-3.5 h-3.5 inline mr-1" />}
                  {tab === 'View Attendance' && <Search className="w-3.5 h-3.5 inline mr-1" />}
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 space-y-6 overflow-auto">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black text-slate-800">Mark Attendance</h3>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold shadow-md shadow-emerald-100 hover:bg-emerald-700">
                  <Check className="w-4 h-4" /> Mark All Present
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-rose-600 text-white rounded-lg text-xs font-bold shadow-md shadow-rose-100 hover:bg-rose-700">
                  <XCircle className="w-4 h-4" /> Mark All Absent
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-400 text-white rounded-lg text-xs font-bold cursor-not-allowed">
                  <FileText className="w-4 h-4" /> Save Attendance
                </button>
              </div>
            </div>

            {/* Filters Box */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm grid grid-cols-5 gap-4">
              {['Academic Year', 'Date', 'Class', 'Section', 'Session'].map((label) => (
                <div key={label} className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">{label}</label>
                  {label === 'Session' ? (
                    <div className="flex bg-slate-100 rounded-lg p-1">
                      <button className="flex-1 bg-blue-600 text-white text-[10px] font-bold py-1.5 rounded-md flex items-center justify-center gap-1">
                        <Zap className="w-3 h-3" /> Morning
                      </button>
                      <button className="flex-1 text-slate-500 text-[10px] font-bold py-1.5 rounded-md flex items-center justify-center gap-1">
                        <Clock className="w-3 h-3" /> Afternoon
                      </button>
                    </div>
                  ) : (
                    <div className="relative">
                      <input 
                        type="text" 
                        readOnly 
                        value={label === 'Class' ? 'Loading...' : label === 'Section' ? 'Select Class First' : label === 'Date' ? '07-04-2026' : '2024-25 (Curren'} 
                        className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-[10px] font-bold text-slate-600" 
                      />
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Help Box */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-blue-600" />
                <h4 className="text-lg font-black text-blue-700">Get Started</h4>
              </div>
              <ul className="space-y-2">
                {[
                  '1. Select a date for attendance',
                  '2. Choose a class from the dropdown',
                  '3. Select a section to view students',
                  '4. Choose morning or afternoon session',
                  '5. Mark attendance for each student',
                  '6. Save the attendance record'
                ].map((step, i) => (
                  <li key={i} className="text-xs font-bold text-blue-600/80">{step}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MockShell>
  );
};

/* ─── 3. RESULTS / MARKS ─── */
const ResultsMock = () => {
  const sidebarItems = [
    { icon: PieChart, label: 'Dashboard' },
    { icon: Users, label: 'Manage Users' },
    { icon: Settings, label: 'School Settings' },
    { icon: GraduationCap, label: 'Academic Details' },
    { icon: Calendar, label: 'Attendance' },
    { icon: BookOpen, label: 'Assignments' },
    { icon: FileText, label: 'Results', active: true },
    { icon: Clock, label: 'Leave Management' },
    { icon: MessageSquare, label: 'Messages' },
    { icon: CreditCard, label: 'Fees' },
    { icon: BarChart2, label: 'Reports' },
  ];

  return (
    <MockShell title="Academic Results" icon={FileText} iconBg="bg-blue-100 text-blue-600">
      <div className="flex h-[450px] -m-5">
        <div className="w-14 md:w-48 bg-white border-r border-slate-100 flex flex-col py-4">
          {sidebarItems.map((item, i) => (
            <div key={i} className={`px-4 py-3 flex items-center gap-3 transition-colors cursor-pointer ${item.active ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}>
              <item.icon className="w-4 h-4 flex-shrink-0" />
              <span className="text-[10px] font-bold hidden md:block">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="flex-1 bg-slate-50/30 flex flex-col min-w-0">
          <div className="p-6 bg-white border-b border-slate-100">
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">Academic Results</h2>
          </div>

          <div className="p-6 space-y-6 overflow-auto">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
              <div className="grid grid-cols-5 gap-4">
                {['Academic Year', 'Class', 'Section', 'Subject', 'Test Type'].map((label) => (
                  <div key={label} className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">{label}</label>
                    <div className="relative">
                      <select className="w-full bg-white border border-slate-200 rounded-lg px-2 py-2 text-[10px] font-bold text-slate-600 outline-none appearance-none">
                        <option>{label === 'Test Type' ? 'FA1' : label === 'Class' ? 'Class 1' : label === 'Subject' ? 'Maths' : label === 'Section' ? 'Section A' : '2024-25 (Current)'}</option>
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex-1 max-w-[200px] space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Total Marks</label>
                  <input type="text" value="50" readOnly className="w-full bg-slate-100 border border-slate-200 rounded-lg px-4 py-2 text-[10px] font-bold text-slate-700" />
                </div>
                <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold mt-6 shadow-md shadow-blue-100">
                  <Search className="w-4 h-4" /> Search
                </button>
                <button className="flex items-center gap-2 px-6 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold mt-6 shadow-md shadow-emerald-100">
                  <CheckCircle2 className="w-4 h-4" /> View Existing Results
                </button>
              </div>
            </div>

            {/* Table Area */}
            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-black text-slate-800">Existing Results for 1-A - Maths (FA1)</h4>
                  <p className="text-[10px] text-slate-400 font-medium">Found 10 results. Click on a result to edit it.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-rose-600 text-white rounded-lg text-[10px] font-bold shadow-md shadow-rose-100">
                  <Shield className="w-3.5 h-3.5" /> Freeze Results
                </button>
              </div>
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr className="text-[9px] font-bold text-slate-400 uppercase">
                    <th className="px-4 py-3">User ID</th>
                    <th className="px-4 py-3">Student Name</th>
                    <th className="px-4 py-3">Subject</th>
                    <th className="px-4 py-3">Test Type</th>
                    <th className="px-4 py-3 text-center">Obtained Marks</th>
                    <th className="px-4 py-3 text-center">Total Marks</th>
                    <th className="px-4 py-3">Grade</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 font-bold">
                  <tr className="text-xs">
                    <td className="px-4 py-3 text-slate-400 font-medium text-[10px]">ABC-S-0002</td>
                    <td className="px-4 py-3 text-slate-800">Ananya Verma</td>
                    <td className="px-4 py-3"><span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-md text-[10px]">Maths</span></td>
                    <td className="px-4 py-3"><span className="bg-violet-100 text-violet-600 px-2 py-0.5 rounded-md text-[10px]">FA1</span></td>
                    <td className="px-4 py-3 text-center text-slate-800">21</td>
                    <td className="px-4 py-3 text-center text-slate-500">50</td>
                    <td className="px-4 py-3"><span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-md text-[10px]">C2</span></td>
                    <td className="px-4 py-3 text-slate-400 font-medium text-[10px]">1/4/2026</td>
                    <td className="px-4 py-3">
                      <div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center text-blue-500 cursor-pointer">
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </MockShell>
  );
};

/* ─── 4. ASSIGNMENTS ─── */
const AssignmentsMock = () => {
  const sidebarItems = [
    { icon: PieChart, label: 'Dashboard' },
    { icon: Users, label: 'Manage Users' },
    { icon: Settings, label: 'School Settings' },
    { icon: GraduationCap, label: 'Academic Details' },
    { icon: Calendar, label: 'Attendance' },
    { icon: BookOpen, label: 'Assignments', active: true },
    { icon: FileText, label: 'Results' },
    { icon: Clock, label: 'Leave Management' },
    { icon: MessageSquare, label: 'Messages' },
    { icon: CreditCard, label: 'Fees' },
    { icon: BarChart2, label: 'Reports' },
  ];

  return (
    <MockShell title="Assignments" icon={BookOpen} iconBg="bg-blue-100 text-blue-600">
      <div className="flex h-[450px] -m-5">
        <div className="w-14 md:w-48 bg-white border-r border-slate-100 flex flex-col py-4">
          {sidebarItems.map((item, i) => (
            <div key={i} className={`px-4 py-3 flex items-center gap-3 transition-colors cursor-pointer ${item.active ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}>
              <item.icon className="w-4 h-4 flex-shrink-0" />
              <span className="text-[10px] font-bold hidden md:block">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="flex-1 bg-slate-50/30 flex flex-col min-w-0">
          <div className="p-6 bg-white border-b border-slate-100 flex justify-between items-center">
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">Assignments</h2>
            <div className="flex gap-3">
              <button className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold shadow-md shadow-emerald-100"><Download className="w-4 h-4" /> Export Data</button>
              <button className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold shadow-md shadow-blue-100">+ Add Assignment</button>
            </div>
          </div>

          <div className="p-6 space-y-6 overflow-auto">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Total Assignments', value: '1', color: 'bg-blue-600', icon: FileText },
                { label: 'Due This Week', value: '1', color: 'bg-violet-600', icon: Calendar }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 flex items-center gap-6 shadow-sm shadow-slate-200/50">
                  <div className={`w-14 h-14 rounded-2xl ${stat.color} text-white flex items-center justify-center shadow-lg shadow-indigo-100`}>
                    <stat.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                    <p className="text-3xl font-black text-slate-800">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Filters Toolbar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex gap-4 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                <input type="text" placeholder="Search assignments..." className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2.5 text-[10px] outline-none" />
              </div>
              {['2024-25 (Current)', 'All Classes', 'All Sections', 'All Subjects'].map(drop => (
                <div key={drop} className="relative">
                  <select className="bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-[10px] font-bold text-slate-600 outline-none min-w-[120px] appearance-none">
                    <option>{drop}</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Table */}
            <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr className="text-[9px] font-bold text-slate-400 uppercase">
                    <th className="px-6 py-4">Assignment</th>
                    <th className="px-6 py-4">Class</th>
                    <th className="px-6 py-4">Section</th>
                    <th className="px-6 py-4">Subject</th>
                    <th className="px-6 py-4">Due Date</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  <tr className="text-xs font-bold text-slate-800">
                    <td className="px-6 py-5">maths</td>
                    <td className="px-6 py-5 text-slate-600">2</td>
                    <td className="px-6 py-5 text-slate-600">A</td>
                    <td className="px-6 py-5"><span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md">Maths</span></td>
                    <td className="px-6 py-5 text-slate-500 font-medium flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> 13/4/2026</td>
                    <td className="px-6 py-5">
                      <div className="flex justify-end gap-2">
                        <button className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center"><ArrowRight className="w-3.5 h-3.5" /></button>
                        <button className="w-8 h-8 rounded bg-rose-50 text-rose-600 flex items-center justify-center"><XCircle className="w-3.5 h-3.5" /></button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </MockShell>
  );
};

/* ─── 5. FEES ─── */
const FeesMock = () => {
  const sidebarItems = [
    { icon: PieChart, label: 'Dashboard' },
    { icon: Users, label: 'Manage Users' },
    { icon: Settings, label: 'School Settings' },
    { icon: GraduationCap, label: 'Academic Details' },
    { icon: Calendar, label: 'Attendance' },
    { icon: BookOpen, label: 'Assignments' },
    { icon: FileText, label: 'Results' },
    { icon: Clock, label: 'Leave Management' },
    { icon: MessageSquare, label: 'Messages' },
    { icon: CreditCard, label: 'Fees', active: true },
    { icon: BarChart2, label: 'Reports' },
  ];

  return (
    <MockShell title="Fees Management" icon={CreditCard} iconBg="bg-blue-100 text-blue-600">
      <div className="flex h-[450px] -m-5">
        <div className="w-14 md:w-48 bg-white border-r border-slate-100 flex flex-col py-4">
          {sidebarItems.map((item, i) => (
            <div key={i} className={`px-4 py-3 flex items-center gap-3 transition-colors cursor-pointer ${item.active ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}>
              <item.icon className="w-4 h-4 flex-shrink-0" />
              <span className="text-[10px] font-bold hidden md:block">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="flex-1 bg-slate-50/30 flex flex-col min-w-0">
          <div className="p-6 bg-white border-b border-slate-100">
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">Fees Management</h2>
          </div>

          <div className="p-6 space-y-6 overflow-auto">
            {/* Tabs */}
            <div className="flex gap-8 border-b border-slate-100">
              {['Fee Structure', 'Fee Payments'].map((tab, i) => (
                <button key={tab} className={`pb-3 text-xs font-bold transition-all px-1 ${i === 0 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>
                   {tab === 'Fee Structure' ? <FileText className="w-3.5 h-3.5 inline mr-1" /> : <CreditCard className="w-3.5 h-3.5 inline mr-1" />}
                   {tab}
                </button>
              ))}
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-8">
               <h3 className="text-xl font-black text-slate-800">Create Fee Structure</h3>

               {/* Success Alert */}
               <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3 flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-xs font-bold text-emerald-700">Fee structure saved successfully. Applied to 10 students.</span>
               </div>

               <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-700">Fee Structure Name *</label>
                    <input type="text" placeholder="e.g., Annual Fee 2024-25" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs outline-none focus:border-blue-500 transition-colors" />
                    
                    <label className="text-xs font-black text-slate-700 mt-4 block">Description</label>
                    <textarea placeholder="Optional description" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs outline-none h-24 resize-none" />
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-700">Total Amount *</label>
                    <input type="text" placeholder="Enter total amount" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs outline-none" />
                    
                    <div className="mt-6">
                      <label className="text-xs font-black text-slate-700 block mb-4">Installments</label>
                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center justify-between">
                         <span className="text-xs font-bold text-slate-600">Installment 1</span>
                         <span className="text-xs font-black text-blue-600">60%</span>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </MockShell>
  );
};

/* ─── 6. SOS ALERT ─── */
const SOSMock = () => {
  const [triggered, setTriggered] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setTriggered(false), 3000);
    return () => clearTimeout(t);
  }, [triggered]);
  return (
    <MockShell title="SOS Emergency Alert" icon={Bell} iconBg="bg-rose-100 text-rose-600">
      <div className="space-y-4">
        <div className="flex flex-col items-center py-4">
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setTriggered(true)}
            animate={triggered ? { scale: [1, 1.1, 1], boxShadow: ['0 0 0 0 rgba(239,68,68,0.4)', '0 0 0 24px rgba(239,68,68,0)', '0 0 0 0 rgba(239,68,68,0)'] } : {}}
            transition={{ duration: 0.6 }}
            className={`w-24 h-24 rounded-full flex items-center justify-center font-black text-white text-xl shadow-2xl cursor-pointer transition-all select-none ${triggered ? 'bg-rose-600 shadow-rose-300' : 'bg-rose-500 shadow-rose-200 hover:bg-rose-600'}`}
          >
            SOS
          </motion.button>
          <p className="text-[10px] text-slate-400 mt-3 font-medium">Tap to trigger emergency alert</p>
        </div>
        <AnimatePresence>
          {triggered && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="bg-rose-50 border border-rose-200 rounded-2xl p-3 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <span className="text-[10px] font-black text-rose-700">ALERT SENT — Notifying school contacts</span>
              </div>
              {['Admin Officer', 'Class Teacher', 'Safety Desk'].map((r, i) => (
                <div key={r} className="flex items-center gap-2 px-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  <span className="text-[9px] text-slate-600 font-medium">{r} notified</span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="grid grid-cols-3 gap-2">
          {['Medical', 'Safety', 'Other'].map(r => (
            <button key={r} className="bg-white border border-slate-200 rounded-xl py-2 text-[9px] font-bold text-slate-600 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600 transition-all">{r}</button>
          ))}
        </div>
        <div className="bg-slate-50 border border-slate-100 rounded-xl px-3 py-2">
          <p className="text-[9px] text-slate-500 font-semibold">Audit Log — Last 3 Triggers</p>
          {['Apr 3, 9:12 AM — Medical', 'Mar 28, 2:45 PM — Safety', 'Mar 10, 11:02 AM — Other'].map((l, i) => (
            <p key={i} className="text-[9px] text-slate-400 mt-1">{l}</p>
          ))}
        </div>
      </div>
    </MockShell>
  );
};

/* ─── 7. COMMUNICATION ─── */
const CommunicationMock = () => {
  const sidebarItems = [
    { icon: PieChart, label: 'Dashboard' },
    { icon: Users, label: 'Manage Users' },
    { icon: Settings, label: 'School Settings' },
    { icon: GraduationCap, label: 'Academic Details' },
    { icon: Calendar, label: 'Attendance' },
    { icon: BookOpen, label: 'Assignments' },
    { icon: FileText, label: 'Results' },
    { icon: Clock, label: 'Leave Management' },
    { icon: MessageSquare, label: 'Messages', active: true },
    { icon: CreditCard, label: 'Fees' },
    { icon: BarChart2, label: 'Reports' },
  ];

  return (
    <MockShell title="Messages" icon={MessageSquare} iconBg="bg-blue-100 text-blue-600">
      <div className="flex h-[450px] -m-5">
        <div className="w-14 md:w-48 bg-white border-r border-slate-100 flex flex-col py-4">
          {sidebarItems.map((item, i) => (
            <div key={i} className={`px-4 py-3 flex items-center gap-3 transition-colors cursor-pointer ${item.active ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}>
              <item.icon className="w-4 h-4 flex-shrink-0" />
              <span className="text-[10px] font-bold hidden md:block">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="flex-1 bg-slate-50/30 flex flex-col min-w-0">
          <div className="p-6 bg-white border-b border-slate-100 flex items-center gap-4">
             <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
             </div>
             <h2 className="text-2xl font-black text-slate-800 tracking-tight">Messages</h2>
          </div>

          <div className="p-6 space-y-6 overflow-auto">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
               <h3 className="text-xl font-black text-slate-800 mb-6">Send New Message</h3>

               <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-700">Class *</label>
                    <div className="relative">
                      <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs outline-none appearance-none font-bold text-slate-700">
                        <option>Class 10</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-700">Section *</label>
                    <div className="relative">
                      <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs outline-none appearance-none font-bold text-slate-700">
                        <option>Section A</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    </div>
                  </div>
               </div>

               <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 flex items-center gap-3">
                 <Users className="w-4 h-4 text-blue-600" />
                 <span className="text-xs font-bold text-blue-800">This message will be sent to <span className="font-black">10</span> students in Class 10 - Section A</span>
               </div>

               <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-700">Title *</label>
                    <input type="text" value="Extra class" readOnly className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs outline-none font-bold text-slate-600" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-700">Subject *</label>
                    <input type="text" value="Below mentioned student should attend extra class on Saturday" readOnly className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs outline-none font-bold text-slate-600" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-700">Message Body *</label>
                    <textarea placeholder="Type your message here..." className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs outline-none h-32 resize-none" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </MockShell>
  );
};

/* ─── 8. ID CARDS ─── */
const IDCardMock = () => {
  const sidebarItems = [
    { icon: PieChart, label: 'Dashboard' },
    { icon: Users, label: 'Manage Users' },
    { icon: Settings, label: 'School Settings' },
    { icon: GraduationCap, label: 'Academic Details', active: true },
    { icon: Calendar, label: 'Attendance' },
    { icon: BookOpen, label: 'Assignments' },
    { icon: FileText, label: 'Results' },
    { icon: Clock, label: 'Leave Management' },
    { icon: MessageSquare, label: 'Messages' },
    { icon: CreditCard, label: 'Fees' },
    { icon: BarChart2, label: 'Reports' },
  ];

  return (
    <MockShell title="Academic Details" icon={GraduationCap} iconBg="bg-blue-100 text-blue-600">
      <div className="flex h-[450px] -m-5">
        <div className="w-14 md:w-48 bg-white border-r border-slate-100 flex flex-col py-4">
          {sidebarItems.map((item, i) => (
            <div key={i} className={`px-4 py-3 flex items-center gap-3 transition-colors cursor-pointer ${item.active ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}>
              <item.icon className="w-4 h-4 flex-shrink-0" />
              <span className="text-[10px] font-bold hidden md:block">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="flex-1 bg-slate-50/30 flex flex-col min-w-0">
          <div className="p-6 bg-white border-b border-slate-100 flex items-center gap-4">
             <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
             </div>
             <h2 className="text-2xl font-black text-slate-800 tracking-tight">Academic Details</h2>
          </div>

          <div className="p-6 space-y-6 overflow-auto">
            {/* Tabs */}
            <div className="flex gap-8 border-b border-slate-100">
              {['Class Subjects Management', 'Hall Ticket Generation', 'School ID Card Generation'].map((tab, i) => (
                <button key={tab} className={`pb-3 text-[11px] font-bold transition-all px-1 flex items-center gap-2 ${i === 2 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>
                   {i === 0 && <BookOpen className="w-3.5 h-3.5" />}
                   {i === 1 && <FileText className="w-3.5 h-3.5" />}
                   {i === 2 && <CreditCard className="w-3.5 h-3.5" />}
                   {tab}
                </button>
              ))}
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-8">
               <h3 className="text-lg font-black text-slate-800">Generate School ID Cards</h3>

               <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Select Class *</label>
                    <div className="relative">
                      <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-700 outline-none appearance-none">
                        <option>Class 1</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Select Section *</label>
                    <div className="relative">
                      <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-700 outline-none appearance-none">
                        <option>Section A</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    </div>
                  </div>
               </div>

               <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl text-xs font-black shadow-lg shadow-blue-100">
                 <Search className="w-4 h-4" /> Load Students
               </button>

               <div className="space-y-4">
                  <h3 className="text-lg font-black text-slate-800">Choose ID Card Orientation</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="border-2 border-blue-500 bg-blue-50/50 rounded-2xl p-6 flex flex-col items-center gap-4 transition-all cursor-pointer">
                       <div className="w-24 h-16 border-4 border-blue-600 rounded-lg flex items-center justify-center bg-white shadow-sm">
                          <div className="w-16 h-1 bg-blue-200 rounded-full" />
                       </div>
                       <div className="text-center">
                         <p className="text-xs font-black text-slate-800">Landscape</p>
                         <p className="text-[10px] text-slate-400 font-medium">Horizontal ID card (85.6mm × 54mm)</p>
                       </div>
                    </div>
                    <div className="border border-slate-200 bg-white rounded-2xl p-6 flex flex-col items-center gap-4 hover:border-blue-200 transition-all cursor-pointer">
                       <div className="w-16 h-24 border-4 border-emerald-500 rounded-lg flex items-center justify-center bg-white shadow-sm">
                          <div className="w-1 h-16 bg-emerald-100 rounded-full" />
                       </div>
                       <div className="text-center">
                         <p className="text-xs font-black text-slate-800">Portrait</p>
                         <p className="text-[10px] text-slate-400 font-medium">Vertical ID card (54mm × 85.6mm)</p>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </MockShell>
  );
};

/* ─── 9. HALL TICKETS ─── */
const HallTicketMock = () => {
  const sidebarItems = [
    { icon: PieChart, label: 'Dashboard' },
    { icon: Users, label: 'Manage Users' },
    { icon: Settings, label: 'School Settings' },
    { icon: GraduationCap, label: 'Academic Details', active: true },
    { icon: Calendar, label: 'Attendance' },
    { icon: BookOpen, label: 'Assignments' },
    { icon: FileText, label: 'Results' },
    { icon: Clock, label: 'Leave Management' },
    { icon: MessageSquare, label: 'Messages' },
    { icon: CreditCard, label: 'Fees' },
    { icon: BarChart2, label: 'Reports' },
  ];

  const instructions = [
    'Bring this admit card to the examination hall',
    'Report 30 minutes before the exam',
    'Carry valid ID proof with this admit card',
    'Mobile phones strictly prohibited',
    'Follow all examination rules'
  ];

  return (
    <MockShell title="Academic Details" icon={GraduationCap} iconBg="bg-blue-100 text-blue-600">
      <div className="flex h-[450px] -m-5">
        <div className="w-14 md:w-48 bg-white border-r border-slate-100 flex flex-col py-4">
          {sidebarItems.map((item, i) => (
            <div key={i} className={`px-4 py-3 flex items-center gap-3 transition-colors cursor-pointer ${item.active ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}>
              <item.icon className="w-4 h-4 flex-shrink-0" />
              <span className="text-[10px] font-bold hidden md:block">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="flex-1 bg-slate-50/30 flex flex-col min-w-0">
          <div className="p-6 bg-white border-b border-slate-100 flex items-center gap-4">
             <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
             </div>
             <h2 className="text-2xl font-black text-slate-800 tracking-tight">Academic Details</h2>
          </div>

          <div className="p-6 space-y-6 overflow-auto">
            {/* Tabs */}
            <div className="flex gap-8 border-b border-slate-100">
              {['Class Subjects Management', 'Hall Ticket Generation', 'School ID Card Generation'].map((tab, i) => (
                <button key={tab} className={`pb-3 text-[11px] font-bold transition-all px-1 flex items-center gap-2 ${i === 1 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>
                   {i === 0 && <BookOpen className="w-3.5 h-3.5" />}
                   {i === 1 && <FileText className="w-3.5 h-3.5" />}
                   {i === 2 && <CreditCard className="w-3.5 h-3.5" />}
                   {tab}
                </button>
              ))}
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
               <h3 className="text-lg font-black text-slate-800">Generate Hall Tickets</h3>

               <div className="grid grid-cols-4 gap-4">
                  {[
                    { label: 'Academic Year', value: '2024-25 (Current)' },
                    { label: 'Select Class', value: 'Class 3' },
                    { label: 'Select Section', value: 'Section A' },
                    { label: 'Test Name', value: 'FA1' }
                  ].map(field => (
                    <div key={field.label} className="space-y-2">
                       <label className="text-[10px] font-black text-slate-400 tracking-widest uppercase">{field.label} *</label>
                       <div className="relative">
                         <select className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-[10px] font-bold text-slate-700 outline-none appearance-none">
                           <option>{field.value}</option>
                         </select>
                         <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                       </div>
                    </div>
                  ))}
               </div>

               <div className="flex items-center gap-3 py-2">
                 <div className="w-5 h-5 rounded border-2 border-blue-600 bg-blue-600 flex items-center justify-center text-white">
                    <Check className="w-3.5 h-3.5" />
                 </div>
                 <span className="text-xs font-black text-slate-700">Include Room Numbers in Hall Tickets</span>
               </div>
               <p className="text-[10px] text-slate-400 font-medium -mt-4 pl-8">Room numbers will be required and displayed in the hall tickets</p>

               <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-4">
                  <h3 className="text-sm font-black text-slate-800">Manage Hall Ticket Instructions</h3>
                  <div className="flex gap-2">
                    <input type="text" placeholder="Enter new instruction..." className="flex-1 bg-white border border-slate-200 rounded-lg px-4 py-2 text-xs outline-none" />
                    <button className="px-6 py-2 bg-slate-400 text-white rounded-lg text-xs font-bold">Add</button>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Current Instructions:</p>
                    {instructions.map((inst, idx) => (
                      <div key={idx} className="bg-white border border-slate-100 rounded-lg p-3 flex justify-between items-center group">
                        <span className="text-xs font-bold text-slate-600 tracking-tight">{inst}</span>
                        <button className="text-[10px] font-bold text-rose-500 bg-rose-50 px-3 py-1 rounded hover:bg-rose-100 transition-colors">Remove</button>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </MockShell>
  );
};

/* ─── 10. ANALYTICS ─── */
const AnalyticsMock = () => {
  const sidebarItems = [
    { icon: PieChart, label: 'Dashboard' },
    { icon: Users, label: 'Manage Users' },
    { icon: Settings, label: 'School Settings' },
    { icon: GraduationCap, label: 'Academic Details' },
    { icon: Calendar, label: 'Attendance' },
    { icon: BookOpen, label: 'Assignments' },
    { icon: FileText, label: 'Results' },
    { icon: Clock, label: 'Leave Management' },
    { icon: MessageSquare, label: 'Messages' },
    { icon: CreditCard, label: 'Fees' },
    { icon: BarChart2, label: 'Reports', active: true },
  ];

  return (
    <MockShell title="School Reports" icon={BarChart2} iconBg="bg-blue-100 text-blue-600">
      <div className="flex h-[450px] -m-5">
        <div className="w-14 md:w-48 bg-white border-r border-slate-100 flex flex-col py-4">
          {sidebarItems.map((item, i) => (
            <div key={i} className={`px-4 py-3 flex items-center gap-3 transition-colors cursor-pointer ${item.active ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}>
              <item.icon className="w-4 h-4 flex-shrink-0" />
              <span className="text-[10px] font-bold hidden md:block">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="flex-1 bg-slate-50/30 flex flex-col min-w-0">
          <div className="p-6 bg-white border-b border-slate-100 flex justify-between items-center">
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                   <BarChart2 className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-black text-slate-800 tracking-tight">School Reports</h2>
             </div>
             <div className="flex gap-3">
               <button className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-lg text-xs font-black shadow-lg shadow-emerald-100">
                 <Download className="w-4 h-4" /> Export CSV
               </button>
               <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg text-xs font-black shadow-lg shadow-blue-100">
                 <Clock className="w-4 h-4" /> Refresh Stats
               </button>
             </div>
          </div>

          <div className="p-6 space-y-6 overflow-auto">
             {/* Tabs */}
             <div className="flex gap-8 border-b border-slate-100">
               {['Overview', 'Dues List'].map((tab, i) => (
                 <button key={tab} className={`pb-3 text-sm font-bold transition-all px-1 ${i === 0 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>
                    {tab}
                 </button>
               ))}
             </div>

             {/* Filters */}
             <div className="grid grid-cols-3 gap-6">
                {[
                  { label: 'Academic Year', value: '2024-25 (Current)' },
                  { label: 'Class', value: 'All Classes' },
                  { label: 'Section', value: 'All Sections' }
                ].map(f => (
                  <div key={f.label} className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 tracking-widest uppercase">{f.label}</label>
                    <div className="relative">
                       <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-700 outline-none appearance-none">
                         <option>{f.value}</option>
                       </select>
                       <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                ))}
             </div>

             {/* Stats Grid */}
             <div className="grid grid-cols-3 gap-6">
                {[
                  { label: 'TOTAL STUDENTS', value: '100', color: 'bg-blue-50 text-blue-600', icon: Users },
                  { label: 'AVG. ATTENDANCE', value: '0.0%', color: 'bg-emerald-50 text-emerald-600', icon: CheckCircle2 },
                  { label: 'AVG. MARKS', value: '57.2%', sub: 'current term', color: 'bg-amber-50 text-amber-600', icon: TrendingUp }
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between group hover:shadow-md transition-all">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-slate-400 tracking-wider uppercase">{stat.label}</p>
                      <p className="text-3xl font-black text-slate-800 tracking-tight">{stat.value}</p>
                      {stat.sub && <p className="text-[9px] text-slate-400 font-bold -mt-1">{stat.sub}</p>}
                    </div>
                    <div className={`w-12 h-12 rounded-full ${stat.color} flex items-center justify-center shadow-sm`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                ))}
             </div>

             {/* Table Area */}
             <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm overflow-hidden">
                <h3 className="text-xl font-black text-slate-800 mb-6">Students by Class & Section</h3>
                <div className="rounded-2xl border border-slate-50 overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-100">
                      <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <th className="px-6 py-4">CLASS</th>
                        <th className="px-6 py-4">SECTION</th>
                        <th className="px-6 py-4">STUDENTS</th>
                        <th className="px-6 py-4">AVG. MARKS</th>
                        <th className="px-6 py-4">AVG. ATTENDANCE</th>
                      </tr>
                    </thead>
                    <tbody>
                       <tr className="border-b border-slate-50">
                         <td colSpan="5" className="px-6 py-12 text-center text-xs font-bold text-slate-300">No data available in table</td>
                       </tr>
                    </tbody>
                  </table>
                </div>
             </div>
          </div>
        </div>
      </div>
    </MockShell>
  );
};

/* ─── 11. PARENT TRANSPARENCY ─── */
const ParentMock = () => (
  <MockShell title="Parent Transparency Features" icon={Shield} iconBg="bg-teal-100 text-teal-600">
    <div className="space-y-3">
      {/* Phone frame mockup */}
      <div className="flex gap-3">
        <div className="w-36 bg-slate-900 rounded-2xl p-1.5 shadow-xl flex-shrink-0">
          <div className="bg-white rounded-xl overflow-hidden">
            <div className="bg-teal-600 px-2 py-2 text-center">
              <p className="text-[8px] font-black text-white">GudERP Parent</p>
              <p className="text-[7px] text-teal-200">Aarav Sharma · 10-A</p>
            </div>
            <div className="p-2 space-y-1.5">
              {[['📅', 'Today', 'Present', 'text-emerald-600'], ['📊', 'This month', '91%', 'text-emerald-600'], ['💳', 'Pending', '₹1,500', 'text-rose-500'], ['📢', 'Messages', '2 new', 'text-sky-600']].map(([ico, l, v, c]) => (
                <div key={l} className="flex items-center justify-between bg-slate-50 rounded-lg px-1.5 py-1">
                  <div className="flex items-center gap-1">
                    <span className="text-[9px]">{ico}</span>
                    <span className="text-[8px] text-slate-500">{l}</span>
                  </div>
                  <span className={`text-[8px] font-black ${c}`}>{v}</span>
                </div>
              ))}
              <button className="w-full bg-rose-500 text-white text-[8px] font-black py-1 rounded-lg mt-1">🚨 SOS</button>
            </div>
          </div>
        </div>
        {/* Info panels */}
        <div className="flex-1 space-y-2">
          <div className="bg-teal-50 border border-teal-100 rounded-xl p-2.5">
            <p className="text-[9px] font-black text-teal-700 mb-1.5">Attendance Summary</p>
            <div className="w-full bg-teal-100 rounded-full h-2">
              <motion.div initial={{ width: 0 }} animate={{ width: '91%' }} transition={{ duration: 0.9 }} className="bg-teal-500 h-full rounded-full" />
            </div>
            <p className="text-[8px] text-teal-600 mt-1">91% this month</p>
          </div>
          <div className="bg-white border border-slate-100 rounded-xl p-2.5">
            <p className="text-[9px] font-black text-slate-700 mb-1">Latest Announcement</p>
            <p className="text-[9px] text-slate-500 leading-relaxed">Annual Sports Day scheduled for April 20th. All parents are cordially invited…</p>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-2 flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
            <p className="text-[9px] text-emerald-700 font-semibold">Challan downloaded · Apr 1</p>
          </div>
        </div>
      </div>
    </div>
  </MockShell>
);

/* ─── Router ─── */
const mockMap = {
  'student-management': StudentMock,
  'attendance': AttendanceMock,
  'results': ResultsMock,
  'assignments': AssignmentsMock,
  'fees': FeesMock,
  'sos': SOSMock,
  'communication': CommunicationMock,
  'id-cards': IDCardMock,
  'hall-tickets': HallTicketMock,
  'analytics': AnalyticsMock,
  'parent-transparency': ParentMock,
};

const FeatureMockUI = ({ featureId }) => {
  const Component = mockMap[featureId];
  if (!Component) return null;
  return (
    <AnimatePresence mode="wait">
      <Component key={featureId} />
    </AnimatePresence>
  );
};

export default FeatureMockUI;
