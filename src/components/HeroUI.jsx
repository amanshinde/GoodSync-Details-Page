import React from 'react';
import { motion } from 'framer-motion';
import { Bus, Mail, CalendarX, PieChart, BarChart2, Users, LayoutDashboard, BookOpen, GraduationCap, CreditCard, Bell, ClipboardList, Trophy } from 'lucide-react';

const HeroUI = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[700px] lg:h-[800px] flex items-center justify-center">
      
      {/* Orbital Rings - Background Right Side */}
      <div className="absolute right-[-30%] lg:right-[-20%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] pointer-events-none opacity-30 lg:opacity-70 z-0">

        {/* Outer Ring — carries: Transport + Grades */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-200"
        >
          {/* Icon at 0° (top) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
              className="bg-white p-2.5 rounded-xl shadow-lg border border-slate-100 hidden md:flex flex-col items-center gap-1 pointer-events-auto w-16"
            >
              <div className="bg-orange-100 p-2 rounded-lg"><Bus className="w-4 h-4 text-orange-600" /></div>
              <span className="text-[9px] font-bold text-slate-500 leading-tight text-center">Transport</span>
            </motion.div>
          </div>
          {/* Icon at 180° (bottom) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
            <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
              className="bg-white p-2.5 rounded-xl shadow-lg border border-slate-100 hidden md:flex flex-col items-center gap-1 pointer-events-auto w-16"
            >
              <div className="bg-yellow-100 p-2 rounded-lg"><Trophy className="w-4 h-4 text-yellow-600" /></div>
              <span className="text-[9px] font-bold text-slate-500 leading-tight text-center">Grades</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Middle Ring — carries: Leave + Attendance */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
          className="absolute inset-[15%] rounded-full border-2 border-dashed border-violet-200"
        >
          {/* Icon at 90° (right) */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2">
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
              className="bg-white p-2.5 rounded-xl shadow-lg border border-slate-100 hidden md:flex flex-col items-center gap-1 pointer-events-auto w-16"
            >
              <div className="bg-green-100 p-2 rounded-lg"><CalendarX className="w-4 h-4 text-green-600" /></div>
              <span className="text-[9px] font-bold text-slate-500 leading-tight text-center">Leave</span>
            </motion.div>
          </div>
          {/* Icon at 270° (left) */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2">
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
              className="bg-white p-2.5 rounded-xl shadow-lg border border-slate-100 hidden md:flex flex-col items-center gap-1 pointer-events-auto w-16"
            >
              <div className="bg-indigo-100 p-2 rounded-lg"><ClipboardList className="w-4 h-4 text-indigo-600" /></div>
              <span className="text-[9px] font-bold text-slate-500 leading-tight text-center">Attendance</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Inner Ring — carries: Messages + Fees + Notifications */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute inset-[30%] rounded-full border border-dashed border-fuchsia-200"
        >
          {/* Icon at 0° */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="bg-white p-2.5 rounded-xl shadow-lg border border-slate-100 hidden md:flex flex-col items-center gap-1 pointer-events-auto w-16"
            >
              <div className="bg-pink-100 p-2 rounded-lg"><Mail className="w-4 h-4 text-pink-600" /></div>
              <span className="text-[9px] font-bold text-slate-500 leading-tight text-center">Messages</span>
            </motion.div>
          </div>
          {/* Icon at 120° */}
          <div className="absolute" style={{ top: '75%', left: '6%', transform: 'translate(-50%, -50%)' }}>
            <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="bg-white p-2.5 rounded-xl shadow-lg border border-slate-100 hidden md:flex flex-col items-center gap-1 pointer-events-auto w-16"
            >
              <div className="bg-emerald-100 p-2 rounded-lg"><CreditCard className="w-4 h-4 text-emerald-600" /></div>
              <span className="text-[9px] font-bold text-slate-500 leading-tight text-center">Fees</span>
            </motion.div>
          </div>
          {/* Icon at 240° */}
          <div className="absolute" style={{ top: '75%', left: '94%', transform: 'translate(-50%, -50%)' }}>
            <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="bg-white p-2.5 rounded-xl shadow-lg border border-slate-100 hidden md:flex flex-col items-center gap-1 pointer-events-auto w-16"
            >
              <div className="bg-violet-100 p-2 rounded-lg"><Bell className="w-4 h-4 text-violet-600" /></div>
              <span className="text-[9px] font-bold text-slate-500 leading-tight text-center">Alerts</span>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Main Glass Dashboard */}
      {/* Main Glass Dashboard */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-20 w-[95%] md:w-[850px] lg:w-[1000px] h-[450px] md:h-[550px] lg:h-[650px] bg-white/90 backdrop-blur-3xl border-[3px] border-white/60 shadow-3xl shadow-indigo-200/50 rounded-2xl overflow-hidden flex"
      >
        {/* Mock Sidebar */}
        <div className="w-16 md:w-56 border-r border-slate-100 bg-white/50 flex flex-col py-6 shadow-[inset_-10px_0_20px_rgba(0,0,0,0.01)] hidden sm:flex">
          <div className="px-6 mb-8 flex items-center gap-3">
             <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-200 flex-shrink-0">
                <span className="text-white text-xs font-bold">G</span>
             </div>
             <span className="font-bold text-slate-800 text-sm hidden md:block truncate">Admin Portal</span>
          </div>
          
          <div className="flex-1 px-4 space-y-1">
             <div className="h-9 w-full bg-indigo-50 border border-indigo-100 rounded-lg flex items-center px-3 gap-3">
               <div className="w-4 h-4 text-indigo-600 opacity-80 shrink-0 flex items-center justify-center"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg></div>
               <span className="text-[11px] font-bold text-indigo-700 hidden md:block">Dashboard</span>
             </div>
             {['Manage Users', 'School Settings', 'Academic Details', 'Attendance', 'Assignments', 'Messages'].map((txt, i) => (
                <div key={i} className="h-9 w-full rounded-lg flex items-center px-3 gap-3 hover:bg-slate-50 transition-colors">
                  <div className="w-3 h-3 rounded bg-slate-300 shrink-0" />
                  <span className="text-[11px] font-medium text-slate-500 hidden md:block truncate">{txt}</span>
                </div>
             ))}
          </div>
        </div>

        {/* Mock Main Content Area */}
        <div className="flex-1 flex flex-col bg-slate-50/30">
           {/* Mock Header */}
           <div className="h-14 border-b border-slate-100 bg-white/80 px-6 flex items-center justify-between backdrop-blur-md">
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center border border-indigo-200 shrink-0 text-indigo-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
               </div>
               <span className="text-xs font-bold text-slate-700 hidden sm:block">Admin User</span>
             </div>
             
             {/* Window controls (fake) */}
             <div className="flex gap-2">
               <div className="w-3 h-3 rounded-full bg-slate-200 hover:bg-red-400 transition-colors cursor-pointer" />
               <div className="w-3 h-3 rounded-full bg-slate-200 hover:bg-amber-400 transition-colors cursor-pointer" />
               <div className="w-3 h-3 rounded-full bg-slate-200 hover:bg-green-400 transition-colors cursor-pointer" />
             </div>
           </div>

           {/* Content Body */}
           <div className="flex-1 p-6 md:p-8 flex flex-col gap-5 overflow-hidden">
             
             {/* Top title & date */}
             <div className="flex justify-between items-end mb-1">
                <h2 className="text-2xl font-black text-slate-800 font-outfit">Dashboard</h2>
                <span className="text-[10px] text-slate-400 font-medium hidden sm:block mb-1">Last updated: Today</span>
             </div>

             {/* School Info Card mock */}
             <div className="w-full bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex items-center gap-5">
                <div className="w-16 h-16 md:w-[72px] md:h-[72px] bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center flex-shrink-0">
                  <div className="text-slate-300 font-black text-xl font-outfit">LOGO</div>
                </div>
                <div className="flex-1 min-w-0">
                   <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-1.5 truncate">School Name Example</h3>
                   <div className="flex gap-2 mb-2.5">
                     <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[9px] font-bold rounded">BOARD ABC</span>
                     <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[9px] font-bold rounded">CURRICULUM</span>
                   </div>
                   <div className="space-y-1 hidden md:block">
                     <p className="text-[11px] text-slate-500 flex items-center gap-1.5"><span className="text-slate-300">📍</span> 123 Education Lane, Learning District, City - 100000</p>
                     <p className="text-[11px] text-slate-500 flex items-center gap-1.5"><span className="text-slate-300">✉️</span> admin@schoolexample.com <span className="text-slate-300 ml-2">📞</span> +1 234 567 890</p>
                   </div>
                </div>
             </div>

             {/* Stats Row */}
             <div className="flex gap-4">
                <div className="flex-1 bg-white border border-slate-100 rounded-2xl p-4 md:p-5 shadow-sm flex items-center gap-4">
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center flex-shrink-0">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                   </div>
                   <div>
                      <p className="text-[10px] text-slate-400 font-semibold mb-0.5">Total Students</p>
                      <p className="text-lg md:text-xl font-black text-slate-800">1,250</p>
                   </div>
                </div>
                <div className="flex-1 bg-white border border-slate-100 rounded-2xl p-4 md:p-5 shadow-sm flex items-center gap-4">
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center flex-shrink-0">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                   </div>
                   <div>
                      <p className="text-[10px] text-slate-400 font-semibold mb-0.5">Attendance Rate</p>
                      <p className="text-lg md:text-xl font-black text-slate-800">92.4%</p>
                   </div>
                </div>
                <div className="flex-1 bg-white border border-slate-100 rounded-2xl p-4 md:p-5 shadow-sm items-center gap-4 hidden sm:flex">
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-purple-50 text-purple-500 flex items-center justify-center flex-shrink-0">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
                   </div>
                   <div>
                      <p className="text-[10px] text-slate-400 font-semibold mb-0.5">Total Teachers</p>
                      <p className="text-lg md:text-xl font-black text-slate-800">85</p>
                   </div>
                </div>
             </div>

             {/* Table Area (Fades out at bottom) */}
             <div className="w-full bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex-1 relative overflow-hidden flex flex-col gap-3">
                <div className="flex justify-between items-center mb-1">
                   <h4 className="text-sm font-bold text-slate-800">Associated Users <span className="text-[10px] text-slate-400 font-normal ml-1">(120 total)</span></h4>
                </div>
                
                <div className="h-8 md:h-10 w-full bg-slate-50 border border-slate-100 rounded-lg flex items-center px-4">
                   <div className="flex-1 text-[9px] font-bold text-slate-400 tracking-wider">NAME</div>
                   <div className="flex-[1.5] text-[9px] font-bold text-slate-400 tracking-wider hidden md:block">EMAIL</div>
                   <div className="flex-1 text-[9px] font-bold text-slate-400 tracking-wider">ROLE</div>
                   <div className="flex-1 text-[9px] font-bold text-slate-400 tracking-wider text-right">STATUS</div>
                </div>

                <div className="flex flex-col gap-1 px-4">
                   {[
                     { name: 'Demo Admin', email: 'admin@school.app', role: 'Admin', status: 'Active', rc: 'bg-indigo-50 text-indigo-600', sc: 'bg-emerald-50 text-emerald-600' },
                     { name: 'Teacher Name', email: 'teacher@school.app', role: 'Teacher', status: 'Active', rc: 'bg-violet-50 text-violet-600', sc: 'bg-emerald-50 text-emerald-600' },
                     { name: 'Guest User', email: 'guest@school.app', role: 'Viewer', status: 'Offline', rc: 'bg-slate-100 text-slate-500', sc: 'bg-slate-100 text-slate-500' }
                   ].map((u, i) => (
                     <div key={i} className="flex items-center py-2.5 border-b border-slate-50 last:border-0">
                        <div className="flex-1 text-[11px] font-semibold text-slate-700 truncate">{u.name}</div>
                        <div className="flex-[1.5] text-[11px] text-slate-400 truncate hidden md:block">{u.email}</div>
                        <div className="flex-1">
                           <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${u.rc}`}>{u.role}</span>
                        </div>
                        <div className="flex-1 text-right">
                           <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${u.sc}`}>{u.status}</span>
                        </div>
                     </div>
                   ))}
                </div>

                {/* Fade out bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
             </div>

           </div>
        </div>
      </motion.div>

      {/* Floating Widget 1: Pie Chart (Top Left) */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute z-30 top-[5%] left-[2%] lg:left-[5%] w-56 lg:w-64 bg-white/90 backdrop-blur-xl shadow-[0_20px_50px_-12px_rgba(79,70,229,0.2)] border border-white/80 rounded-2xl p-5 hidden lg:block"
      >
         <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-indigo-100 rounded-lg">
               <PieChart className="w-4 h-4 lg:w-5 lg:h-5 text-indigo-600" />
            </div>
            <h4 className="font-bold text-sm text-slate-800">Attendance View</h4>
         </div>
         <div className="flex justify-center mb-4">
            <div className="w-24 h-24 rounded-full border-[12px] border-indigo-100 border-t-indigo-500 border-r-indigo-500" />
         </div>
      </motion.div>

      {/* Floating Widget 2: Student List (Bottom Left) */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute z-30 bottom-[5%] left-[-2%] lg:left-[8%] w-60 lg:w-72 bg-white/90 backdrop-blur-xl shadow-[0_20px_50px_-12px_rgba(16,185,129,0.2)] border border-white/80 rounded-2xl p-5 hidden lg:block"
      >
         <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-100 rounded-lg">
               <Users className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-600" />
            </div>
            <h4 className="font-bold text-sm text-slate-800">Recent Users</h4>
         </div>
         <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-slate-200" />
                 <div className="space-y-1.5 flex-1">
                    <div className="h-2 w-24 bg-slate-200 rounded-full" />
                    <div className="h-2 w-16 bg-slate-100 rounded-full" />
                 </div>
              </div>
            ))}
         </div>
      </motion.div>

      {/* Floating Widget 3: Stats Box (Bottom Right - Overlapping Main) */}
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute z-30 bottom-[10%] right-[0%] lg:right-[15%] w-52 lg:w-60 bg-gradient-to-br from-indigo-600 to-violet-700 text-white shadow-2xl shadow-indigo-600/30 rounded-3xl p-6 hidden md:block border border-indigo-500"
      >
         <LayoutDashboard className="w-6 h-6 text-indigo-200 mb-4" />
         <h3 className="text-3xl font-black mb-1 font-outfit text-white drop-shadow-md">98.5%</h3>
         <p className="text-sm font-medium text-indigo-200">System Efficiency</p>
         <div className="mt-4 w-full bg-indigo-500 rounded-full h-1.5 opacity-50">
            <div className="bg-white h-full w-[90%] rounded-full" />
         </div>
      </motion.div>

    </div>
  );
};

export default HeroUI;
